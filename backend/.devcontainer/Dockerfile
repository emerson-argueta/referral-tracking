# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.154.0/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

ENV REFERRAL_TRACKING_DB_USER=TEST_REFERRAL_TRACKING_DB_USER
ENV REFERRAL_TRACKING_DB_PASS=TEST_REFERRAL_TRACKING_DB_PASS
ENV REFERRAL_TRACKING_DB_HOST=TEST_REFERRAL_TRACKING_DB_HOST
ENV REFERRAL_TRACKING_DB_DEV_DB_NAME=TEST_REFERRAL_TRACKING_DB_DEV_DB_NAME
ENV REFERRAL_TRACKING_DB_TEST_DB_NAME=TEST_REFERRAL_TRACKING_DB_TEST_DB_NAME
ENV REFERRAL_TRACKING_DB_PROD_DB_NAME=TEST_REFERRAL_TRACKING_DB_PROD_DB_NAME
ENV NODE_ENV=development
ENV REFERRAL_TRACKING_IS_PRODUCTION=TEST_REFERRAL_TRACKING_IS_PRODUCTION
ENV CLEARDB_DATABASE_URL=TEST_CLEARDB_DATABASE_URL
# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN sudo -u node npm install -g <your-package-list -here>
