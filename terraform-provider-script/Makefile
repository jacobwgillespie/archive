TEST?=./...
VETARGS?=-all
GOFMT_FILES?=$$(find . -name '*.go' | grep -v vendor)
CURRENT_VERSION = $(shell gobump show -r script/)
PROTOCOL_VERSION = $(shell go run tools/plugin-protocol-version/main.go)

BUILD_LDFLAGS = "-s -w \
	  -X github.com/jacobwgillespie/terraform-provider-script/version.Revision=`git rev-parse --short HEAD` \
	  -X github.com/jacobwgillespie/terraform-provider-script/version.Version=$(CURRENT_VERSION)"

default: lint test build

.PHONY: tools
tools:
	go get -u github.com/golang/dep/cmd/dep
	go get -u github.com/motemen/gobump/cmd/gobump
	go get -v github.com/alecthomas/gometalinter
	gometalinter --install

clean:
	rm -Rf $(CURDIR)/bin/*

build: clean vet
	OS="`go env GOOS`" ARCH="`go env GOARCH`" ARCHIVE= BUILD_LDFLAGS=$(BUILD_LDFLAGS) CURRENT_VERSION=$(CURRENT_VERSION) PROTOCOL_VERSION=$(PROTOCOL_VERSION) sh -c "'$(CURDIR)/scripts/build.sh'"

build-x: build-darwin build-windows build-linux shasum

build-darwin: bin/terraform-provider-script_$(CURRENT_VERSION)_darwin-386.zip bin/terraform-provider-script_$(CURRENT_VERSION)_darwin-amd64.zip

build-windows: bin/terraform-provider-script_$(CURRENT_VERSION)_windows-386.zip bin/terraform-provider-script_$(CURRENT_VERSION)_windows-amd64.zip

build-linux: bin/terraform-provider-script_$(CURRENT_VERSION)_linux-386.zip bin/terraform-provider-script_$(CURRENT_VERSION)_linux-amd64.zip

bin/terraform-provider-script_$(CURRENT_VERSION)_darwin-386.zip:
	OS="darwin"  ARCH="386"   ARCHIVE=1 BUILD_LDFLAGS=$(BUILD_LDFLAGS) CURRENT_VERSION=$(CURRENT_VERSION) PROTOCOL_VERSION=$(PROTOCOL_VERSION) sh -c "'$(CURDIR)/scripts/build.sh'"

bin/terraform-provider-script_$(CURRENT_VERSION)_darwin-amd64.zip:
	OS="darwin"  ARCH="amd64" ARCHIVE=1 BUILD_LDFLAGS=$(BUILD_LDFLAGS) CURRENT_VERSION=$(CURRENT_VERSION) PROTOCOL_VERSION=$(PROTOCOL_VERSION) sh -c "'$(CURDIR)/scripts/build.sh'"

bin/terraform-provider-script_$(CURRENT_VERSION)_windows-386.zip:
	OS="windows" ARCH="386"   ARCHIVE=1 BUILD_LDFLAGS=$(BUILD_LDFLAGS) CURRENT_VERSION=$(CURRENT_VERSION) PROTOCOL_VERSION=$(PROTOCOL_VERSION) sh -c "'$(CURDIR)/scripts/build.sh'"

bin/terraform-provider-script_$(CURRENT_VERSION)_windows-amd64.zip:
	OS="windows" ARCH="amd64" ARCHIVE=1 BUILD_LDFLAGS=$(BUILD_LDFLAGS) CURRENT_VERSION=$(CURRENT_VERSION) PROTOCOL_VERSION=$(PROTOCOL_VERSION) sh -c "'$(CURDIR)/scripts/build.sh'"

bin/terraform-provider-script_$(CURRENT_VERSION)_linux-386.zip:
	OS="linux"   ARCH="386"   ARCHIVE=1 BUILD_LDFLAGS=$(BUILD_LDFLAGS) CURRENT_VERSION=$(CURRENT_VERSION) PROTOCOL_VERSION=$(PROTOCOL_VERSION) sh -c "'$(CURDIR)/scripts/build.sh'"

bin/terraform-provider-script_$(CURRENT_VERSION)_linux-amd64.zip:
	OS="linux"   ARCH="amd64" ARCHIVE=1 BUILD_LDFLAGS=$(BUILD_LDFLAGS) CURRENT_VERSION=$(CURRENT_VERSION) PROTOCOL_VERSION=$(PROTOCOL_VERSION) sh -c "'$(CURDIR)/scripts/build.sh'"

shasum:
	(cd bin/; shasum -a 256 * > terraform-provider-script_$(CURRENT_VERSION)_SHA256SUMS)

test:
	TF_ACC=  go test $(TEST) -v $(TESTARGS) -timeout=30s -parallel=4 ; \

testacc:
	TF_ACC=1 go test $(TEST) -v $(TESTARGS) -timeout 240m ; \

.PHONY: lint
lint: fmt
	gometalinter --config=gometalinter.json ./...
	@echo

fmt:
	gofmt -w $(GOFMT_FILES)

docker-build: clean
	sh -c "'$(CURDIR)/scripts/build_on_docker.sh' 'build-x'"


.PHONY: default test vet testacc fmt fmtcheck
