import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Amlogic from '@site/src/components/Amlogic';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={useBaseUrl("devices")}>
            设备支持适配表
          </Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to="https://www.ecoo.top/download.html">最新固件下载</Link>
          <Link className="button button--secondary button--lg" style={{marginTop: "1rem", marginRight: ".5rem", marginLeft: ".5rem", display: "flex"}} to={useBaseUrl("docs/category/机顶盒刷机教程")}>保姆级刷机教程</Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--success button--lg"
            to={useBaseUrl("gonggao")}>
            系统最新升级公告
          </Link>
        </div>
      </div>
    </header>
  );
}

function PolicyPersistence() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.policypersistence}>
      <div className="container text--center">
        <div className="row">
          <div className="col" style={{marginBlock: "auto"}}>
            <h3>永久免费的家用 Linux 服务器系统</h3>
            <p>
基于开源 Linux Ubuntu 20.04 LTS 打造的 NAS 系统，海纳思系统。已开发内置丰富的程序和功能，内网穿透，网盘共享，远程下载，Docker安装，个人博客，网络建站，socks5服务，ftp上传下载，webdav接口，终端控制，一键还原，计划任务等等。
            </p>
          </div>
          <div style={{marginInline: "auto"}}>
            <img src="img/about.png" alt="Policy Persistence" width="300" height="500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PolicyEnforcement() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.policyenforcement}>
      <div className="container text--center">
        <div className="row">
          <div style={{marginInline: "auto"}}>
            <img height="500" width="500" src="img/home.png" alt="homepage" />
          </div>
          <div className="col" style={{marginBlock: "auto"}}>
            <h3>将千家万户的机顶盒打造成一台超低功耗的 Linux 服务器</h3>
            <p>1. linux服务器，可以作为你学习linux系统的一个样板
2. 盒子支持 docker 程序，你可以使用 docker 扩展你的需求
3. 用盒子作为自己家用的文件存储器，文件共享器
4. 可以把盒子作为内网穿透跳板机，或 p2p 把家里的设备跟异地的设备网络组成同一个内网
5. 可以用盒子的博客系统记录你学习和生活的点点滴滴，既能分享，又能保留历史记忆
6. 可以用盒子播放影音，视频，并推送到局域网内的电视
7. 可以用盒子系统自带的插件作为一个下载机，随时随地下载并存储在本地
8. 可以用盒子做个人网站个人数据库前端或后端
9. 可以做自己的 git 仓库，协助你建立或转存个人或群体仓库
10. 可以建立自己的 socks 网络中转，安全地科学使用网络。
11. 还可以做更多事情，等待你的发掘。或加入用户微信群交流，或加入社区交流。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OpenCollective() {
    return (
      <iframe title="Sponsors" src="changeslog.html" style={{width: "100%", height: "1100px", display: "block"}}></iframe>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`e酷网 ${siteConfig.title}`}
      description="海思机顶盒hi3798m">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Amlogic />
        <PolicyPersistence />
        <PolicyEnforcement />
        <OpenCollective />
      </main>
    </Layout>
  );
}
