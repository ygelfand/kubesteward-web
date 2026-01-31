.PHONY: help install dev build clean lint format fmt

# Binary check
NODE_BIN := $(shell which node)
NPM_BIN := $(shell which npm)

## help: Display this help message
help:
	@echo "Available targets:"
	@awk 'BEGIN {FS = ": "; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^## [a-zA-Z_0-9-]+:/ { printf "  \033[36m%-20s\033[0m %s\n", substr($$1, 4), $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST) 

##@ Development

## install: Install Node.js dependencies
install:
	npm install

## dev: Run local development server
dev:
	npm run dev

## lint: Run ESLint
lint:
	npm run lint

## format: Run Prettier
format:
	npm run format

## fmt: Alias for format
fmt: format

##@ Build

## build: Build static site
build:
	npm run build

## clean: Clean build artifacts
clean:
	rm -rf dist node_modules
