# Makefile — build, commit, and deploy kevinjli23.github.io
#
#   source of truth : main branch of this repo
#   published site  : gh-pages branch, served at https://kevinjli23.github.io
#
# Everyday use:
#   make ship m="rewrote the about page"     commit + push + deploy
#
# Build steps call the local tools through `node` rather than `npm run` on
# purpose: npm's script runner fails silently when make drives it from an
# MSYS2 shell, while direct node invocation works in Git Bash and MSYS2 alike.

SHELL       := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c

SITE   := personal-website
DIST   := $(SITE)/dist
BRANCH := main
URL    := https://kevinjli23.github.io

NODE  := node
TSC   := $(NODE) node_modules/typescript/bin/tsc
VITE  := $(NODE) node_modules/vite/bin/vite.js
LINT  := $(NODE) node_modules/eslint/bin/eslint.js
PAGES := $(NODE) node_modules/gh-pages/bin/gh-pages.js
CLEAN := $(NODE) node_modules/gh-pages/bin/gh-pages-clean.js

# Commit / deploy message. Override it:  make ship m="what changed"
m ?= Update site ($(shell date '+%Y-%m-%d %H:%M'))

.DEFAULT_GOAL := help
.PHONY: help install dev build preview lint clean status push deploy redeploy ship untrack-node-modules

help: ## Show this help
	@echo ""
	@echo "  kevinjli23.github.io"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	  | awk 'BEGIN{FS=":.*?## "}{printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'
	@echo ""
	@echo "  Custom commit message:  make ship m=\"what changed\""
	@echo ""

# ---------------------------------------------------------------- development

install: ## Install dependencies
	cd $(SITE) && npm install

dev: ## Start the Vite dev server with hot reload
	cd $(SITE) && $(VITE)

build: ## Type-check and build to personal-website/dist
	cd $(SITE) && $(TSC) -b && $(VITE) build

preview: build ## Build, then serve the production bundle locally
	cd $(SITE) && $(VITE) preview

lint: ## Run eslint over the site source
	cd $(SITE) && $(LINT) .

clean: ## Delete the build output
	rm -rf $(DIST)
	@echo "Removed $(DIST)"

# --------------------------------------------------------------------- github

status: ## Show what would be committed
	@git status --short --branch

push: ## Commit every change and push to main
	@current=$$(git rev-parse --abbrev-ref HEAD); \
	if [ "$$current" != "$(BRANCH)" ]; then \
	  echo "On branch '$$current', expected '$(BRANCH)'. Aborting."; exit 1; \
	fi
	@if [ -n "$$(git status --porcelain)" ]; then \
	  git add -A; \
	  git commit -m "$(m)"; \
	else \
	  echo "Working tree clean — nothing new to commit."; \
	fi
	git push origin $(BRANCH)
	@echo "Pushed to origin/$(BRANCH)."

# --------------------------------------------------------------------- deploy

deploy: build ## Build and publish dist/ to the gh-pages branch
	cd $(SITE) && $(PAGES) -d dist -m "$(m)"
	@echo "Deployed → $(URL)  (GitHub Pages takes a minute to refresh)"

redeploy: ## Deploy from scratch after clearing the gh-pages cache
	cd $(SITE) && $(CLEAN)
	@$(MAKE) --no-print-directory deploy

ship: ## Push source to main AND deploy the built site — the everyday command
	@$(MAKE) --no-print-directory push
	@$(MAKE) --no-print-directory deploy

# ------------------------------------------------------------------- one-offs

untrack-node-modules: ## One-time cleanup: stop committing node_modules at the repo root
	@if [ ! -f .gitignore ]; then \
	  printf '%s\n' 'node_modules/' 'dist/' '.DS_Store' > .gitignore; \
	  echo "Created .gitignore"; \
	fi
	@git rm -r --cached --quiet node_modules || true
	@git rm --cached --quiet .DS_Store || true
	@echo "Staged the removal. Review with 'make status', then:"
	@echo "  make push m=\"Stop tracking node_modules\""
