FROM mcr.microsoft.com/devcontainers/javascript-node:22

# 作業ディレクトリの設定
WORKDIR /workspace

# Cline CLIのインストール（必要に応じて）
RUN curl -fsSL https://github.com/cline-app/cline-cli/releases/latest/download/install.sh | bash

# Clineのための追加依存関係
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install python3-pip python3-venv

# node_modulesの扱いを最適化するマウントポイントを作成
RUN mkdir -p /node_modules_volume
