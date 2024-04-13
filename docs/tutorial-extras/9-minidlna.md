---
sidebar_position: 9
---

# 局域网音频广播

MiniDLNA 局域网音视频广播安装

## 安装

```bash
#更新
apt update
#注意：若是旧版本海nas-0818旧版本系统可一键添加海纳思专业apt命令：
nasupdate
histb-deb
#安装
apt install minidlna
```

## 使用

在该文件夹下存放图片或音视频 MP3、MP4、PNG、JPG 等格式的文件

你就可以在局域网下的电脑、手机、电视等智能终端进行播放了

## 资源位置修改

```bash
vi /etc/minidlna.conf
# 修改配置文件
#将 media_dir=/var/lib/minidlna 修改为 media_dir=/mnt/sda1/minidlna
mkdir /mnt/sda1/minidlna
# 在U盘创建目录
chmod 777 -R /mnt/sda1/minidlna
# 赋予权限
```
