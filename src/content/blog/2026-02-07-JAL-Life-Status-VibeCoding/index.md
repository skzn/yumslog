---
title: 【個人開発】JAL Life Status ポイント計算機を1日で爆速リリースした話【Vibe Coding】
description: JAL Life Status ポイント（LSP）計算機を、アイデアからリリースまで1日で作った開発ログ。CursorとVibe Codingで、エンジニアでなくてもここまでできる実践記録。
pubDate: Sep 10 2022
heroImage: ./hero.png
tags:
  - vibecoding
  - JAL
---

## 【個人開発】JAL Life Status ポイント計算機を1日で爆速リリースした話【Vibe Coding】

こんにちは、Yumsです。 普段はクライアントワークの会社でUI/UXデザインの領域で仕事をしています。

実は現在、会社を退職して次のフェーズへ進む準備を進めています。その一環として、「個人で稼ぐ力」を試すべく、久しぶりに自分の手を動かしてWebサービスを作ってみました。

今回は、**「アイデア出しからリリースまでたった1日」** で完走した、JAL Life Status ポイント（LSP）計算サービスの開発ログを共有します。サービスは **[jal-life-status.yumslog.com](https://jal-life-status.yumslog.com)** で公開しています。

エンジニアじゃなくても、デザインとAI（Cursor）があればここまでできる、という「Vibe Coding（バイブコーディング）」の実践記録です。

### なぜ今、JALのLSP計算機なのか？

JGC（JALグローバルクラブ）の制度変更に伴い、「Life Status ポイント」の計算が複雑化していることに目をつけました。 既存の計算機やExcel管理はいくつか存在しますが、「スマホでサクッと、直感的に計算したい」というニーズはまだあるはず。

- **ニッチな需要がある（マイラー界隈）**
    
- **ロジックが明確（計算式が決まっている）**
    
- **1日で作りきれる規模感**
    

この3点が揃っていたため、最初の個人開発プロジェクトとして採用しました。

### 開発環境：Cursor × Vibe Coding

今回の開発テーマは**「Vibe Coding」**。 細かいコードの文法に悩む時間は極力減らし、AIと対話しながら「ノリ（Vibe）」でプロダクトを形にしていくスタイルです。

- **Editor:** Cursor (AI Code Editor)
    
- **Tech Stack:** HTML / CSS (Tailwind) / JavaScript (Vanilla)
    
- **Design:** シンプルかつモバイルファーストなUI
    

正直、僕は本職のエンジニアではありません。しかし、Cursorに「こういうUIで、JALのこの計算ロジックを実装して」と指示を出し、出力されたコードを自身のUI/UXの知見で調整するだけで、驚くべきスピードで機能が実装されていきました。

### 1日のタイムライン

- **午前中：** 要件定義とデザイン構想。JALの公式サイトを見ながら計算ロジックを整理。
    
- **昼過ぎ：** Cursorを立ち上げ、実装開始。ベースのHTML/CSS作成。
    
- **夕方：** 計算ロジックの実装とデバッグ。UIの微調整（ここだけはデザイナーとして拘りました）。
    
- **夜：** ドメイン設定、デプロイ完了。リリース！
    

特に「デザインの調整」と「ロジックの修正」をAIとラリーしながら進める体験は、まさに次世代の開発体験でした。

### リリースしてみての気づき

今回、「1日で作り切る」という制約を設けたことが功を奏しました。 完璧を目指してダラダラ作るよりも、**「動くものをまず世に出す」** ことの重要性を再確認しました。

CDOという立場上、普段はマネジメントや上流工程に関わることが多いですが、こうして泥臭くモノを作る感覚はやはり楽しいですね。

### 今後の展望

まずはこのサービスを運用しつつ、AdSenseやアフィリエイトでの収益化（お小遣い稼ぎレベルからですが）も実験していきます。 また、次はもう少し複雑な**「Mac用ペットアプリ」**や、**「金融・FIRE系のシミュレーションツール」**の開発にも着手しています。

「30代未婚、資産形成中、会社を辞めて独立へ」。 そんなリアルな道中を、これからも開発ログとして残していこうと思います。

<div class="not-prose mt-10">
  <a href="https://jal-life-status.yumslog.com" target="_blank" rel="noopener noreferrer" class="block w-full max-w-md">
    <div class="card bg-base-100 transition ease-in-out hover:shadow-xl hover:scale-[102%] overflow-hidden border border-base-300">
      <div class="relative w-full h-[211px] bg-base-200">
        <img src="https://jal-life-status.yumslog.com/ogp.png" alt="JAL Life Status ポイント計算機" width="750" height="422" class="w-full h-full object-cover" loading="lazy" />
      </div>
      <div class="card-body p-4 text-sm">
        <h3 class="card-title text-base">JAL Life Status ポイント計算機</h3>
        <p class="text-sm text-base-content/80">LSPをスマホでサクッと計算。jal-life-status.yumslog.com</p>
        <div class="card-actions justify-end mt-2">
          <span class="badge badge-outline badge-sm">外部サービス</span>
        </div>
      </div>
    </div>
  </a>
</div>
