// DailyLingo conversation data
// Each line: s = speaker index, t = native text, r = reading (romaji/romanization), e = English

const DATA = {
  ja: {
    label: "Japanese",
    voice: "ja-JP",
    levels: {
      beginner: [
        {
          scene: "At a café",
          title: "Ordering an iced coffee",
          speakers: [{ name: "Staff", emoji: "☕" }, { name: "You", emoji: "🙂" }],
          note: "「大丈夫です」(daijōbu desu) literally means \"it's okay,\" but native speakers use it constantly as a soft, polite way to say \"no thank you.\" Refusing with a flat 「いりません」 can sound blunt.",
          lines: [
            { s: 0, t: "いらっしゃいませ。ご注文はお決まりですか？", r: "Irasshaimase. Go-chūmon wa o-kimari desu ka?", e: "Welcome! Are you ready to order?" },
            { s: 1, t: "えっと、アイスコーヒーをひとつお願いします。", r: "Etto, aisu kōhī o hitotsu onegai shimasu.", e: "Um, one iced coffee, please." },
            { s: 0, t: "サイズはいかがなさいますか？", r: "Saizu wa ikaga nasaimasu ka?", e: "What size would you like?" },
            { s: 1, t: "Mサイズでお願いします。", r: "Emu saizu de onegai shimasu.", e: "Medium, please." },
            { s: 0, t: "店内でお召し上がりですか？", r: "Tennai de o-meshiagari desu ka?", e: "Will you be having that here?" },
            { s: 1, t: "いえ、持ち帰りで。", r: "Ie, mochikaeri de.", e: "No, to go, please." },
            { s: 0, t: "かしこまりました。450円になります。", r: "Kashikomarimashita. Yonhyaku-gojū-en ni narimasu.", e: "Certainly. That will be 450 yen." },
            { s: 1, t: "はい。あ、レシートは大丈夫です。", r: "Hai. A, reshīto wa daijōbu desu.", e: "Here you go. Oh, I don't need the receipt." }
          ],
          vocab: [
            { w: "ご注文", r: "go-chūmon", m: "order (polite)" },
            { w: "持ち帰り", r: "mochikaeri", m: "takeout / to go" },
            { w: "店内", r: "tennai", m: "inside the shop" },
            { w: "かしこまりました", r: "kashikomarimashita", m: "\"certainly\" (formal service phrase)" },
            { w: "大丈夫です", r: "daijōbu desu", m: "\"I'm fine\" — a soft way to say no thanks" }
          ]
        },
        {
          scene: "On the street",
          title: "Asking for directions",
          speakers: [{ name: "Traveler", emoji: "🧳" }, { name: "Local", emoji: "🚶" }],
          note: "Repeating the key word back with ですね (\"massugu desu ne\" — \"straight, right?\") is how Japanese speakers confirm they understood. It sounds far more natural than just saying はい.",
          lines: [
            { s: 0, t: "すみません、ちょっといいですか？", r: "Sumimasen, chotto ii desu ka?", e: "Excuse me, do you have a second?" },
            { s: 1, t: "はい、どうしました？", r: "Hai, dō shimashita?", e: "Sure, what's up?" },
            { s: 0, t: "駅はどこですか？", r: "Eki wa doko desu ka?", e: "Where is the station?" },
            { s: 1, t: "駅ですね。この道をまっすぐ行ってください。", r: "Eki desu ne. Kono michi o massugu itte kudasai.", e: "The station? Go straight down this street." },
            { s: 0, t: "まっすぐですね。", r: "Massugu desu ne.", e: "Straight ahead, got it." },
            { s: 1, t: "はい。二つ目の信号を右に曲がると、すぐ見えますよ。", r: "Hai. Futatsume no shingō o migi ni magaru to, sugu miemasu yo.", e: "Yes. Turn right at the second traffic light and you'll see it right away." },
            { s: 0, t: "歩いてどのくらいですか？", r: "Aruite dono kurai desu ka?", e: "How long does it take on foot?" },
            { s: 1, t: "5分くらいですよ。", r: "Go-fun kurai desu yo.", e: "About five minutes." },
            { s: 0, t: "ありがとうございます！助かりました。", r: "Arigatō gozaimasu! Tasukarimashita.", e: "Thank you so much! That really helped." },
            { s: 1, t: "いえいえ、気をつけて。", r: "Ieie, ki o tsukete.", e: "Not at all — take care." }
          ],
          vocab: [
            { w: "信号", r: "shingō", m: "traffic light" },
            { w: "曲がる", r: "magaru", m: "to turn" },
            { w: "まっすぐ", r: "massugu", m: "straight ahead" },
            { w: "助かりました", r: "tasukarimashita", m: "\"that helped a lot\" — natural extra thanks" },
            { w: "気をつけて", r: "ki o tsukete", m: "take care / be safe" }
          ]
        },
        {
          scene: "Monday morning",
          title: "Small talk with a coworker",
          speakers: [{ name: "You", emoji: "🙂" }, { name: "Tanaka", emoji: "👩‍💼" }],
          note: "Ending observations with ですね invites agreement — 「暑いですね」 isn't really about the weather, it's an invitation to chat. Small talk in Japan leans heavily on weather and weekends.",
          lines: [
            { s: 0, t: "おはようございます。", r: "Ohayō gozaimasu.", e: "Good morning." },
            { s: 1, t: "おはようございます。今日は暑いですね。", r: "Ohayō gozaimasu. Kyō wa atsui desu ne.", e: "Good morning. It's hot today, isn't it?" },
            { s: 0, t: "本当ですね。もう夏みたいです。", r: "Hontō desu ne. Mō natsu mitai desu.", e: "It really is. It already feels like summer." },
            { s: 1, t: "週末は何かしましたか？", r: "Shūmatsu wa nanika shimashita ka?", e: "Did you do anything over the weekend?" },
            { s: 0, t: "友達と映画を見ました。田中さんは？", r: "Tomodachi to eiga o mimashita. Tanaka-san wa?", e: "I saw a movie with a friend. How about you, Tanaka-san?" },
            { s: 1, t: "私は家でゆっくりしました。", r: "Watashi wa ie de yukkuri shimashita.", e: "I just relaxed at home." },
            { s: 0, t: "いいですね。じゃ、また後で。", r: "Ii desu ne. Ja, mata ato de.", e: "Nice. Well, see you later." },
            { s: 1, t: "はい、また！", r: "Hai, mata!", e: "Yep, see you!" }
          ],
          vocab: [
            { w: "暑い", r: "atsui", m: "hot (weather)" },
            { w: "週末", r: "shūmatsu", m: "weekend" },
            { w: "ゆっくりする", r: "yukkuri suru", m: "to relax, take it easy" },
            { w: "〜みたい", r: "~mitai", m: "like / similar to" },
            { w: "また後で", r: "mata ato de", m: "see you later" }
          ]
        }
      ],
      intermediate: [
        {
          scene: "Texting a friend",
          title: "Making weekend plans",
          speakers: [{ name: "Yuki", emoji: "👩" }, { name: "Ken", emoji: "👦" }],
          note: "Inviting with a negative question — 行ってみない？ (\"wanna try going?\") — is the standard casual invitation. Notice the dropped particles everywhere: 「土曜日(は)ひま？」. Real casual Japanese drops anything obvious.",
          lines: [
            { s: 0, t: "ねえ、土曜日ひま？", r: "Nee, doyōbi hima?", e: "Hey, are you free Saturday?" },
            { s: 1, t: "土曜？たぶん大丈夫だけど、なんで？", r: "Doyō? Tabun daijōbu da kedo, nande?", e: "Saturday? Probably, why?" },
            { s: 0, t: "新しくできたラーメン屋、行ってみない？", r: "Atarashiku dekita rāmen-ya, itte minai?", e: "Wanna try that new ramen place?" },
            { s: 1, t: "あー、駅前のやつ？めっちゃ並ぶらしいよ。", r: "Ā, ekimae no yatsu? Meccha narabu rashii yo.", e: "Oh, the one in front of the station? I hear the line is crazy." },
            { s: 0, t: "だから開店と同時に行こうと思って。11時とか。", r: "Dakara kaiten to dōji ni ikō to omotte. Jūichi-ji toka.", e: "That's why I'm thinking we go right when it opens. Like 11." },
            { s: 1, t: "朝はやっ。でもまあ、ラーメンのためなら行くか。", r: "Asa haya'. Demo mā, rāmen no tame nara iku ka.", e: "That's so early. But okay, for ramen I guess I'm in." },
            { s: 0, t: "やった！じゃあ10時半に駅で待ち合わせね。", r: "Yatta! Jā jūji-han ni eki de machiawase ne.", e: "Yes! Then let's meet at the station at 10:30." },
            { s: 1, t: "りょうかい。遅れんなよ。", r: "Ryōkai. Okurenna yo.", e: "Got it. Don't be late." },
            { s: 0, t: "それ、いつも遅れるのそっちじゃん。", r: "Sore, itsumo okureru no socchi jan.", e: "Says the one who's always late." }
          ],
          vocab: [
            { w: "ひま", r: "hima", m: "free (have spare time)" },
            { w: "めっちゃ", r: "meccha", m: "super / really (casual)" },
            { w: "並ぶ", r: "narabu", m: "to line up, queue" },
            { w: "待ち合わせ", r: "machiawase", m: "meeting up (place/time)" },
            { w: "〜じゃん", r: "~jan", m: "\"isn't it / come on\" (casual emphasis)" }
          ]
        },
        {
          scene: "Lunch break",
          title: "That drama finale",
          speakers: [{ name: "Aoi", emoji: "👩‍🦰" }, { name: "Riku", emoji: "🧑" }],
          note: "反則 (hansoku) literally means \"rule violation\" in sports, but natives use it for things that are unfairly good — 「あのシーンは反則」 = \"that scene had no right being that good.\"",
          lines: [
            { s: 0, t: "昨日の最終回、見た？", r: "Kinō no saishūkai, mita?", e: "Did you watch the finale last night?" },
            { s: 1, t: "見た見た！まさかあの二人がくっつくとはね。", r: "Mita mita! Masaka ano futari ga kuttsuku to wa ne.", e: "I did, I did! Can't believe those two ended up together." },
            { s: 0, t: "でしょ？私、最後ちょっと泣いちゃった。", r: "Desho? Watashi, saigo chotto naichatta.", e: "Right? I actually cried a little at the end." },
            { s: 1, t: "わかる。あのプロポーズのシーンは反則だよ。", r: "Wakaru. Ano puropōzu no shīn wa hansoku da yo.", e: "I get it. That proposal scene was just unfair." },
            { s: 0, t: "続編やってほしいなあ。", r: "Zokuhen yatte hoshii nā.", e: "I really hope they make a sequel." },
            { s: 1, t: "人気あったから、やるんじゃない？", r: "Ninki atta kara, yarun ja nai?", e: "It was popular, so they probably will, don't you think?" },
            { s: 0, t: "だといいけど。次なに見るか迷ってるんだよね。", r: "Da to ii kedo. Tsugi nani miru ka mayotterun da yo ne.", e: "Hope so. Now I can't decide what to watch next." },
            { s: 1, t: "じゃあ俺のおすすめ送るよ。ハズレなしだから。", r: "Jā ore no osusume okuru yo. Hazure nashi da kara.", e: "Then I'll send you my recommendations. No misses, I promise." }
          ],
          vocab: [
            { w: "最終回", r: "saishūkai", m: "final episode" },
            { w: "泣いちゃった", r: "naichatta", m: "ended up crying (〜ちゃう = casual 〜てしまう)" },
            { w: "反則", r: "hansoku", m: "\"unfair / illegal\" — slang for unfairly good" },
            { w: "続編", r: "zokuhen", m: "sequel" },
            { w: "ハズレ", r: "hazure", m: "a miss, a dud" }
          ]
        },
        {
          scene: "Friday night",
          title: "At the izakaya",
          speakers: [{ name: "Mei", emoji: "👩‍💻" }, { name: "Sho", emoji: "👨‍💻" }],
          note: "「とりあえず生」(toriaezu nama — \"draft beer for now\") is such a universal first order at izakaya that it's basically a set phrase. お疲れさま is the all-purpose after-work greeting, thanks, and toast.",
          lines: [
            { s: 0, t: "お疲れ！とりあえずビールでいい？", r: "Otsukare! Toriaezu bīru de ii?", e: "Good work today! Beer to start, as usual?" },
            { s: 1, t: "お疲れさま。うん、それでお願い。", r: "Otsukaresama. Un, sore de onegai.", e: "You too. Yeah, that works for me." },
            { s: 0, t: "すみませーん、生二つください！", r: "Sumimasēn, nama futatsu kudasai!", e: "Excuse me! Two draft beers, please!" },
            { s: 1, t: "あと、枝豆と唐揚げも頼んじゃう？", r: "Ato, edamame to karaage mo tanonjau?", e: "Should we just go ahead and get edamame and karaage too?" },
            { s: 0, t: "いいね。今日はもう食べる気分。", r: "Ii ne. Kyō wa mō taberu kibun.", e: "Nice. I'm fully in an eating mood today." },
            { s: 1, t: "今週ほんと長かったもんね。", r: "Konshū honto nagakatta mon ne.", e: "This week was seriously long, after all." },
            { s: 0, t: "ね。来週はもうちょっと楽だといいけど。", r: "Ne. Raishū wa mō chotto raku da to ii kedo.", e: "Right? Hopefully next week is a bit easier." },
            { s: 1, t: "はい、来た来た。じゃ、お疲れさまでした、かんぱーい！", r: "Hai, kita kita. Ja, otsukaresama deshita, kanpāi!", e: "Oh, here they come. Well then — to surviving the week, cheers!" }
          ],
          vocab: [
            { w: "とりあえず", r: "toriaezu", m: "for now / to start with" },
            { w: "生", r: "nama", m: "draft beer (short for 生ビール)" },
            { w: "頼む", r: "tanomu", m: "to order, to ask for" },
            { w: "気分", r: "kibun", m: "mood, feeling" },
            { w: "乾杯", r: "kanpai", m: "cheers!" }
          ]
        }
      ],
      advanced: [
        {
          scene: "Running into someone",
          title: "Catching up after two years",
          speakers: [{ name: "Haru", emoji: "🧔" }, { name: "Daiki", emoji: "👨" }],
          note: "This is full-speed native casual: さ as a filler, 〜てる instead of 〜ている, and slang like ドタキャン (last-minute cancel, from 土壇場キャンセル). 「それ褒めてる？」 shows how natives tease with rising intonation alone.",
          lines: [
            { s: 0, t: "うわ、ひさしぶり！全然変わってないじゃん。", r: "Uwa, hisashiburi! Zenzen kawattenai jan.", e: "Whoa, it's been forever! You haven't changed at all." },
            { s: 1, t: "それ褒めてる？で、最近どうなの？", r: "Sore hometeru? De, saikin dō na no?", e: "Is that a compliment? Anyway, how have you been?" },
            { s: 0, t: "いやー、転職してさ、バタバタしてたんだよね。", r: "Iyā, tenshoku shite sa, batabata shitetan da yo ne.", e: "Man, I changed jobs, so things have been hectic." },
            { s: 1, t: "え、マジで？どこ行ったの？", r: "E, maji de? Doko itta no?", e: "Wait, seriously? Where did you go?" },
            { s: 0, t: "ベンチャー。給料ちょっと下がったけど、やりがいはある。", r: "Benchā. Kyūryō chotto sagatta kedo, yarigai wa aru.", e: "A startup. The pay dropped a bit, but the work is rewarding." },
            { s: 1, t: "へえ、思い切ったね。前の会社、激務だったもんね。", r: "Hē, omoikitta ne. Mae no kaisha, gekimu datta mon ne.", e: "Wow, bold move. Your old company worked you to the bone, after all." },
            { s: 0, t: "そうそう。終電帰りが当たり前みたいな。今は定時で帰れてる。", r: "Sōsō. Shūden-gaeri ga atarimae mitai na. Ima wa teiji de kaereteru.", e: "Exactly. Catching the last train home was just normal. Now I actually leave on time." },
            { s: 1, t: "最高じゃん。じゃあ今度こそ飲み行けるね。", r: "Saikō jan. Jā kondo koso nomi ikeru ne.", e: "Living the dream. So this time we can actually go for drinks." },
            { s: 0, t: "行こ行こ。今度こそドタキャンすんなよ？", r: "Ikō ikō. Kondo koso dotakyan sunna yo?", e: "Let's do it. And no bailing at the last minute this time, got it?" }
          ],
          vocab: [
            { w: "転職", r: "tenshoku", m: "changing jobs" },
            { w: "バタバタ", r: "batabata", m: "hectic, running around" },
            { w: "やりがい", r: "yarigai", m: "sense of fulfillment (in work)" },
            { w: "激務", r: "gekimu", m: "brutal workload" },
            { w: "終電", r: "shūden", m: "the last train" },
            { w: "ドタキャン", r: "dotakyan", m: "cancelling at the last minute (slang)" }
          ]
        },
        {
          scene: "Late-night call",
          title: "Venting about a coworker",
          speakers: [{ name: "Rin", emoji: "👩‍🦱" }, { name: "Nao", emoji: "🧑‍🦰" }],
          note: "「それはないわ」 is the native way to say \"that's just wrong / not okay.\" カチンとくる is the sound-symbolic way to say something ticked you off — Japanese is full of these onomatopoeic feelings.",
          lines: [
            { s: 0, t: "ちょっと聞いてよ。今日もまた例の先輩にやられたんだけど。", r: "Chotto kiite yo. Kyō mo mata rei no senpai ni yararetan da kedo.", e: "Listen to this. That senpai got me again today." },
            { s: 1, t: "え、また？今度は何されたの？", r: "E, mata? Kondo wa nani sareta no?", e: "What, again? What did they do this time?" },
            { s: 0, t: "自分のミスなのに、こっちのせいにされた。しかも部長の前で。", r: "Jibun no misu na no ni, kocchi no sei ni sareta. Shikamo buchō no mae de.", e: "It was their mistake, but they pinned it on me. In front of the department head, no less." },
            { s: 1, t: "うわ、それはないわー。", r: "Uwa, sore wa nai wā.", e: "Ugh, that is so not okay." },
            { s: 0, t: "でしょ？さすがにカチンときて、メールの履歴見せたけど。", r: "Desho? Sasuga ni kachin to kite, mēru no rireki miseta kedo.", e: "Right? That one genuinely ticked me off, so I showed the email history." },
            { s: 1, t: "おお、やるじゃん。で、部長は？", r: "Ō, yaru jan. De, buchō wa?", e: "Ooh, look at you. And the department head?" },
            { s: 0, t: "一応わかってくれたっぽい。先輩は気まずそうにしてたけど。", r: "Ichiō wakatte kuretappoi. Senpai wa kimazusō ni shiteta kedo.", e: "He seemed to get it, more or less. The senpai looked pretty awkward, though." },
            { s: 1, t: "当然でしょ。まあ、今日は飲んで忘れな。", r: "Tōzen desho. Mā, kyō wa nonde wasurena.", e: "As they should. Anyway — tonight, drink up and forget about it." }
          ],
          vocab: [
            { w: "〜のせいにする", r: "~no sei ni suru", m: "to blame (something) on" },
            { w: "カチンとくる", r: "kachin to kuru", m: "to get ticked off (onomatopoeia)" },
            { w: "履歴", r: "rireki", m: "history, log (emails, chats)" },
            { w: "気まずい", r: "kimazui", m: "awkward (between people)" },
            { w: "〜っぽい", r: "~ppoi", m: "seems like / -ish (casual)" }
          ]
        },
        {
          scene: "Over coffee",
          title: "Apartment hunting decisions",
          speakers: [{ name: "Sora", emoji: "🧑‍🎨" }, { name: "Kai", emoji: "👨‍🔧" }],
          note: "エグい started as Kansai slang for \"brutal\" and is now everywhere among younger speakers — it can mean horribly bad or insanely good depending on context. 「ほんとそれ」 is the standard \"so true.\"",
          lines: [
            { s: 0, t: "引っ越し先、決まった？", r: "Hikkoshi-saki, kimatta?", e: "Did you decide on your new place?" },
            { s: 1, t: "それがさー、めっちゃ迷ってて。駅近の1Kか、ちょっと歩く1LDKか。", r: "Sore ga sā, meccha mayottete. Ekichika no wan-kē ka, chotto aruku wan-erudīkē ka.", e: "About that — I'm so torn. A 1K right by the station, or a 1LDK that's a bit of a walk." },
            { s: 0, t: "家賃どんくらい違うの？", r: "Yachin don kurai chigau no?", e: "How different is the rent?" },
            { s: 1, t: "1LDKのほうが1万高い。でも在宅多いから、広さは正義なんだよな。", r: "Wan-erudīkē no hō ga ichiman takai. Demo zaitaku ōi kara, hirosa wa seigi nan da yo na.", e: "The 1LDK is 10,000 yen more. But I work from home a lot, so space is justice." },
            { s: 0, t: "なら答え出てんじゃん。", r: "Nara kotae detenjan.", e: "Then you already have your answer." },
            { s: 1, t: "まあね。あとは初期費用がエグいってだけ。", r: "Mā ne. Ato wa shoki hiyō ga egui tte dake.", e: "I guess. The only thing is the upfront costs are insane." },
            { s: 0, t: "敷金礼金ってやつね。日本の闇だわ。", r: "Shikikin reikin tte yatsu ne. Nihon no yami da wa.", e: "Ah, the deposit and key money thing. The dark side of Japan." },
            { s: 1, t: "ほんとそれ。でもまあ、思い切るわ。来月から広い部屋だから、遊び来てよ。", r: "Honto sore. Demo mā, omoikiru wa. Raigetsu kara hiroi heya da kara, asobi kite yo.", e: "So true. But yeah, I'm going for it. I'll have a big place from next month, so come hang out." },
            { s: 0, t: "行く行く。引っ越しそばよろしく。", r: "Iku iku. Hikkoshi soba yoroshiku.", e: "Absolutely. I expect moving-day soba." }
          ],
          vocab: [
            { w: "駅近", r: "ekichika", m: "close to the station" },
            { w: "家賃", r: "yachin", m: "rent" },
            { w: "在宅", r: "zaitaku", m: "working from home" },
            { w: "エグい", r: "egui", m: "insane, brutal (slang)" },
            { w: "敷金・礼金", r: "shikikin / reikin", m: "security deposit & key money" },
            { w: "ほんとそれ", r: "honto sore", m: "\"so true\" (casual agreement)" }
          ]
        }
      ]
    }
  },

  ko: {
    label: "Korean",
    voice: "ko-KR",
    levels: {
      beginner: [
        {
          scene: "At a café",
          title: "Ordering an iced americano",
          speakers: [{ name: "Staff", emoji: "☕" }, { name: "You", emoji: "🙂" }],
          note: "Korean café staff ask 드시고 가세요? (\"will you eat/drink here?\") using the honorific verb 드시다. Answering 포장이요 (\"takeout, please\") with the soft -이요 ending is exactly how natives reply.",
          lines: [
            { s: 0, t: "어서 오세요! 주문하시겠어요?", r: "eoseo oseyo! jumunhasigesseoyo?", e: "Welcome! Would you like to order?" },
            { s: 1, t: "네, 아이스 아메리카노 한 잔 주세요.", r: "ne, aiseu amerikano han jan juseyo.", e: "Yes, one iced americano, please." },
            { s: 0, t: "사이즈는 어떻게 해 드릴까요?", r: "saijeu-neun eotteoke hae deurilkkayo?", e: "What size would you like?" },
            { s: 1, t: "큰 거로 주세요.", r: "keun geo-ro juseyo.", e: "The large one, please." },
            { s: 0, t: "드시고 가세요?", r: "deusigo gaseyo?", e: "Will you be drinking it here?" },
            { s: 1, t: "아니요, 포장이요.", r: "aniyo, pojang-iyo.", e: "No, to go, please." },
            { s: 0, t: "네, 4,500원입니다.", r: "ne, sacheon-obaek won-imnida.", e: "Okay, that's 4,500 won." },
            { s: 1, t: "카드로 할게요.", r: "kadeu-ro halgeyo.", e: "I'll pay by card." },
            { s: 0, t: "결제 도와드렸습니다. 맛있게 드세요!", r: "gyeolje dowadeuryeotseumnida. masitge deuseyo!", e: "You're all set. Enjoy your drink!" }
          ],
          vocab: [
            { w: "주문", r: "jumun", m: "order" },
            { w: "포장", r: "pojang", m: "takeout / to go" },
            { w: "한 잔", r: "han jan", m: "one cup / one glass" },
            { w: "카드로", r: "kadeu-ro", m: "by card (-로 = by means of)" },
            { w: "맛있게 드세요", r: "masitge deuseyo", m: "\"enjoy your meal/drink\"" }
          ]
        },
        {
          scene: "On the street",
          title: "Finding the subway station",
          speakers: [{ name: "Traveler", emoji: "🧳" }, { name: "Local", emoji: "🚶" }],
          note: "저기요 is the all-purpose way to get a stranger's attention. 길 좀 물어볼게요 (\"let me ask you about the way\") with the softener 좀 is the polite, natural opener — much smoother than launching straight into the question.",
          lines: [
            { s: 0, t: "저기요, 길 좀 물어볼게요.", r: "jeogiyo, gil jom mureobolgeyo.", e: "Excuse me, may I ask for directions?" },
            { s: 1, t: "네, 말씀하세요.", r: "ne, malsseumhaseyo.", e: "Sure, go ahead." },
            { s: 0, t: "지하철역이 어디예요?", r: "jihacheol-yeogi eodiyeyo?", e: "Where is the subway station?" },
            { s: 1, t: "이 길로 쭉 가세요.", r: "i gil-lo jjuk gaseyo.", e: "Go straight down this road." },
            { s: 0, t: "쭉이요?", r: "jjuk-iyo?", e: "Straight ahead?" },
            { s: 1, t: "네, 그리고 편의점에서 왼쪽으로 가면 바로 보여요.", r: "ne, geurigo pyeonuijeom-eseo oenjjok-euro gamyeon baro boyeoyo.", e: "Yes, then turn left at the convenience store and you'll see it right away." },
            { s: 0, t: "걸어서 얼마나 걸려요?", r: "georeoseo eolmana geollyeoyo?", e: "How long does it take on foot?" },
            { s: 1, t: "한 5분이요.", r: "han o-bun-iyo.", e: "About five minutes." },
            { s: 0, t: "감사합니다!", r: "gamsahamnida!", e: "Thank you!" },
            { s: 1, t: "네, 조심히 가세요.", r: "ne, josimhi gaseyo.", e: "Sure, get there safely." }
          ],
          vocab: [
            { w: "저기요", r: "jeogiyo", m: "excuse me (getting attention)" },
            { w: "쭉", r: "jjuk", m: "straight ahead" },
            { w: "편의점", r: "pyeonuijeom", m: "convenience store" },
            { w: "왼쪽", r: "oenjjok", m: "left side" },
            { w: "얼마나 걸려요?", r: "eolmana geollyeoyo?", m: "how long does it take?" }
          ]
        },
        {
          scene: "A language exchange meetup",
          title: "Meeting someone new",
          speakers: [{ name: "Minji", emoji: "👩" }, { name: "Yuna", emoji: "👧" }],
          note: "이름이 어떻게 되세요? (\"how does your name go?\") is the polite way to ask a name — more natural than the textbook 이름이 뭐예요? when speaking to someone you just met. Note how 씨 attaches to first names, never to bare surnames.",
          lines: [
            { s: 0, t: "안녕하세요! 처음 뵙겠습니다.", r: "annyeonghaseyo! cheoeum boepgetseumnida.", e: "Hello! It's a pleasure to meet you." },
            { s: 1, t: "안녕하세요, 저는 민지예요. 이름이 어떻게 되세요?", r: "annyeonghaseyo, jeoneun Minji-yeyo. ireum-i eotteoke doeseyo?", e: "Hi, I'm Minji. May I ask your name?" },
            { s: 0, t: "저는 유나예요. 만나서 반가워요.", r: "jeoneun Yuna-yeyo. mannaseo bangawoyo.", e: "I'm Yuna. Nice to meet you." },
            { s: 1, t: "유나 씨는 어디에서 왔어요?", r: "Yuna ssi-neun eodieseo wasseoyo?", e: "Where are you from, Yuna?" },
            { s: 0, t: "부산에서 왔어요. 민지 씨는 서울 사람이에요?", r: "Busan-eseo wasseoyo. Minji ssi-neun Seoul saram-ieyo?", e: "I'm from Busan. Are you from Seoul, Minji?" },
            { s: 1, t: "네, 서울에서 태어나고 자랐어요.", r: "ne, Seoul-eseo taeeonago jarasseoyo.", e: "Yes, born and raised in Seoul." },
            { s: 0, t: "와, 그럼 맛집 많이 아시겠네요.", r: "wa, geureom matjip mani asigenneyo.", e: "Oh, then you must know a lot of great restaurants." },
            { s: 1, t: "그럼요! 다음에 같이 가요.", r: "geureomyo! daeum-e gachi gayo.", e: "Of course! Let's go together sometime." }
          ],
          vocab: [
            { w: "처음 뵙겠습니다", r: "cheoeum boepgetseumnida", m: "formal \"nice to meet you\"" },
            { w: "이름이 어떻게 되세요?", r: "ireumi eotteoke doeseyo?", m: "polite way to ask a name" },
            { w: "맛집", r: "matjip", m: "famous/delicious restaurant" },
            { w: "태어나다", r: "taeeonada", m: "to be born" },
            { w: "다음에", r: "daeum-e", m: "next time" }
          ]
        }
      ],
      intermediate: [
        {
          scene: "Texting a friend",
          title: "Café plans in Hongdae",
          speakers: [{ name: "Jihyun", emoji: "👩" }, { name: "Sua", emoji: "👧" }],
          note: "This is 반말 (casual speech) between close friends. 미쳤다 (\"crazy\") is high praise in slang — 분위기 미쳤대 means \"I heard the vibe is unreal.\" 콜! (from English \"call\") is the standard way to say \"I'm in / deal!\"",
          lines: [
            { s: 0, t: "야, 토요일에 뭐 해?", r: "ya, toyoil-e mwo hae?", e: "Hey, what are you doing Saturday?" },
            { s: 1, t: "아직 약속 없는데, 왜?", r: "ajik yaksok eomneunde, wae?", e: "No plans yet, why?" },
            { s: 0, t: "홍대에 새로 생긴 카페 가 보자. 분위기 미쳤대.", r: "Hongdae-e saero saenggin kape ga boja. bunwigi michyeotdae.", e: "Let's check out that new café in Hongdae. I hear the vibe is unreal." },
            { s: 1, t: "오, 좋다. 근데 주말엔 사람 많지 않아?", r: "o, jota. geunde jumal-en saram manchi ana?", e: "Ooh, nice. But isn't it packed on weekends?" },
            { s: 0, t: "그래서 오픈 시간 맞춰 가려고. 11시 어때?", r: "geuraeseo opeun sigan matchwo garyeogo. yeolhan-si eottae?", e: "That's why I want to get there right at opening. How's 11?" },
            { s: 1, t: "콜! 끝나고 떡볶이도 먹자.", r: "kol! kkeunnago tteokbokki-do meokja.", e: "Deal! And let's get tteokbokki afterwards." },
            { s: 0, t: "역시 너랑 나랑 잘 통한다니까.", r: "yeoksi neorang narang jal tonghandanikka.", e: "See, this is exactly why we click." },
            { s: 1, t: "늦지 마. 지난번처럼 30분 늦으면 진짜 화낼 거야.", r: "neutji ma. jinanbeon-cheoreom samsip-bun neujeumyeon jinjja hwanael geoya.", e: "Don't be late. If you show up 30 minutes late like last time, I'm seriously going to be mad." }
          ],
          vocab: [
            { w: "약속", r: "yaksok", m: "plans, appointment" },
            { w: "분위기", r: "bunwigi", m: "vibe, atmosphere" },
            { w: "미쳤다", r: "michyeotda", m: "\"crazy (good)\" — slang praise" },
            { w: "콜!", r: "kol!", m: "\"deal! / I'm in!\"" },
            { w: "통하다", r: "tonghada", m: "to click, get along well" }
          ]
        },
        {
          scene: "Lunch break",
          title: "That drama ending",
          speakers: [{ name: "Hana", emoji: "👩‍🦰" }, { name: "Juwon", emoji: "🧑" }],
          note: "실화야? (\"is that a true story?\") is slang for \"is this real life?\" 인생 드라마 (\"life drama\") means your all-time favorite — Koreans use 인생- as a prefix for the best-ever of anything: 인생 영화, 인생 맛집.",
          lines: [
            { s: 0, t: "어제 마지막 회 봤어?", r: "eoje majimak hoe bwasseo?", e: "Did you watch the final episode yesterday?" },
            { s: 1, t: "봤지! 그 결말 실화야? 나 진짜 울 뻔했잖아.", r: "bwatji! geu gyeolmal silhwaya? na jinjja ul ppeonhaetjana.", e: "Of course! Was that ending for real? I almost cried." },
            { s: 0, t: "나는 울었어. 그 고백 장면에서 완전 무너졌어.", r: "naneun ureosseo. geu gobaek jangmyeon-eseo wanjeon muneojyeosseo.", e: "I actually did cry. That confession scene completely destroyed me." },
            { s: 1, t: "그치? 배우들 연기 진짜 잘하더라.", r: "geuchi? baeu-deul yeongi jinjja jalhadeora.", e: "Right? The actors were so good." },
            { s: 0, t: "시즌 2 나왔으면 좋겠다.", r: "sijeun i nawasseumyeon joketda.", e: "I really hope they make a season two." },
            { s: 1, t: "시청률 잘 나왔으니까 나오지 않을까?", r: "sicheongnyul jal nawasseunikka naoji aneulkka?", e: "The ratings were great, so they probably will, don't you think?" },
            { s: 0, t: "그동안 뭐 보지? 추천 좀 해 줘.", r: "geudongan mwo boji? chucheon jom hae jwo.", e: "What do I watch in the meantime? Give me some recommendations." },
            { s: 1, t: "내 인생 드라마 리스트 보내 줄게. 실패 없음.", r: "nae insaeng deurama riseuteu bonae julge. silpae eopseum.", e: "I'll send you my all-time drama list. Zero misses." }
          ],
          vocab: [
            { w: "마지막 회", r: "majimak hoe", m: "final episode" },
            { w: "실화야?", r: "silhwaya?", m: "\"is this real?\" (slang)" },
            { w: "고백", r: "gobaek", m: "love confession" },
            { w: "시청률", r: "sicheongnyul", m: "viewer ratings" },
            { w: "인생 드라마", r: "insaeng deurama", m: "all-time favorite drama" }
          ]
        },
        {
          scene: "5:50 PM at the office",
          title: "Samgyeopsal after work",
          speakers: [{ name: "Dongha", emoji: "👨‍💻" }, { name: "Seojin", emoji: "👩‍💻" }],
          note: "말도 마 (\"don't even say it\") is the perfect response when someone mentions something exhausting. Korean work culture pairs grilled pork belly with soju after a rough day — 오늘 같은 날엔 고기지 (\"a day like this calls for meat\") is a whole mood.",
          lines: [
            { s: 0, t: "퇴근하고 뭐 해? 저녁 같이 먹을래?", r: "toegeunhago mwo hae? jeonyeok gachi meogeullae?", e: "What are you doing after work? Want to grab dinner together?" },
            { s: 1, t: "좋지. 뭐 먹을까?", r: "jochi. mwo meogeulkka?", e: "I'm down. What should we eat?" },
            { s: 0, t: "삼겹살 어때? 회사 앞에 잘하는 집 있어.", r: "samgyeopsal eottae? hoesa ap-e jalhaneun jip isseo.", e: "How about samgyeopsal? There's a great place right in front of the office." },
            { s: 1, t: "완전 좋아. 오늘 같은 날엔 고기지.", r: "wanjeon joa. oneul gateun nal-en gogiji.", e: "Perfect. A day like today calls for meat." },
            { s: 0, t: "그러니까. 오늘 회의 세 개였잖아.", r: "geureonikka. oneul hoeui se gae-yeotjana.", e: "Seriously. We had three meetings today." },
            { s: 1, t: "말도 마. 소주도 한 병 시키자.", r: "maldo ma. soju-do han byeong sikija.", e: "Don't even get me started. Let's order a bottle of soju too." },
            { s: 0, t: "너 내일 출근 안 해?", r: "neo naeil chulgeun an hae?", e: "Don't you have work tomorrow?" },
            { s: 1, t: "한 병만 마시면 괜찮아. 아마도.", r: "han byeong-man masimyeon gwaenchana. amado.", e: "One bottle is fine. Probably." }
          ],
          vocab: [
            { w: "퇴근", r: "toegeun", m: "leaving work" },
            { w: "삼겹살", r: "samgyeopsal", m: "grilled pork belly" },
            { w: "말도 마", r: "maldo ma", m: "\"don't even get me started\"" },
            { w: "시키다", r: "sikida", m: "to order (food/drinks)" },
            { w: "출근", r: "chulgeun", m: "going to work" }
          ]
        }
      ],
      advanced: [
        {
          scene: "Running into someone",
          title: "Two years later",
          speakers: [{ name: "Taeyang", emoji: "🧔" }, { name: "Minho", emoji: "👨" }],
          note: "Loaded with real slang: 헐 (no way!), 칼퇴 (\"knife-leave\" — clocking out the second work ends), and 잠수 타다 (\"to dive underwater\" — to ghost someone). 뭐 하고 살아? (\"what are you doing with your life?\") is the standard catching-up question between friends.",
          lines: [
            { s: 0, t: "헐, 이게 누구야! 얼마 만이야?", r: "heol, ige nuguya! eolma maniya?", e: "No way, look who it is! How long has it been?" },
            { s: 1, t: "진짜 오랜만이다. 한 2년 됐나?", r: "jinjja oraenmanida. han i-nyeon dwaenna?", e: "It's seriously been forever. Like two years?" },
            { s: 0, t: "그러게. 너 요즘 뭐 하고 살아?", r: "geureoge. neo yojeum mwo hago sara?", e: "I know, right. So what have you been up to?" },
            { s: 1, t: "나 이직했어. 스타트업으로 옮겼는데 정신없긴 한데 재밌어.", r: "na ijikaesseo. seutateueop-euro omgyeonneunde jeongsin-eopgin hande jaemisseo.", e: "I switched jobs. Moved to a startup — it's chaotic, but it's fun." },
            { s: 0, t: "오, 대박. 전 회사 맨날 야근이었잖아.", r: "o, daebak. jeon hoesa maennal yageun-ieotjana.", e: "Whoa, awesome. Your old company had you on overtime every single night." },
            { s: 1, t: "말도 마. 막차 타는 게 일상이었지. 지금은 칼퇴해.", r: "maldo ma. makcha taneun ge ilsang-ieotji. jigeum-eun kaltoehae.", e: "Don't remind me. Catching the last train was my daily routine. Now I'm out the door on the dot." },
            { s: 0, t: "부럽다, 야. 그럼 이제 술 한잔할 시간도 있겠네?", r: "bureopda, ya. geureom ije sul hanjanhal sigan-do itgenne?", e: "I'm jealous. So now you actually have time for a drink?" },
            { s: 1, t: "당연하지. 이번 주말 어때? 이번엔 잠수 타지 마라?", r: "dangyeonhaji. ibeon jumal eottae? ibeon-en jamsu taji mara?", e: "Obviously. How about this weekend? And don't ghost me this time, okay?" }
          ],
          vocab: [
            { w: "헐", r: "heol", m: "\"no way!\" (slang exclamation)" },
            { w: "이직", r: "ijik", m: "changing jobs" },
            { w: "야근", r: "yageun", m: "working overtime" },
            { w: "칼퇴", r: "kaltoe", m: "leaving the second work ends (slang)" },
            { w: "잠수 타다", r: "jamsu tada", m: "to ghost someone (slang)" },
            { w: "대박", r: "daebak", m: "awesome / jackpot" }
          ]
        },
        {
          scene: "Late-night call",
          title: "That coworker crossed a line",
          speakers: [{ name: "Yerin", emoji: "👩‍🦱" }, { name: "Sumin", emoji: "🧑‍🦰" }],
          note: "선 넘다 (\"to cross the line\") is essential modern slang. 쌤통이다 means \"serves them right.\" And when a Korean friend is upset, the prescription is always the same: 치맥 — chicken and beer.",
          lines: [
            { s: 0, t: "나 오늘 진짜 어이없는 일 있었다?", r: "na oneul jinjja eoieomneun il isseotda?", e: "You will not believe what happened to me today." },
            { s: 1, t: "뭔데? 또 그 선배야?", r: "mwonde? tto geu seonbae-ya?", e: "What is it? That sunbae again?" },
            { s: 0, t: "어. 자기가 실수해 놓고 내 탓으로 돌렸어. 그것도 팀장님 앞에서.", r: "eo. jagiga silsuhae noko nae tas-euro dollyeosseo. geugeotdo timjangnim ap-eseo.", e: "Yeah. They made the mistake and then pinned it on me. In front of the team lead, no less." },
            { s: 1, t: "와, 선 넘었네. 그래서 가만히 있었어?", r: "wa, seon neomeonne. geuraeseo gamanhi isseosseo?", e: "Wow, that crosses a line. So did you just take it?" },
            { s: 0, t: "아니, 나도 참다 참다 메일 기록 다 보여 줬지.", r: "ani, nado chamda chamda meil girok da boyeo jwotji.", e: "No — I'd held it in long enough, so I showed the entire email thread." },
            { s: 1, t: "잘했네, 잘했어. 팀장님 반응은?", r: "jalhaenne, jalhaesseo. timjangnim baneung-eun?", e: "Good for you, seriously. And the team lead's reaction?" },
            { s: 0, t: "다행히 상황 파악하신 것 같아. 그 선배는 머쓱해하더라.", r: "dahaenghi sanghwang paakasin geot gata. geu seonbae-neun meosseukaehadeora.", e: "Thankfully he seemed to figure out what was going on. The sunbae looked pretty sheepish." },
            { s: 1, t: "쌤통이다. 야, 오늘은 치맥 먹으면서 다 잊어버려.", r: "ssaemtong-ida. ya, oneul-eun chimaek meogeumyeonseo da ijeobeoryeo.", e: "Serves them right. Hey — tonight it's chicken and beer, forget all about it." }
          ],
          vocab: [
            { w: "어이없다", r: "eoieopda", m: "absurd, unbelievable" },
            { w: "탓으로 돌리다", r: "tas-euro dollida", m: "to shift the blame onto" },
            { w: "선 넘다", r: "seon neomda", m: "to cross the line (slang)" },
            { w: "머쓱하다", r: "meosseukada", m: "sheepish, embarrassed" },
            { w: "치맥", r: "chimaek", m: "chicken + beer (chi-maek)" },
            { w: "쌤통이다", r: "ssaemtong-ida", m: "\"serves them right\"" }
          ]
        },
        {
          scene: "Over coffee",
          title: "The moving dilemma",
          speakers: [{ name: "Jiho", emoji: "🧑‍🎨" }, { name: "Woojin", emoji: "👨‍🔧" }],
          note: "역세권 (\"station-area zone\") is how everyone describes apartments near a subway stop. 지르다 means to pull the trigger on a big purchase. Bringing toilet paper or detergent to a 집들이 (housewarming) is real Korean custom — it symbolizes things unrolling smoothly.",
          lines: [
            { s: 0, t: "이사 갈 집은 정했어?", r: "isa gal jib-eun jeonghaesseo?", e: "Did you decide on your new place?" },
            { s: 1, t: "아직. 역세권 원룸이랑 좀 걸어야 되는 투룸 사이에서 고민 중이야.", r: "ajik. yeoksegwon wollum-irang jom georeoya doeneun turum saieseo gomin jung-iya.", e: "Not yet. I'm torn between a studio near the station and a two-room that's a bit of a walk." },
            { s: 0, t: "월세 차이 얼마나 나는데?", r: "wolse chai eolmana naneunde?", e: "How big is the rent difference?" },
            { s: 1, t: "투룸이 10만 원 더 비싸. 근데 재택이 많아서 넓은 게 답인 것 같기도 하고.", r: "turum-i sim-man won deo bissa. geunde jaetaek-i manaseo neolbeun ge dab-in geot gatgido hago.", e: "The two-room is 100,000 won more. But I work from home a lot, so maybe space is the answer." },
            { s: 0, t: "그럼 답 나왔네, 뭘 고민해.", r: "geureom dap nawanne, mwol gominhae.", e: "Then you have your answer — what is there to agonize over?" },
            { s: 1, t: "그치. 근데 보증금이 장난 아니라서.", r: "geuchi. geunde bojeunggeum-i jangnan anira-seo.", e: "True. It's just that the deposit is no joke." },
            { s: 0, t: "아, 보증금? 한국 자취의 최종 보스지.", r: "a, bojeunggeum? hanguk jachwi-ui choejong boseu-ji.", e: "Ah, the deposit? The final boss of living alone in Korea." },
            { s: 1, t: "진짜 그래. 그래도 지르려고. 다음 달부터 넓은 집이니까 집들이 와.", r: "jinjja geurae. geuraedo jireuryeogo. daeum dal-buteo neolbeun jib-inikka jipdeuri wa.", e: "So true. But I'm pulling the trigger. Bigger place from next month, so come to my housewarming." },
            { s: 0, t: "콜. 휴지 사 갈게.", r: "kol. hyuji sa galge.", e: "Deal. I'll bring the toilet paper." }
          ],
          vocab: [
            { w: "역세권", r: "yeoksegwon", m: "area near a subway station" },
            { w: "월세", r: "wolse", m: "monthly rent" },
            { w: "보증금", r: "bojeunggeum", m: "housing deposit" },
            { w: "재택", r: "jaetaek", m: "working from home" },
            { w: "지르다", r: "jireuda", m: "to splurge / pull the trigger (slang)" },
            { w: "집들이", r: "jipdeuri", m: "housewarming party" }
          ]
        }
      ]
    }
  }
};
