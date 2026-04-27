const APP_VERSION = "1.1";
const units = [
/*1*/
 [
  { kanji: "尨眉皓髪", frontYomi: "ぼうび", backYomi: "こうはつ", hide: "front" },
  { kanji: "破戒無塹", frontYomi: "はかい", backYomi: "むざん", hide: "back" },
  { kanji: "月中蟾蜍", frontYomi: "げっちゅう(の)", backYomi: "せんじょ", hide: "back" },
  { kanji: "三跪九叩", frontYomi: "さんき", backYomi: "きゅうこう", hide: "front" },
  { kanji: "撥乱反正", frontYomi: "はつらん", backYomi: "はんせい", hide: "front" },
  { kanji: "鳳友鸞交", frontYomi: "ほうゆう", backYomi: "らんこう", hide: "back" },
  { kanji: "三董三沐", frontYomi: "さんくん", backYomi: "さんもく", hide: "back" },
  { kanji: "影駭驚震", frontYomi: "えいがい", backYomi: "きょうしん", hide: "front" },
  { kanji: "狗吠緇衣", frontYomi: "くはい", backYomi: "しい", hide: "back" },
  { kanji: "虛融澹泊", frontYomi: "こゆう", backYomi: "たんぱく", hide: "back" }
],
/*2*/
[
  { kanji: "兔起鶻落", frontYomi: "とき", backYomi: "こつらく", hide: "back" },
  { kanji: "鴟目虎吻", frontYomi: "しもく", backYomi: "こふん", hide: "front" },
  { kanji: "五行相剋", frontYomi: "ごぎょう", backYomi: "そうこく", hide: "back" },
  { kanji: "鸞翔鳳集", frontYomi: "らんしょう", backYomi: "ほうしゅう", hide: "front" },
  { kanji: "霓裳羽衣", frontYomi: "げいしょう", backYomi: "うい", hide: "front" },
  { kanji: "自己韜晦", frontYomi: "じこ", backYomi: "とうかい", hide: "back" },
  { kanji: "豪放磊落", frontYomi: "ごうほう", backYomi: "らいらく", hide: "back" },
  { kanji: "画脂鏤氷", frontYomi: "がし", backYomi: "ろうひょう", hide: "back" },
  { kanji: "旱天慈雨", frontYomi: "かんてん", backYomi: "じう", hide: "front" },
  { kanji: "筆削褒貶", frontYomi: "ひっさく", backYomi: "ほうへん", hide: "back" }
],
/*3*/
[
  { kanji: "発揚蹈厲", frontYomi: "はつよう", backYomi: "とうれい", hide: "back" },
  { kanji: "逍遥法外", frontYomi: "しょうよう", backYomi: "ほうがい", hide: "front" },
  { kanji: "俛首帖耳", frontYomi: "ふしゅ", backYomi: "ちょうじ", hide: "back" },
  { kanji: "風岸孤峭", frontYomi: "ふうがん", backYomi: "こしょう", hide: "back" },
  { kanji: "先従隗始", frontYomi: "せんじゅう", backYomi: "かいし", hide: "back" },
  { kanji: "厥角稽首", frontYomi: "けっかく", backYomi: "けいしゅ", hide: "front" },
  { kanji: "桃弧棘矢", frontYomi: "とうこ", backYomi: "きょくし", hide: "front" },
  { kanji: "三釁三浴", frontYomi: "さんきん", backYomi: "さんよく", hide: "front" },
  { kanji: "牝牡驪黄", frontYomi: "ひんぼ", backYomi: "りこう", hide: "back" },
  { kanji: "北轅適楚", frontYomi: "ほくえん", backYomi: "てきそ", hide: "front" }
],
/*4*/
[
  { kanji: "朱脣皓歯", frontYomi: "しゅしん", backYomi: "こうし", hide: "front" },
  { kanji: "多銭善賈", frontYomi: "たせん", backYomi: "ぜんこ", hide: "back" },
  { kanji: "隔靴掻痒", frontYomi: "かっか", backYomi: "そうよう", hide: "back" },
  { kanji: "拾遺補闕", frontYomi: "しゅうい", backYomi: "ほけつ", hide: "back" },
  { kanji: "恫疑虚喝", frontYomi: "どうぎ", backYomi: "きょかつ", hide: "front" },
  { kanji: "曠世不羈", frontYomi: "こうせい", backYomi: "ふき", hide: "back" },
  { kanji: "蕩佚簡易", frontYomi: "とういつ", backYomi: "かんい", hide: "front" },
  { kanji: "張王李趙", frontYomi: "ちょうおう", backYomi: "りちょう", hide: "back" },
  { kanji: "南蛮鴃舌", frontYomi: "なんばん", backYomi: "げきぜつ", hide: "back" },
  { kanji: "越鳧楚乙", frontYomi: "えつふ", backYomi: "そいつ", hide: "front" }
],
/*5*/
[
  { kanji: "驢鳴犬吠", frontYomi: "ろめい", backYomi: "けんばい", hide: "front" },
  { kanji: "夜雨対牀", frontYomi: "やう", backYomi: "たいしょう", hide: "back" },
  { kanji: "一蹶不振", frontYomi: "いっけつ", backYomi: "ふしん", hide: "front" },
  { kanji: "満目蕭条", frontYomi: "まんもく", backYomi: "しょうじょう", hide: "back" },
  { kanji: "倚馬七紙", frontYomi: "いば", backYomi: "しちし", hide: "front" },
  { kanji: "探驪獲珠", frontYomi: "たんり", backYomi: "かくしゅ", hide: "front" },
  { kanji: "談天雕竜", frontYomi: "だんてん", backYomi: "ちょうりょう", hide: "back" },
  { kanji: "蜉蝣一期", frontYomi: "ふゆう(の)", backYomi: "いちご", hide: "front" },
  { kanji: "狐裘羔袖", frontYomi: "こきゅう", backYomi: "こうしゅう", hide: "back" },
  { kanji: "虚静恬淡", frontYomi: "きょせい", backYomi: "てんたん", hide: "back" }
],
/*6*/
[
  { kanji: "跳梁跋扈", frontYomi: "ちょうりょう", backYomi: "ばっこ", hide: "back" },
  { kanji: "茅屋采椽", frontYomi: "ぼうおく", backYomi: "さいてん", hide: "back" },
  { kanji: "大桀小桀", frontYomi: "たいけつ", backYomi: "しょうけつ", hide: "back" },
  { kanji: "比肩随踵", frontYomi: "ひけん", backYomi: "ずいしょう", hide: "back" },
  { kanji: "渭浜漁父", frontYomi: "いひん(の)", backYomi: "ぎょほ（ふ）", hide: "front" },
  { kanji: "六韜三略", frontYomi: "りくとう", backYomi: "さんりゃく", hide: "front" },
  { kanji: "瞋目張胆", frontYomi: "しんもく", backYomi: "ちょうたん", hide: "front" },
  { kanji: "白荼赤火", frontYomi: "はくと", backYomi: "せきか", hide: "front" },
  { kanji: "狗尾続貂", frontYomi: "くび", backYomi: "ぞくちょう", hide: "back" },
  { kanji: "砥礪切磋", frontYomi: "しれい", backYomi: "せっさ", hide: "back" }
],
/*7*/
[
  { kanji: "井渫不食", frontYomi: "せいせつ", backYomi: "ふしょく", hide: "front" },
  { kanji: "鄒魯遺風", frontYomi: "すうろ", backYomi: "いふう", hide: "front" },
  { kanji: "逍遥自在", frontYomi: "しょうよう", backYomi: "じざい", hide: "front" },
  { kanji: "毫釐千里", frontYomi: "ごうり", backYomi: "せんり", hide: "front" },
  { kanji: "傀儡政権", frontYomi: "かいらい", backYomi: "せいけん", hide: "front" },
  { kanji: "尾大不掉", frontYomi: "びだい", backYomi: "ふとう", hide: "back" },
  { kanji: "法界悋気", frontYomi: "ほうかい", backYomi: "りんき", hide: "back" },
  { kanji: "灑掃応対", frontYomi: "さいそう", backYomi: "おうたい", hide: "front" },
  { kanji: "截断衆流", frontYomi: "せつだん", backYomi: "しゅる", hide: "front" },
  { kanji: "歓喜抃舞", frontYomi: "かんき", backYomi: "べんぶ", hide: "back" }
],
/*8*/
[
  { kanji: "千荊万棘", frontYomi: "せんけい", backYomi: "ばんきょく", hide: "back" },
  { kanji: "雨霖鈴曲", frontYomi: "うりん", backYomi: "れいきょく", hide: "front" },
  { kanji: "天威咫尺", frontYomi: "てんい", backYomi: "しせき", hide: "back" },
  { kanji: "折檻諫言", frontYomi: "せっかん", backYomi: "かんげん", hide: "front" },
  { kanji: "彫心鏤骨", frontYomi: "ちょうしん", backYomi: "るこつ", hide: "back" },
  { kanji: "和羹塩梅", frontYomi: "わこう", backYomi: "あんばい", hide: "front" },
  { kanji: "迂疎空闊", frontYomi: "うそ", backYomi: "くうかつ", hide: "back" },
  { kanji: "呉牛喘月", frontYomi: "ごぎゅう", backYomi: "ぜんげつ", hide: "back" },
  { kanji: "貪夫徇財", frontYomi: "たんぷ", backYomi: "じゅんざい", hide: "back" },
  { kanji: "敝衣蓬髪", frontYomi: "へいい", backYomi: "ほうはつ", hide: "front" }
  ],
  /*9*/
[
  { kanji: "封豕長蛇", frontYomi: "ほうし", backYomi: "ちょうだ", hide: "front" },
  { kanji: "和気藹藹", frontYomi: "わき", backYomi: "あいあい", hide: "back" },
  { kanji: "瓊枝玉葉", frontYomi: "けいし", backYomi: "ぎょくよう", hide: "front" },
  { kanji: "眼光炯炯", frontYomi: "がんこう", backYomi: "けいけい", hide: "back" },
  { kanji: "風光明媚", frontYomi: "ふうこう", backYomi: "めいび", hide: "back" },
  { kanji: "断爛朝報", frontYomi: "だんらん", backYomi: "ちょうほう", hide: "front" },
  { kanji: "蓋瓦級甎", frontYomi: "がいが", backYomi: "きゅうせん", hide: "back" },
  { kanji: "戎馬倥偬", frontYomi: "じゅうば", backYomi: "こうそう", hide: "back" },
  { kanji: "妻子眷族", frontYomi: "さいし", backYomi: "けんぞく", hide: "back" },
  { kanji: "被髪佯狂", frontYomi: "ひはつ", backYomi: "ようきょう", hide: "back" }
  ],
  /*10*/
[
  { kanji: "放蕩不羈", frontYomi: "ほうとう", backYomi: "ふき", hide: "back" },
  { kanji: "跌蕩放言", frontYomi: "てっとう", backYomi: "ほうげん", hide: "front" },
  { kanji: "瓶墜簪折", frontYomi: "へいつい", backYomi: "しんせつ", hide: "back" },
  { kanji: "鶴立企佇", frontYomi: "かくりつ", backYomi: "きちょ", hide: "back" },
  { kanji: "倍日幷行", frontYomi: "ばいじつ", backYomi: "へいこう", hide: "back" },
  { kanji: "舐糠及米", frontYomi: "しこう", backYomi: "きゅうまい", hide: "front" },
  { kanji: "広廈万間", frontYomi: "こうか", backYomi: "ばんげん", hide: "front" },
  { kanji: "兢兢業業", frontYomi: "きょうきょう", backYomi: "ぎょうぎょう", hide: "front" },
  { kanji: "窃玉偸香", frontYomi: "せつぎょく", backYomi: "とうこう", hide: "back" },
  { kanji: "冢中枯骨", frontYomi: "ちょうちゅう", backYomi: "ここつ", hide: "front" }
  ],
  /*11*/
[
  { kanji: "史籒大篆", frontYomi: "しちゅう", backYomi: "だいてん", hide: "back" },
  { kanji: "杯盤狼藉", frontYomi: "はいばん", backYomi: "ろうぜき", hide: "back" },
  { kanji: "星火燎原", frontYomi: "せいか", backYomi: "りょうげん", hide: "back" },
  { kanji: "才気煥発", frontYomi: "さいき", backYomi: "かんぱつ", hide: "back" },
  { kanji: "雲容烟態", frontYomi: "うんよう", backYomi: "えんたい", hide: "back" },
  { kanji: "晨星落落", frontYomi: "しんせい", backYomi: "らくらく", hide: "front" },
  { kanji: "人心洶洶", frontYomi: "じんしん", backYomi: "きょうきょう", hide: "back" },
  { kanji: "零絹尺楮", frontYomi: "れいけん", backYomi: "せきちょ", hide: "back" },
  { kanji: "一瀉千里", frontYomi: "いっしゃ", backYomi: "せんり", hide: "front" },
  { kanji: "魑魅魍魎", frontYomi: "ちみ", backYomi: "もうりょう", hide: "back" }
],
/*12*/
[
  { kanji: "北轍南轅", frontYomi: "ほくてつ", backYomi: "なんえん", hide: "back" },
  { kanji: "蘭薫桂馥", frontYomi: "らんくん", backYomi: "けいふく", hide: "back" },
  { kanji: "屠毒筆墨", frontYomi: "とどく(の)", backYomi: "ひつぼく", hide: "front" },
  { kanji: "鴉雀無声", frontYomi: "あじゃく", backYomi: "むせい", hide: "front" },
  { kanji: "八面玲瓏", frontYomi: "はちめん", backYomi: "れいろう", hide: "back" },
  { kanji: "切磋琢磨", frontYomi: "せっさ", backYomi: "たくま", hide: "front" },
  { kanji: "桜花爛漫", frontYomi: "おうか", backYomi: "らんまん", hide: "back" },
  { kanji: "意気沮喪", frontYomi: "いき", backYomi: "そそう", hide: "back" },
  { kanji: "落英繽紛", frontYomi: "らくえい", backYomi: "ひんぷん", hide: "back" },
  { kanji: "金甌無欠", frontYomi: "きんおう", backYomi: "むけつ", hide: "front" }
],
/*13*/
[
  { kanji: "恍然大悟", frontYomi: "こうぜん", backYomi: "たいご", hide: "front" },
  { kanji: "磑風舂雨", frontYomi: "がいふう", backYomi: "しょうう", hide: "front" },
  { kanji: "矯枉過直", frontYomi: "きょうおう", backYomi: "かちょく", hide: "front" },
  { kanji: "飛絮漂花", frontYomi: "ひじょ", backYomi: "ひょうか", hide: "front" },
  { kanji: "雷陳膠漆", frontYomi: "らいちん", backYomi: "こうしつ", hide: "back" },
  { kanji: "喧喧囂囂", frontYomi: "けんけん", backYomi: "ごうごう", hide: "back" },
  { kanji: "慇懃無礼", frontYomi: "いんぎん", backYomi: "ぶれい", hide: "front" },
  { kanji: "卑躬屈節", frontYomi: "ひきゅう", backYomi: "くっせつ", hide: "front" },
  { kanji: "洗垢索瘢", frontYomi: "せんこう", backYomi: "さくはん", hide: "back" },
  { kanji: "鞭辟近裏", frontYomi: "べんぺき", backYomi: "きんり", hide: "front" }
],
/*14*/
[  
  { kanji: "放辟邪侈", frontYomi: "ほうへき", backYomi: "じゃし", hide: "back" },
  { kanji: "翼覆嫗煦", frontYomi: "よくふ", backYomi: "うく", hide: "back" },
  { kanji: "夷蛮戎狄", frontYomi: "いばん", backYomi: "じゅうてき", hide: "back" },
  { kanji: "槃根錯節", frontYomi: "ばんこん", backYomi: "さくせつ", hide: "front" },
  { kanji: "円滑洒脱", frontYomi: "えんかつ", backYomi: "しゃだつ", hide: "back" },
  { kanji: "七縦七擒", frontYomi: "しちしょう", backYomi: "しちきん", hide: "back" },
  { kanji: "爬羅剔抉", frontYomi: "はら", backYomi: "てきけつ", hide: "back" },
  { kanji: "叱咤激励", frontYomi: "しった", backYomi: "げきれい", hide: "front" },
  { kanji: "風声鶴唳", frontYomi: "ふうせい", backYomi: "かくれい", hide: "back" },
  { kanji: "魯魚亥豕", frontYomi: "ろぎょ", backYomi: "がいし", hide: "back" }
  ],
  /*15*/
[
  { kanji: "朝憲紊乱", frontYomi: "ちょうけん", backYomi: "びんらん", hide: "back" },
  { kanji: "無根無蔕", frontYomi: "むこん", backYomi: "むてい", hide: "back" },
  { kanji: "黄髪垂髫", frontYomi: "こうはつ", backYomi: "すいちょう", hide: "back" },
  { kanji: "被髪纓冠", frontYomi: "ひはつ", backYomi: "えいかん", hide: "back" },
  { kanji: "瑶林瓊樹", frontYomi: "ようりん", backYomi: "けいじゅ", hide: "back" },
  { kanji: "煖衣飽食", frontYomi: "だんい", backYomi: "ほうしょく", hide: "front" },
  { kanji: "千里無烟", frontYomi: "せんり", backYomi: "むえん", hide: "back" },
  { kanji: "黜陟幽明", frontYomi: "ちゅっちょく", backYomi: "ゆうめい", hide: "front" },
  { kanji: "安閑恬静", frontYomi: "あんかん", backYomi: "てんせい", hide: "back" },
  { kanji: "巫雲蜀雨", frontYomi: "ふうん", backYomi: "しょくう", hide: "back" }
  ],
  /*16*/
[
  { kanji: "伊尹負鼎", frontYomi: "いいん", backYomi: "ふてい", hide: "front" },
  { kanji: "虎嘯風生", frontYomi: "こしょう", backYomi: "ふうしょう", hide: "front" },
  { kanji: "滄海桑田", frontYomi: "そうかい", backYomi: "そうでん", hide: "front" },
  { kanji: "点睛開眼", frontYomi: "てんせい", backYomi: "かいがん", hide: "front" },
  { kanji: "昼耕夜誦", frontYomi: "ちゅうこう", backYomi: "やしょう", hide: "back" },
  { kanji: "区聞陬見", frontYomi: "くぶん", backYomi: "すうけん", hide: "back" },
  { kanji: "阮籍青眼", frontYomi: "げんせき", backYomi: "せいがん", hide: "front" },
  { kanji: "奢侈文弱", frontYomi: "しゃし", backYomi: "ぶんじゃく", hide: "front" },
  { kanji: "心広体胖", frontYomi: "しんこう", backYomi: "たいはん", hide: "back" },
  { kanji: "哭岐泣練", frontYomi: "こくき", backYomi: "きゅうれん", hide: "front" }
],
/*17*/
[
  { kanji: "盂蘭盆会", frontYomi: "うら", backYomi: "ぼんえ", hide: "front" },
  { kanji: "得魚忘筌", frontYomi: "とくぎょ", backYomi: "ぼうせん", hide: "back" },
  { kanji: "長頸烏喙", frontYomi: "ちょうけい", backYomi: "うかい", hide: "back" },
  { kanji: "鰥寡孤独", frontYomi: "かんか", backYomi: "こどく", hide: "front" },
  { kanji: "光芒一閃", frontYomi: "こうぼう", backYomi: "いっせん", hide: "front" },
  { kanji: "甕裡醯鶏", frontYomi: "おうり", backYomi: "けいけい", hide: "back" },
  { kanji: "翠帳紅閨", frontYomi: "すいちょう", backYomi: "こうけい", hide: "back" },
  { kanji: "垂名竹帛", frontYomi: "すいめい", backYomi: "ちくはく", hide: "back" },
  { kanji: "不撓不屈", frontYomi: "ふとう", backYomi: "ふくつ", hide: "front" },
  { kanji: "贅沢三昧", frontYomi: "ぜいたく", backYomi: "ざんまい", hide: "front" }
  ],
  /*18*/
[
  { kanji: "豁達大度", frontYomi: "かったつ", backYomi: "たいど", hide: "front" },
  { kanji: "軻親断機", frontYomi: "かしん", backYomi: "だんき", hide: "front" },
  { kanji: "扇枕温衾", frontYomi: "せんちん", backYomi: "おんきん", hide: "back" },
  { kanji: "桃傷李仆", frontYomi: "とうしょう", backYomi: "りふ", hide: "back" },
  { kanji: "沐浴抒溷", frontYomi: "もくよく", backYomi: "じょこん", hide: "back" },
  { kanji: "阮簡曠達", frontYomi: "げんかん", backYomi: "こうたつ", hide: "front" },
  { kanji: "鶏尸牛従", frontYomi: "けいし", backYomi: "ぎゅうしょう", hide: "front" },
  { kanji: "布韈青鞋", frontYomi: "ふべつ", backYomi: "せいあい", hide: "front" },
  { kanji: "舐痔得車", frontYomi: "しじ", backYomi: "とくしゃ", hide: "front" },
  { kanji: "対驢撫琴", frontYomi: "たいろ", backYomi: "ぶきん", hide: "back" }
  ],
  /*19*/
[
  { kanji: "雕文刻鏤", frontYomi: "ちょうぶん", backYomi: "こくる", hide: "back" },
  { kanji: "聯袂辞職", frontYomi: "れんべい", backYomi: "じしょく", hide: "front" },
  { kanji: "門巷填隘", frontYomi: "もんこう", backYomi: "てんあい", hide: "back" },
  { kanji: "寤寐思服", frontYomi: "ごび", backYomi: "しふく", hide: "front" },
  { kanji: "常備不懈", frontYomi: "じょうび", backYomi: "ふかい", hide: "back" },
  { kanji: "霹靂閃電", frontYomi: "へきれき", backYomi: "せんでん", hide: "front" },
  { kanji: "百姓一揆", frontYomi: "ひゃくしょう", backYomi: "いっき", hide: "back" },
  { kanji: "狂言綺語", frontYomi: "きょうげん", backYomi: "きご", hide: "back" },
  { kanji: "皓月千里", frontYomi: "こうげつ", backYomi: "せんり", hide: "front" },
  { kanji: "一闔一闢", frontYomi: "いっこう", backYomi: "いちびゃく", hide: "back" }
  ],
  /*20*/
[
  { kanji: "豺狼当路", frontYomi: "さいろう", backYomi: "とうろ", hide: "front" },
  { kanji: "醜悪奸邪", frontYomi: "しゅうあく", backYomi: "かんじゃ", hide: "back" },
  { kanji: "肉袒負荊", frontYomi: "にくたん", backYomi: "ふけい", hide: "front" },
  { kanji: "咄嗟叱咤", frontYomi: "とっさ", backYomi: "しった", hide: "front" },
  { kanji: "晏嬰狐裘", frontYomi: "あんえい", backYomi: "こきゅう", hide: "front" },
  { kanji: "侃侃諤諤", frontYomi: "かんかん", backYomi: "がくがく", hide: "back" },
  { kanji: "面折廷諍", frontYomi: "めんせつ", backYomi: "ていそう", hide: "back" },
  { kanji: "薏苡明珠", frontYomi: "よくい", backYomi: "めいしゅ", hide: "front" },
  { kanji: "草偃風従", frontYomi: "そうえん", backYomi: "ふうじゅう", hide: "front" },
  { kanji: "渟膏湛碧", frontYomi: "ていこう", backYomi: "たんぺき", hide: "front" }
],
/*21*/
[
  { kanji: "懲羹吹膾", frontYomi: "ちょうこう", backYomi: "すいかい", hide: "back" },
  { kanji: "無欲恬淡", frontYomi: "むよく", backYomi: "てんたん", hide: "back" },
  { kanji: "巍然屹立", frontYomi: "ぎぜん", backYomi: "きつりつ", hide: "front" },
  { kanji: "蟄居屏息", frontYomi: "ちっきょ", backYomi: "へいそく", hide: "front" },
  { kanji: "烏兔匆匆", frontYomi: "うと", backYomi: "そうそう", hide: "back" },
  { kanji: "鳧趨雀躍", frontYomi: "ふすう", backYomi: "じゃくやく", hide: "front" },
  { kanji: "拈華微笑", frontYomi: "ねんげ", backYomi: "みしょう", hide: "front" },
  { kanji: "荊棘銅駝", frontYomi: "けいきょく", backYomi: "どうだ", hide: "front" },
  { kanji: "彫虫篆刻", frontYomi: "ちょうちゅう", backYomi: "てんこく", hide: "back" },
  { kanji: "黛蓄膏渟", frontYomi: "たいちく", backYomi: "こうてい", hide: "back" }
  ],
  /*22*/
[
  { kanji: "明察秋毫", frontYomi: "めいさつ", backYomi: "しゅうごう", hide: "back" },
  { kanji: "鼓舌揺脣", frontYomi: "こぜつ", backYomi: "ようしん", hide: "back" },
  { kanji: "涅槃寂静", frontYomi: "ねはん", backYomi: "じゃくじょう", hide: "front" },
  { kanji: "篝火狐鳴", frontYomi: "こうか", backYomi: "こめい", hide: "front" },
  { kanji: "悖徳没倫", frontYomi: "はいとく", backYomi: "ぼつりん", hide: "front" },
  { kanji: "結跏趺坐", frontYomi: "けっか", backYomi: "ふざ", hide: "back" },
  { kanji: "雪萼霜葩", frontYomi: "せつがく", backYomi: "そうは", hide: "back" },
  { kanji: "本地垂迹", frontYomi: "ほんち", backYomi: "すいじゃく", hide: "back" },
  { kanji: "酒甕飯嚢", frontYomi: "しゅおう", backYomi: "はんのう", hide: "front" },
  { kanji: "縷縷綿綿", frontYomi: "るる", backYomi: "めんめん", hide: "front" }
  ],
  /*23*/
[
  { kanji: "聚散十春", frontYomi: "しゅうさん", backYomi: "じっしゅん", hide: "front" },
  { kanji: "黒白混淆", frontYomi: "こくびゃく", backYomi: "こんこう", hide: "back" },
  { kanji: "満身創痍", frontYomi: "まんしん", backYomi: "そうい", hide: "back" },
  { kanji: "肥馬軽裘", frontYomi: "ひば", backYomi: "けいきゅう", hide: "back" },
  { kanji: "偃武修文", frontYomi: "えんぶ", backYomi: "しゅうぶん", hide: "front" },
  { kanji: "撥雲見日", frontYomi: "はつうん", backYomi: "けんじつ", hide: "front" },
  { kanji: "萎靡沈滞", frontYomi: "いび", backYomi: "ちんたい", hide: "front" },
  { kanji: "攀竜附鳳", frontYomi: "はんりょう", backYomi: "ふほう", hide: "front" },
  { kanji: "生滅滅已", frontYomi: "しょうめつ", backYomi: "めつい", hide: "back" },
  { kanji: "太羹玄酒", frontYomi: "たいこう", backYomi: "げんしゅ", hide: "front" }
  ],
  /*24*/
[
  { kanji: "豕交獣畜", frontYomi: "しこう", backYomi: "じゅうちく", hide: "front" },
  { kanji: "拳拳服膺", frontYomi: "けんけん", backYomi: "ふくよう", hide: "back" },
  { kanji: "渾然一体", frontYomi: "こんぜん", backYomi: "いったい", hide: "front" },
  { kanji: "春風駘蕩", frontYomi: "しゅんぷう", backYomi: "たいとう", hide: "back" },
  { kanji: "空谷跫音", frontYomi: "くうこく(の)", backYomi: "きょうおん", hide: "back" },
  { kanji: "蜀犬吠日", frontYomi: "しょくけん", backYomi: "はいじつ", hide: "front" },
  { kanji: "得隴望蜀", frontYomi: "とくろう", backYomi: "ぼうしょく", hide: "back" },
  { kanji: "雲烟縹渺", frontYomi: "うんえん", backYomi: "ひょうびょう", hide: "back" },
  { kanji: "韋編三絶", frontYomi: "いへん", backYomi: "さんぜつ", hide: "front" },
  { kanji: "郢書燕説", frontYomi: "えいしょ", backYomi: "えんせつ", hide: "front" }
],
/*25*/
[
  { kanji: "悲憤慷慨", frontYomi: "ひふん", backYomi: "こうがい", hide: "back" },
  { kanji: "行尸走肉", frontYomi: "こうし", backYomi: "そうにく", hide: "front" },
  { kanji: "牛驥同皁", frontYomi: "ぎゅうき", backYomi: "どうそう", hide: "back" },
  { kanji: "直往邁進", frontYomi: "ちょくおう", backYomi: "まいしん", hide: "back" },
  { kanji: "按図索驥", frontYomi: "あんず", backYomi: "さくき", hide: "back" },
  { kanji: "八面六臂", frontYomi: "はちめん", backYomi: "ろっぴ", hide: "back" },
  { kanji: "虚無縹渺", frontYomi: "きょむ", backYomi: "ひょうびょう", hide: "back" },
  { kanji: "右顧左眄", frontYomi: "うこ", backYomi: "さべん", hide: "back" },
  { kanji: "苦心惨憺", frontYomi: "くしん", backYomi: "さんたん", hide: "back" },
  { kanji: "馮異大樹", frontYomi: "ふうい", backYomi: "たいじゅ", hide: "front" }
  ],
  /*26*/
[
  { kanji: "夏癸殷辛", frontYomi: "かき", backYomi: "いんしん", hide: "back" },
  { kanji: "竜頭鷁首", frontYomi: "りょうとう", backYomi: "げきしゅ", hide: "back" },
  { kanji: "独立不撓", frontYomi: "どくりつ", backYomi: "ふとう", hide: "back" },
  { kanji: "夙夜夢寐", frontYomi: "しゅくや", backYomi: "むび", hide: "back" },
  { kanji: "胡漢陵轢", frontYomi: "こかん", backYomi: "りょうれき", hide: "back" },
  { kanji: "博識洽聞", frontYomi: "はくしき", backYomi: "こうぶん", hide: "back" },
  { kanji: "旁若無人", frontYomi: "ぼうじゃく", backYomi: "ぶじん", hide: "front" },
  { kanji: "飄忽震蕩", frontYomi: "ひょうこつ", backYomi: "しんとう", hide: "front" },
  { kanji: "南蛮北狄", frontYomi: "なんばん", backYomi: "ほくてき", hide: "back" },
  { kanji: "箪食壺漿", frontYomi: "たんし", backYomi: "こしょう", hide: "back" }
  ],
  /*27*/
[
  { kanji: "落花狼藉", frontYomi: "らっか", backYomi: "ろうぜき", hide: "back" },
  { kanji: "蹈常襲故", frontYomi: "とうじょう", backYomi: "しゅうこ", hide: "front" },
  { kanji: "断薺画粥", frontYomi: "だんせい", backYomi: "かくしゅく", hide: "front" },
  { kanji: "銜哀致誠", frontYomi: "がんあい", backYomi: "ちせい", hide: "front" },
  { kanji: "嚆矢濫觴", frontYomi: "こうし", backYomi: "らんしょう", hide: "back" },
  { kanji: "慧可断臂", frontYomi: "えか", backYomi: "だんぴ", hide: "back" },
  { kanji: "雲遊萍寄", frontYomi: "うんゆう", backYomi: "へいき", hide: "back" },
  { kanji: "疑雲猜霧", frontYomi: "ぎうん", backYomi: "さいむ", hide: "back" },
  { kanji: "物論囂囂", frontYomi: "ぶつろん", backYomi: "ごうごう", hide: "back" },
  { kanji: "羊裘垂釣", frontYomi: "ようきゅう", backYomi: "すいちょう", hide: "front" }
  ],
  /*28*/
[
  { kanji: "攀竜附驥", frontYomi: "はんりょう", backYomi: "ふき", hide: "front" },
  { kanji: "麻姑掻痒", frontYomi: "まこ", backYomi: "そうよう", hide: "back" },
  { kanji: "合歓綢繆", frontYomi: "ごうかん", backYomi: "ちゅうびゅう", hide: "back" },
  { kanji: "衆賢茅茹", frontYomi: "しゅうけん", backYomi: "ぼうじょ", hide: "back" },
  { kanji: "瞠目結舌", frontYomi: "どうもく", backYomi: "けつぜつ", hide: "front" },
  { kanji: "抱関撃柝", frontYomi: "ほうかん", backYomi: "げきたく", hide: "back" },
  { kanji: "含英咀華", frontYomi: "がんえい", backYomi: "しょか", hide: "back" },
  { kanji: "喙長三尺", frontYomi: "かいちょう", backYomi: "さんじゃく", hide: "front" },
  { kanji: "槐門棘路", frontYomi: "かいもん", backYomi: "きょくろ", hide: "back" },
  { kanji: "高牙大纛", frontYomi: "こうが", backYomi: "だいとう", hide: "back" }
],
/*29*/
[
  { kanji: "延頸挙踵", frontYomi: "えんけい", backYomi: "きょしょう", hide: "back" },
  { kanji: "天歩艱難", frontYomi: "てんぽ", backYomi: "かんなん", hide: "back" },
  { kanji: "眥裂髪指", frontYomi: "しれつ", backYomi: "はっし", hide: "front" },
  { kanji: "騰蛟起鳳", frontYomi: "とうこう", backYomi: "きほう", hide: "front" },
  { kanji: "游雲驚竜", frontYomi: "ゆううん", backYomi: "きょうりょう", hide: "front" },
  { kanji: "雲烟万里", frontYomi: "うんえん", backYomi: "ばんり", hide: "front" },
  { kanji: "綢繆未雨", frontYomi: "ちゅうびゅう", backYomi: "みう", hide: "front" },
  { kanji: "枉尺直尋", frontYomi: "おうせき", backYomi: "ちょくじん", hide: "front" },
  { kanji: "香気芬芬", frontYomi: "こうき", backYomi: "ふんぷん", hide: "back" },
  { kanji: "荊釵布裙", frontYomi: "けいさい", backYomi: "ふくん", hide: "back" }
  ],
  /*30*/
[
  { kanji: "商山四皓", frontYomi: "しょうざん(の)", backYomi: "しこう", hide: "back" },
  { kanji: "高談闊歩", frontYomi: "こうだん", backYomi: "かっぽ", hide: "back" },
  { kanji: "槁木死灰", frontYomi: "こうぼく", backYomi: "しかい", hide: "front" },
  { kanji: "瓊枝栴檀", frontYomi: "けいし", backYomi: "せんだん", hide: "front" },
  { kanji: "浅斟低唱", frontYomi: "せんしん", backYomi: "ていしょう", hide: "front" },
  { kanji: "滄海遺珠", frontYomi: "そうかい(の)", backYomi: "いしゅ", hide: "back" },
  { kanji: "阿諛追従", frontYomi: "あゆ", backYomi: "ついしょう", hide: "front" },
  { kanji: "駢四儷六", frontYomi: "べんし", backYomi: "れいろく", hide: "front" },
  { kanji: "突怒偃蹇", frontYomi: "とつど", backYomi: "えんけん", hide: "back" },
  { kanji: "暴虎馮河", frontYomi: "ぼうこ", backYomi: "ひょうが", hide: "back" }
  ],
  /*31*/
[
  { kanji: "風鬟雨鬢", frontYomi: "ふうかん", backYomi: "うびん", hide: "back" },
  { kanji: "渾崙呑棗", frontYomi: "こんろん", backYomi: "どんそう", hide: "front" },
  { kanji: "荊棘叢裏", frontYomi: "けいきょく", backYomi: "そうり", hide: "front" },
  { kanji: "竜蟠虎踞", frontYomi: "りょうばん", backYomi: "こきょ", hide: "back" },
  { kanji: "黄粱一炊", frontYomi: "こうりょう", backYomi: "いっすい", hide: "front" },
  { kanji: "筆力扛鼎", frontYomi: "ひつりょく", backYomi: "こうてい", hide: "back" },
  { kanji: "咄咄怪事", frontYomi: "とつとつ", backYomi: "かいじ", hide: "front" },
  { kanji: "鼎鐺玉石", frontYomi: "ていそう", backYomi: "ぎょくせき", hide: "front" },
  { kanji: "塵飯塗羹", frontYomi: "じんぱん", backYomi: "とこう", hide: "back" },
  { kanji: "熙熙壌壌", frontYomi: "きき", backYomi: "じょうじょう", hide: "front" }
  ],
  /*32*/
[
  { kanji: "無余涅槃", frontYomi: "むよ", backYomi: "ねはん", hide: "back" },
  { kanji: "嚮壁虚造", frontYomi: "きょうへき", backYomi: "きょぞう", hide: "front" },
  { kanji: "一嚬一笑", frontYomi: "いっぴん", backYomi: "いっしょう", hide: "front" },
  { kanji: "琳琅珠玉", frontYomi: "りんろう", backYomi: "しゅぎょく", hide: "front" },
  { kanji: "兔起鳧挙", frontYomi: "とき", backYomi: "ふきょ", hide: "back" },
  { kanji: "環堵蕭然", frontYomi: "かんと", backYomi: "しょうぜん", hide: "back" },
  { kanji: "偏旁冠脚", frontYomi: "へんぼう", backYomi: "かんきゃく", hide: "front" },
  { kanji: "濁流滾滾", frontYomi: "だくりゅう", backYomi: "こんこん", hide: "back" },
  { kanji: "為虎傅翼", frontYomi: "いこ", backYomi: "ふよく", hide: "back" },
  { kanji: "恐惶謹言", frontYomi: "きょうこう", backYomi: "きんげん", hide: "front" }
],
/*33*/
[
  { kanji: "揣摩臆測", frontYomi: "しま", backYomi: "おくそく", hide: "front" },
  { kanji: "風紀紊乱", frontYomi: "ふうき", backYomi: "びんらん", hide: "back" },
  { kanji: "頑廉懦立", frontYomi: "がんれん", backYomi: "だりつ", hide: "back" },
  { kanji: "車胤聚蛍", frontYomi: "しゃいん", backYomi: "しゅうけい", hide: "back" },
  { kanji: "失魂落魄", frontYomi: "しっこん", backYomi: "らくはく", hide: "back" },
  { kanji: "噬指棄薪", frontYomi: "ぜいし", backYomi: "きしん", hide: "front" },
  { kanji: "意気銷沈", frontYomi: "いき", backYomi: "しょうちん", hide: "back" },
  { kanji: "焦頭爛額", frontYomi: "しょうとう", backYomi: "らんがく", hide: "back" },
  { kanji: "紆余委蛇", frontYomi: "うよ", backYomi: "いだ", hide: "front" },
  { kanji: "霖雨蒼生", frontYomi: "りんう", backYomi: "そうせい", hide: "front" }
  ],
  /*34*/
[
  { kanji: "三槐九棘", frontYomi: "さんかい", backYomi: "きゅうきょく", hide: "front" },
  { kanji: "剛毅朴訥", frontYomi: "ごうき", backYomi: "ぼくとつ", hide: "back" },
  { kanji: "子墨兔毫", frontYomi: "しぼく", backYomi: "とごう", hide: "back" },
  { kanji: "頭童歯豁", frontYomi: "とうどう", backYomi: "しかつ", hide: "back" },
  { kanji: "琴瑟相和", frontYomi: "きんしつ", backYomi: "そうわ", hide: "front" },
  { kanji: "大廈高楼", frontYomi: "たいか", backYomi: "こうろう", hide: "front" },
  { kanji: "前倨後恭", frontYomi: "ぜんきょ", backYomi: "こうきょう", hide: "front" },
  { kanji: "弊帚千金", frontYomi: "へいそう", backYomi: "せんきん", hide: "front" },
  { kanji: "瑣砕細膩", frontYomi: "ささい", backYomi: "さいじ", hide: "back" },
  { kanji: "獣聚鳥散", frontYomi: "じゅうしゅう", backYomi: "ちょうさん", hide: "front" }
  ],
  /*35*/
[
  { kanji: "樗櫟散木", frontYomi: "ちょれき", backYomi: "さんぼく", hide: "front" },
  { kanji: "雲雨巫山", frontYomi: "うんう", backYomi: "ふざん", hide: "back" },
  { kanji: "鬱肉漏脯", frontYomi: "うつにく", backYomi: "ろうほ", hide: "back" },
  { kanji: "閻浮檀金", frontYomi: "えんぶ", backYomi: "だごん", hide: "front" },
  { kanji: "典謨訓誥", frontYomi: "てんぼ", backYomi: "くんこう", hide: "back" },
  { kanji: "偏袒扼腕", frontYomi: "へんたん", backYomi: "やくわん", hide: "front" },
  { kanji: "詩人蛻骨", frontYomi: "しじん", backYomi: "ぜいこつ", hide: "back" },
  { kanji: "画竜点睛", frontYomi: "がりょう", backYomi: "てんせい", hide: "back" },
  { kanji: "誠惶誠恐", frontYomi: "せいこう", backYomi: "せいきょう", hide: "front" },
  { kanji: "竜驤虎視", frontYomi: "りょうじょう", backYomi: "こし", hide: "front" }
  ],
  /*36*/
[
  { kanji: "黝堊丹漆", frontYomi: "ゆうあく", backYomi: "たんしつ", hide: "front" },
  { kanji: "竜舟鷁首", frontYomi: "りょうしゅう", backYomi: "げきしゅ", hide: "back" },
  { kanji: "渾渾沌沌", frontYomi: "こんこん", backYomi: "とんとん", hide: "front" },
  { kanji: "漿酒霍肉", frontYomi: "しょうしゅ", backYomi: "かくにく", hide: "back" },
  { kanji: "婉曲迂遠", frontYomi: "えんきょく", backYomi: "うえん", hide: "front" },
  { kanji: "燕頷虎頸", frontYomi: "えんがん", backYomi: "こけい", hide: "front" },
  { kanji: "狷介孤高", frontYomi: "けんかい", backYomi: "ここう", hide: "front" },
  { kanji: "天宇地廬", frontYomi: "てんう", backYomi: "ちろ", hide: "back" },
  { kanji: "蝸牛角上", frontYomi: "かぎゅう", backYomi: "かくじょう", hide: "front" },
  { kanji: "煮豆燃萁", frontYomi: "しゃとう", backYomi: "ねんき", hide: "back" }
],
/*37*/
[
  { kanji: "高車駟馬", frontYomi: "こうしゃ", backYomi: "しば", hide: "back" },
  { kanji: "蜿蜿長蛇", frontYomi: "えんえん", backYomi: "ちょうだ", hide: "front" },
  { kanji: "光風霽月", frontYomi: "こうふう", backYomi: "せいげつ", hide: "back" },
  { kanji: "牛溲馬勃", frontYomi: "ぎゅうしゅう", backYomi: "ばぼつ", hide: "front" },
  { kanji: "造次顚沛", frontYomi: "ぞうじ", backYomi: "てんぱい", hide: "back" },
  { kanji: "驕奢淫逸", frontYomi: "きょうしゃ", backYomi: "いんいつ", hide: "front" },
  { kanji: "横行闊歩", frontYomi: "おうこう", backYomi: "かっぽ", hide: "back" },
  { kanji: "轍乱旗靡", frontYomi: "てつらん", backYomi: "きび", hide: "back" },
  { kanji: "斎戒沐浴", frontYomi: "さいかい", backYomi: "もくよく", hide: "front" },
  { kanji: "晨夜兼道", frontYomi: "しんや", backYomi: "けんどう", hide: "front" }
  ],
  /*38*/
[
  { kanji: "風雨対牀", frontYomi: "ふうう", backYomi: "たいしょう", hide: "back" },
  { kanji: "雷霆万鈞", frontYomi: "らいてい", backYomi: "ばんきん", hide: "front" },
  { kanji: "朮羹艾酒", frontYomi: "じゅっこう", backYomi: "がいしゅ", hide: "front" },
  { kanji: "英姿颯爽", frontYomi: "えいし", backYomi: "さっそう", hide: "back" },
  { kanji: "翫歳愒日", frontYomi: "がんさい", backYomi: "かいじつ", hide: "back" },
  { kanji: "一倡三歎", frontYomi: "いっしょう", backYomi: "さんたん", hide: "front" },
  { kanji: "猿猴取月", frontYomi: "えんこう", backYomi: "しゅげつ", hide: "front" },
  { kanji: "切歯扼腕", frontYomi: "せっし", backYomi: "やくわん", hide: "back" },
  { kanji: "仲連蹈海", frontYomi: "ちゅうれん", backYomi: "とうかい", hide: "back" },
  { kanji: "実践躬行", frontYomi: "じっせん", backYomi: "きゅうこう", hide: "back" }
  ],
  /*39*/
[
  { kanji: "牀上施牀", frontYomi: "しょうじょう", backYomi: "ししょう", hide: "back" },
  { kanji: "異類無礙", frontYomi: "いるい", backYomi: "むげ", hide: "back" },
  { kanji: "万物殷富", frontYomi: "ばんぶつ", backYomi: "いんぷ", hide: "back" },
  { kanji: "跼天蹐地", frontYomi: "きょくてん", backYomi: "せきち", hide: "front" },
  { kanji: "杞人天憂", frontYomi: "きじん", backYomi: "てんゆう", hide: "front" },
  { kanji: "干戈倥偬", frontYomi: "かんか", backYomi: "こうそう", hide: "back" },
  { kanji: "帷幄上奏", frontYomi: "いあく", backYomi: "じょうそう", hide: "front" },
  { kanji: "弁才無礙", frontYomi: "べんさい", backYomi: "むげ", hide: "back" },
  { kanji: "惨憺経営", frontYomi: "さんたん", backYomi: "けいえい", hide: "front" },
  { kanji: "曠日弥久", frontYomi: "こうじつ", backYomi: "びきゅう", hide: "front" }
  ],
  /*40*/
[
  { kanji: "讒諂面諛", frontYomi: "ざんてん", backYomi: "めんゆ", hide: "front" },
  { kanji: "重熙累洽", frontYomi: "ちょうき", backYomi: "るいこう", hide: "front" },
  { kanji: "一糸一毫", frontYomi: "いっし", backYomi: "いちごう", hide: "back" },
  { kanji: "隋珠和璧", frontYomi: "ずいしゅ", backYomi: "かへき", hide: "front" },
  { kanji: "温凊定省", frontYomi: "おんせい", backYomi: "ていせい", hide: "front" },
  { kanji: "燕頷投筆", frontYomi: "えんがん", backYomi: "とうひつ", hide: "front" },
  { kanji: "白髪青袗", frontYomi: "はくはつ", backYomi: "せいしん", hide: "back" },
  { kanji: "七種菜羹", frontYomi: "しちしゅ(の)", backYomi: "さいこう", hide: "back" },
  { kanji: "烟波縹渺", frontYomi: "えんぱ", backYomi: "ひょうびょう", hide: "front" },
  { kanji: "遅疑逡巡", frontYomi: "ちぎ", backYomi: "しゅんじゅん", hide: "back" }
],
/*41*/
[
  { kanji: "長江天塹", frontYomi: "ちょうこう", backYomi: "てんざん", hide: "back" },
  { kanji: "跂行喙息", frontYomi: "きこう", backYomi: "かいそく", hide: "back" },
  { kanji: "後悔噬臍", frontYomi: "こうかい", backYomi: "ぜいせい", hide: "back" },
  { kanji: "乾坤一擲", frontYomi: "けんこん", backYomi: "いってき", hide: "back" },
  { kanji: "言行齟齬", frontYomi: "げんこう", backYomi: "そご", hide: "back" },
  { kanji: "翦草除根", frontYomi: "せんそう", backYomi: "じょこん", hide: "front" },
  { kanji: "梁冀跋扈", frontYomi: "りょうき", backYomi: "ばっこ", hide: "front" },
  { kanji: "栄諧伉儷", frontYomi: "えいかい", backYomi: "こうれい", hide: "back" },
  { kanji: "螻蟻潰堤", frontYomi: "ろうぎ", backYomi: "かいてい", hide: "front" },
  { kanji: "百孔千瘡", frontYomi: "ひゃっこう", backYomi: "せんそう", hide: "back" }
  ],
  /*42*/
[
  { kanji: "融通無礙", frontYomi: "ゆうずう", backYomi: "むげ", hide: "back" },
  { kanji: "軽妙洒脱", frontYomi: "けいみょう", backYomi: "しゃだつ", hide: "back" },
  { kanji: "擒縦自在", frontYomi: "きんしょう", backYomi: "じざい", hide: "front" },
  { kanji: "載籍浩瀚", frontYomi: "さいせき", backYomi: "こうかん", hide: "back" },
  { kanji: "膏粱子弟", frontYomi: "こうりょう", backYomi: "してい", hide: "front" },
  { kanji: "桃李成蹊", frontYomi: "とうり", backYomi: "せいけい", hide: "back" },
  { kanji: "澆季末世", frontYomi: "ぎょうき", backYomi: "まっせ", hide: "front" },
  { kanji: "顔厚忸怩", frontYomi: "がんこう", backYomi: "じくじ", hide: "back" },
  { kanji: "伏寇在側", frontYomi: "ふくこう", backYomi: "ざいそく", hide: "front" },
  { kanji: "匍匐膝行", frontYomi: "ほふく", backYomi: "しっこう", hide: "front" }
  ],
  /*43*/
[
  { kanji: "群蟻附羶", frontYomi: "ぐんぎ", backYomi: "ふせん", hide: "back" },
  { kanji: "槿花一朝", frontYomi: "きんか", backYomi: "いっちょう", hide: "front" },
  { kanji: "跖狗吠尭", frontYomi: "せきく", backYomi: "はいぎょう", hide: "front" },
  { kanji: "枉駕来臨", frontYomi: "おうが", backYomi: "らいりん", hide: "front" },
  { kanji: "因果覿面", frontYomi: "いんが", backYomi: "てきめん", hide: "back" },
  { kanji: "滄海一粟", frontYomi: "そうかい(の)", backYomi: "いちぞく", hide: "front" },
  { kanji: "鉤章棘句", frontYomi: "こうしょう", backYomi: "きょくく", hide: "back" },
  { kanji: "一字褒貶", frontYomi: "いちじ", backYomi: "ほうへん", hide: "back" },
  { kanji: "自由闊達", frontYomi: "じゆう", backYomi: "かったつ", hide: "back" },
  { kanji: "波瀾万丈", frontYomi: "はらん", backYomi: "ばんじょう", hide: "front" }
  ],
  /*44*/
[
  { kanji: "鳳凰銜書", frontYomi: "ほうおう", backYomi: "がんしょ", hide: "back" },
  { kanji: "独立不羈", frontYomi: "どくりつ", backYomi: "ふき", hide: "back" },
  { kanji: "明窓浄几", frontYomi: "めいそう", backYomi: "じょうき", hide: "back" },
  { kanji: "藜杖韋帯", frontYomi: "れいじょう", backYomi: "いたい", hide: "front" },
  { kanji: "禍福倚伏", frontYomi: "かふく", backYomi: "いふく", hide: "back" },
  { kanji: "天地開闢", frontYomi: "てんち", backYomi: "かいびゃく", hide: "back" },
  { kanji: "冒雨剪韭", frontYomi: "ぼうう", backYomi: "せんきゅう", hide: "back" },
  { kanji: "驕兵必敗", frontYomi: "きょうへい", backYomi: "ひっぱい", hide: "front" },
  { kanji: "斟酌折衷", frontYomi: "しんしゃく", backYomi: "せっちゅう", hide: "front" },
  { kanji: "班女辞輦", frontYomi: "はんじょ", backYomi: "じれん", hide: "back" }
]
/*45*/
];