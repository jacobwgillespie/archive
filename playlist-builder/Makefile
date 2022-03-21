help:
	@echo "Usage: make [help|build|test|serve|loc|godep-save]"

build:
	go build

test:
	go test

serve:
	forego start

serve-api:
	gin --bin bucket-builder run

loc:
	@git archive --format=zip master > tmp-loc.zip
	@cloc tmp-loc.zip
	@rm tmp-loc.zip

godep-save:
	godep save

build-docker:
	docker build -t playlist/playlist-builder .
