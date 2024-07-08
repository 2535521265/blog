---
title: 项目-仿网易云音乐播放器
published: 2024-07-02
description: '使用Qt Quick QML开发的一款云音乐播放器程序。'
image: 'images/music.png'
tags: [项目]
category: '项目'
draft: false 
---
# 我的项目

## 项目名称
音乐播放器

## 简介
使用Qt Quick QML开发的一款云音乐播放器程序。

## 功能列表
- **推荐内容**：展示推荐的音乐和歌单。
- **搜索音乐**：允许用户搜索他们喜欢的音乐。
- **播放音乐**：基础播放功能，包括上一首、暂停/播放、下一首。
- **历史记录**：记录用户播放过的音乐。
- **我喜欢**：用户可以收藏喜欢的音乐。
- **进度条跟踪显示**：显示当前播放时间、歌曲名称。
- **随机播放**：随机播放音乐列表中的音乐。
- **倍速播放**：调整播放速度。
- **调节音量**：允许用户调整播放音量。

## 用户界面
- **轮播图**：展示热门或推荐内容。
- **推荐歌单**：展示精选歌单。
- **新歌推荐**：展示最新发布的歌曲。

## 技术实现
- **本地音乐播放**：实现歌曲播放和列表显示。
- **布局**：运用了`RowLayout`、`ColumnLayout`、`Grid`等布局。
- **列表展示**：使用`ListView`进行列表展示。
- **歌词滚动**：实现歌词与音乐同步滚动。
- **媒体播放**：使用`MediaPlayer`实现媒体播放功能。
- **数据存储**：使用`Settings`实现历史记录、我喜欢等数据存储。
- **自定义组件**：有部分自定义组件以满足特定需求。
- **系统托盘图标**：使用系统托盘图标功能，方便快速访问。
- **C++与QML交互**：在网络请求中使用了C++与qml的交互。
- **前端JavaScript**：会用到一点前端的JavaScript相关知识。

## 附加技术
- **Docker容器**：使用Docker容器运行搜索服务程序，一些基础的Docker操作。

## Docker 安装与使用指南
### 安装 Docker
1. 安装 Docker：
   yay -Sy docker

2. 启动 Docker 服务：
    sudo systemctl start docker

3. 检查 Docker 服务状态：
    sudo systemctl status docker

4. 拉取网易云音乐 API 镜像：
    docker pull binaryify/netease_cloud_music_api

5. 运行网易云音乐 API 服务容器：
    docker run -d -p 3000:3000 --name music binaryify/netease_cloud_music_api

    -d：表示后台运行容器。\
    -p 3000:3000：将容器的 3000 端口映射到宿主机的 3000 端口。\
    --name music：给容器命名为 music。\
    binaryify/netease_cloud_music_api：使用的 Docker 镜像名称。

github链接:
https://github.com/2535521265/qt6.5_music-player
