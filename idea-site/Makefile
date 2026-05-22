IMAGE    := node:20-alpine
DOCS_DIR := ../docs
APP_DIR  := ./app
DIST_DIR := ./dist
MANIFEST := $(APP_DIR)/src/docs-manifest.js

.PHONY: build serve clean

build: $(MANIFEST)
	@mkdir -p $(DIST_DIR)
	@echo "🔨 Building site..."
	@docker run --rm \
		--user "$$(id -u):$$(id -g)" \
		-e HOME=/tmp \
		-v "$$(pwd)/$(APP_DIR):/workspace/app:ro" \
		-v "$$(pwd)/$(DIST_DIR):/workspace/output" \
		$(IMAGE) sh -c '\
			cp -r /workspace/app /tmp/build && \
			cd /tmp/build && \
			npm install --silent 2>&1 | tail -1 && \
			npx vite build --outDir /workspace/output --emptyOutDir \
		'
	@echo "✅ Built → $(DIST_DIR)/"

$(MANIFEST): $(shell find $(DOCS_DIR) -name '*.md' 2>/dev/null)
	@echo "📄 Generating docs manifest..."
	@python3 gen-manifest.py $(DOCS_DIR) $@

serve: $(MANIFEST)
	@docker run --rm -it --init \
		-v "$$(pwd)/$(APP_DIR):/workspace/app:ro" \
		-p 8080:8080 \
		$(IMAGE) sh -c '\
			cp -r /workspace/app /tmp/dev && \
			cd /tmp/dev && \
			npm install --silent 2>&1 | tail -1 && \
			exec npx vite --host --port 8080 \
		'
clean:
	rm -rf $(DIST_DIR)
	rm -f $(MANIFEST)
