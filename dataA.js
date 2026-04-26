const APP_VERSION = "1.0";
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
  { kanji: "拾遺補闕", frontYomi: "しゅうい", backYomi: "ほけつ", hide: "front" },
  { kanji: "恫疑虚喝", frontYomi: "どうぎ", backYomi: "きょかつ", hide: "front" },
  { kanji: "曠世不羈", frontYomi: "こうせい", backYomi: "ふき", hide: "back" },
  { kanji: "蕩佚簡易", frontYomi: "とういつ", backYomi: "かんい", hide: "front" },
  { kanji: "張王李趙", frontYomi: "ちょうおう", backYomi: "りちょう", hide: "front" },
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
  { kanji: "截断衆流", frontYomi: "せつだん", backYomi: "しゅる", hide: "back" },
  { kanji: "歓喜抃舞", frontYomi: "かんき", backYomi: "べんぶ", hide: "back" }
],
/*8*/
[
  { kanji: "千荊万棘", frontYomi: "せんけい", backYomi: "ばんきょく", hide: "back" },
  { kanji: "雨霖鈴曲", frontYomi: "うりん", backYomi: "れいきょく", hide: "front" },
  { kanji: "天威咫尺", frontYomi: "てんい", backYomi: "しせき", hide: "back" },
  { kanji: "折檻諫言", frontYomi: "せっかん", backYomi: "かんげん", hide: "back" },
  { kanji: "彫心鏤骨", frontYomi: "ちょうしん", backYomi: "るこつ", hide: "front" },
  { kanji: "和羹塩梅", frontYomi: "わこう", backYomi: "あんばい", hide: "back" },
  { kanji: "迂疎空闊", frontYomi: "うそ", backYomi: "くうかつ", hide: "back" },
  { kanji: "呉牛喘月", frontYomi: "ごぎゅう", backYomi: "ぜんげつ", hide: "front" },
  { kanji: "貪夫徇財", frontYomi: "たんぷ", backYomi: "じゅんざい", hide: "back" },
  { kanji: "敝衣蓬髪", frontYomi: "へいい", backYomi: "ほうはつ", hide: "back" }
  ],
  /*9*/
[
  { kanji: "封豕長蛇", frontYomi: "ほうし", backYomi: "ちょうだ", hide: "front" },
  { kanji: "和気藹藹", frontYomi: "わき", backYomi: "あいあい", hide: "front" },
  { kanji: "瓊枝玉葉", frontYomi: "けいし", backYomi: "ぎょくよう", hide: "back" },
  { kanji: "眼光炯炯", frontYomi: "がんこう", backYomi: "けいけい", hide: "front" },
  { kanji: "風光明媚", frontYomi: "ふうこう", backYomi: "めいび", hide: "back" },
  { kanji: "断爛朝報", frontYomi: "だんらん", backYomi: "ちょうほう", hide: "back" },
  { kanji: "蓋瓦級甎", frontYomi: "がいが", backYomi: "きゅうせん", hide: "front" },
  { kanji: "戎馬倥偬", frontYomi: "じゅうば", backYomi: "こうそう", hide: "back" },
  { kanji: "妻子眷族", frontYomi: "さいし", backYomi: "けんぞく", hide: "back" },
  { kanji: "被髪佯狂", frontYomi: "ひはつ", backYomi: "ようきょう", hide: "front" }
  ],
  /*10*/
[
  { kanji: "放蕩不羈", frontYomi: "ほうとう", backYomi: "ふき", hide: "back" },
  { kanji: "跌蕩放言", frontYomi: "てっとう", backYomi: "ほうげん", hide: "front" },
  { kanji: "瓶墜簪折", frontYomi: "へいつい", backYomi: "しんせつ", hide: "back" },
  { kanji: "鶴立企佇", frontYomi: "かくりつ", backYomi: "きちょ", hide: "back" },
  { kanji: "倍日幷行", frontYomi: "ばいじつ", backYomi: "へいこう", hide: "front" },
  { kanji: "舐糠及米", frontYomi: "しこう", backYomi: "きゅうまい", hide: "back" },
  { kanji: "広廈万間", frontYomi: "こうか", backYomi: "ばんげん", hide: "back" },
  { kanji: "兢兢業業", frontYomi: "きょうきょう", backYomi: "ぎょうぎょう", hide: "back" },
  { kanji: "窃玉偸香", frontYomi: "せつぎょく", backYomi: "とうこう", hide: "back" },
  { kanji: "冢中枯骨", frontYomi: "ちょうちゅう", backYomi: "ここつ", hide: "front" }
  ],
  /*11*/
[
  { kanji: "史籒大篆", frontYomi: "しちゅう", backYomi: "だいてん", hide: "back" },
  { kanji: "杯盤狼藉", frontYomi: "はいばん", backYomi: "ろうぜき", hide: "back" },
  { kanji: "星火燎原", frontYomi: "せいか", backYomi: "りょうげん", hide: "front" },
  { kanji: "才気煥発", frontYomi: "さいき", backYomi: "かんぱつ", hide: "back" },
  { kanji: "雲容烟態", frontYomi: "うんよう", backYomi: "えんたい", hide: "back" },
  { kanji: "晨星落落", frontYomi: "しんせい", backYomi: "らくらく", hide: "back" },
  { kanji: "人心洶洶", frontYomi: "じんしん", backYomi: "きょうきょう", hide: "front" },
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
  { kanji: "翼覆嫗煦", frontYomi: "よくふ", backYomi: "うく", hide: "front" },
  { kanji: "夷蛮戎狄", frontYomi: "いばん", backYomi: "じゅうてき", hide: "back" },
  { kanji: "槃根錯節", frontYomi: "ばんこん", backYomi: "さくせつ", hide: "back" },
  { kanji: "円滑洒脱", frontYomi: "えんかつ", backYomi: "しゃだつ", hide: "front" },
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
  { kanji: "被髪纓冠", frontYomi: "ひはつ", backYomi: "えいかん", hide: "front" },
  { kanji: "瑶林瓊樹", frontYomi: "ようりん", backYomi: "けいじゅ", hide: "back" },
  { kanji: "煖衣飽食", frontYomi: "だんい", backYomi: "ほうしょく", hide: "front" },
  { kanji: "千里無烟", frontYomi: "せんり", backYomi: "むえん", hide: "front" },
  { kanji: "黜陟幽明", frontYomi: "ちゅっちょく", backYomi: "ゆうめい", hide: "front" },
  { kanji: "安閑恬静", frontYomi: "あんかん", backYomi: "てんせい", hide: "front" },
  { kanji: "巫雲蜀雨", frontYomi: "ふうん", backYomi: "しょくう", hide: "back" }
  ],
  /*16*/
[
  { kanji: "伊尹負鼎", frontYomi: "いいん", backYomi: "ふてい", hide: "back" },
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
  { kanji: "雕文刻鏤", frontYomi: "ちょうぶん", backYomi: "こくる", hide: "front" },
  { kanji: "聯袂辞職", frontYomi: "れんべい", backYomi: "じしょく", hide: "back" },
  { kanji: "門巷填隘", frontYomi: "もんこう", backYomi: "てんあい", hide: "back" },
  { kanji: "寤寐思服", frontYomi: "ごび", backYomi: "しふく", hide: "back" },
  { kanji: "常備不懈", frontYomi: "じょうび", backYomi: "ふかい", hide: "front" },
  { kanji: "霹靂閃電", frontYomi: "へきれき", backYomi: "せんでん", hide: "back" },
  { kanji: "百姓一揆", frontYomi: "ひゃくしょう", backYomi: "いっき", hide: "front" },
  { kanji: "狂言綺語", frontYomi: "きょうげん", backYomi: "きご", hide: "back" },
  { kanji: "皓月千里", frontYomi: "こうげつ", backYomi: "せんり", hide: "front" },
  { kanji: "一闔一闢", frontYomi: "いっこう", backYomi: "いちびゃく", hide: "back" }
  ],
  /*20*/
[
  { kanji: "豺狼当路", frontYomi: "さいろう", backYomi: "とうろ", hide: "back" },
  { kanji: "醜悪奸邪", frontYomi: "しゅうあく", backYomi: "かんじゃ", hide: "front" },
  { kanji: "肉袒負荊", frontYomi: "にくたん", backYomi: "ふけい", hide: "front" },
  { kanji: "咄嗟叱咤", frontYomi: "とっさ", backYomi: "しった", hide: "back" },
  { kanji: "晏嬰狐裘", frontYomi: "あんえい", backYomi: "こきゅう", hide: "front" },
  { kanji: "侃侃諤諤", frontYomi: "かんかん", backYomi: "がくがく", hide: "front" },
  { kanji: "面折廷諍", frontYomi: "めんせつ", backYomi: "ていそう", hide: "back" },
  { kanji: "薏苡明珠", frontYomi: "よくい", backYomi: "めいしゅ", hide: "back" },
  { kanji: "草偃風従", frontYomi: "そうえん", backYomi: "ふうじゅう", hide: "front" },
  { kanji: "渟膏湛碧", frontYomi: "ていこう", backYomi: "たんぺき", hide: "front" }
]
];