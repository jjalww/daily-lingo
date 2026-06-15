// DailyLingo conversation data
// Each line: s = speaker index (0 = other person, 1 = you), t = native text, r = reading, e = English
// 180 native-level conversations: 30 per level (Beginner/Intermediate/Advanced) for Japanese & Korean.

const DATA = {
  "ja": {
    "label": "Japanese",
    "voice": "ja-JP",
    "levels": {
      "beginner": [
        {
          "scene": "At a cafe counter",
          "title": "Coffee to Go",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "When you want it for takeout, just say テイクアウトで (teikuauto de) or 持ち帰りで (mochikaeri de). Staff almost always ask 店内で召し上がりますか? (eat in?) so leading with one of these saves a step.",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませ。ご注文はお決まりですか?",
              "r": "Irasshaimase. Go-chūmon wa o-kimari desu ka?",
              "e": "Welcome! Are you ready to order?"
            },
            {
              "s": 1,
              "t": "あ、ホットコーヒーを一つください。",
              "r": "A, hotto kōhī o hitotsu kudasai.",
              "e": "Oh, one hot coffee, please."
            },
            {
              "s": 0,
              "t": "サイズはいかがなさいますか?",
              "r": "Saizu wa ikaga nasaimasu ka?",
              "e": "What size would you like?"
            },
            {
              "s": 1,
              "t": "Mサイズでお願いします。",
              "r": "Emu saizu de o-negai shimasu.",
              "e": "A medium, please."
            },
            {
              "s": 0,
              "t": "かしこまりました。店内でお召し上がりですか?",
              "r": "Kashikomarimashita. Tennai de o-meshiagari desu ka?",
              "e": "Got it. Will you be drinking it here?"
            },
            {
              "s": 1,
              "t": "いえ、持ち帰りでお願いします。",
              "r": "Ie, mochikaeri de o-negai shimasu.",
              "e": "No, to go, please."
            },
            {
              "s": 0,
              "t": "ありがとうございます。380円になります。",
              "r": "Arigatō gozaimasu. Sanbyaku-hachijū en ni narimasu.",
              "e": "Thank you. That'll be 380 yen."
            },
            {
              "s": 1,
              "t": "はい、これでお願いします。",
              "r": "Hai, kore de o-negai shimasu.",
              "e": "Here you go."
            },
            {
              "s": 0,
              "t": "少々お待ちください。すぐにお作りします。",
              "r": "Shōshō o-machi kudasai. Sugu ni o-tsukuri shimasu.",
              "e": "One moment please. I'll make it right away."
            }
          ],
          "vocab": [
            {
              "w": "ご注文",
              "r": "go-chūmon",
              "m": "order (polite)"
            },
            {
              "w": "サイズ",
              "r": "saizu",
              "m": "size"
            },
            {
              "w": "持ち帰り",
              "r": "mochikaeri",
              "m": "takeout / to go"
            },
            {
              "w": "店内",
              "r": "tennai",
              "m": "inside the store / eat in"
            },
            {
              "w": "お願いします",
              "r": "o-negai shimasu",
              "m": "please (when requesting)"
            },
            {
              "w": "少々お待ちください",
              "r": "shōshō o-machi kudasai",
              "m": "please wait a moment"
            }
          ]
        },
        {
          "scene": "On a street corner",
          "title": "Where's the Station?",
          "speakers": [
            {
              "name": "Local",
              "emoji": "🧍"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "Start with すみません (sumimasen) to flag a stranger politely — it works as both 'excuse me' and 'sorry.' Ending a question with ~でしょうか? instead of ~ですか? sounds a touch softer and more polite to someone you don't know.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、ちょっとお聞きしてもいいですか?",
              "r": "Sumimasen, chotto o-kiki shite mo ii desu ka?",
              "e": "Excuse me, may I ask you something?"
            },
            {
              "s": 0,
              "t": "はい、どうぞ。",
              "r": "Hai, dōzo.",
              "e": "Sure, go ahead."
            },
            {
              "s": 1,
              "t": "駅はどこでしょうか?",
              "r": "Eki wa doko deshō ka?",
              "e": "Where is the station?"
            },
            {
              "s": 0,
              "t": "ああ、駅ですね。この道をまっすぐ行ってください。",
              "r": "Ā, eki desu ne. Kono michi o massugu itte kudasai.",
              "e": "Ah, the station. Go straight down this road."
            },
            {
              "s": 1,
              "t": "まっすぐですね。それから?",
              "r": "Massugu desu ne. Sore kara?",
              "e": "Straight, got it. And then?"
            },
            {
              "s": 0,
              "t": "二つ目の信号を右に曲がってください。",
              "r": "Futatsume no shingō o migi ni magatte kudasai.",
              "e": "Turn right at the second traffic light."
            },
            {
              "s": 1,
              "t": "ここから近いですか?",
              "r": "Koko kara chikai desu ka?",
              "e": "Is it close from here?"
            },
            {
              "s": 0,
              "t": "はい、歩いて五分くらいですよ。",
              "r": "Hai, aruite go-fun kurai desu yo.",
              "e": "Yes, about a five-minute walk."
            },
            {
              "s": 1,
              "t": "わかりました。ありがとうございます!",
              "r": "Wakarimashita. Arigatō gozaimasu!",
              "e": "Got it. Thank you so much!"
            },
            {
              "s": 0,
              "t": "いえいえ、気をつけて。",
              "r": "Ie ie, ki o tsukete.",
              "e": "No problem — take care."
            }
          ],
          "vocab": [
            {
              "w": "駅",
              "r": "eki",
              "m": "station"
            },
            {
              "w": "まっすぐ",
              "r": "massugu",
              "m": "straight (ahead)"
            },
            {
              "w": "信号",
              "r": "shingō",
              "m": "traffic light"
            },
            {
              "w": "曲がる",
              "r": "magaru",
              "m": "to turn"
            },
            {
              "w": "近い",
              "r": "chikai",
              "m": "near / close"
            },
            {
              "w": "気をつけて",
              "r": "ki o tsukete",
              "m": "take care / be careful"
            }
          ]
        },
        {
          "scene": "At the office Monday morning",
          "title": "Monday Small Talk",
          "speakers": [
            {
              "name": "Tanaka",
              "emoji": "👔"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "週末どうでしたか? (How was your weekend?) is the standard Monday opener. Notice ゴロゴロする (goro-goro suru) — an onomatopoeia meaning to laze around at home doing nothing; super common and very natural.",
          "lines": [
            {
              "s": 0,
              "t": "おはようございます。週末はどうでしたか?",
              "r": "Ohayō gozaimasu. Shūmatsu wa dō deshita ka?",
              "e": "Good morning. How was your weekend?"
            },
            {
              "s": 1,
              "t": "おはようございます。家でゆっくりしていました。",
              "r": "Ohayō gozaimasu. Ie de yukkuri shite imashita.",
              "e": "Morning. I just relaxed at home."
            },
            {
              "s": 0,
              "t": "いいですね。土曜日は雨でしたからね。",
              "r": "Ii desu ne. Doyōbi wa ame deshita kara ne.",
              "e": "Nice. It was raining on Saturday, after all."
            },
            {
              "s": 1,
              "t": "そうなんですよ。だから一日中ゴロゴロしていました。",
              "r": "Sō nan desu yo. Dakara ichinichijū goro-goro shite imashita.",
              "e": "Right? So I lazed around all day."
            },
            {
              "s": 0,
              "t": "ははは。今日はいい天気ですね。",
              "r": "Hahaha. Kyō wa ii tenki desu ne.",
              "e": "Haha. The weather's nice today, though."
            },
            {
              "s": 1,
              "t": "本当ですね。やっと晴れましたね。",
              "r": "Hontō desu ne. Yatto haremashita ne.",
              "e": "It really is. It finally cleared up."
            },
            {
              "s": 1,
              "t": "田中さんは何かしましたか?",
              "r": "Tanaka-san wa nanika shimashita ka?",
              "e": "Did you do anything, Tanaka?"
            },
            {
              "s": 0,
              "t": "私は子供と公園に行きましたよ。",
              "r": "Watashi wa kodomo to kōen ni ikimashita yo.",
              "e": "I went to the park with my kids."
            },
            {
              "s": 1,
              "t": "いいですね。じゃあ、今週もがんばりましょう。",
              "r": "Ii desu ne. Jā, konshū mo ganbarimashō.",
              "e": "That's lovely. Well, let's do our best this week too."
            }
          ],
          "vocab": [
            {
              "w": "週末",
              "r": "shūmatsu",
              "m": "weekend"
            },
            {
              "w": "ゆっくりする",
              "r": "yukkuri suru",
              "m": "to relax / take it easy"
            },
            {
              "w": "ゴロゴロする",
              "r": "goro-goro suru",
              "m": "to laze around at home"
            },
            {
              "w": "天気",
              "r": "tenki",
              "m": "weather"
            },
            {
              "w": "晴れる",
              "r": "hareru",
              "m": "to clear up (sky)"
            },
            {
              "w": "がんばりましょう",
              "r": "ganbarimashō",
              "m": "let's do our best"
            }
          ]
        },
        {
          "scene": "Texting / chatting with a friend",
          "title": "A New Restaurant Opened",
          "speakers": [
            {
              "name": "Yuki",
              "emoji": "🙋‍♀️"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "オープンした (ōpun shita, 'it opened') is everyday Japanese — borrowed English verbs + する are everywhere. To suggest doing something together, ~ませんか? ('won't you...?') sounds friendlier and more inviting than a flat 行きましょう.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、駅前に新しいお店がオープンしたの、知ってる?",
              "r": "Nē, ekimae ni atarashii o-mise ga ōpun shita no, shitteru?",
              "e": "Hey, did you know a new place opened in front of the station?"
            },
            {
              "s": 1,
              "t": "え、知らなかったです。何のお店ですか?",
              "r": "E, shiranakatta desu. Nan no o-mise desu ka?",
              "e": "Oh, I didn't know! What kind of place is it?"
            },
            {
              "s": 0,
              "t": "イタリアンだよ。すごく人気みたい。",
              "r": "Itarian da yo. Sugoku ninki mitai.",
              "e": "It's Italian. Seems really popular."
            },
            {
              "s": 1,
              "t": "いいですね!今週末、一緒に行きませんか?",
              "r": "Ii desu ne! Konshūmatsu, issho ni ikimasen ka?",
              "e": "Sounds great! Want to go together this weekend?"
            },
            {
              "s": 0,
              "t": "行く行く!土曜日と日曜日、どっちがいい?",
              "r": "Iku iku! Doyōbi to nichiyōbi, dotchi ga ii?",
              "e": "Yes, let's! Saturday or Sunday — which works for you?"
            },
            {
              "s": 1,
              "t": "土曜日のお昼はどうですか?",
              "r": "Doyōbi no o-hiru wa dō desu ka?",
              "e": "How about Saturday at lunchtime?"
            },
            {
              "s": 0,
              "t": "いいね!じゃあ予約しておくね。",
              "r": "Ii ne! Jā yoyaku shite oku ne.",
              "e": "Perfect! I'll make a reservation then."
            },
            {
              "s": 1,
              "t": "ありがとう。楽しみにしています!",
              "r": "Arigatō. Tanoshimi ni shite imasu!",
              "e": "Thanks. I'm looking forward to it!"
            },
            {
              "s": 0,
              "t": "私も!お腹すかせて行こうね。",
              "r": "Watashi mo! O-naka sukasete ikō ne.",
              "e": "Me too! Let's go hungry, okay?"
            }
          ],
          "vocab": [
            {
              "w": "オープンする",
              "r": "ōpun suru",
              "m": "to open (a shop)"
            },
            {
              "w": "人気",
              "r": "ninki",
              "m": "popularity / popular"
            },
            {
              "w": "一緒に",
              "r": "issho ni",
              "m": "together"
            },
            {
              "w": "予約する",
              "r": "yoyaku suru",
              "m": "to make a reservation"
            },
            {
              "w": "楽しみにする",
              "r": "tanoshimi ni suru",
              "m": "to look forward to"
            },
            {
              "w": "お腹がすく",
              "r": "o-naka ga suku",
              "m": "to get hungry"
            }
          ]
        },
        {
          "scene": "Chatting about a TV drama",
          "title": "The Drama Finale",
          "speakers": [
            {
              "name": "Mika",
              "emoji": "📺"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "最終回 (saishūkai) is THE word for a season/series finale. To avoid spoilers say ネタバレ (netabare, 'spoiler') — ネタバレしないで! ('no spoilers!') is what everyone shouts before they've caught up.",
          "lines": [
            {
              "s": 0,
              "t": "昨日のドラマの最終回、見ましたか?",
              "r": "Kinō no dorama no saishūkai, mimashita ka?",
              "e": "Did you watch the drama finale last night?"
            },
            {
              "s": 1,
              "t": "見ました!すごく面白かったですね。",
              "r": "Mimashita! Sugoku omoshirokatta desu ne.",
              "e": "I did! It was so good, wasn't it?"
            },
            {
              "s": 0,
              "t": "最後のシーン、本当にびっくりしました。",
              "r": "Saigo no shīn, hontō ni bikkuri shimashita.",
              "e": "That last scene really surprised me."
            },
            {
              "s": 1,
              "t": "わかります!私、泣いちゃいました。",
              "r": "Wakarimasu! Watashi, naichaimashita.",
              "e": "I know! I totally cried."
            },
            {
              "s": 0,
              "t": "ですよね!まさか二人が別れるなんて。",
              "r": "Desu yo ne! Masaka futari ga wakareru nante.",
              "e": "Right?! Who'd have thought those two would break up."
            },
            {
              "s": 1,
              "t": "え、ちょっと待って、まだ最後まで見ていないんです!",
              "r": "E, chotto matte, mada saigo made mite inai n desu!",
              "e": "Wait — I haven't finished the last part yet!"
            },
            {
              "s": 0,
              "t": "あ、ごめん!ネタバレしちゃいましたね。",
              "r": "A, gomen! Netabare shichaimashita ne.",
              "e": "Oh, sorry! I just spoiled it."
            },
            {
              "s": 1,
              "t": "大丈夫です(笑)。続きが気になります。",
              "r": "Daijōbu desu (warai). Tsuzuki ga ki ni narimasu.",
              "e": "It's okay, haha. Now I really want to know the rest."
            },
            {
              "s": 0,
              "t": "絶対最後まで見てくださいね!",
              "r": "Zettai saigo made mite kudasai ne!",
              "e": "You absolutely have to watch it to the end!"
            }
          ],
          "vocab": [
            {
              "w": "最終回",
              "r": "saishūkai",
              "m": "final episode / finale"
            },
            {
              "w": "面白い",
              "r": "omoshiroi",
              "m": "interesting / fun"
            },
            {
              "w": "びっくりする",
              "r": "bikkuri suru",
              "m": "to be surprised"
            },
            {
              "w": "泣く",
              "r": "naku",
              "m": "to cry"
            },
            {
              "w": "ネタバレ",
              "r": "netabare",
              "m": "spoiler"
            },
            {
              "w": "気になる",
              "r": "ki ni naru",
              "m": "to be curious about / on one's mind"
            }
          ]
        },
        {
          "scene": "Leaving the office together",
          "title": "Drinks After Work",
          "speakers": [
            {
              "name": "Sato",
              "emoji": "🍻"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "飲みに行く (nomi ni iku, 'go drinking') is the classic after-work invite. The casual toast is 乾杯! (kanpai, 'cheers'). とりあえずビール ('a beer to start with') is an almost ritual first order at an izakaya.",
          "lines": [
            {
              "s": 0,
              "t": "お疲れさまです。今日、これから飲みに行きませんか?",
              "r": "Otsukaresama desu. Kyō, kore kara nomi ni ikimasen ka?",
              "e": "Good work today. Want to go for a drink now?"
            },
            {
              "s": 1,
              "t": "いいですね!行きましょう。",
              "r": "Ii desu ne! Ikimashō.",
              "e": "Sounds great! Let's go."
            },
            {
              "s": 0,
              "t": "駅前に新しい居酒屋があるんですよ。",
              "r": "Ekimae ni atarashii izakaya ga aru n desu yo.",
              "e": "There's a new izakaya in front of the station."
            },
            {
              "s": 1,
              "t": "そこにしましょう。お腹もすきましたし。",
              "r": "Soko ni shimashō. O-naka mo sukimashita shi.",
              "e": "Let's go there. I'm hungry too."
            },
            {
              "s": 0,
              "t": "じゃあ、とりあえずビールでいいですか?",
              "r": "Jā, toriaezu bīru de ii desu ka?",
              "e": "So, shall we start with a beer?"
            },
            {
              "s": 1,
              "t": "はい、私もビールにします。",
              "r": "Hai, watashi mo bīru ni shimasu.",
              "e": "Yes, I'll have a beer too."
            },
            {
              "s": 0,
              "t": "じゃあ、今日もお疲れさまでした。乾杯!",
              "r": "Jā, kyō mo otsukaresama deshita. Kanpai!",
              "e": "Well then, good work today. Cheers!"
            },
            {
              "s": 1,
              "t": "乾杯!ああ、おいしい。",
              "r": "Kanpai! Ā, oishii.",
              "e": "Cheers! Ah, that's good."
            },
            {
              "s": 0,
              "t": "たくさん食べて飲みましょうね。",
              "r": "Takusan tabete nomimashō ne.",
              "e": "Let's eat and drink a lot, okay?"
            },
            {
              "s": 1,
              "t": "はい!今日は楽しみましょう。",
              "r": "Hai! Kyō wa tanoshimimashō.",
              "e": "Yes! Let's enjoy ourselves today."
            }
          ],
          "vocab": [
            {
              "w": "お疲れさまです",
              "r": "otsukaresama desu",
              "m": "good work (greeting among coworkers)"
            },
            {
              "w": "飲みに行く",
              "r": "nomi ni iku",
              "m": "to go drinking"
            },
            {
              "w": "居酒屋",
              "r": "izakaya",
              "m": "Japanese pub / izakaya"
            },
            {
              "w": "とりあえず",
              "r": "toriaezu",
              "m": "for now / to start with"
            },
            {
              "w": "乾杯",
              "r": "kanpai",
              "m": "cheers (toast)"
            },
            {
              "w": "おいしい",
              "r": "oishii",
              "m": "delicious / tasty"
            }
          ]
        },
        {
          "scene": "On the street",
          "title": "Running into an old friend",
          "speakers": [
            {
              "name": "Yuki",
              "emoji": "😊"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "「久しぶり」 is the casual go-to, but with です it becomes 「お久しぶりです」— a polite-friendly greeting you'll use constantly. Adding 「ぶり」 to a time span (例: 二年ぶり) means 'for the first time in [that long]', and it carries a warm, nostalgic feeling.",
          "lines": [
            {
              "s": 0,
              "t": "あれ、もしかして田中さんですか？",
              "r": "Are, moshikashite Tanaka-san desu ka?",
              "e": "Oh, wait — is that you, Tanaka?"
            },
            {
              "s": 1,
              "t": "あ、ユキさん！お久しぶりです！",
              "r": "A, Yuki-san! O-hisashiburi desu!",
              "e": "Oh, Yuki! It's been so long!"
            },
            {
              "s": 0,
              "t": "本当に久しぶりですね。二年ぶりくらいですか？",
              "r": "Hontō ni hisashiburi desu ne. Ni-nen-buri kurai desu ka?",
              "e": "It really has been ages. About two years, right?"
            },
            {
              "s": 1,
              "t": "そうですね。お元気でしたか？",
              "r": "Sō desu ne. O-genki deshita ka?",
              "e": "That's right. Have you been doing well?"
            },
            {
              "s": 0,
              "t": "はい、おかげさまで。田中さんは今も同じ仕事ですか？",
              "r": "Hai, okagesama de. Tanaka-san wa ima mo onaji shigoto desu ka?",
              "e": "Yes, thanks. Are you still at the same job?"
            },
            {
              "s": 1,
              "t": "いえ、実は去年転職したんです。",
              "r": "Ie, jitsu wa kyonen tenshoku shita n desu.",
              "e": "No, actually I changed jobs last year."
            },
            {
              "s": 0,
              "t": "そうなんですか！すごいですね。",
              "r": "Sō nan desu ka! Sugoi desu ne.",
              "e": "Oh really! That's great."
            },
            {
              "s": 1,
              "t": "今度ゆっくりお茶でもしませんか？",
              "r": "Kondo yukkuri o-cha demo shimasen ka?",
              "e": "Want to grab tea sometime and catch up properly?"
            },
            {
              "s": 0,
              "t": "いいですね！じゃあ、連絡しますね。",
              "r": "Ii desu ne! Jā, renraku shimasu ne.",
              "e": "Sounds good! I'll be in touch then."
            }
          ],
          "vocab": [
            {
              "w": "お久しぶりです",
              "r": "o-hisashiburi desu",
              "m": "long time no see (polite)"
            },
            {
              "w": "もしかして",
              "r": "moshikashite",
              "m": "could it be / by any chance"
            },
            {
              "w": "おかげさまで",
              "r": "okagesama de",
              "m": "doing well, thanks (set phrase)"
            },
            {
              "w": "転職する",
              "r": "tenshoku suru",
              "m": "to change jobs"
            },
            {
              "w": "今度",
              "r": "kondo",
              "m": "next time / sometime soon"
            },
            {
              "w": "連絡する",
              "r": "renraku suru",
              "m": "to get in touch"
            }
          ]
        },
        {
          "scene": "At a cafe with a friend",
          "title": "Venting about a coworker",
          "speakers": [
            {
              "name": "Mai",
              "emoji": "🤗"
            },
            {
              "name": "You",
              "emoji": "😤"
            }
          ],
          "note": "「ひどい」 literally means 'awful/terrible' but as a one-word reaction it's the perfect sympathetic 'That's so unfair!' Pair it with 「えー」 and a drawn-out 「ね」 (「ひどいですね」) and you sound like a real friend taking your side, not a textbook.",
          "lines": [
            {
              "s": 1,
              "t": "ちょっと聞いてください。今日、会社で本当に頭にきたんです。",
              "r": "Chotto kiite kudasai. Kyō, kaisha de hontō ni atama ni kita n desu.",
              "e": "Listen to this — I got so mad at work today."
            },
            {
              "s": 0,
              "t": "えっ、どうしたんですか？",
              "r": "E', dō shita n desu ka?",
              "e": "Huh, what happened?"
            },
            {
              "s": 1,
              "t": "私がやった仕事を、同僚が自分がやったことにしたんです。",
              "r": "Watashi ga yatta shigoto o, dōryō ga jibun ga yatta koto ni shita n desu.",
              "e": "A coworker took credit for the work I did."
            },
            {
              "s": 0,
              "t": "えー、ひどいですね。",
              "r": "Ē, hidoi desu ne.",
              "e": "Ugh, that's awful."
            },
            {
              "s": 1,
              "t": "しかも、ミスは私のせいにしたんです。",
              "r": "Shikamo, misu wa watashi no sei ni shita n desu.",
              "e": "And on top of that, they blamed the mistake on me."
            },
            {
              "s": 0,
              "t": "それはひどいですね。",
              "r": "Sore wa hidoi desu ne.",
              "e": "That's really unfair."
            },
            {
              "s": 1,
              "t": "本当に。もうやる気がなくなりました。",
              "r": "Hontō ni. Mō yaru ki ga naku narimashita.",
              "e": "Right? I've totally lost my motivation now."
            },
            {
              "s": 0,
              "t": "わかります。でも、無理しないでくださいね。",
              "r": "Wakarimasu. Demo, muri shinai de kudasai ne.",
              "e": "I get it. But don't push yourself too hard, okay?"
            },
            {
              "s": 1,
              "t": "ありがとうございます。聞いてくれて、ちょっと楽になりました。",
              "r": "Arigatō gozaimasu. Kiite kurete, chotto raku ni narimashita.",
              "e": "Thanks. I feel a bit better just talking about it."
            }
          ],
          "vocab": [
            {
              "w": "頭にくる",
              "r": "atama ni kuru",
              "m": "to get angry / fed up"
            },
            {
              "w": "同僚",
              "r": "dōryō",
              "m": "coworker"
            },
            {
              "w": "せいにする",
              "r": "sei ni suru",
              "m": "to blame (on someone)"
            },
            {
              "w": "ひどい",
              "r": "hidoi",
              "m": "awful / unfair"
            },
            {
              "w": "やる気",
              "r": "yaru ki",
              "m": "motivation"
            },
            {
              "w": "無理しないで",
              "r": "muri shinai de",
              "m": "don't overdo it"
            }
          ]
        },
        {
          "scene": "Looking at apartments",
          "title": "Which apartment to rent",
          "speakers": [
            {
              "name": "Ken",
              "emoji": "🤔"
            },
            {
              "name": "You",
              "emoji": "🏠"
            }
          ],
          "note": "Apartment size is given in 畳 (jō) — the number of tatami mats — even in non-tatami rooms; it's the standard way Japanese people picture a room's size. And 「駅から徒歩◯分」 (X minutes on foot from the station) is THE phrase you'll see in every listing.",
          "lines": [
            {
              "s": 0,
              "t": "二つの部屋、どっちがいいと思いますか？",
              "r": "Futatsu no heya, dotchi ga ii to omoimasu ka?",
              "e": "Which of the two places do you think is better?"
            },
            {
              "s": 1,
              "t": "うーん、駅の近くのほうが便利ですよね。",
              "r": "Ūn, eki no chikaku no hō ga benri desu yo ne.",
              "e": "Hmm, the one near the station is more convenient, right?"
            },
            {
              "s": 0,
              "t": "でも、こっちのほうが部屋が広いですよ。",
              "r": "Demo, kotchi no hō ga heya ga hiroi desu yo.",
              "e": "But this one has a bigger room."
            },
            {
              "s": 1,
              "t": "確かに。でも、駅から徒歩二十分はちょっと遠いです。",
              "r": "Tashika ni. Demo, eki kara toho nijuppun wa chotto tōi desu.",
              "e": "True. But twenty minutes on foot from the station is a bit far."
            },
            {
              "s": 0,
              "t": "毎日のことだから、近いほうがいいかもしれませんね。",
              "r": "Mainichi no koto da kara, chikai hō ga ii kamoshiremasen ne.",
              "e": "Since it's an everyday thing, closer might be better."
            },
            {
              "s": 1,
              "t": "そうですね。家賃はどっちが高いですか？",
              "r": "Sō desu ne. Yachin wa dotchi ga takai desu ka?",
              "e": "Right. Which one has the higher rent?"
            },
            {
              "s": 0,
              "t": "駅の近くのほうが、少し高いです。",
              "r": "Eki no chikaku no hō ga, sukoshi takai desu.",
              "e": "The one near the station is a little more expensive."
            },
            {
              "s": 1,
              "t": "じゃあ、便利さを取って駅の近くにしましょうか。",
              "r": "Jā, benrisa o totte eki no chikaku ni shimashō ka.",
              "e": "Then let's go for convenience and pick the one near the station."
            },
            {
              "s": 0,
              "t": "賛成です。そっちにしましょう。",
              "r": "Sansei desu. Sotchi ni shimashō.",
              "e": "Agreed. Let's go with that one."
            }
          ],
          "vocab": [
            {
              "w": "どっち",
              "r": "dotchi",
              "m": "which (of two)"
            },
            {
              "w": "便利",
              "r": "benri",
              "m": "convenient"
            },
            {
              "w": "徒歩",
              "r": "toho",
              "m": "on foot"
            },
            {
              "w": "家賃",
              "r": "yachin",
              "m": "rent"
            },
            {
              "w": "広い",
              "r": "hiroi",
              "m": "spacious / wide"
            },
            {
              "w": "賛成",
              "r": "sansei",
              "m": "agreement / I agree"
            }
          ]
        },
        {
          "scene": "At a restaurant",
          "title": "Ordering several dishes",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🧑‍🍳"
            },
            {
              "name": "You",
              "emoji": "🍽️"
            }
          ],
          "note": "To get the staff's attention, just say 「すみません」 — calling out 'sumimasen' across the room is completely normal and polite in Japan, not rude. And 「以上です」 (that's everything) is the natural way to signal you're done ordering.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、注文お願いします。",
              "r": "Sumimasen, chūmon onegaishimasu.",
              "e": "Excuse me, we'd like to order."
            },
            {
              "s": 0,
              "t": "はい、お決まりですか？",
              "r": "Hai, o-kimari desu ka?",
              "e": "Sure, are you ready to order?"
            },
            {
              "s": 1,
              "t": "から揚げと、餃子を二つください。",
              "r": "Karaage to, gyōza o futatsu kudasai.",
              "e": "We'll have the fried chicken and two orders of gyoza."
            },
            {
              "s": 0,
              "t": "かしこまりました。お飲み物はいかがですか？",
              "r": "Kashikomarimashita. O-nomimono wa ikaga desu ka?",
              "e": "Certainly. Would you like anything to drink?"
            },
            {
              "s": 1,
              "t": "生ビールを一つお願いします。あの、これは辛いですか？",
              "r": "Nama-bīru o hitotsu onegaishimasu. Ano, kore wa karai desu ka?",
              "e": "One draft beer, please. Um, is this dish spicy?"
            },
            {
              "s": 0,
              "t": "少し辛いですが、大丈夫だと思います。",
              "r": "Sukoshi karai desu ga, daijōbu da to omoimasu.",
              "e": "It's a little spicy, but I think it'll be fine."
            },
            {
              "s": 1,
              "t": "じゃあ、それもお願いします。あと、おすすめは何ですか？",
              "r": "Jā, sore mo onegaishimasu. Ato, osusume wa nan desu ka?",
              "e": "Then I'll take that too. Also, what do you recommend?"
            },
            {
              "s": 0,
              "t": "今日は刺身がおすすめです。",
              "r": "Kyō wa sashimi ga osusume desu.",
              "e": "Today the sashimi is our recommendation."
            },
            {
              "s": 1,
              "t": "じゃあ、それもください。以上です。",
              "r": "Jā, sore mo kudasai. Ijō desu.",
              "e": "Then I'll have that as well. That's everything."
            }
          ],
          "vocab": [
            {
              "w": "注文",
              "r": "chūmon",
              "m": "order"
            },
            {
              "w": "お決まりですか",
              "r": "o-kimari desu ka",
              "m": "are you ready to order?"
            },
            {
              "w": "かしこまりました",
              "r": "kashikomarimashita",
              "m": "certainly (polite 'understood')"
            },
            {
              "w": "おすすめ",
              "r": "osusume",
              "m": "recommendation"
            },
            {
              "w": "辛い",
              "r": "karai",
              "m": "spicy"
            },
            {
              "w": "以上です",
              "r": "ijō desu",
              "m": "that's all / that's everything"
            }
          ]
        },
        {
          "scene": "At a clothing store",
          "title": "Trying on clothes",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🧑‍💼"
            },
            {
              "name": "You",
              "emoji": "👕"
            }
          ],
          "note": "「試着」 (shichaku, trying on) is the exact word you'll need — 「試着してもいいですか？」 is the standard way to ask. Staff almost always answer 「どうぞ」 (go ahead). Sizes are often just S / M / L, but you can also ask for ワンサイズ上 (one size up).",
          "lines": [
            {
              "s": 1,
              "t": "すみません、これのMサイズはありますか？",
              "r": "Sumimasen, kore no emu-saizu wa arimasu ka?",
              "e": "Excuse me, do you have this in a medium?"
            },
            {
              "s": 0,
              "t": "少々お待ちください。お調べします。",
              "r": "Shōshō o-machi kudasai. O-shirabe shimasu.",
              "e": "One moment please. I'll check for you."
            },
            {
              "s": 0,
              "t": "申し訳ありません、Mサイズは今、売り切れです。",
              "r": "Mōshiwake arimasen, emu-saizu wa ima, urikire desu.",
              "e": "I'm sorry, we're out of medium right now."
            },
            {
              "s": 1,
              "t": "そうですか。じゃあ、Lサイズを見てもいいですか？",
              "r": "Sō desu ka. Jā, eru-saizu o mite mo ii desu ka?",
              "e": "I see. Then can I take a look at the large?"
            },
            {
              "s": 0,
              "t": "はい、こちらです。",
              "r": "Hai, kochira desu.",
              "e": "Yes, here it is."
            },
            {
              "s": 1,
              "t": "試着してもいいですか？",
              "r": "Shichaku shite mo ii desu ka?",
              "e": "May I try it on?"
            },
            {
              "s": 0,
              "t": "もちろんです。試着室はあちらです。",
              "r": "Mochiron desu. Shichakushitsu wa achira desu.",
              "e": "Of course. The fitting room is over there."
            },
            {
              "s": 1,
              "t": "ありがとうございます。…ちょっと大きいかもしれません。",
              "r": "Arigatō gozaimasu. …Chotto ōkii kamoshiremasen.",
              "e": "Thank you. …It might be a little big."
            },
            {
              "s": 0,
              "t": "では、色違いもお持ちしましょうか？",
              "r": "De wa, irochigai mo o-mochi shimashō ka?",
              "e": "Shall I bring a different color as well, then?"
            }
          ],
          "vocab": [
            {
              "w": "サイズ",
              "r": "saizu",
              "m": "size"
            },
            {
              "w": "売り切れ",
              "r": "urikire",
              "m": "sold out / out of stock"
            },
            {
              "w": "試着する",
              "r": "shichaku suru",
              "m": "to try on"
            },
            {
              "w": "試着室",
              "r": "shichakushitsu",
              "m": "fitting room"
            },
            {
              "w": "色違い",
              "r": "irochigai",
              "m": "different color (of same item)"
            },
            {
              "w": "少々お待ちください",
              "r": "shōshō o-machi kudasai",
              "m": "one moment please"
            }
          ]
        },
        {
          "scene": "At a convenience store",
          "title": "Paying at the konbini",
          "speakers": [
            {
              "name": "Clerk",
              "emoji": "🧑‍💼"
            },
            {
              "name": "You",
              "emoji": "🛍️"
            }
          ],
          "note": "Since the 2020 plastic-bag charge, clerks always ask 「袋はご利用ですか？」 (do you need a bag?) — bags now cost a few yen. 「温めますか？」 (shall I heat it up?) is the other line you'll hear every single time you buy a bento.",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませ。お弁当、温めますか？",
              "r": "Irasshaimase. O-bentō, atatamemasu ka?",
              "e": "Welcome. Shall I heat up your bento?"
            },
            {
              "s": 1,
              "t": "はい、お願いします。",
              "r": "Hai, onegaishimasu.",
              "e": "Yes, please."
            },
            {
              "s": 0,
              "t": "袋はご利用ですか？",
              "r": "Fukuro wa go-riyō desu ka?",
              "e": "Do you need a bag?"
            },
            {
              "s": 1,
              "t": "はい、一枚ください。",
              "r": "Hai, ichi-mai kudasai.",
              "e": "Yes, one please."
            },
            {
              "s": 0,
              "t": "ポイントカードはお持ちですか？",
              "r": "Pointo-kādo wa o-mochi desu ka?",
              "e": "Do you have a points card?"
            },
            {
              "s": 1,
              "t": "はい、これです。",
              "r": "Hai, kore desu.",
              "e": "Yes, here it is."
            },
            {
              "s": 0,
              "t": "ありがとうございます。お会計は六百円です。",
              "r": "Arigatō gozaimasu. O-kaikei wa roppyaku-en desu.",
              "e": "Thank you. That comes to 600 yen."
            },
            {
              "s": 1,
              "t": "カードで払えますか？",
              "r": "Kādo de haraemasu ka?",
              "e": "Can I pay by card?"
            },
            {
              "s": 0,
              "t": "はい、大丈夫です。こちらにタッチしてください。",
              "r": "Hai, daijōbu desu. Kochira ni tatchi shite kudasai.",
              "e": "Yes, that's fine. Please tap here."
            },
            {
              "s": 1,
              "t": "ありがとうございます。",
              "r": "Arigatō gozaimasu.",
              "e": "Thank you."
            }
          ],
          "vocab": [
            {
              "w": "温める",
              "r": "atatameru",
              "m": "to heat up"
            },
            {
              "w": "袋",
              "r": "fukuro",
              "m": "bag"
            },
            {
              "w": "ポイントカード",
              "r": "pointo-kādo",
              "m": "points/loyalty card"
            },
            {
              "w": "お会計",
              "r": "o-kaikei",
              "m": "the bill / total"
            },
            {
              "w": "払う",
              "r": "harau",
              "m": "to pay"
            },
            {
              "w": "タッチする",
              "r": "tatchi suru",
              "m": "to tap (a card)"
            }
          ]
        },
        {
          "scene": "In a taxi",
          "title": "Taking a Taxi",
          "speakers": [
            {
              "name": "Driver",
              "emoji": "🚕"
            },
            {
              "name": "You",
              "emoji": "🧳"
            }
          ],
          "note": "Drivers often confirm your destination by repeating it with 「〜ですね？」. A quick 「お願いします」 (literally 'please') is the standard, polite way to say 'take me there' — you don't need a full sentence.",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませ。どちらまでですか？",
              "r": "Irasshaimase. Dochira made desu ka?",
              "e": "Welcome. Where would you like to go?"
            },
            {
              "s": 1,
              "t": "東京駅までお願いします。",
              "r": "Tōkyō-eki made onegai shimasu.",
              "e": "To Tōkyō Station, please."
            },
            {
              "s": 0,
              "t": "東京駅ですね。かしこまりました。",
              "r": "Tōkyō-eki desu ne. Kashikomarimashita.",
              "e": "Tōkyō Station, got it. Certainly."
            },
            {
              "s": 1,
              "t": "あの、どのくらいかかりますか？",
              "r": "Ano, dono kurai kakarimasu ka?",
              "e": "Um, how long will it take?"
            },
            {
              "s": 0,
              "t": "そうですね、二十分くらいですね。",
              "r": "Sō desu ne, nijuppun kurai desu ne.",
              "e": "Let's see, about twenty minutes."
            },
            {
              "s": 1,
              "t": "よかったです。少し急いでいるので。",
              "r": "Yokatta desu. Sukoshi isoide iru node.",
              "e": "Oh good. I'm in a bit of a hurry."
            },
            {
              "s": 0,
              "t": "今日は道が空いていますよ。",
              "r": "Kyō wa michi ga suite imasu yo.",
              "e": "The roads are pretty empty today."
            },
            {
              "s": 1,
              "t": "それは助かります。",
              "r": "Sore wa tasukarimasu.",
              "e": "That's a relief."
            },
            {
              "s": 0,
              "t": "はい、着きました。千八百円です。",
              "r": "Hai, tsukimashita. Sen happyaku en desu.",
              "e": "Alright, we're here. That'll be 1,800 yen."
            },
            {
              "s": 1,
              "t": "ありがとうございます。これでお願いします。",
              "r": "Arigatō gozaimasu. Kore de onegai shimasu.",
              "e": "Thank you. Here you go."
            }
          ],
          "vocab": [
            {
              "w": "〜まで",
              "r": "made",
              "m": "to / as far as (a destination)"
            },
            {
              "w": "お願いします",
              "r": "onegai shimasu",
              "m": "please (do this for me)"
            },
            {
              "w": "かしこまりました",
              "r": "kashikomarimashita",
              "m": "certainly / understood (very polite)"
            },
            {
              "w": "どのくらい",
              "r": "dono kurai",
              "m": "how long / how much"
            },
            {
              "w": "急いでいる",
              "r": "isoide iru",
              "m": "to be in a hurry"
            },
            {
              "w": "助かります",
              "r": "tasukarimasu",
              "m": "that helps / what a relief"
            }
          ]
        },
        {
          "scene": "Hotel front desk",
          "title": "Checking Into a Hotel",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛎️"
            },
            {
              "name": "You",
              "emoji": "🧳"
            }
          ],
          "note": "At hotels, staff use ultra-polite keigo like 「お預かりします」 ('I'll hold/take this for you') for your ID or payment. You just need plain です/ます forms back — there's no expectation that guests match their honorifics.",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませ。ご予約はございますか？",
              "r": "Irasshaimase. Go-yoyaku wa gozaimasu ka?",
              "e": "Welcome. Do you have a reservation?"
            },
            {
              "s": 1,
              "t": "はい、田中で予約しています。",
              "r": "Hai, Tanaka de yoyaku shite imasu.",
              "e": "Yes, it's under Tanaka."
            },
            {
              "s": 0,
              "t": "田中様ですね。少々お待ちください。",
              "r": "Tanaka-sama desu ne. Shōshō omachi kudasai.",
              "e": "Mr. Tanaka, right. One moment, please."
            },
            {
              "s": 0,
              "t": "二泊で、禁煙のお部屋ですね。",
              "r": "Nihaku de, kin'en no o-heya desu ne.",
              "e": "Two nights, a non-smoking room, correct?"
            },
            {
              "s": 1,
              "t": "はい、そうです。",
              "r": "Hai, sō desu.",
              "e": "Yes, that's right."
            },
            {
              "s": 0,
              "t": "こちらの用紙にご記入をお願いします。",
              "r": "Kochira no yōshi ni go-kinyū o onegai shimasu.",
              "e": "Please fill out this form."
            },
            {
              "s": 1,
              "t": "朝食は何時からですか？",
              "r": "Chōshoku wa nanji kara desu ka?",
              "e": "What time does breakfast start?"
            },
            {
              "s": 0,
              "t": "七時から十時までです。二階のレストランです。",
              "r": "Shichiji kara jūji made desu. Nikai no resutoran desu.",
              "e": "From seven to ten, at the restaurant on the second floor."
            },
            {
              "s": 1,
              "t": "わかりました。鍵はこれですか？",
              "r": "Wakarimashita. Kagi wa kore desu ka?",
              "e": "Got it. Is this the key?"
            },
            {
              "s": 0,
              "t": "はい、こちらが鍵です。ごゆっくりどうぞ。",
              "r": "Hai, kochira ga kagi desu. Go-yukkuri dōzo.",
              "e": "Yes, here's your key. Enjoy your stay."
            }
          ],
          "vocab": [
            {
              "w": "予約",
              "r": "yoyaku",
              "m": "reservation"
            },
            {
              "w": "二泊",
              "r": "nihaku",
              "m": "two nights (stay)"
            },
            {
              "w": "禁煙",
              "r": "kin'en",
              "m": "non-smoking"
            },
            {
              "w": "記入",
              "r": "kinyū",
              "m": "filling in / writing in (a form)"
            },
            {
              "w": "朝食",
              "r": "chōshoku",
              "m": "breakfast"
            },
            {
              "w": "鍵",
              "r": "kagi",
              "m": "key"
            }
          ]
        },
        {
          "scene": "At the pharmacy",
          "title": "Cold Symptoms at the Pharmacy",
          "speakers": [
            {
              "name": "Pharmacist",
              "emoji": "💊"
            },
            {
              "name": "You",
              "emoji": "🤧"
            }
          ],
          "note": "To describe symptoms, Japanese pairs a body part/symptom with 「〜がします」 or 「〜があります」: 「熱があります」 (I have a fever), 「咳が出ます」 (I have a cough — literally 'a cough comes out'). 「出ます」 is the natural verb for coughs and runny noses.",
          "lines": [
            {
              "s": 0,
              "t": "こんにちは。どうされましたか？",
              "r": "Konnichiwa. Dō saremashita ka?",
              "e": "Hello. What seems to be the matter?"
            },
            {
              "s": 1,
              "t": "昨日から風邪っぽいんです。",
              "r": "Kinō kara kazeppoi n desu.",
              "e": "I've felt like I'm coming down with a cold since yesterday."
            },
            {
              "s": 0,
              "t": "熱はありますか？",
              "r": "Netsu wa arimasu ka?",
              "e": "Do you have a fever?"
            },
            {
              "s": 1,
              "t": "少しあります。あと、咳も出ます。",
              "r": "Sukoshi arimasu. Ato, seki mo demasu.",
              "e": "A little. And I have a cough too."
            },
            {
              "s": 0,
              "t": "喉は痛いですか？",
              "r": "Nodo wa itai desu ka?",
              "e": "Is your throat sore?"
            },
            {
              "s": 1,
              "t": "はい、とても痛いです。",
              "r": "Hai, totemo itai desu.",
              "e": "Yes, it's really sore."
            },
            {
              "s": 0,
              "t": "では、こちらの風邪薬がおすすめです。",
              "r": "Dewa, kochira no kazegusuri ga osusume desu.",
              "e": "In that case, I'd recommend this cold medicine."
            },
            {
              "s": 1,
              "t": "一日に何回飲めばいいですか？",
              "r": "Ichinichi ni nankai nomeba ii desu ka?",
              "e": "How many times a day should I take it?"
            },
            {
              "s": 0,
              "t": "食後に一日三回、飲んでください。",
              "r": "Shokugo ni ichinichi sankai, nonde kudasai.",
              "e": "Three times a day, after meals."
            },
            {
              "s": 1,
              "t": "わかりました。ありがとうございます。",
              "r": "Wakarimashita. Arigatō gozaimasu.",
              "e": "Got it. Thank you very much."
            }
          ],
          "vocab": [
            {
              "w": "風邪っぽい",
              "r": "kazeppoi",
              "m": "feeling like I'm catching a cold"
            },
            {
              "w": "熱",
              "r": "netsu",
              "m": "fever"
            },
            {
              "w": "咳が出ます",
              "r": "seki ga demasu",
              "m": "to have a cough"
            },
            {
              "w": "喉",
              "r": "nodo",
              "m": "throat"
            },
            {
              "w": "風邪薬",
              "r": "kazegusuri",
              "m": "cold medicine"
            },
            {
              "w": "食後",
              "r": "shokugo",
              "m": "after a meal"
            }
          ]
        },
        {
          "scene": "At a hair salon",
          "title": "Getting a Haircut",
          "speakers": [
            {
              "name": "Stylist",
              "emoji": "✂️"
            },
            {
              "name": "You",
              "emoji": "💇"
            }
          ],
          "note": "When describing length, Japanese uses 「〜くらい」 ('about'). A handy gesture-phrase is 「これくらい」 ('about this much') while pointing — totally normal in salons. 「お任せします」 ('I'll leave it to you') is the magic phrase when you can't decide.",
          "lines": [
            {
              "s": 0,
              "t": "今日はどうなさいますか？",
              "r": "Kyō wa dō nasaimasu ka?",
              "e": "What are we doing today?"
            },
            {
              "s": 1,
              "t": "短く切りたいんですが。",
              "r": "Mijikaku kiritai n desu ga.",
              "e": "I'd like to get it cut short."
            },
            {
              "s": 0,
              "t": "どのくらい切りましょうか？",
              "r": "Dono kurai kirimashō ka?",
              "e": "About how much should I take off?"
            },
            {
              "s": 1,
              "t": "そうですね、これくらいでお願いします。",
              "r": "Sō desu ne, kore kurai de onegai shimasu.",
              "e": "Hmm, about this much, please."
            },
            {
              "s": 0,
              "t": "前髪はどうしますか？",
              "r": "Maegami wa dō shimasu ka?",
              "e": "What about your bangs?"
            },
            {
              "s": 1,
              "t": "前髪は少しだけ切ってください。",
              "r": "Maegami wa sukoshi dake kitte kudasai.",
              "e": "Just trim the bangs a little, please."
            },
            {
              "s": 0,
              "t": "色は変えなくて大丈夫ですか？",
              "r": "Iro wa kaenakute daijōbu desu ka?",
              "e": "Are we leaving the color as is?"
            },
            {
              "s": 1,
              "t": "はい、今日はカットだけでお願いします。",
              "r": "Hai, kyō wa katto dake de onegai shimasu.",
              "e": "Yes, just a cut today, please."
            },
            {
              "s": 0,
              "t": "わかりました。では始めますね。",
              "r": "Wakarimashita. Dewa hajimemasu ne.",
              "e": "Understood. Let's get started, then."
            },
            {
              "s": 1,
              "t": "よろしくお願いします。",
              "r": "Yoroshiku onegai shimasu.",
              "e": "Thank you, I'm in your hands."
            }
          ],
          "vocab": [
            {
              "w": "短く",
              "r": "mijikaku",
              "m": "short (adverb form, 'shortly')"
            },
            {
              "w": "切りたい",
              "r": "kiritai",
              "m": "want to cut"
            },
            {
              "w": "これくらい",
              "r": "kore kurai",
              "m": "about this much"
            },
            {
              "w": "前髪",
              "r": "maegami",
              "m": "bangs / fringe"
            },
            {
              "w": "カット",
              "r": "katto",
              "m": "(hair) cut"
            },
            {
              "w": "色",
              "r": "iro",
              "m": "color"
            }
          ]
        },
        {
          "scene": "Chatting with a friend",
          "title": "Geeking Out Over Anime",
          "speakers": [
            {
              "name": "Yuki",
              "emoji": "🎬"
            },
            {
              "name": "You",
              "emoji": "🍿"
            }
          ],
          "note": "「ハマってる」 (hamatteru, 'I'm hooked/obsessed') is the everyday word fans use for being super into something. Even at the polite level, friends naturally drop 「〜よ」 and 「〜ね」 to sound warm rather than stiff.",
          "lines": [
            {
              "s": 0,
              "t": "最近、何かアニメ見ていますか？",
              "r": "Saikin, nanika anime mite imasu ka?",
              "e": "Have you been watching any anime lately?"
            },
            {
              "s": 1,
              "t": "はい！今あのSFアニメにハマっています。",
              "r": "Hai! Ima ano esu-efu anime ni hamatte imasu.",
              "e": "Yeah! I'm totally hooked on that sci-fi one right now."
            },
            {
              "s": 0,
              "t": "あ、私もそれ見ていますよ！",
              "r": "A, watashi mo sore mite imasu yo!",
              "e": "Oh, I'm watching that too!"
            },
            {
              "s": 1,
              "t": "本当ですか？先週の話、すごかったですよね。",
              "r": "Hontō desu ka? Senshū no hanashi, sugokatta desu yo ne.",
              "e": "Really? Last week's episode was amazing, right?"
            },
            {
              "s": 0,
              "t": "わかります！最後のシーンで泣きました。",
              "r": "Wakarimasu! Saigo no shīn de nakimashita.",
              "e": "I know! I cried at the last scene."
            },
            {
              "s": 1,
              "t": "私もです。主人公がかっこよすぎます。",
              "r": "Watashi mo desu. Shujinkō ga kakkoyo sugimasu.",
              "e": "Me too. The main character is just too cool."
            },
            {
              "s": 0,
              "t": "次回が気になって、待てないです。",
              "r": "Jikai ga ki ni natte, matenai desu.",
              "e": "I'm dying to see the next one — I can't wait."
            },
            {
              "s": 1,
              "t": "ですよね！金曜日が楽しみです。",
              "r": "Desu yo ne! Kin'yōbi ga tanoshimi desu.",
              "e": "Right?! I'm looking forward to Friday."
            },
            {
              "s": 0,
              "t": "じゃあ、今度一緒に見ませんか？",
              "r": "Jā, kondo issho ni mimasen ka?",
              "e": "Hey, want to watch it together sometime?"
            },
            {
              "s": 1,
              "t": "いいですね、ぜひ！",
              "r": "Ii desu ne, zehi!",
              "e": "Sounds great, absolutely!"
            }
          ],
          "vocab": [
            {
              "w": "ハマっている",
              "r": "hamatte iru",
              "m": "to be hooked / obsessed"
            },
            {
              "w": "話",
              "r": "hanashi",
              "m": "episode / story"
            },
            {
              "w": "主人公",
              "r": "shujinkō",
              "m": "main character / protagonist"
            },
            {
              "w": "かっこいい",
              "r": "kakkoii",
              "m": "cool / good-looking"
            },
            {
              "w": "次回",
              "r": "jikai",
              "m": "next time / next episode"
            },
            {
              "w": "楽しみ",
              "r": "tanoshimi",
              "m": "looking forward to"
            }
          ]
        },
        {
          "scene": "Planning a trip",
          "title": "Planning a Weekend Trip",
          "speakers": [
            {
              "name": "Aya",
              "emoji": "🗺️"
            },
            {
              "name": "You",
              "emoji": "🎒"
            }
          ],
          "note": "「〜にしましょう」 ('let's go with ~') is the go-to phrase for landing on a decision together. For dates, Japanese says the month then the day: 「六月二十日」 (June 20th). 「楽しみ！」 alone is a natural, warm way to end plans.",
          "lines": [
            {
              "s": 0,
              "t": "今度の週末、どこか行きませんか？",
              "r": "Kondo no shūmatsu, dokoka ikimasen ka?",
              "e": "Want to go somewhere this coming weekend?"
            },
            {
              "s": 1,
              "t": "いいですね。どこがいいですか？",
              "r": "Ii desu ne. Doko ga ii desu ka?",
              "e": "Sounds good. Where should we go?"
            },
            {
              "s": 0,
              "t": "温泉はどうですか？箱根とか。",
              "r": "Onsen wa dō desu ka? Hakone toka.",
              "e": "How about a hot spring? Like Hakone."
            },
            {
              "s": 1,
              "t": "箱根、いいですね！一泊しますか？",
              "r": "Hakone, ii desu ne! Ippaku shimasu ka?",
              "e": "Hakone, nice! Shall we stay one night?"
            },
            {
              "s": 0,
              "t": "はい。土曜日に行って、日曜日に帰りましょう。",
              "r": "Hai. Doyōbi ni itte, nichiyōbi ni kaerimashō.",
              "e": "Yeah. Let's go Saturday and come back Sunday."
            },
            {
              "s": 1,
              "t": "じゃあ、二十日と二十一日ですね。",
              "r": "Jā, hatsuka to nijūichi-nichi desu ne.",
              "e": "So the 20th and 21st, then."
            },
            {
              "s": 0,
              "t": "ホテルは私が予約しますね。",
              "r": "Hoteru wa watashi ga yoyaku shimasu ne.",
              "e": "I'll book the hotel, then."
            },
            {
              "s": 1,
              "t": "ありがとうございます。じゃあ電車を調べておきます。",
              "r": "Arigatō gozaimasu. Jā densha o shirabete okimasu.",
              "e": "Thank you. Then I'll look up the trains."
            },
            {
              "s": 0,
              "t": "向こうで何をしましょうか？",
              "r": "Mukō de nani o shimashō ka?",
              "e": "What should we do once we're there?"
            },
            {
              "s": 1,
              "t": "温泉に入って、ゆっくりしましょう！",
              "r": "Onsen ni haitte, yukkuri shimashō!",
              "e": "Let's soak in the hot spring and just relax!"
            }
          ],
          "vocab": [
            {
              "w": "週末",
              "r": "shūmatsu",
              "m": "weekend"
            },
            {
              "w": "温泉",
              "r": "onsen",
              "m": "hot spring"
            },
            {
              "w": "一泊",
              "r": "ippaku",
              "m": "one night's stay"
            },
            {
              "w": "二十日",
              "r": "hatsuka",
              "m": "the 20th (of the month)"
            },
            {
              "w": "調べておく",
              "r": "shirabete oku",
              "m": "to look up in advance"
            },
            {
              "w": "ゆっくりする",
              "r": "yukkuri suru",
              "m": "to relax / take it easy"
            }
          ]
        },
        {
          "scene": "At the gym entrance",
          "title": "Let's Hit the Gym",
          "speakers": [
            {
              "name": "Yuki",
              "emoji": "💪"
            },
            {
              "name": "You",
              "emoji": "🏃"
            }
          ],
          "note": "Japanese gym-goers often say 「筋トレ」(kintore), short for 筋肉トレーニング, for strength/weight training. 「ジム通い」(jimu-gayoi) means 'going to the gym regularly' — the verb 通う covers any place you attend habitually, like a gym, school, or hospital.",
          "lines": [
            {
              "s": 0,
              "t": "最近、ジムに通っているんですね。",
              "r": "Saikin, jimu ni kayotte iru-n desu ne.",
              "e": "You've been going to the gym lately, huh."
            },
            {
              "s": 1,
              "t": "はい、週に三回くらい行っています。",
              "r": "Hai, shū ni san-kai kurai itte imasu.",
              "e": "Yeah, about three times a week."
            },
            {
              "s": 0,
              "t": "すごいですね。何をしているんですか。",
              "r": "Sugoi desu ne. Nani o shite iru-n desu ka.",
              "e": "That's impressive. What do you do there?"
            },
            {
              "s": 1,
              "t": "主に筋トレです。走るのは苦手で…。",
              "r": "Omo ni kintore desu. Hashiru no wa nigate de….",
              "e": "Mostly weight training. I'm not great at running…"
            },
            {
              "s": 0,
              "t": "わかります。私も走るのは嫌いです。",
              "r": "Wakarimasu. Watashi mo hashiru no wa kirai desu.",
              "e": "I get it. I hate running too."
            },
            {
              "s": 1,
              "t": "一緒に行きませんか。楽しいですよ。",
              "r": "Issho ni ikimasen ka. Tanoshii desu yo.",
              "e": "Want to come with me sometime? It's fun."
            },
            {
              "s": 0,
              "t": "いいですね。でも、続くか心配です。",
              "r": "Ii desu ne. Demo, tsuzuku ka shinpai desu.",
              "e": "Sounds good. But I'm worried about sticking with it."
            },
            {
              "s": 1,
              "t": "大丈夫ですよ。最初は少しずつで。",
              "r": "Daijōbu desu yo. Saisho wa sukoshi zutsu de.",
              "e": "It'll be fine. Just take it slow at first."
            },
            {
              "s": 0,
              "t": "じゃあ、今度の土曜日はどうですか。",
              "r": "Jā, kondo no doyōbi wa dō desu ka.",
              "e": "Okay then, how about this Saturday?"
            },
            {
              "s": 1,
              "t": "いいですね。じゃあ、土曜日に。",
              "r": "Ii desu ne. Jā, doyōbi ni.",
              "e": "Perfect. See you Saturday, then."
            }
          ],
          "vocab": [
            {
              "w": "ジムに通う",
              "r": "jimu ni kayou",
              "m": "to go to the gym regularly"
            },
            {
              "w": "筋トレ",
              "r": "kintore",
              "m": "weight/strength training"
            },
            {
              "w": "苦手",
              "r": "nigate",
              "m": "not good at; weak point"
            },
            {
              "w": "続く",
              "r": "tsuzuku",
              "m": "to continue, keep up"
            },
            {
              "w": "少しずつ",
              "r": "sukoshi zutsu",
              "m": "little by little"
            },
            {
              "w": "心配",
              "r": "shinpai",
              "m": "worry, concern"
            }
          ]
        },
        {
          "scene": "At a cafe with a laptop",
          "title": "A Surprise at the Cafe",
          "speakers": [
            {
              "name": "Mika",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "💻"
            }
          ],
          "note": "「あれ?」(are?) is the go-to filler when you notice something unexpected — like spotting a friend you didn't expect to see. It's casual but works in polite speech too. Also, 「お邪魔じゃないですか?」(ojama ja nai desu ka?) is a polite way to check if you're interrupting someone.",
          "lines": [
            {
              "s": 0,
              "t": "あれ?ここで何をしているんですか。",
              "r": "Are? Koko de nani o shite iru-n desu ka.",
              "e": "Huh? What are you doing here?"
            },
            {
              "s": 1,
              "t": "あ、ミカさん!勉強していました。",
              "r": "A, Mika-san! Benkyō shite imashita.",
              "e": "Oh, Mika! I was studying."
            },
            {
              "s": 0,
              "t": "そうなんですね。隣、いいですか。",
              "r": "Sō na-n desu ne. Tonari, ii desu ka.",
              "e": "Oh, I see. Mind if I sit next to you?"
            },
            {
              "s": 1,
              "t": "もちろん、どうぞ。お邪魔じゃないですか。",
              "r": "Mochiron, dōzo. Ojama ja nai desu ka.",
              "e": "Of course, go ahead. Am I not in your way?"
            },
            {
              "s": 0,
              "t": "いえいえ、全然。何の勉強ですか。",
              "r": "Ie ie, zenzen. Nan no benkyō desu ka.",
              "e": "No no, not at all. What are you studying?"
            },
            {
              "s": 1,
              "t": "英語です。来週、テストがあって。",
              "r": "Eigo desu. Raishū, tesuto ga atte.",
              "e": "English. I've got a test next week."
            },
            {
              "s": 0,
              "t": "大変ですね。コーヒー、おごりますよ。",
              "r": "Taihen desu ne. Kōhī, ogorimasu yo.",
              "e": "That sounds tough. I'll buy you a coffee."
            },
            {
              "s": 1,
              "t": "本当ですか。ありがとうございます!",
              "r": "Hontō desu ka. Arigatō gozaimasu!",
              "e": "Really? Thank you so much!"
            },
            {
              "s": 0,
              "t": "じゃあ、少し休憩しましょう。",
              "r": "Jā, sukoshi kyūkei shimashō.",
              "e": "Then let's take a little break."
            }
          ],
          "vocab": [
            {
              "w": "あれ?",
              "r": "are?",
              "m": "huh? (noticing something)"
            },
            {
              "w": "隣",
              "r": "tonari",
              "m": "next to, beside"
            },
            {
              "w": "お邪魔",
              "r": "ojama",
              "m": "a bother, intrusion"
            },
            {
              "w": "全然",
              "r": "zenzen",
              "m": "not at all (with negative)"
            },
            {
              "w": "おごる",
              "r": "ogoru",
              "m": "to treat (pay for someone)"
            },
            {
              "w": "休憩",
              "r": "kyūkei",
              "m": "a break, rest"
            }
          ]
        },
        {
          "scene": "Whispering in a hallway",
          "title": "The Secret Party Plan",
          "speakers": [
            {
              "name": "Aki",
              "emoji": "🤫"
            },
            {
              "name": "You",
              "emoji": "🎉"
            }
          ],
          "note": "「ナイショ」(naisho, often written ないしょ or 内緒) means 'a secret' and is used constantly in casual planning — 「ナイショね」means 'keep it secret, okay?'. To say 'surprise party' Japanese borrows the English word: 「サプライズパーティー」(sapuraizu pātī).",
          "lines": [
            {
              "s": 0,
              "t": "来週、ケンさんの誕生日ですよね。",
              "r": "Raishū, Ken-san no tanjōbi desu yo ne.",
              "e": "Next week is Ken's birthday, right?"
            },
            {
              "s": 1,
              "t": "はい!サプライズパーティーをしませんか。",
              "r": "Hai! Sapuraizu pātī o shimasen ka.",
              "e": "Yes! Shall we throw a surprise party?"
            },
            {
              "s": 0,
              "t": "いいですね!でも、ナイショですよ。",
              "r": "Ii desu ne! Demo, naisho desu yo.",
              "e": "Great idea! But it's a secret, okay?"
            },
            {
              "s": 1,
              "t": "もちろん。場所はどこにしますか。",
              "r": "Mochiron. Basho wa doko ni shimasu ka.",
              "e": "Of course. Where should we have it?"
            },
            {
              "s": 0,
              "t": "私の家はどうですか。広いので。",
              "r": "Watashi no ie wa dō desu ka. Hiroi node.",
              "e": "How about my place? It's roomy."
            },
            {
              "s": 1,
              "t": "いいですね。ケーキは私が買います。",
              "r": "Ii desu ne. Kēki wa watashi ga kaimasu.",
              "e": "Perfect. I'll buy the cake."
            },
            {
              "s": 0,
              "t": "助かります。みんなにも声をかけますね。",
              "r": "Tasukarimasu. Minna ni mo koe o kakemasu ne.",
              "e": "That helps. I'll let everyone else know too."
            },
            {
              "s": 1,
              "t": "あ、ケンさんが来ました!静かに!",
              "r": "A, Ken-san ga kimashita! Shizuka ni!",
              "e": "Oh, Ken's coming! Be quiet!"
            },
            {
              "s": 0,
              "t": "はい!何でもないですよ〜。",
              "r": "Hai! Nan demo nai desu yo~.",
              "e": "Got it! It's nothing, really~."
            }
          ],
          "vocab": [
            {
              "w": "誕生日",
              "r": "tanjōbi",
              "m": "birthday"
            },
            {
              "w": "ナイショ",
              "r": "naisho",
              "m": "a secret"
            },
            {
              "w": "場所",
              "r": "basho",
              "m": "place, location"
            },
            {
              "w": "声をかける",
              "r": "koe o kakeru",
              "m": "to invite / call out to"
            },
            {
              "w": "助かる",
              "r": "tasukaru",
              "m": "that's a big help"
            },
            {
              "w": "何でもない",
              "r": "nan demo nai",
              "m": "it's nothing"
            }
          ]
        },
        {
          "scene": "At a clothing store counter",
          "title": "Returning a Shirt",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛍️"
            },
            {
              "name": "You",
              "emoji": "🧾"
            }
          ],
          "note": "When returning items, 「レシート」(reshīto, receipt) is essential — staff almost always ask for it. 「サイズが合わない」(saizu ga awanai) is the standard phrase for 'it doesn't fit'. Note that 返品 (henpin) = return for refund, while 交換 (kōkan) = exchange — useful to know the difference at the counter.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、これを返品したいんですが。",
              "r": "Sumimasen, kore o henpin shitai-n desu ga.",
              "e": "Excuse me, I'd like to return this."
            },
            {
              "s": 0,
              "t": "かしこまりました。レシートはありますか。",
              "r": "Kashikomarimashita. Reshīto wa arimasu ka.",
              "e": "Certainly. Do you have the receipt?"
            },
            {
              "s": 1,
              "t": "はい、これです。サイズが合わなくて。",
              "r": "Hai, kore desu. Saizu ga awanakute.",
              "e": "Yes, here it is. The size didn't fit."
            },
            {
              "s": 0,
              "t": "そうでしたか。交換もできますよ。",
              "r": "Sō deshita ka. Kōkan mo dekimasu yo.",
              "e": "I see. We can also exchange it, you know."
            },
            {
              "s": 1,
              "t": "じゃあ、大きいサイズはありますか。",
              "r": "Jā, ōkii saizu wa arimasu ka.",
              "e": "In that case, do you have a bigger size?"
            },
            {
              "s": 0,
              "t": "少々お待ちください。確認します。",
              "r": "Shōshō omachi kudasai. Kakunin shimasu.",
              "e": "One moment please. I'll check."
            },
            {
              "s": 0,
              "t": "お待たせしました。こちら、Lサイズです。",
              "r": "Omatase shimashita. Kochira, eru saizu desu.",
              "e": "Thanks for waiting. Here's the L size."
            },
            {
              "s": 1,
              "t": "ちょうどいいです。これにします。",
              "r": "Chōdo ii desu. Kore ni shimasu.",
              "e": "It's just right. I'll take this one."
            },
            {
              "s": 0,
              "t": "ありがとうございます。交換ですね。",
              "r": "Arigatō gozaimasu. Kōkan desu ne.",
              "e": "Thank you. An exchange, then."
            }
          ],
          "vocab": [
            {
              "w": "返品",
              "r": "henpin",
              "m": "return (for refund)"
            },
            {
              "w": "交換",
              "r": "kōkan",
              "m": "exchange"
            },
            {
              "w": "レシート",
              "r": "reshīto",
              "m": "receipt"
            },
            {
              "w": "サイズが合う",
              "r": "saizu ga au",
              "m": "the size fits"
            },
            {
              "w": "確認する",
              "r": "kakunin suru",
              "m": "to check, confirm"
            },
            {
              "w": "ちょうどいい",
              "r": "chōdo ii",
              "m": "just right"
            }
          ]
        },
        {
          "scene": "Chatting in a kitchen",
          "title": "What's Your Favorite Food?",
          "speakers": [
            {
              "name": "Sara",
              "emoji": "🍳"
            },
            {
              "name": "You",
              "emoji": "🍜"
            }
          ],
          "note": "「手作り」(tezukuri) means 'homemade / made by hand' and carries warmth — saying someone's 手作り料理 is a real compliment. 「おふくろの味」(ofukuro no aji), literally 'mom's flavor', is a beloved phrase for the comforting taste of home cooking, though it's a bit more advanced.",
          "lines": [
            {
              "s": 0,
              "t": "好きな食べ物は何ですか。",
              "r": "Suki na tabemono wa nan desu ka.",
              "e": "What's your favorite food?"
            },
            {
              "s": 1,
              "t": "カレーが大好きです。よく作ります。",
              "r": "Karē ga daisuki desu. Yoku tsukurimasu.",
              "e": "I love curry. I make it a lot."
            },
            {
              "s": 0,
              "t": "へえ、手作りですか。すごいですね。",
              "r": "Hē, tezukuri desu ka. Sugoi desu ne.",
              "e": "Oh, homemade? That's impressive."
            },
            {
              "s": 1,
              "t": "簡単ですよ。サラさんは料理しますか。",
              "r": "Kantan desu yo. Sara-san wa ryōri shimasu ka.",
              "e": "It's easy, really. Do you cook, Sara?"
            },
            {
              "s": 0,
              "t": "たまに。母の味噌汁が一番好きです。",
              "r": "Tama ni. Haha no misoshiru ga ichiban suki desu.",
              "e": "Sometimes. I love my mom's miso soup best."
            },
            {
              "s": 1,
              "t": "いいですね。やっぱり家の味ですよね。",
              "r": "Ii desu ne. Yappari ie no aji desu yo ne.",
              "e": "Nice. There's nothing like home cooking."
            },
            {
              "s": 0,
              "t": "そうなんです。今度、作りましょうか。",
              "r": "Sō na-n desu. Kondo, tsukurimashō ka.",
              "e": "Exactly. Shall I make some for you sometime?"
            },
            {
              "s": 1,
              "t": "ぜひ!楽しみにしています。",
              "r": "Zehi! Tanoshimi ni shite imasu.",
              "e": "Please do! I'm looking forward to it."
            },
            {
              "s": 0,
              "t": "じゃあ、レシピも教えますね。",
              "r": "Jā, reshipi mo oshiemasu ne.",
              "e": "Then I'll teach you the recipe too."
            }
          ],
          "vocab": [
            {
              "w": "食べ物",
              "r": "tabemono",
              "m": "food"
            },
            {
              "w": "手作り",
              "r": "tezukuri",
              "m": "homemade, handmade"
            },
            {
              "w": "料理する",
              "r": "ryōri suru",
              "m": "to cook"
            },
            {
              "w": "味噌汁",
              "r": "misoshiru",
              "m": "miso soup"
            },
            {
              "w": "家の味",
              "r": "ie no aji",
              "m": "home cooking taste"
            },
            {
              "w": "楽しみにする",
              "r": "tanoshimi ni suru",
              "m": "to look forward to"
            }
          ]
        },
        {
          "scene": "At a friend's gathering",
          "title": "Nice to Meet You",
          "speakers": [
            {
              "name": "Taro",
              "emoji": "🙋"
            },
            {
              "name": "You",
              "emoji": "😊"
            }
          ],
          "note": "「はじめまして」(hajimemashite) is the set greeting for a first meeting, and 「よろしくお願いします」(yoroshiku onegai shimasu) closes the introduction — there's no exact English equivalent; it roughly means 'I look forward to getting along with you.' Saying 「〜から聞いています」('I've heard about you from…') is a warm, natural icebreaker.",
          "lines": [
            {
              "s": 0,
              "t": "はじめまして。タロウと申します。",
              "r": "Hajimemashite. Tarō to mōshimasu.",
              "e": "Nice to meet you. My name is Taro."
            },
            {
              "s": 1,
              "t": "はじめまして。よろしくお願いします。",
              "r": "Hajimemashite. Yoroshiku onegai shimasu.",
              "e": "Nice to meet you. I look forward to knowing you."
            },
            {
              "s": 0,
              "t": "ユカさんから、よく聞いていますよ。",
              "r": "Yuka-san kara, yoku kiite imasu yo.",
              "e": "I've heard a lot about you from Yuka."
            },
            {
              "s": 1,
              "t": "本当ですか。いい話だといいですけど。",
              "r": "Hontō desu ka. Ii hanashi da to ii desu kedo.",
              "e": "Really? I hope it was good things."
            },
            {
              "s": 0,
              "t": "もちろんです。お仕事は何ですか。",
              "r": "Mochiron desu. Oshigoto wa nan desu ka.",
              "e": "Of course. What do you do for work?"
            },
            {
              "s": 1,
              "t": "エンジニアです。タロウさんは?",
              "r": "Enjinia desu. Tarō-san wa?",
              "e": "I'm an engineer. How about you, Taro?"
            },
            {
              "s": 0,
              "t": "私は先生です。英語を教えています。",
              "r": "Watashi wa sensei desu. Eigo o oshiete imasu.",
              "e": "I'm a teacher. I teach English."
            },
            {
              "s": 1,
              "t": "わあ、すごいですね。お話、楽しいです。",
              "r": "Wā, sugoi desu ne. Ohanashi, tanoshii desu.",
              "e": "Wow, that's great. It's fun talking with you."
            },
            {
              "s": 0,
              "t": "こちらこそ。また会いましょうね。",
              "r": "Kochira koso. Mata aimashō ne.",
              "e": "Likewise. Let's meet again sometime."
            }
          ],
          "vocab": [
            {
              "w": "はじめまして",
              "r": "hajimemashite",
              "m": "nice to meet you"
            },
            {
              "w": "申します",
              "r": "mōshimasu",
              "m": "my name is (humble)"
            },
            {
              "w": "よろしくお願いします",
              "r": "yoroshiku onegai shimasu",
              "m": "please treat me well"
            },
            {
              "w": "仕事",
              "r": "shigoto",
              "m": "work, job"
            },
            {
              "w": "教える",
              "r": "oshieru",
              "m": "to teach"
            },
            {
              "w": "こちらこそ",
              "r": "kochira koso",
              "m": "likewise; same here"
            }
          ]
        },
        {
          "scene": "At a house party",
          "title": "Small Talk at a Party",
          "speakers": [
            {
              "name": "Yuki",
              "emoji": "🍷"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「〜さんのお友達ですか?」(Are you ~'s friend?) is the go-to icebreaker at parties. Japanese small talk often starts by finding your mutual connection to the host, rather than asking direct personal questions right away.",
          "lines": [
            {
              "s": 0,
              "t": "こんばんは。はじめまして。",
              "r": "Konbanwa. Hajimemashite.",
              "e": "Good evening. Nice to meet you."
            },
            {
              "s": 1,
              "t": "はじめまして。来てくれて、ありがとうございます。",
              "r": "Hajimemashite. Kite kurete, arigatō gozaimasu.",
              "e": "Nice to meet you. Thanks for coming."
            },
            {
              "s": 0,
              "t": "ケンさんのお友達ですか?",
              "r": "Ken-san no otomodachi desu ka?",
              "e": "Are you a friend of Ken's?"
            },
            {
              "s": 1,
              "t": "はい、大学の友達です。あなたは?",
              "r": "Hai, daigaku no tomodachi desu. Anata wa?",
              "e": "Yes, we're friends from university. And you?"
            },
            {
              "s": 0,
              "t": "私は会社の同僚です。料理、おいしいですね。",
              "r": "Watashi wa kaisha no dōryō desu. Ryōri, oishii desu ne.",
              "e": "I'm a coworker from his company. The food is delicious, isn't it?"
            },
            {
              "s": 1,
              "t": "本当に。このピザ、もう食べましたか?",
              "r": "Hontō ni. Kono piza, mō tabemashita ka?",
              "e": "Really. Have you tried this pizza yet?"
            },
            {
              "s": 0,
              "t": "まだです。じゃあ、いただきますね。",
              "r": "Mada desu. Jā, itadakimasu ne.",
              "e": "Not yet. Okay, I'll have some then."
            },
            {
              "s": 1,
              "t": "どうぞ、どうぞ。飲み物もありますよ。",
              "r": "Dōzo, dōzo. Nomimono mo arimasu yo.",
              "e": "Go ahead, go ahead. There are drinks too."
            },
            {
              "s": 0,
              "t": "ありがとうございます。楽しいパーティーですね。",
              "r": "Arigatō gozaimasu. Tanoshii pātī desu ne.",
              "e": "Thank you. This is a fun party."
            }
          ],
          "vocab": [
            {
              "w": "はじめまして",
              "r": "hajimemashite",
              "m": "nice to meet you (first time)"
            },
            {
              "w": "同僚",
              "r": "dōryō",
              "m": "coworker, colleague"
            },
            {
              "w": "おいしい",
              "r": "oishii",
              "m": "delicious, tasty"
            },
            {
              "w": "飲み物",
              "r": "nomimono",
              "m": "drink, beverage"
            },
            {
              "w": "どうぞ",
              "r": "dōzo",
              "m": "go ahead; please (offering)"
            },
            {
              "w": "楽しい",
              "r": "tanoshii",
              "m": "fun, enjoyable"
            }
          ]
        },
        {
          "scene": "At the office",
          "title": "Help Before the Deadline",
          "speakers": [
            {
              "name": "Tanaka",
              "emoji": "💼"
            },
            {
              "name": "You",
              "emoji": "😣"
            }
          ],
          "note": "「すみません」isn't only \"sorry\" — at work it's also how you politely get someone's attention before a request, like \"excuse me.\" And softening a request with 「ちょっと」(a little) makes it sound much more natural and less pushy.",
          "lines": [
            {
              "s": 1,
              "t": "田中さん、すみません。今、ちょっといいですか?",
              "r": "Tanaka-san, sumimasen. Ima, chotto ii desu ka?",
              "e": "Tanaka, excuse me. Do you have a minute right now?"
            },
            {
              "s": 0,
              "t": "はい、大丈夫ですよ。どうしましたか?",
              "r": "Hai, daijōbu desu yo. Dō shimashita ka?",
              "e": "Sure, no problem. What's up?"
            },
            {
              "s": 1,
              "t": "この資料、明日までなんです。手伝ってもらえますか?",
              "r": "Kono shiryō, ashita made nan desu. Tetsudatte moraemasu ka?",
              "e": "These documents are due tomorrow. Could you help me?"
            },
            {
              "s": 0,
              "t": "もちろんです。何をすればいいですか?",
              "r": "Mochiron desu. Nani o sureba ii desu ka?",
              "e": "Of course. What should I do?"
            },
            {
              "s": 1,
              "t": "このグラフを作ってもらえると、助かります。",
              "r": "Kono gurafu o tsukutte moraeru to, tasukarimasu.",
              "e": "If you could make this graph, it would really help me."
            },
            {
              "s": 0,
              "t": "わかりました。何時までに必要ですか?",
              "r": "Wakarimashita. Nanji made ni hitsuyō desu ka?",
              "e": "Got it. By what time do you need it?"
            },
            {
              "s": 1,
              "t": "今日の五時までにお願いします。",
              "r": "Kyō no goji made ni onegai shimasu.",
              "e": "By five o'clock today, please."
            },
            {
              "s": 0,
              "t": "大丈夫です。すぐに始めますね。",
              "r": "Daijōbu desu. Sugu ni hajimemasu ne.",
              "e": "No problem. I'll start right away."
            },
            {
              "s": 1,
              "t": "本当にありがとうございます。助かりました。",
              "r": "Hontō ni arigatō gozaimasu. Tasukarimashita.",
              "e": "Thank you so much. You're a lifesaver."
            }
          ],
          "vocab": [
            {
              "w": "資料",
              "r": "shiryō",
              "m": "documents, materials"
            },
            {
              "w": "手伝う",
              "r": "tetsudau",
              "m": "to help, to assist"
            },
            {
              "w": "助かります",
              "r": "tasukarimasu",
              "m": "that helps me (a lot)"
            },
            {
              "w": "必要",
              "r": "hitsuyō",
              "m": "necessary, needed"
            },
            {
              "w": "すぐに",
              "r": "sugu ni",
              "m": "right away, immediately"
            },
            {
              "w": "お願いします",
              "r": "onegai shimasu",
              "m": "please (when requesting)"
            }
          ]
        },
        {
          "scene": "At a cafe with a friend",
          "title": "My Weekend",
          "speakers": [
            {
              "name": "Mika",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "😄"
            }
          ],
          "note": "「いいなあ」(stretched out, with the long あ) is what you say when you're a little envious in a friendly way — like \"lucky you / I'm jealous.\" The drawn-out vowel carries the feeling, so don't clip it short.",
          "lines": [
            {
              "s": 0,
              "t": "週末、どうでしたか?",
              "r": "Shūmatsu, dō deshita ka?",
              "e": "How was your weekend?"
            },
            {
              "s": 1,
              "t": "すごく楽しかったです!海に行きました。",
              "r": "Sugoku tanoshikatta desu! Umi ni ikimashita.",
              "e": "It was so much fun! I went to the beach."
            },
            {
              "s": 0,
              "t": "いいなあ。天気はよかったですか?",
              "r": "Ii nā. Tenki wa yokatta desu ka?",
              "e": "Lucky you. Was the weather nice?"
            },
            {
              "s": 1,
              "t": "はい、晴れていました。それから、おいしい魚も食べました。",
              "r": "Hai, harete imashita. Sorekara, oishii sakana mo tabemashita.",
              "e": "Yes, it was sunny. And I also ate some delicious fish."
            },
            {
              "s": 0,
              "t": "へえ、いいですね!誰と行ったんですか?",
              "r": "Hē, ii desu ne! Dare to itta n desu ka?",
              "e": "Oh, nice! Who did you go with?"
            },
            {
              "s": 1,
              "t": "妹と行きました。久しぶりに会ったんです。",
              "r": "Imōto to ikimashita. Hisashiburi ni atta n desu.",
              "e": "I went with my little sister. It had been a while since we'd met."
            },
            {
              "s": 0,
              "t": "それはよかったですね。写真、ありますか?",
              "r": "Sore wa yokatta desu ne. Shashin, arimasu ka?",
              "e": "That's great. Do you have any photos?"
            },
            {
              "s": 1,
              "t": "ありますよ。これ、見てください。",
              "r": "Arimasu yo. Kore, mite kudasai.",
              "e": "I do. Here, take a look at this."
            },
            {
              "s": 0,
              "t": "わあ、きれい!私も今度行きたいです。",
              "r": "Wā, kirei! Watashi mo kondo ikitai desu.",
              "e": "Wow, beautiful! I want to go sometime too."
            }
          ],
          "vocab": [
            {
              "w": "週末",
              "r": "shūmatsu",
              "m": "weekend"
            },
            {
              "w": "海",
              "r": "umi",
              "m": "sea, beach"
            },
            {
              "w": "晴れる",
              "r": "hareru",
              "m": "to be sunny, clear up"
            },
            {
              "w": "久しぶり",
              "r": "hisashiburi",
              "m": "after a long time"
            },
            {
              "w": "写真",
              "r": "shashin",
              "m": "photo, picture"
            },
            {
              "w": "今度",
              "r": "kondo",
              "m": "next time, sometime soon"
            }
          ]
        },
        {
          "scene": "At a dog park",
          "title": "Gushing About Pets",
          "speakers": [
            {
              "name": "Sato",
              "emoji": "🐕"
            },
            {
              "name": "You",
              "emoji": "🥰"
            }
          ],
          "note": "Japanese pet owners add 「〜ちゃん」to a pet's name as a cute, affectionate suffix (like ポチちゃん). Also, the standard polite way to ask a dog's age or details is the same 「何歳ですか?」you'd use for a person.",
          "lines": [
            {
              "s": 0,
              "t": "かわいい犬ですね!何歳ですか?",
              "r": "Kawaii inu desu ne! Nansai desu ka?",
              "e": "What a cute dog! How old is he?"
            },
            {
              "s": 1,
              "t": "ありがとうございます。三歳です。",
              "r": "Arigatō gozaimasu. Sansai desu.",
              "e": "Thank you. He's three years old."
            },
            {
              "s": 0,
              "t": "うちの犬も三歳です!名前は何ですか?",
              "r": "Uchi no inu mo sansai desu! Namae wa nan desu ka?",
              "e": "My dog is three too! What's his name?"
            },
            {
              "s": 1,
              "t": "ポチです。とても元気な子なんです。",
              "r": "Pochi desu. Totemo genki na ko nan desu.",
              "e": "It's Pochi. He's a really energetic little guy."
            },
            {
              "s": 0,
              "t": "いいですね。毎日散歩しますか?",
              "r": "Ii desu ne. Mainichi sanpo shimasu ka?",
              "e": "That's nice. Do you walk him every day?"
            },
            {
              "s": 1,
              "t": "はい、朝と夜、二回します。散歩が大好きなんです。",
              "r": "Hai, asa to yoru, nikai shimasu. Sanpo ga daisuki nan desu.",
              "e": "Yes, twice a day, morning and night. He loves his walks."
            },
            {
              "s": 0,
              "t": "うちの子も同じです。本当にかわいいですよね。",
              "r": "Uchi no ko mo onaji desu. Hontō ni kawaii desu yo ne.",
              "e": "Mine's the same. They're just so adorable, aren't they?"
            },
            {
              "s": 1,
              "t": "本当に。家族みたいなものですから。",
              "r": "Hontō ni. Kazoku mitai na mono desu kara.",
              "e": "Truly. They're like family, after all."
            },
            {
              "s": 0,
              "t": "そうですね。今度、一緒に散歩しましょう。",
              "r": "Sō desu ne. Kondo, issho ni sanpo shimashō.",
              "e": "I agree. Let's walk them together sometime."
            }
          ],
          "vocab": [
            {
              "w": "犬",
              "r": "inu",
              "m": "dog"
            },
            {
              "w": "何歳",
              "r": "nansai",
              "m": "how old (age)"
            },
            {
              "w": "元気",
              "r": "genki",
              "m": "energetic, healthy"
            },
            {
              "w": "散歩",
              "r": "sanpo",
              "m": "a walk, stroll"
            },
            {
              "w": "大好き",
              "r": "daisuki",
              "m": "to really love, adore"
            },
            {
              "w": "家族",
              "r": "kazoku",
              "m": "family"
            }
          ]
        },
        {
          "scene": "Outside a concert venue",
          "title": "Tickets and a Show",
          "speakers": [
            {
              "name": "Ren",
              "emoji": "🎤"
            },
            {
              "name": "You",
              "emoji": "🎟️"
            }
          ],
          "note": "For concerts, 「チケット、取れた?」literally \"Did you manage to get the ticket?\" — Japanese uses 取る (to take/grab) for landing hard-to-get tickets, not 買う (to buy). It captures the idea that popular shows sell out fast.",
          "lines": [
            {
              "s": 0,
              "t": "チケット、取れましたか?",
              "r": "Chiketto, toremashita ka?",
              "e": "Did you manage to get the tickets?"
            },
            {
              "s": 1,
              "t": "はい、二枚取れました。いい席ですよ。",
              "r": "Hai, nimai toremashita. Ii seki desu yo.",
              "e": "Yes, I got two. They're good seats."
            },
            {
              "s": 0,
              "t": "やった!いくらでしたか?",
              "r": "Yatta! Ikura deshita ka?",
              "e": "Yes! How much were they?"
            },
            {
              "s": 1,
              "t": "一枚六千円でした。ちょっと高かったです。",
              "r": "Ichimai rokusen-en deshita. Chotto takakatta desu.",
              "e": "Six thousand yen each. A little pricey."
            },
            {
              "s": 0,
              "t": "でも、楽しみですね。何時に始まりますか?",
              "r": "Demo, tanoshimi desu ne. Nanji ni hajimarimasu ka?",
              "e": "But it'll be exciting. What time does it start?"
            },
            {
              "s": 1,
              "t": "七時です。早めに行きましょう。",
              "r": "Shichiji desu. Hayame ni ikimashō.",
              "e": "Seven o'clock. Let's go a bit early."
            },
            {
              "s": 0,
              "t": "そうですね。中で何か飲みませんか?",
              "r": "Sō desu ne. Naka de nanika nomimasen ka?",
              "e": "Sounds good. Shall we get something to drink inside?"
            },
            {
              "s": 1,
              "t": "いいですね。じゃあ、入りましょう。",
              "r": "Ii desu ne. Jā, hairimashō.",
              "e": "Good idea. Okay, let's go in."
            },
            {
              "s": 0,
              "t": "わくわくしますね!",
              "r": "Wakuwaku shimasu ne!",
              "e": "I'm so excited!"
            }
          ],
          "vocab": [
            {
              "w": "チケット",
              "r": "chiketto",
              "m": "ticket"
            },
            {
              "w": "席",
              "r": "seki",
              "m": "seat"
            },
            {
              "w": "高い",
              "r": "takai",
              "m": "expensive; high"
            },
            {
              "w": "楽しみ",
              "r": "tanoshimi",
              "m": "looking forward to it"
            },
            {
              "w": "始まる",
              "r": "hajimaru",
              "m": "to begin, start"
            },
            {
              "w": "わくわく",
              "r": "wakuwaku",
              "m": "excited, thrilled"
            }
          ]
        },
        {
          "scene": "At the station after hanging out",
          "title": "See You Soon",
          "speakers": [
            {
              "name": "Aoi",
              "emoji": "👋"
            },
            {
              "name": "You",
              "emoji": "😊"
            }
          ],
          "note": "「気をつけて」(take care / get home safe) is the warm, standard thing to say at parting, especially at night. And 「また連絡しますね」(I'll be in touch) functions as a soft promise to stay in touch — friends say it almost every time.",
          "lines": [
            {
              "s": 0,
              "t": "今日は本当に楽しかったです。",
              "r": "Kyō wa hontō ni tanoshikatta desu.",
              "e": "Today was really fun."
            },
            {
              "s": 1,
              "t": "私もです。また会いましょうね。",
              "r": "Watashi mo desu. Mata aimashō ne.",
              "e": "Me too. Let's meet again."
            },
            {
              "s": 0,
              "t": "ぜひ!来週はどうですか?",
              "r": "Zehi! Raishū wa dō desu ka?",
              "e": "Definitely! How about next week?"
            },
            {
              "s": 1,
              "t": "いいですね。また連絡しますね。",
              "r": "Ii desu ne. Mata renraku shimasu ne.",
              "e": "Sounds good. I'll get in touch with you."
            },
            {
              "s": 0,
              "t": "はい、待っています。もう遅いですね。",
              "r": "Hai, matte imasu. Mō osoi desu ne.",
              "e": "Yes, I'll be waiting. It's getting late, huh."
            },
            {
              "s": 1,
              "t": "そうですね。電車、大丈夫ですか?",
              "r": "Sō desu ne. Densha, daijōbu desu ka?",
              "e": "Yeah. Are you okay for your train?"
            },
            {
              "s": 0,
              "t": "大丈夫です。あなたも気をつけて帰ってください。",
              "r": "Daijōbu desu. Anata mo ki o tsukete kaette kudasai.",
              "e": "I'm fine. You get home safe too."
            },
            {
              "s": 1,
              "t": "ありがとうございます。じゃあ、また明日。",
              "r": "Arigatō gozaimasu. Jā, mata ashita.",
              "e": "Thank you. Well, see you tomorrow."
            },
            {
              "s": 0,
              "t": "はい、また明日!おやすみなさい。",
              "r": "Hai, mata ashita! Oyasuminasai.",
              "e": "Yes, see you tomorrow! Good night."
            }
          ],
          "vocab": [
            {
              "w": "また会いましょう",
              "r": "mata aimashō",
              "m": "let's meet again"
            },
            {
              "w": "来週",
              "r": "raishū",
              "m": "next week"
            },
            {
              "w": "連絡する",
              "r": "renraku suru",
              "m": "to contact, get in touch"
            },
            {
              "w": "電車",
              "r": "densha",
              "m": "train"
            },
            {
              "w": "気をつけて",
              "r": "ki o tsukete",
              "m": "take care, be safe"
            },
            {
              "w": "おやすみなさい",
              "r": "oyasuminasai",
              "m": "good night"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "scene": "At a cafe counter",
          "title": "Coffee to Go",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「ホットで」 / 「アイスで」 (hotto de / aisu de) is the standard quick way to specify hot or iced — you just attach 「で」 and drop the rest. Saying 「テイクアウトで」 or the trendier 「持ち帰りで」 tells them it's to-go; if you stay you'd say 「店内で」(tennai de).",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませ。ご注文お決まりですか?",
              "r": "Irasshaimase. Go-chūmon o-kimari desu ka?",
              "e": "Welcome! Are you ready to order?"
            },
            {
              "s": 1,
              "t": "あ、ホットのカフェラテを一つください。",
              "r": "A, hotto no kafe rate o hitotsu kudasai.",
              "e": "Oh, one hot cafe latte, please."
            },
            {
              "s": 0,
              "t": "サイズはいかがなさいますか?",
              "r": "Saizu wa ikaga nasaimasu ka?",
              "e": "What size would you like?"
            },
            {
              "s": 1,
              "t": "Mサイズで。あ、持ち帰りでお願いします。",
              "r": "Emu saizu de. A, mochikaeri de onegai shimasu.",
              "e": "Medium. Oh, and to go, please."
            },
            {
              "s": 0,
              "t": "かしこまりました。他にご注文は?",
              "r": "Kashikomarimashita. Hoka ni go-chūmon wa?",
              "e": "Got it. Anything else?"
            },
            {
              "s": 1,
              "t": "うーん、じゃあクッキーも一つ。",
              "r": "Ūn, jā kukkii mo hitotsu.",
              "e": "Hmm, then a cookie too."
            },
            {
              "s": 0,
              "t": "以上でよろしいですか? 600円になります。",
              "r": "Ijō de yoroshii desu ka? Roppyaku-en ni narimasu.",
              "e": "Is that everything? That'll be 600 yen."
            },
            {
              "s": 1,
              "t": "はい。あ、PayPayで払えます?",
              "r": "Hai. A, PeiPei de haraemasu?",
              "e": "Yes. Oh, can I pay with PayPay?"
            },
            {
              "s": 0,
              "t": "もちろんです。こちらでどうぞ。",
              "r": "Mochiron desu. Kochira de dōzo.",
              "e": "Of course. Right here, please."
            },
            {
              "s": 1,
              "t": "どうも。ありがとうございます。",
              "r": "Dōmo. Arigatō gozaimasu.",
              "e": "Thanks so much."
            }
          ],
          "vocab": [
            {
              "w": "持ち帰り",
              "r": "mochikaeri",
              "m": "takeout, to go"
            },
            {
              "w": "ホット",
              "r": "hotto",
              "m": "hot (drink)"
            },
            {
              "w": "ご注文",
              "r": "go-chūmon",
              "m": "order (polite)"
            },
            {
              "w": "かしこまりました",
              "r": "kashikomarimashita",
              "m": "certainly / understood (polite)"
            },
            {
              "w": "以上",
              "r": "ijō",
              "m": "that's all / the above"
            },
            {
              "w": "払う",
              "r": "harau",
              "m": "to pay"
            }
          ]
        },
        {
          "scene": "On a city street",
          "title": "Where's the Station?",
          "speakers": [
            {
              "name": "Passerby",
              "emoji": "🧑"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "When stopping a stranger, opening with 「すみません」 alone is enough — adding 「ちょっと道を伺いたいんですけど」(I'd like to ask the way) sounds polite but natural. Locals almost always describe distance by 「〜分くらい」 (about X minutes) rather than meters.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、ちょっと道を伺いたいんですけど。",
              "r": "Sumimasen, chotto michi o ukagaitai n desu kedo.",
              "e": "Excuse me, I'd like to ask for directions."
            },
            {
              "s": 0,
              "t": "はい、どちらまで?",
              "r": "Hai, dochira made?",
              "e": "Sure, where to?"
            },
            {
              "s": 1,
              "t": "駅に行きたいんですけど、ここからどう行けばいいですか?",
              "r": "Eki ni ikitai n desu kedo, koko kara dō ikeba ii desu ka?",
              "e": "I want to go to the station — how do I get there from here?"
            },
            {
              "s": 0,
              "t": "あー、駅ね。この道をまっすぐ行って、二つ目の信号を右です。",
              "r": "Ā, eki ne. Kono michi o massugu itte, futatsu-me no shingō o migi desu.",
              "e": "Ah, the station. Go straight down this road and turn right at the second light."
            },
            {
              "s": 1,
              "t": "二つ目の信号を右、ですね。歩いてどのくらいですか?",
              "r": "Futatsu-me no shingō o migi, desu ne. Aruite dono kurai desu ka?",
              "e": "Right at the second light, got it. How long is it on foot?"
            },
            {
              "s": 0,
              "t": "そうですね、五分くらいかな。すぐ見えますよ。",
              "r": "Sō desu ne, go-fun kurai kana. Sugu miemasu yo.",
              "e": "Let's see, about five minutes. You'll see it right away."
            },
            {
              "s": 1,
              "t": "助かります! 改札って一つだけですか?",
              "r": "Tasukarimasu! Kaisatsu tte hitotsu dake desu ka?",
              "e": "That helps! Is there just one ticket gate?"
            },
            {
              "s": 0,
              "t": "いや、北口と南口がありますけど、まあどっちでも大丈夫ですよ。",
              "r": "Iya, kitaguchi to minamiguchi ga arimasu kedo, mā docchi demo daijōbu desu yo.",
              "e": "No, there's a north and south exit, but either one's fine."
            },
            {
              "s": 1,
              "t": "なるほど。本当にありがとうございます!",
              "r": "Naruhodo. Hontō ni arigatō gozaimasu!",
              "e": "I see. Thank you so much!"
            },
            {
              "s": 0,
              "t": "いえいえ、気をつけて。",
              "r": "Ie ie, ki o tsukete.",
              "e": "No problem, take care."
            }
          ],
          "vocab": [
            {
              "w": "伺う",
              "r": "ukagau",
              "m": "to ask (humble)"
            },
            {
              "w": "まっすぐ",
              "r": "massugu",
              "m": "straight ahead"
            },
            {
              "w": "信号",
              "r": "shingō",
              "m": "traffic light"
            },
            {
              "w": "改札",
              "r": "kaisatsu",
              "m": "ticket gate"
            },
            {
              "w": "助かります",
              "r": "tasukarimasu",
              "m": "that's a big help"
            },
            {
              "w": "気をつけて",
              "r": "ki o tsukete",
              "m": "take care"
            }
          ]
        },
        {
          "scene": "At the office Monday morning",
          "title": "Monday Morning Chat",
          "speakers": [
            {
              "name": "Saki",
              "emoji": "👩"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「だるい」(darui) literally means sluggish/heavy-bodied, but Japanese people use it constantly for that 'ugh, I don't wanna' Monday feeling. 「サザエさん症候群」(Sazae-san shōkōgun) is a real slang term for Sunday-evening dread, named after the anime that airs Sunday nights.",
          "lines": [
            {
              "s": 0,
              "t": "おはよう。うわ、月曜の朝ってホントだるいよね。",
              "r": "Ohayō. Uwa, getsuyō no asa tte honto darui yo ne.",
              "e": "Morning. Ugh, Monday mornings are seriously rough, huh."
            },
            {
              "s": 1,
              "t": "わかる。週末あっという間だったわ。",
              "r": "Wakaru. Shūmatsu atto iu ma datta wa.",
              "e": "Totally. The weekend flew by."
            },
            {
              "s": 0,
              "t": "ね。何してたの、週末?",
              "r": "Ne. Nani shiteta no, shūmatsu?",
              "e": "Right? What'd you do over the weekend?"
            },
            {
              "s": 1,
              "t": "ずっと家でゴロゴロしてた。雨だったし。",
              "r": "Zutto ie de gorogoro shiteta. Ame datta shi.",
              "e": "Just lazed around at home the whole time. It was raining anyway."
            },
            {
              "s": 0,
              "t": "あー、土曜すごい降ってたよね。洗濯物乾かなくて最悪。",
              "r": "Ā, doyō sugoi futteta yo ne. Sentakumono kawakanakute saiaku.",
              "e": "Oh yeah, it poured Saturday. My laundry wouldn't dry — the worst."
            },
            {
              "s": 1,
              "t": "だよね。でも今日は晴れてよかったよ。",
              "r": "Da yo ne. Demo kyō wa harete yokatta yo.",
              "e": "Right? But at least it's sunny today."
            },
            {
              "s": 0,
              "t": "ほんとそれ。あ、そういえば例の件、進んだ?",
              "r": "Honto sore. A, sō ieba rei no ken, susunda?",
              "e": "Seriously. Oh, by the way, did that thing move forward?"
            },
            {
              "s": 1,
              "t": "あー、それさ、午後にちょっと話そ。",
              "r": "Ā, sore sa, gogo ni chotto hanaso.",
              "e": "Ah, that — let's talk about it a bit this afternoon."
            },
            {
              "s": 0,
              "t": "了解。じゃ、とりあえずコーヒー入れてくる。",
              "r": "Ryōkai. Ja, toriaezu kōhii irete kuru.",
              "e": "Got it. Anyway, I'm gonna go grab a coffee."
            },
            {
              "s": 1,
              "t": "あ、私の分も!",
              "r": "A, watashi no bun mo!",
              "e": "Oh, one for me too!"
            }
          ],
          "vocab": [
            {
              "w": "だるい",
              "r": "darui",
              "m": "sluggish, can't be bothered"
            },
            {
              "w": "あっという間",
              "r": "atto iu ma",
              "m": "in the blink of an eye"
            },
            {
              "w": "ゴロゴロする",
              "r": "gorogoro suru",
              "m": "to lounge around"
            },
            {
              "w": "最悪",
              "r": "saiaku",
              "m": "the worst, terrible"
            },
            {
              "w": "そういえば",
              "r": "sō ieba",
              "m": "by the way, that reminds me"
            },
            {
              "w": "とりあえず",
              "r": "toriaezu",
              "m": "for now, first of all"
            }
          ]
        },
        {
          "scene": "Texting / chatting with a friend",
          "title": "New Restaurant Plans",
          "speakers": [
            {
              "name": "Yuto",
              "emoji": "🧑"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「気になってた」(ki ni natteta) means 'I'd had my eye on it / been curious about it' — the go-to phrase for a place you've been wanting to try. To suggest making a reservation casually, 「予約しとく?」 uses the contracted 〜しとく (from 〜しておく, 'do in advance').",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、今週末ヒマ? どっか行かない?",
              "r": "Nē, konshūmatsu hima? Dokka ikanai?",
              "e": "Hey, you free this weekend? Wanna go somewhere?"
            },
            {
              "s": 1,
              "t": "いいね! 駅前に新しくできたお店、知ってる?",
              "r": "Ii ne! Ekimae ni atarashiku dekita o-mise, shitteru?",
              "e": "Sounds good! You know that new place that opened by the station?"
            },
            {
              "s": 0,
              "t": "あー、あのイタリアン? ずっと気になってた!",
              "r": "Ā, ano itarian? Zutto ki ni natteta!",
              "e": "Oh, that Italian place? I've been dying to try it!"
            },
            {
              "s": 1,
              "t": "だよね。インスタで見たけど、すごい美味しそうだった。",
              "r": "Da yo ne. Insuta de mita kedo, sugoi oishisō datta.",
              "e": "Right? I saw it on Insta — it looked so good."
            },
            {
              "s": 0,
              "t": "行こ行こ! 土曜の夜とかどう?",
              "r": "Iko iko! Doyō no yoru toka dō?",
              "e": "Let's go! How about Saturday night?"
            },
            {
              "s": 1,
              "t": "土曜いいよ。でも人気だから混みそうじゃない?",
              "r": "Doyō ii yo. Demo ninki dakara komisō ja nai?",
              "e": "Saturday works. But it's popular, won't it be packed?"
            },
            {
              "s": 0,
              "t": "たしかに。じゃ予約しとくわ。何時くらいがいい?",
              "r": "Tashika ni. Ja yoyaku shitoku wa. Nanji kurai ga ii?",
              "e": "True. I'll make a reservation then. What time works?"
            },
            {
              "s": 1,
              "t": "七時くらいかな。じゃあ駅で待ち合わせね。",
              "r": "Shichi-ji kurai kana. Jā eki de machiawase ne.",
              "e": "Around seven, I guess. Let's meet up at the station then."
            },
            {
              "s": 0,
              "t": "オッケー! 楽しみー!",
              "r": "Okkē! Tanoshimī!",
              "e": "Okay! Can't wait!"
            },
            {
              "s": 1,
              "t": "うん、楽しみ! また連絡するね。",
              "r": "Un, tanoshimi! Mata renraku suru ne.",
              "e": "Yeah, looking forward to it! I'll be in touch."
            }
          ],
          "vocab": [
            {
              "w": "ヒマ",
              "r": "hima",
              "m": "free time, not busy"
            },
            {
              "w": "気になる",
              "r": "ki ni naru",
              "m": "to be curious about / have one's eye on"
            },
            {
              "w": "混む",
              "r": "komu",
              "m": "to get crowded"
            },
            {
              "w": "予約しとく",
              "r": "yoyaku shitoku",
              "m": "to make a reservation in advance"
            },
            {
              "w": "待ち合わせ",
              "r": "machiawase",
              "m": "meeting up (arranged spot)"
            },
            {
              "w": "楽しみ",
              "r": "tanoshimi",
              "m": "looking forward to it"
            }
          ]
        },
        {
          "scene": "Chatting about a TV show",
          "title": "That Drama Finale",
          "speakers": [
            {
              "name": "Mei",
              "emoji": "👩"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「神回」(kamikai), literally 'god episode,' is fan slang for an absolutely amazing episode. For 'no spoilers' Japanese fans say 「ネタバレ」(netabare) — and warning someone with 「ネタバレ注意!」 before discussing is common online etiquette.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、昨日のドラマの最終回、見た?!",
              "r": "Nē, kinō no dorama no saishūkai, mita?!",
              "e": "Hey, did you watch the drama finale last night?!"
            },
            {
              "s": 1,
              "t": "見た見た! やばかったよね、あの展開!",
              "r": "Mita mita! Yabakatta yo ne, ano tenkai!",
              "e": "I did, I did! That twist was insane, right?!"
            },
            {
              "s": 0,
              "t": "ほんと神回だったわ。最後ちょっと泣いちゃった。",
              "r": "Honto kamikai datta wa. Saigo chotto naichatta.",
              "e": "It was honestly a god-tier episode. I cried a little at the end."
            },
            {
              "s": 1,
              "t": "わかる! まさか二人があんなことになるとはね。",
              "r": "Wakaru! Masaka futari ga anna koto ni naru to wa ne.",
              "e": "I get it! I never expected those two to end up like that."
            },
            {
              "s": 0,
              "t": "ね! 全然予想できなかった。脚本すごくない?",
              "r": "Ne! Zenzen yosō dekinakatta. Kyakuhon sugoku nai?",
              "e": "Right! I totally didn't see it coming. The writing's amazing, isn't it?"
            },
            {
              "s": 1,
              "t": "すごい。っていうか、あの俳優の演技ヤバすぎ。",
              "r": "Sugoi. Tte iu ka, ano haiyū no engi yaba sugi.",
              "e": "It is. I mean, that actor's performance was just too good."
            },
            {
              "s": 0,
              "t": "それな! 続編やってほしいよね、絶対。",
              "r": "Sore na! Zokuhen yatte hoshii yo ne, zettai.",
              "e": "Exactly! I definitely want them to do a sequel."
            },
            {
              "s": 1,
              "t": "やってほしい! もう一回最初から見直そうかな。",
              "r": "Yatte hoshii! Mō ikkai saisho kara minaosō kana.",
              "e": "Same! Maybe I'll rewatch the whole thing from the start."
            },
            {
              "s": 0,
              "t": "いいね、一緒に見よ! 配信であるし。",
              "r": "Ii ne, issho ni miyo! Haishin de aru shi.",
              "e": "Nice, let's watch together! It's streaming anyway."
            },
            {
              "s": 1,
              "t": "やった、決まりね!",
              "r": "Yatta, kimari ne!",
              "e": "Yes, it's settled then!"
            }
          ],
          "vocab": [
            {
              "w": "最終回",
              "r": "saishūkai",
              "m": "final episode, finale"
            },
            {
              "w": "やばい",
              "r": "yabai",
              "m": "crazy/amazing (slang, good or bad)"
            },
            {
              "w": "神回",
              "r": "kamikai",
              "m": "an amazing episode ('god episode')"
            },
            {
              "w": "展開",
              "r": "tenkai",
              "m": "(plot) development, twist"
            },
            {
              "w": "それな",
              "r": "sore na",
              "m": "exactly, so true (slang agreement)"
            },
            {
              "w": "見直す",
              "r": "minaosu",
              "m": "to rewatch"
            }
          ]
        },
        {
          "scene": "Leaving the office for drinks",
          "title": "After-Work Drinks",
          "speakers": [
            {
              "name": "Ken",
              "emoji": "🧑"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「飲みに行く」(nomi ni iku) — going for drinks — is a core part of Japanese work culture. 「とりあえずビール」(toriaezu bīru, 'a beer to start') is the classic first order everyone defaults to, and 「お疲れ」(otsukare) doubles as both a greeting and a toast among coworkers.",
          "lines": [
            {
              "s": 0,
              "t": "お疲れー。今日このあと、ちょっと飲みに行かない?",
              "r": "Otsukarē. Kyō kono ato, chotto nomi ni ikanai?",
              "e": "Good work today. Wanna grab a drink after this?"
            },
            {
              "s": 1,
              "t": "お疲れ! いいね、行こ行こ。どこ行く?",
              "r": "Otsukare! Ii ne, iko iko. Doko iku?",
              "e": "Hey, good work! Sounds good, let's go. Where to?"
            },
            {
              "s": 0,
              "t": "駅前の居酒屋とかでいい? 安いし。",
              "r": "Ekimae no izakaya toka de ii? Yasui shi.",
              "e": "How about that izakaya by the station? It's cheap too."
            },
            {
              "s": 1,
              "t": "いいね。あそこの唐揚げ美味しいんだよね。",
              "r": "Ii ne. Asoko no karaage oishii n da yo ne.",
              "e": "Nice. Their fried chicken is so good."
            },
            {
              "s": 0,
              "t": "だよね! じゃ、とりあえずビールで乾杯しよ。",
              "r": "Da yo ne! Ja, toriaezu bīru de kanpai shiyo.",
              "e": "Right?! Then let's start with a beer and toast."
            },
            {
              "s": 1,
              "t": "いいねー。今日めっちゃ疲れたからビール染みるわ。",
              "r": "Ii nē. Kyō meccha tsukareta kara bīru shimiru wa.",
              "e": "Oh nice. I'm so worn out today, that beer's gonna hit the spot."
            },
            {
              "s": 0,
              "t": "わかる(笑)。終電まで飲もうぜ。",
              "r": "Wakaru (warai). Shūden made nomō ze.",
              "e": "Haha, I feel you. Let's drink till the last train."
            },
            {
              "s": 1,
              "t": "おいおい、明日も仕事だから(笑)。",
              "r": "Oi oi, ashita mo shigoto dakara (warai).",
              "e": "Hey hey, we've got work tomorrow too, lol."
            },
            {
              "s": 0,
              "t": "わかってるって。じゃ、行こ!",
              "r": "Wakatteru tte. Ja, iko!",
              "e": "I know, I know. Come on, let's go!"
            },
            {
              "s": 1,
              "t": "うん、お腹すいた! 早く行こ。",
              "r": "Un, onaka suita! Hayaku iko.",
              "e": "Yeah, I'm starving! Let's hurry."
            }
          ],
          "vocab": [
            {
              "w": "お疲れ",
              "r": "otsukare",
              "m": "good work (casual greeting/toast)"
            },
            {
              "w": "飲みに行く",
              "r": "nomi ni iku",
              "m": "to go out for drinks"
            },
            {
              "w": "居酒屋",
              "r": "izakaya",
              "m": "Japanese pub"
            },
            {
              "w": "とりあえずビール",
              "r": "toriaezu bīru",
              "m": "'a beer to start' (default first order)"
            },
            {
              "w": "染みる",
              "r": "shimiru",
              "m": "to hit the spot, sink in"
            },
            {
              "w": "終電",
              "r": "shūden",
              "m": "last train"
            }
          ]
        },
        {
          "scene": "On the street",
          "title": "Running into an old friend",
          "speakers": [
            {
              "name": "Yūta",
              "emoji": "😄"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「久しぶり」(hisashiburi, 'long time no see') is the go-to greeting after a gap. To stress how long, natives often double it casually — 「ひっさしぶり!」(stretching the first sound) — which sounds warmer and more surprised than the flat textbook version.",
          "lines": [
            {
              "s": 0,
              "t": "あれ、もしかして…ユウタ?",
              "r": "Are, moshikashite… Yūta?",
              "e": "Wait, is that… Yuta?"
            },
            {
              "s": 1,
              "t": "うわ、ひっさしぶり!何年ぶりだろ?",
              "r": "Uwa, hissashiburi! Nan-nen-buri daro?",
              "e": "Whoa, it's been forever! How many years has it been?"
            },
            {
              "s": 0,
              "t": "二年ぶりくらいじゃない?全然変わってないね。",
              "r": "Ni-nen-buri kurai ja nai? Zenzen kawattenai ne.",
              "e": "Like two years, right? You haven't changed at all."
            },
            {
              "s": 1,
              "t": "ほんと?最近この辺に引っ越してきてさ。",
              "r": "Honto? Saikin kono hen ni hikkoshite kite sa.",
              "e": "Really? I just moved to this area recently."
            },
            {
              "s": 0,
              "t": "まじで?近所じゃん!今なにしてるの?",
              "r": "Maji de? Kinjo jan! Ima nani shiteru no?",
              "e": "No way, we're neighbors then! So what are you up to these days?"
            },
            {
              "s": 1,
              "t": "去年転職してさ、今IT系で働いてる。",
              "r": "Kyonen tenshoku shite sa, ima IT-kei de hataraiteru.",
              "e": "I changed jobs last year, I'm in IT now."
            },
            {
              "s": 0,
              "t": "へえ、すごいじゃん。みんなとはまだ会ってる?",
              "r": "Hē, sugoi jan. Minna to wa mada atteru?",
              "e": "Oh nice! Do you still see the old crowd?"
            },
            {
              "s": 1,
              "t": "たまにね。今度みんなで集まろうよ。",
              "r": "Tama ni ne. Kondo minna de atsumarō yo.",
              "e": "Once in a while. Hey, let's all get together sometime."
            },
            {
              "s": 0,
              "t": "いいね!連絡先まだ同じ?あとでLINEするわ。",
              "r": "Ii ne! Renrakusaki mada onaji? Ato de LINE suru wa.",
              "e": "Sounds great! Same number? I'll message you on LINE later."
            },
            {
              "s": 1,
              "t": "うん、同じ同じ。じゃあ連絡待ってる!",
              "r": "Un, onaji onaji. Jā renraku matteru!",
              "e": "Yep, same as always. Cool, I'll wait to hear from you!"
            }
          ],
          "vocab": [
            {
              "w": "久しぶり",
              "r": "hisashiburi",
              "m": "long time no see"
            },
            {
              "w": "引っ越す",
              "r": "hikkosu",
              "m": "to move (house)"
            },
            {
              "w": "転職",
              "r": "tenshoku",
              "m": "changing jobs"
            },
            {
              "w": "〜じゃん",
              "r": "-jan",
              "m": "casual 'right?/isn't it'"
            },
            {
              "w": "集まる",
              "r": "atsumaru",
              "m": "to gather, get together"
            },
            {
              "w": "連絡先",
              "r": "renrakusaki",
              "m": "contact info"
            }
          ]
        },
        {
          "scene": "At a bar after work",
          "title": "Venting about a coworker",
          "speakers": [
            {
              "name": "Mai",
              "emoji": "🍺"
            },
            {
              "name": "You",
              "emoji": "😤"
            }
          ],
          "note": "「ありえない」(arienai, lit. 'impossible/unbelievable') is the everyday word for 'that's not okay / I can't even.' Natives use it constantly to react to outrageous behavior — much more natural than a literal 「信じられない」in casual venting.",
          "lines": [
            {
              "s": 1,
              "t": "ちょっと聞いてよ、今日まじでムカついた。",
              "r": "Chotto kiite yo, kyō maji de mukatsuita.",
              "e": "Ugh, listen to this — I was so pissed off today."
            },
            {
              "s": 0,
              "t": "どうしたの?また例の先輩?",
              "r": "Dō shita no? Mata rei no senpai?",
              "e": "What happened? That coworker again?"
            },
            {
              "s": 1,
              "t": "そう。私がやった仕事、自分の手柄にしてさ。",
              "r": "Sō. Watashi ga yatta shigoto, jibun no tegara ni shite sa.",
              "e": "Yeah. He took credit for the work I did."
            },
            {
              "s": 0,
              "t": "えー、ありえない。それ最低じゃん。",
              "r": "Ē, arienai. Sore saitei jan.",
              "e": "What? That's unbelievable. That's so low."
            },
            {
              "s": 1,
              "t": "しかもミスったときは私のせいにするし。",
              "r": "Shikamo misutta toki wa watashi no sei ni suru shi.",
              "e": "And on top of that, when something goes wrong he blames me."
            },
            {
              "s": 0,
              "t": "うわ、それは腹立つわ。上司は気づいてないの?",
              "r": "Uwa, sore wa haradatsu wa. Jōshi wa kizuitenai no?",
              "e": "Ugh, that's infuriating. Doesn't your boss notice?"
            },
            {
              "s": 1,
              "t": "全然。口だけは上手いんだよね、あの人。",
              "r": "Zenzen. Kuchi dake wa umai n da yo ne, ano hito.",
              "e": "Nope. He's just really good at talking his way out of things."
            },
            {
              "s": 0,
              "t": "わかる。そういう人ほど評価されるんだよね。",
              "r": "Wakaru. Sō iu hito hodo hyōka sareru n da yo ne.",
              "e": "I get it. It's always those people who get praised, huh."
            },
            {
              "s": 1,
              "t": "ほんとそれ。あー、もう飲も飲も。",
              "r": "Honto sore. Ā, mō nomo nomo.",
              "e": "So true. Ahh, let's just drink, let's drink."
            },
            {
              "s": 0,
              "t": "だね、今日はとことん付き合うよ。",
              "r": "Da ne, kyō wa tokoton tsukiau yo.",
              "e": "Yeah, I'm staying out with you all night today."
            }
          ],
          "vocab": [
            {
              "w": "ムカつく",
              "r": "mukatsuku",
              "m": "to be pissed off"
            },
            {
              "w": "手柄",
              "r": "tegara",
              "m": "credit, achievement"
            },
            {
              "w": "ありえない",
              "r": "arienai",
              "m": "unbelievable, no way"
            },
            {
              "w": "〜のせいにする",
              "r": "-no sei ni suru",
              "m": "to blame on"
            },
            {
              "w": "腹立つ",
              "r": "haradatsu",
              "m": "to be infuriating"
            },
            {
              "w": "とことん",
              "r": "tokoton",
              "m": "thoroughly, all the way"
            }
          ]
        },
        {
          "scene": "At home, apartment hunting",
          "title": "Station vs. bigger place",
          "speakers": [
            {
              "name": "Ken",
              "emoji": "🏠"
            },
            {
              "name": "You",
              "emoji": "🤔"
            }
          ],
          "note": "「駅近」(ekichika, 'close to the station') and its opposite「駅から遠い」are huge factors in Japanese rentals. Listings measure distance in walking minutes (徒歩○分, toho ○ fun), where each 'minute' is roughly 80 meters — and they round down, so it's often a bit longer in reality.",
          "lines": [
            {
              "s": 0,
              "t": "結局さ、どっちの部屋にする?",
              "r": "Kekkyoku sa, dotchi no heya ni suru?",
              "e": "So in the end, which place are we going with?"
            },
            {
              "s": 1,
              "t": "うーん、駅近のほうが楽じゃない?",
              "r": "Ūn, ekichika no hō ga raku ja nai?",
              "e": "Hmm, isn't the one near the station easier?"
            },
            {
              "s": 0,
              "t": "でも狭いんだよなあ、あっち。",
              "r": "Demo semai n da yo nā, atchi.",
              "e": "But that one's kind of cramped, though."
            },
            {
              "s": 1,
              "t": "確かに。広いほうは駅から徒歩十五分か。",
              "r": "Tashika ni. Hiroi hō wa eki kara toho jūgo-fun ka.",
              "e": "True. The bigger one is a 15-minute walk from the station, huh."
            },
            {
              "s": 0,
              "t": "毎日それはちょっとしんどくない?",
              "r": "Mainichi sore wa chotto shindokunai?",
              "e": "Doing that every day would be a bit rough, no?"
            },
            {
              "s": 1,
              "t": "でも家賃ほぼ同じで広いのは魅力だよ。",
              "r": "Demo yachin hobo onaji de hiroi no wa miryoku da yo.",
              "e": "But same rent for more space is pretty tempting."
            },
            {
              "s": 0,
              "t": "雨の日とか嫌になりそうだけどね。",
              "r": "Ame no hi toka iya ni narisō da kedo ne.",
              "e": "Though on rainy days you'd probably hate it."
            },
            {
              "s": 1,
              "t": "それ言われると弱いな…。自転車で行く?",
              "r": "Sore iwareru to yowai na… Jitensha de iku?",
              "e": "Yeah, that's a fair point… What if we bike there?"
            },
            {
              "s": 0,
              "t": "あ、それありかも。じゃあ広いほうで決まり?",
              "r": "A, sore ari kamo. Jā hiroi hō de kimari?",
              "e": "Oh, that could work. So the bigger one it is?"
            },
            {
              "s": 1,
              "t": "うん、そうしよう。明日内見の予約しとくね。",
              "r": "Un, sō shiyō. Ashita naiken no yoyaku shitoku ne.",
              "e": "Yeah, let's do that. I'll book a viewing for tomorrow."
            }
          ],
          "vocab": [
            {
              "w": "駅近",
              "r": "ekichika",
              "m": "close to the station"
            },
            {
              "w": "徒歩",
              "r": "toho",
              "m": "on foot (walking distance)"
            },
            {
              "w": "家賃",
              "r": "yachin",
              "m": "rent"
            },
            {
              "w": "しんどい",
              "r": "shindoi",
              "m": "tiring, rough"
            },
            {
              "w": "ありかも",
              "r": "ari kamo",
              "m": "could work, not a bad idea"
            },
            {
              "w": "内見",
              "r": "naiken",
              "m": "apartment viewing"
            }
          ]
        },
        {
          "scene": "At a restaurant",
          "title": "Ordering several dishes",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🧑‍🍳"
            },
            {
              "name": "You",
              "emoji": "🍽️"
            }
          ],
          "note": "To call a server, Japanese diners say 「すみませーん」across the room (stretching the end) — totally normal and not rude. Many places also have a call button on the table. And 「以上で」(ijō de, 'that's everything') is the standard way to signal you're done ordering.",
          "lines": [
            {
              "s": 1,
              "t": "すみませーん、注文いいですか?",
              "r": "Sumimasēn, chūmon ii desu ka?",
              "e": "Excuse me, can we order?"
            },
            {
              "s": 0,
              "t": "はい、どうぞ。お決まりですか?",
              "r": "Hai, dōzo. Okimari desu ka?",
              "e": "Sure, go ahead. Are you ready to order?"
            },
            {
              "s": 1,
              "t": "じゃあ唐揚げと、餃子二人前ください。",
              "r": "Jā karaage to, gyōza ni-ninmae kudasai.",
              "e": "Okay, the fried chicken and two orders of gyoza, please."
            },
            {
              "s": 0,
              "t": "かしこまりました。お飲み物は?",
              "r": "Kashikomarimashita. Onomimono wa?",
              "e": "Got it. Anything to drink?"
            },
            {
              "s": 1,
              "t": "あ、これって辛いですか?",
              "r": "A, kore tte karai desu ka?",
              "e": "Oh, is this one spicy?"
            },
            {
              "s": 0,
              "t": "少しピリ辛ですが、辛さ抜きもできますよ。",
              "r": "Sukoshi pirikara desu ga, karasa nuki mo dekimasu yo.",
              "e": "It's a little spicy, but we can make it without the heat."
            },
            {
              "s": 1,
              "t": "じゃあ普通でいいです。あと生ビール二つ。",
              "r": "Jā futsū de ii desu. Ato nama bīru futatsu.",
              "e": "The normal one's fine then. And two draft beers."
            },
            {
              "s": 0,
              "t": "ご注文は以上でよろしいですか?",
              "r": "Gochūmon wa ijō de yoroshii desu ka?",
              "e": "Will that be everything?"
            },
            {
              "s": 1,
              "t": "あ、ご飯も一つ。それで以上でお願いします。",
              "r": "A, gohan mo hitotsu. Sore de ijō de onegai shimasu.",
              "e": "Oh, one rice too. That's everything, thanks."
            },
            {
              "s": 0,
              "t": "承知しました。少々お待ちください。",
              "r": "Shōchi shimashita. Shōshō omachi kudasai.",
              "e": "Understood. Just a moment, please."
            }
          ],
          "vocab": [
            {
              "w": "注文",
              "r": "chūmon",
              "m": "order"
            },
            {
              "w": "二人前",
              "r": "ni-ninmae",
              "m": "two servings"
            },
            {
              "w": "ピリ辛",
              "r": "pirikara",
              "m": "slightly spicy"
            },
            {
              "w": "辛さ抜き",
              "r": "karasa nuki",
              "m": "without the spice"
            },
            {
              "w": "生ビール",
              "r": "nama bīru",
              "m": "draft beer"
            },
            {
              "w": "以上で",
              "r": "ijō de",
              "m": "that's everything"
            }
          ]
        },
        {
          "scene": "At a clothing store",
          "title": "Asking for a different size",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "👕"
            },
            {
              "name": "You",
              "emoji": "🛍️"
            }
          ],
          "note": "When trying things on, you'll hear 「試着」(shichaku, 'trying on') a lot. A polite heads-up: many stores hand you a 「フェイスカバー」(face cover) to slip over your head so makeup doesn't rub off on the clothes — it's expected, not optional.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、これのMサイズありますか?",
              "r": "Sumimasen, kore no emu saizu arimasu ka?",
              "e": "Excuse me, do you have this in a medium?"
            },
            {
              "s": 0,
              "t": "確認しますね。少々お待ちください。",
              "r": "Kakunin shimasu ne. Shōshō omachi kudasai.",
              "e": "Let me check. One moment, please."
            },
            {
              "s": 0,
              "t": "お待たせしました、Mサイズございます。",
              "r": "Omatase shimashita, emu saizu gozaimasu.",
              "e": "Thanks for waiting — we do have a medium."
            },
            {
              "s": 1,
              "t": "よかった。試着ってできますか?",
              "r": "Yokatta. Shichaku tte dekimasu ka?",
              "e": "Great. Can I try it on?"
            },
            {
              "s": 0,
              "t": "はい、試着室こちらへどうぞ。",
              "r": "Hai, shichakushitsu kochira e dōzo.",
              "e": "Of course, the fitting room is right this way."
            },
            {
              "s": 1,
              "t": "ありがとうございます。…うーん、ちょっと大きいかも。",
              "r": "Arigatō gozaimasu. …Ūn, chotto ōkii kamo.",
              "e": "Thank you. …Hmm, this might be a bit big."
            },
            {
              "s": 0,
              "t": "でしたらSサイズもお持ちしましょうか?",
              "r": "Deshitara esu saizu mo omochi shimashō ka?",
              "e": "In that case, shall I bring you a small as well?"
            },
            {
              "s": 1,
              "t": "お願いします。色違いってあったりします?",
              "r": "Onegai shimasu. Irochigai tte attari shimasu?",
              "e": "Yes please. Do you happen to have it in other colors?"
            },
            {
              "s": 0,
              "t": "黒と白もございますよ。お持ちしますね。",
              "r": "Kuro to shiro mo gozaimasu yo. Omochi shimasu ne.",
              "e": "We have it in black and white too. I'll bring those over."
            },
            {
              "s": 1,
              "t": "助かります、ありがとうございます!",
              "r": "Tasukarimasu, arigatō gozaimasu!",
              "e": "That's a big help, thank you so much!"
            }
          ],
          "vocab": [
            {
              "w": "試着",
              "r": "shichaku",
              "m": "trying on (clothes)"
            },
            {
              "w": "試着室",
              "r": "shichakushitsu",
              "m": "fitting room"
            },
            {
              "w": "確認する",
              "r": "kakunin suru",
              "m": "to check, confirm"
            },
            {
              "w": "色違い",
              "r": "irochigai",
              "m": "different color (variant)"
            },
            {
              "w": "〜かも",
              "r": "-kamo",
              "m": "maybe, might be"
            },
            {
              "w": "助かる",
              "r": "tasukaru",
              "m": "that helps / lifesaver"
            }
          ]
        },
        {
          "scene": "At a convenience store",
          "title": "Paying at the konbini",
          "speakers": [
            {
              "name": "Clerk",
              "emoji": "🏪"
            },
            {
              "name": "You",
              "emoji": "💳"
            }
          ],
          "note": "Since the 2020 plastic-bag fee, clerks always ask 「袋いりますか?」(do you need a bag?). Note 「温めますか?」(atatamemasu ka, 'shall I heat it up?') — it's so common for bentos that clerks ask automatically; just say 「お願いします」or 「大丈夫です」(no thanks).",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませ。袋はご利用ですか?",
              "r": "Irasshaimase. Fukuro wa goriyō desu ka?",
              "e": "Welcome. Do you need a bag?"
            },
            {
              "s": 1,
              "t": "あ、お願いします。一枚で大丈夫です。",
              "r": "A, onegai shimasu. Ichi-mai de daijōbu desu.",
              "e": "Oh, yes please. One bag is fine."
            },
            {
              "s": 0,
              "t": "お弁当、温めますか?",
              "r": "Obentō, atatamemasu ka?",
              "e": "Shall I heat up the bento?"
            },
            {
              "s": 1,
              "t": "はい、温めてください。",
              "r": "Hai, atatamete kudasai.",
              "e": "Yes, please heat it up."
            },
            {
              "s": 0,
              "t": "かしこまりました。ポイントカードはお持ちですか?",
              "r": "Kashikomarimashita. Pointo kādo wa omochi desu ka?",
              "e": "Of course. Do you have a points card?"
            },
            {
              "s": 1,
              "t": "あります、これでお願いします。",
              "r": "Arimasu, kore de onegai shimasu.",
              "e": "I do, here you go."
            },
            {
              "s": 0,
              "t": "お支払いは現金ですか、カードですか?",
              "r": "Oshiharai wa genkin desu ka, kādo desu ka?",
              "e": "Will you be paying by cash or card?"
            },
            {
              "s": 1,
              "t": "カードで。あ、お箸もらえますか?",
              "r": "Kādo de. A, ohashi moraemasu ka?",
              "e": "Card, please. Oh, can I get chopsticks?"
            },
            {
              "s": 0,
              "t": "はい、お付けしますね。温めもこちらになります。",
              "r": "Hai, otsuke shimasu ne. Atatame mo kochira ni narimasu.",
              "e": "Sure, I'll add some. And here's your heated item."
            },
            {
              "s": 1,
              "t": "ありがとうございます。どうも。",
              "r": "Arigatō gozaimasu. Dōmo.",
              "e": "Thank you. Cheers."
            }
          ],
          "vocab": [
            {
              "w": "袋",
              "r": "fukuro",
              "m": "bag"
            },
            {
              "w": "温める",
              "r": "atatameru",
              "m": "to heat up"
            },
            {
              "w": "ポイントカード",
              "r": "pointo kādo",
              "m": "points/loyalty card"
            },
            {
              "w": "お支払い",
              "r": "oshiharai",
              "m": "payment"
            },
            {
              "w": "現金",
              "r": "genkin",
              "m": "cash"
            },
            {
              "w": "お箸",
              "r": "ohashi",
              "m": "chopsticks"
            }
          ]
        },
        {
          "scene": "In a taxi",
          "title": "Heading Downtown by Taxi",
          "speakers": [
            {
              "name": "Driver",
              "emoji": "🚕"
            },
            {
              "name": "You",
              "emoji": "🧳"
            }
          ],
          "note": "When you get in, just say your destination + 「までお願いします」. You can drop 'driver-san' entirely. Also, 「混んでて」(it's jammed) is the go-to phrase drivers use to explain delays.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、渋谷駅までお願いします。",
              "r": "Sumimasen, Shibuya-eki made onegai shimasu.",
              "e": "Excuse me, to Shibuya Station please."
            },
            {
              "s": 0,
              "t": "はい、渋谷駅ね。ハチ公口でいいですか？",
              "r": "Hai, Shibuya-eki ne. Hachikō-guchi de ii desu ka?",
              "e": "Sure, Shibuya Station. Is the Hachiko exit okay?"
            },
            {
              "s": 1,
              "t": "あ、そこで大丈夫です。だいたいどれくらいかかります？",
              "r": "A, soko de daijōbu desu. Daitai dore kurai kakarimasu?",
              "e": "Oh, that's fine. Roughly how long will it take?"
            },
            {
              "s": 0,
              "t": "うーん、今ちょっと混んでるから、20分くらいかな。",
              "r": "Ūn, ima chotto konderu kara, nijuppun kurai kana.",
              "e": "Hmm, it's a bit crowded right now, so about 20 minutes maybe."
            },
            {
              "s": 1,
              "t": "了解です。じゃあ急がなくて大丈夫なんで。",
              "r": "Ryōkai desu. Jā isoganakute daijōbu nan de.",
              "e": "Got it. No need to rush then."
            },
            {
              "s": 0,
              "t": "助かります。今日はほんと道が混んでてね〜。",
              "r": "Tasukarimasu. Kyō wa honto michi ga kondete ne~.",
              "e": "That helps. The roads are really packed today."
            },
            {
              "s": 1,
              "t": "ですよね。なんかイベントでもあるんですかね？",
              "r": "Desu yo ne. Nanka ibento demo aru n desu ka ne?",
              "e": "Right? Is there some kind of event going on or something?"
            },
            {
              "s": 0,
              "t": "たぶんね。週末はいつもこんな感じですよ。",
              "r": "Tabun ne. Shūmatsu wa itsumo konna kanji desu yo.",
              "e": "Probably. Weekends are always like this."
            },
            {
              "s": 1,
              "t": "なるほど〜。じゃあ着いたら声かけてください。",
              "r": "Naruhodo~. Jā tsuitara koe kakete kudasai.",
              "e": "I see. Well, just let me know when we get there."
            }
          ],
          "vocab": [
            {
              "w": "までお願いします",
              "r": "made onegai shimasu",
              "m": "please take me to ~ (destination)"
            },
            {
              "w": "渋滞・混んでる",
              "r": "jūtai / konderu",
              "m": "traffic jam / it's crowded"
            },
            {
              "w": "どれくらいかかる",
              "r": "dore kurai kakaru",
              "m": "how long does it take"
            },
            {
              "w": "急がなくて大丈夫",
              "r": "isoganakute daijōbu",
              "m": "no need to rush"
            },
            {
              "w": "声かけてください",
              "r": "koe kakete kudasai",
              "m": "give me a shout / let me know"
            }
          ]
        },
        {
          "scene": "Hotel front desk",
          "title": "Checking Into the Hotel",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛎️"
            },
            {
              "name": "You",
              "emoji": "🧳"
            }
          ],
          "note": "At check-in the staff will speak super-polite keigo, but as a guest you can answer in normal です/ます — you don't need to match their level. 「チェックインお願いします」is all you need to start.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、チェックインお願いします。",
              "r": "Sumimasen, chekku-in onegai shimasu.",
              "e": "Hi, I'd like to check in please."
            },
            {
              "s": 0,
              "t": "いらっしゃいませ。ご予約のお名前を伺えますか？",
              "r": "Irasshaimase. Go-yoyaku no o-namae o ukagaemasu ka?",
              "e": "Welcome. May I have the name on the reservation?"
            },
            {
              "s": 1,
              "t": "あ、田中で予約してます。二泊で。",
              "r": "A, Tanaka de yoyaku shitemasu. Nihaku de.",
              "e": "Oh, it's under Tanaka. Two nights."
            },
            {
              "s": 0,
              "t": "田中様ですね。少々お待ちください…はい、確認できました。",
              "r": "Tanaka-sama desu ne. Shōshō o-machi kudasai… hai, kakunin dekimashita.",
              "e": "Mr. Tanaka, right. One moment please… yes, I've confirmed it."
            },
            {
              "s": 1,
              "t": "よかった。朝食ってついてましたっけ？",
              "r": "Yokatta. Chōshoku tte tsuitemashita kke?",
              "e": "Great. Was breakfast included, by the way?"
            },
            {
              "s": 0,
              "t": "はい、ついております。1階のレストランで7時からです。",
              "r": "Hai, tsuite orimasu. Ikkai no resutoran de shichi-ji kara desu.",
              "e": "Yes, it's included. It's at the 1st-floor restaurant from 7 a.m."
            },
            {
              "s": 1,
              "t": "了解です。Wi-Fiのパスワードってどこに書いてあります？",
              "r": "Ryōkai desu. Wai-fai no pasuwādo tte doko ni kaite arimasu?",
              "e": "Got it. Where can I find the Wi-Fi password?"
            },
            {
              "s": 0,
              "t": "お部屋のカードケースに記載しております。",
              "r": "O-heya no kādo kēsu ni kisai shite orimasu.",
              "e": "It's written on the key-card holder in your room."
            },
            {
              "s": 1,
              "t": "なるほど、ありがとうございます。助かりました！",
              "r": "Naruhodo, arigatō gozaimasu. Tasukarimashita!",
              "e": "I see, thank you. That helps a lot!"
            }
          ],
          "vocab": [
            {
              "w": "チェックイン",
              "r": "chekku-in",
              "m": "check-in"
            },
            {
              "w": "予約してます",
              "r": "yoyaku shitemasu",
              "m": "I have a reservation"
            },
            {
              "w": "二泊",
              "r": "nihaku",
              "m": "two nights (stay)"
            },
            {
              "w": "朝食ついてる",
              "r": "chōshoku tsuiteru",
              "m": "breakfast is included"
            },
            {
              "w": "〜でしたっけ",
              "r": "~deshita kke",
              "m": "was it ~ again? (soft check)"
            }
          ]
        },
        {
          "scene": "At the pharmacy",
          "title": "Cold Medicine at the Pharmacy",
          "speakers": [
            {
              "name": "Pharmacist",
              "emoji": "💊"
            },
            {
              "name": "You",
              "emoji": "🤧"
            }
          ],
          "note": "「〜っぽい」(as in 風邪っぽい) means 'kinda / -ish' and is how natives soften an uncertain symptom — way more natural than 'I have a cold' when you're not sure yet. 「効く」(kiku) = 'to be effective / work.'",
          "lines": [
            {
              "s": 1,
              "t": "すみません、なんか風邪っぽくて。薬ありますか？",
              "r": "Sumimasen, nanka kazeppokute. Kusuri arimasu ka?",
              "e": "Hi, I think I'm coming down with a cold. Do you have anything for it?"
            },
            {
              "s": 0,
              "t": "はい。どんな症状ですか？熱とかあります？",
              "r": "Hai. Donna shōjō desu ka? Netsu toka arimasu?",
              "e": "Sure. What are your symptoms? Do you have a fever or anything?"
            },
            {
              "s": 1,
              "t": "熱はないんですけど、喉が痛くて鼻水もひどくて。",
              "r": "Netsu wa nai n desu kedo, nodo ga itakute hanamizu mo hidokute.",
              "e": "No fever, but my throat hurts and my runny nose is bad."
            },
            {
              "s": 0,
              "t": "なるほど。咳は出てます？",
              "r": "Naruhodo. Seki wa detemasu?",
              "e": "I see. Are you coughing?"
            },
            {
              "s": 1,
              "t": "ちょっとだけ。あと、すごい体がだるいんですよね。",
              "r": "Chotto dake. Ato, sugoi karada ga darui n desu yo ne.",
              "e": "Just a little. And I feel really sluggish, too."
            },
            {
              "s": 0,
              "t": "じゃあ、総合感冒薬がいいですね。これ、よく効きますよ。",
              "r": "Jā, sōgō kanbōyaku ga ii desu ne. Kore, yoku kikimasu yo.",
              "e": "Then a general cold medicine would be good. This one works well."
            },
            {
              "s": 1,
              "t": "これって、眠くなったりします？",
              "r": "Kore tte, nemuku nattari shimasu?",
              "e": "Does this one make you drowsy?"
            },
            {
              "s": 0,
              "t": "少し眠くなるので、運転前は避けてくださいね。",
              "r": "Sukoshi nemuku naru node, unten mae wa sakete kudasai ne.",
              "e": "It can make you a bit sleepy, so avoid taking it before driving."
            },
            {
              "s": 1,
              "t": "わかりました。じゃあこれください。早く治るといいな〜。",
              "r": "Wakarimashita. Jā kore kudasai. Hayaku naoru to ii na~.",
              "e": "Got it. I'll take this one. Hope I get better soon."
            }
          ],
          "vocab": [
            {
              "w": "風邪っぽい",
              "r": "kazeppoi",
              "m": "feels like a cold coming on"
            },
            {
              "w": "喉が痛い",
              "r": "nodo ga itai",
              "m": "sore throat"
            },
            {
              "w": "鼻水",
              "r": "hanamizu",
              "m": "runny nose"
            },
            {
              "w": "だるい",
              "r": "darui",
              "m": "sluggish / body feels heavy"
            },
            {
              "w": "効く",
              "r": "kiku",
              "m": "to work / be effective (medicine)"
            },
            {
              "w": "眠くなる",
              "r": "nemuku naru",
              "m": "to get drowsy"
            }
          ]
        },
        {
          "scene": "At a hair salon",
          "title": "Getting a Haircut",
          "speakers": [
            {
              "name": "Stylist",
              "emoji": "✂️"
            },
            {
              "name": "You",
              "emoji": "💇"
            }
          ],
          "note": "Use 「〜センチ切ってください」for a specific length, or the very common 「軽くして」(make it lighter/thinner) when hair feels too heavy. 「お任せで」(omakase de) = 'I'll leave it up to you' — handy if you can't decide.",
          "lines": [
            {
              "s": 0,
              "t": "今日はどんな感じにしますか？",
              "r": "Kyō wa donna kanji ni shimasu ka?",
              "e": "What are we going for today?"
            },
            {
              "s": 1,
              "t": "そうですね、全体的に短くしたくて。",
              "r": "Sō desu ne, zentai-teki ni mijikaku shitakute.",
              "e": "Let's see, I want to make it shorter overall."
            },
            {
              "s": 0,
              "t": "どのくらい切ります？2、3センチくらいですか？",
              "r": "Dono kurai kirimasu? Ni, san senchi kurai desu ka?",
              "e": "How much should I take off? Around 2 or 3 centimeters?"
            },
            {
              "s": 1,
              "t": "もうちょっといきたいかも。あと、毛量も減らしてほしいです。",
              "r": "Mō chotto ikitai kamo. Ato, mōryō mo herashite hoshii desu.",
              "e": "Maybe a bit more. Also, I'd like it thinned out."
            },
            {
              "s": 0,
              "t": "了解です。前髪はどうします？",
              "r": "Ryōkai desu. Maegami wa dō shimasu?",
              "e": "Got it. What about the bangs?"
            },
            {
              "s": 1,
              "t": "前髪は目にかからないくらいでお願いします。",
              "r": "Maegami wa me ni kakaranai kurai de onegai shimasu.",
              "e": "Just keep them above my eyes please."
            },
            {
              "s": 0,
              "t": "わかりました。スタイリングは普段どうしてます？",
              "r": "Wakarimashita. Sutairingu wa fudan dō shitemasu?",
              "e": "Understood. How do you usually style it?"
            },
            {
              "s": 1,
              "t": "ほぼ何もしないんで、楽なやつでお任せします。",
              "r": "Hobo nani mo shinai n de, raku na yatsu de o-makase shimasu.",
              "e": "I barely do anything, so I'll leave it to you for something low-maintenance."
            },
            {
              "s": 0,
              "t": "じゃあ扱いやすい感じにしますね。始めていきますね〜。",
              "r": "Jā atsukai-yasui kanji ni shimasu ne. Hajimete ikimasu ne~.",
              "e": "Then I'll make it easy to manage. Let's get started."
            }
          ],
          "vocab": [
            {
              "w": "短くする",
              "r": "mijikaku suru",
              "m": "to make (it) shorter"
            },
            {
              "w": "毛量を減らす",
              "r": "mōryō o herasu",
              "m": "to thin out the hair"
            },
            {
              "w": "前髪",
              "r": "maegami",
              "m": "bangs / fringe"
            },
            {
              "w": "お任せします",
              "r": "o-makase shimasu",
              "m": "I'll leave it up to you"
            },
            {
              "w": "扱いやすい",
              "r": "atsukai-yasui",
              "m": "easy to manage / handle"
            }
          ]
        },
        {
          "scene": "Hanging out with a friend",
          "title": "Geeking Out Over Anime",
          "speakers": [
            {
              "name": "Yuki",
              "emoji": "🎮"
            },
            {
              "name": "You",
              "emoji": "📺"
            }
          ],
          "note": "「神回」(kamikai, lit. 'god episode') is fan slang for a standout, amazing episode. 「沼」(numa, lit. 'swamp') means being deep into a hobby you can't escape — 「沼にハマる」= to fall down the rabbit hole.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、昨日のアニメの最新話もう見た？",
              "r": "Nē, kinō no anime no saishin-wa mō mita?",
              "e": "Hey, did you already watch the latest episode that aired yesterday?"
            },
            {
              "s": 1,
              "t": "見た見た！あれ完全に神回じゃん。",
              "r": "Mita mita! Are kanzen ni kamikai jan.",
              "e": "I did, I did! That was a total god-tier episode, right?"
            },
            {
              "s": 0,
              "t": "だよね！ラスト鳥肌立ったんだけど。",
              "r": "Da yo ne! Rasuto torihada tatta n da kedo.",
              "e": "Right?! The ending gave me goosebumps."
            },
            {
              "s": 1,
              "t": "わかる〜。あの作画ヤバすぎでしょ。お金かかってるわ。",
              "r": "Wakaru~. Ano sakuga yaba sugi desho. O-kane kakatteru wa.",
              "e": "So true. The animation was insane. They clearly spent money on it."
            },
            {
              "s": 0,
              "t": "ほんとそれ。もう完全に沼にハマってるわ私。",
              "r": "Honto sore. Mō kanzen ni numa ni hamatteru wa watashi.",
              "e": "Exactly. I've completely fallen down the rabbit hole."
            },
            {
              "s": 1,
              "t": "笑　原作の漫画も読んだ？続きヤバいよ。",
              "r": "(Wara) Gensaku no manga mo yonda? Tsuzuki yabai yo.",
              "e": "Haha, did you read the original manga too? What comes next is wild."
            },
            {
              "s": 0,
              "t": "まだ！ネタバレなしで頼む…！",
              "r": "Mada! Netabare nashi de tanomu…!",
              "e": "Not yet! No spoilers, I'm begging you…!"
            },
            {
              "s": 1,
              "t": "了解了解（笑）。じゃあ次の放送、一緒に実況しよ。",
              "r": "Ryōkai ryōkai (wara). Jā tsugi no hōsō, issho ni jikkyō shiyo.",
              "e": "Okay okay haha. Then let's live-react to the next episode together."
            },
            {
              "s": 0,
              "t": "いいね！放送日カレンダーに入れとくわ。",
              "r": "Ii ne! Hōsōbi karendā ni iretoku wa.",
              "e": "Nice! I'll put the air date in my calendar."
            }
          ],
          "vocab": [
            {
              "w": "神回",
              "r": "kamikai",
              "m": "amazing / god-tier episode"
            },
            {
              "w": "鳥肌立った",
              "r": "torihada tatta",
              "m": "got goosebumps"
            },
            {
              "w": "作画",
              "r": "sakuga",
              "m": "(quality of the) animation/art"
            },
            {
              "w": "沼にハマる",
              "r": "numa ni hamaru",
              "m": "to fall deep into a hobby"
            },
            {
              "w": "ネタバレ",
              "r": "netabare",
              "m": "spoiler(s)"
            },
            {
              "w": "実況",
              "r": "jikkyō",
              "m": "live commentary / live-reacting"
            }
          ]
        },
        {
          "scene": "Planning a trip",
          "title": "Planning a Weekend Getaway",
          "speakers": [
            {
              "name": "Friend",
              "emoji": "🗺️"
            },
            {
              "name": "You",
              "emoji": "🚗"
            }
          ],
          "note": "「弾丸」(dangan, lit. 'bullet') describes a super-short, packed trip — 「弾丸旅行」is a whirlwind day-or-overnight trip. 「〜しよ」(shortened from しよう) is the casual 'let's ~' you'll hear constantly among friends.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、来週末どっか行かない？",
              "r": "Nē, raishūmatsu dokka ikanai?",
              "e": "Hey, wanna go somewhere next weekend?"
            },
            {
              "s": 1,
              "t": "いいね！どこ行く？泊まり？日帰り？",
              "r": "Ii ne! Doko iku? Tomari? Higaeri?",
              "e": "Sounds good! Where to? Overnight or just a day trip?"
            },
            {
              "s": 0,
              "t": "一泊くらいで温泉とか行きたいなって。",
              "r": "Ippaku kurai de onsen toka ikitai na tte.",
              "e": "I was thinking one night, somewhere with a hot spring or something."
            },
            {
              "s": 1,
              "t": "最高じゃん。箱根とか近くていいかも。",
              "r": "Saikō jan. Hakone toka chikakute ii kamo.",
              "e": "Amazing. Somewhere close like Hakone might be good."
            },
            {
              "s": 0,
              "t": "それな。土曜の朝出て日曜の夜帰る感じで。",
              "r": "Sore na. Doyō no asa dete nichiyō no yoru kaeru kanji de.",
              "e": "Right? Like leave Saturday morning, come back Sunday night."
            },
            {
              "s": 1,
              "t": "了解。じゃあ宿、私が探しとくよ。",
              "r": "Ryōkai. Jā yado, watashi ga sagashitoku yo.",
              "e": "Got it. I'll look for a place to stay then."
            },
            {
              "s": 0,
              "t": "助かる！ご飯おいしいとこがいいなー。",
              "r": "Tasukaru! Gohan oishii toko ga ii nā.",
              "e": "That helps! I'd love somewhere with good food."
            },
            {
              "s": 1,
              "t": "りょ。あと移動どうする？車？電車？",
              "r": "Ryo. Ato idō dō suru? Kuruma? Densha?",
              "e": "Got it. And how are we getting there? Car or train?"
            },
            {
              "s": 0,
              "t": "車のほうが楽かな。レンタカー借りよっか。",
              "r": "Kuruma no hō ga raku kana. Rentakā kariyokka.",
              "e": "Car's probably easier. Shall we rent one?"
            },
            {
              "s": 1,
              "t": "いいね、それで決定！楽しみすぎる〜。",
              "r": "Ii ne, sore de kettei! Tanoshimi sugiru~.",
              "e": "Nice, it's settled! I'm so excited."
            }
          ],
          "vocab": [
            {
              "w": "日帰り",
              "r": "higaeri",
              "m": "day trip (no overnight)"
            },
            {
              "w": "一泊",
              "r": "ippaku",
              "m": "one-night stay"
            },
            {
              "w": "温泉",
              "r": "onsen",
              "m": "hot spring"
            },
            {
              "w": "宿を探す",
              "r": "yado o sagasu",
              "m": "to look for lodging"
            },
            {
              "w": "りょ",
              "r": "ryo",
              "m": "'kay (super-casual 'got it')"
            },
            {
              "w": "レンタカー",
              "r": "rentakā",
              "m": "rental car"
            }
          ]
        },
        {
          "scene": "At the gym",
          "title": "Hitting the Gym",
          "speakers": [
            {
              "name": "Yuto",
              "emoji": "💪"
            },
            {
              "name": "You",
              "emoji": "🏋️"
            }
          ],
          "note": "「最近ジム通ってて」literally means 'lately I've been going to the gym (and...)'. The て-form left hanging at the end of a clause is super common in casual speech — it sets up your situation without finishing the sentence, and the listener just gets it.",
          "lines": [
            {
              "s": 0,
              "t": "あれ、なんか痩せた?",
              "r": "Are, nanka yaseta?",
              "e": "Huh, did you lose weight or something?"
            },
            {
              "s": 1,
              "t": "わかる?最近ジム通っててさ。",
              "r": "Wakaru? Saikin jimu kayottete sa.",
              "e": "You can tell? I've been hitting the gym lately."
            },
            {
              "s": 0,
              "t": "まじで?どれくらい行ってんの?",
              "r": "Maji de? Dore kurai itten no?",
              "e": "Seriously? How often do you go?"
            },
            {
              "s": 1,
              "t": "週3くらいかな。最初きつかったけど慣れてきた。",
              "r": "Shū san kurai kana. Saisho kitsukatta kedo narete kita.",
              "e": "Like three times a week. It was rough at first but I'm getting used to it."
            },
            {
              "s": 0,
              "t": "えらい〜。俺なんて全然続かないんだよね。",
              "r": "Erai~. Ore nante zenzen tsuzukanai n da yo ne.",
              "e": "Good for you. I can never stick with it, honestly."
            },
            {
              "s": 1,
              "t": "一緒に行こうよ。一人だとサボりがちだし。",
              "r": "Issho ni ikō yo. Hitori da to saborigachi da shi.",
              "e": "Come with me then. I tend to slack off when I'm alone anyway."
            },
            {
              "s": 0,
              "t": "いいね。でも筋肉痛になるの嫌だな〜。",
              "r": "Ii ne. Demo kinnikutsū ni naru no iya da na~.",
              "e": "Sounds good. But man, I hate getting sore."
            },
            {
              "s": 1,
              "t": "最初だけだって。終わった後のプロテインがうまいんだよ。",
              "r": "Saisho dake datte. Owatta ato no purotein ga umai n da yo.",
              "e": "That's just at the start. The protein shake after is so good though."
            },
            {
              "s": 0,
              "t": "それ目当てで頑張れそう(笑)。じゃあ今度の土曜行く?",
              "r": "Sore meate de ganbaresō (warai). Jā kondo no doyō iku?",
              "e": "I could push through just for that, lol. So, this Saturday?"
            },
            {
              "s": 1,
              "t": "おっけー!サボったら承知しないからね。",
              "r": "Okkē! Sabottara shōchi shinai kara ne.",
              "e": "You got it! Don't you dare flake on me."
            }
          ],
          "vocab": [
            {
              "w": "痩せた",
              "r": "yaseta",
              "m": "lost weight, got thinner"
            },
            {
              "w": "ジムに通う",
              "r": "jimu ni kayou",
              "m": "to go to the gym regularly"
            },
            {
              "w": "サボる",
              "r": "saboru",
              "m": "to slack off, skip (out of laziness)"
            },
            {
              "w": "筋肉痛",
              "r": "kinnikutsū",
              "m": "muscle soreness"
            },
            {
              "w": "承知しない",
              "r": "shōchi shinai",
              "m": "I won't let it slide (mock threat)"
            }
          ]
        },
        {
          "scene": "At a cafe",
          "title": "A Surprise at the Cafe",
          "speakers": [
            {
              "name": "Mei",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "📚"
            }
          ],
          "note": "「奇遇だね」(kigū da ne) is the natural thing to say when you bump into someone unexpectedly — 'what a coincidence!'. It's slightly more grown-up than 「偶然だね」but both work. Pairing it with a surprised 「え、うそ!」sounds totally native.",
          "lines": [
            {
              "s": 0,
              "t": "あれ?もしかして…やっぱり!久しぶり〜!",
              "r": "Are? Moshikashite… yappari! Hisashiburi~!",
              "e": "Wait, is that... yep, it is! Long time no see!"
            },
            {
              "s": 1,
              "t": "え、うそ!こんなとこで会うとか奇遇だね。",
              "r": "E, uso! Konna toko de au toka kigū da ne.",
              "e": "No way! Running into you here, what a coincidence."
            },
            {
              "s": 0,
              "t": "勉強してたの?邪魔しちゃった?",
              "r": "Benkyō shiteta no? Jama shichatta?",
              "e": "Were you studying? Did I interrupt you?"
            },
            {
              "s": 1,
              "t": "全然!ちょうど集中切れてたとこ。座りなよ。",
              "r": "Zenzen! Chōdo shūchū kireteta toko. Suwari na yo.",
              "e": "Not at all! I'd just lost focus anyway. Have a seat."
            },
            {
              "s": 0,
              "t": "ありがと。何の勉強?レポートとか?",
              "r": "Arigato. Nan no benkyō? Repōto toka?",
              "e": "Thanks. What are you working on? A paper or something?"
            },
            {
              "s": 1,
              "t": "うん、来週締め切りなのに全然進んでなくて。",
              "r": "Un, raishū shimekiri na noni zenzen susunde nakute.",
              "e": "Yeah, it's due next week but I've barely made any progress."
            },
            {
              "s": 0,
              "t": "わかる〜。私もやらなきゃなんだよね。",
              "r": "Wakaru~. Watashi mo yaranakya na n da yo ne.",
              "e": "Ugh, I feel that. I've got stuff I need to do too."
            },
            {
              "s": 1,
              "t": "じゃあ一緒にやろうよ。コーヒー奢るから。",
              "r": "Jā issho ni yarō yo. Kōhī ogoru kara.",
              "e": "Then let's do it together. I'll buy you a coffee."
            },
            {
              "s": 0,
              "t": "まじ?やったー。じゃあ私カフェラテで(笑)。",
              "r": "Maji? Yattā. Jā watashi kafe rate de (warai).",
              "e": "Really? Yes! I'll take a cafe latte then, lol."
            },
            {
              "s": 1,
              "t": "現金だな〜。ま、いいや。注文してくるね。",
              "r": "Genkin da na~. Ma, ii ya. Chūmon shite kuru ne.",
              "e": "So quick to cash in, ha. Whatever, I'll go order."
            }
          ],
          "vocab": [
            {
              "w": "奇遇",
              "r": "kigū",
              "m": "coincidence (chance meeting)"
            },
            {
              "w": "邪魔する",
              "r": "jama suru",
              "m": "to interrupt, get in the way"
            },
            {
              "w": "締め切り",
              "r": "shimekiri",
              "m": "deadline"
            },
            {
              "w": "奢る",
              "r": "ogoru",
              "m": "to treat (pay for someone)"
            },
            {
              "w": "現金",
              "r": "genkin",
              "m": "calculating, quick to act for one's gain (lit. 'cash')"
            }
          ]
        },
        {
          "scene": "Planning a surprise party",
          "title": "The Secret Plan",
          "speakers": [
            {
              "name": "Riku",
              "emoji": "🎉"
            },
            {
              "name": "You",
              "emoji": "🤫"
            }
          ],
          "note": "「内緒」(naisho) is THE word for 'secret/keep it under wraps'. 「ナイショね」with the finger-to-lips gesture is everyday. Also note 「バレる」(bareru) — to be found out — is the verb you'll always hear for a secret getting blown.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、サプライズパーティーやらない?来週ハルカの誕生日じゃん。",
              "r": "Nee, sapuraizu pātī yaranai? Raishū Haruka no tanjōbi jan.",
              "e": "Hey, wanna throw a surprise party? It's Haruka's birthday next week, right?"
            },
            {
              "s": 1,
              "t": "いいね!絶対喜ぶよ。でもバレないようにしないと。",
              "r": "Ii ne! Zettai yorokobu yo. Demo barenai yō ni shinai to.",
              "e": "Love it! She'll be so happy. But we gotta make sure it doesn't get out."
            },
            {
              "s": 0,
              "t": "だよね。とりあえず本人には内緒で進めよう。",
              "r": "Da yo ne. Toriaezu honnin ni wa naisho de susumeyō.",
              "e": "Exactly. Let's keep her totally in the dark and plan it."
            },
            {
              "s": 1,
              "t": "場所どうする?あの子の家近くのカフェ貸し切れるかな。",
              "r": "Basho dō suru? Ano ko no ie chikaku no kafe kashikireru kana.",
              "e": "Where should we do it? Could we book out that cafe near her place?"
            },
            {
              "s": 0,
              "t": "電話して聞いてみる。あと当日どうやって連れてくる?",
              "r": "Denwa shite kiite miru. Ato tōjitsu dō yatte tsurete kuru?",
              "e": "I'll call and ask. Also, how do we get her there on the day?"
            },
            {
              "s": 1,
              "t": "私が買い物誘うふりして連れてくよ。",
              "r": "Watashi ga kaimono sasou furi shite tsurete ku yo.",
              "e": "I'll pretend to invite her shopping and bring her over."
            },
            {
              "s": 0,
              "t": "天才かよ。じゃあプレゼントは皆で出し合おう。",
              "r": "Tensai ka yo. Jā purezento wa minna de dashiaō.",
              "e": "You genius. Let's all chip in for the present then."
            },
            {
              "s": 1,
              "t": "了解。グループライン作るね。本人抜きで。",
              "r": "Ryōkai. Gurūpu rain tsukuru ne. Honnin nuki de.",
              "e": "Got it. I'll make a group chat. Without her in it, obviously."
            },
            {
              "s": 0,
              "t": "それ大事(笑)。間違えて招待したら終わるからね。",
              "r": "Sore daiji (warai). Machigaete shōtai shitara owaru kara ne.",
              "e": "That part's crucial, lol. If you add her by accident, it's game over."
            },
            {
              "s": 1,
              "t": "二回確認するわ。絶対成功させようね!",
              "r": "Nikai kakunin suru wa. Zettai seikō saseyō ne!",
              "e": "I'll double-check. Let's totally pull this off!"
            }
          ],
          "vocab": [
            {
              "w": "内緒",
              "r": "naisho",
              "m": "a secret; keep it quiet"
            },
            {
              "w": "バレる",
              "r": "bareru",
              "m": "to be found out, get exposed"
            },
            {
              "w": "貸し切る",
              "r": "kashikiru",
              "m": "to reserve/book the whole place"
            },
            {
              "w": "出し合う",
              "r": "dashiau",
              "m": "to chip in together (money)"
            },
            {
              "w": "本人抜きで",
              "r": "honnin nuki de",
              "m": "without the person themselves"
            }
          ]
        },
        {
          "scene": "At a clothing store",
          "title": "Returning a Shirt",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛍️"
            },
            {
              "name": "You",
              "emoji": "🧾"
            }
          ],
          "note": "With store staff you bump the politeness up to keigo even in 'casual' life — that's the realistic register. Note 「レシートお持ちですか」: stores almost always need the レシート (receipt). 「サイズが合わなくて」is a smooth, no-drama way to explain an exchange.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、これ返品したいんですけど。",
              "r": "Sumimasen, kore henpin shitai n desu kedo.",
              "e": "Excuse me, I'd like to return this."
            },
            {
              "s": 0,
              "t": "かしこまりました。レシートはお持ちですか?",
              "r": "Kashikomarimashita. Reshīto wa omochi desu ka?",
              "e": "Of course. Do you have the receipt?"
            },
            {
              "s": 1,
              "t": "はい、これです。サイズが合わなくて。",
              "r": "Hai, kore desu. Saizu ga awanakute.",
              "e": "Yes, here. The size didn't fit."
            },
            {
              "s": 0,
              "t": "ご試着されてからのご返品でしょうか?",
              "r": "Goshichaku sarete kara no gohenpin deshō ka?",
              "e": "Did you try it on before deciding to return it?"
            },
            {
              "s": 1,
              "t": "あ、家で着てみただけです。タグも付いてます。",
              "r": "A, ie de kite mita dake desu. Tagu mo tsuitemasu.",
              "e": "Oh, I just tried it on at home. The tag's still on too."
            },
            {
              "s": 0,
              "t": "でしたら大丈夫です。返金か交換、どちらにされますか?",
              "r": "Deshitara daijōbu desu. Henkin ka kōkan, dochira ni saremasu ka?",
              "e": "Then that's fine. Would you like a refund or an exchange?"
            },
            {
              "s": 1,
              "t": "ワンサイズ大きいのに交換ってできますか?",
              "r": "Wan saizu ōkii no ni kōkan tte dekimasu ka?",
              "e": "Could I exchange it for one size up?"
            },
            {
              "s": 0,
              "t": "在庫確認しますね。少々お待ちください。",
              "r": "Zaiko kakunin shimasu ne. Shōshō omachi kudasai.",
              "e": "Let me check the stock. One moment please."
            },
            {
              "s": 1,
              "t": "あ、もし無かったら返金でもいいです。",
              "r": "A, moshi nakattara henkin demo ii desu.",
              "e": "Oh, if there's none, a refund's fine too."
            },
            {
              "s": 0,
              "t": "ちょうど一枚ございました!お取り替えしますね。",
              "r": "Chōdo ichimai gozaimashita! Otorikae shimasu ne.",
              "e": "There's exactly one left! I'll swap it for you."
            }
          ],
          "vocab": [
            {
              "w": "返品",
              "r": "henpin",
              "m": "returning a product"
            },
            {
              "w": "試着",
              "r": "shichaku",
              "m": "trying on (clothes)"
            },
            {
              "w": "返金",
              "r": "henkin",
              "m": "refund"
            },
            {
              "w": "交換",
              "r": "kōkan",
              "m": "exchange (for another item)"
            },
            {
              "w": "在庫",
              "r": "zaiko",
              "m": "stock, inventory"
            }
          ]
        },
        {
          "scene": "Chatting over a meal",
          "title": "Comfort Food Talk",
          "speakers": [
            {
              "name": "Sora",
              "emoji": "🍲"
            },
            {
              "name": "You",
              "emoji": "🍚"
            }
          ],
          "note": "「おふくろの味」(ofukuro no aji) literally 'mom's taste' = the nostalgic home-cooked flavor of your mother's cooking. It's a warm, slightly sentimental phrase. Also 「ご飯が進む」means a dish 'makes the rice disappear' — high praise for anything savory.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、好きな食べ物って何?",
              "r": "Nee, suki na tabemono tte nani?",
              "e": "Hey, what's your favorite food?"
            },
            {
              "s": 1,
              "t": "うーん、やっぱ肉じゃがかな。ご飯めっちゃ進むやつ。",
              "r": "Ūn, yappa nikujaga kana. Gohan meccha susumu yatsu.",
              "e": "Hmm, gotta be nikujaga. The kind that makes you wolf down rice."
            },
            {
              "s": 0,
              "t": "わかる!あれ完全におふくろの味だよね。",
              "r": "Wakaru! Are kanzen ni ofukuro no aji da yo ne.",
              "e": "Right?! That's total comfort-food, mom's-cooking vibes."
            },
            {
              "s": 1,
              "t": "そうそう。自分でも作るんだけど味が違うんだよな〜。",
              "r": "Sō sō. Jibun de mo tsukuru n da kedo aji ga chigau n da yo na~.",
              "e": "Exactly. I make it myself but it just never tastes the same."
            },
            {
              "s": 0,
              "t": "それな。料理するんだ?意外。",
              "r": "Sore na. Ryōri suru n da? Igai.",
              "e": "So true. You cook? That's surprising."
            },
            {
              "s": 1,
              "t": "週末だけね。簡単なやつばっかだけど。",
              "r": "Shūmatsu dake ne. Kantan na yatsu bakka da kedo.",
              "e": "Only on weekends. Just easy stuff though."
            },
            {
              "s": 0,
              "t": "えらいじゃん。私なんてほぼ外食かコンビニ。",
              "r": "Erai jan. Watashi nante hobo gaishoku ka konbini.",
              "e": "That's impressive. I basically eat out or grab convenience store stuff."
            },
            {
              "s": 1,
              "t": "今度作ってあげようか?味噌汁うまいって言われるよ。",
              "r": "Kondo tsukutte ageyō ka? Misoshiru umai tte iwareru yo.",
              "e": "Want me to cook for you sometime? People say my miso soup's great."
            },
            {
              "s": 0,
              "t": "え、ほんと?楽しみにしてる!",
              "r": "E, honto? Tanoshimi ni shiteru!",
              "e": "Wait, really? I'm looking forward to it!"
            },
            {
              "s": 1,
              "t": "ハードル上げないでよ〜(笑)。",
              "r": "Hādoru agenaide yo~ (warai).",
              "e": "Don't set the bar too high now, lol."
            }
          ],
          "vocab": [
            {
              "w": "肉じゃが",
              "r": "nikujaga",
              "m": "simmered meat and potatoes"
            },
            {
              "w": "ご飯が進む",
              "r": "gohan ga susumu",
              "m": "goes great with rice; makes you eat a lot"
            },
            {
              "w": "おふくろの味",
              "r": "ofukuro no aji",
              "m": "mom's home cooking, nostalgic flavor"
            },
            {
              "w": "外食",
              "r": "gaishoku",
              "m": "eating out"
            },
            {
              "w": "ハードルを上げる",
              "r": "hādoru o ageru",
              "m": "to raise the bar / expectations"
            }
          ]
        },
        {
          "scene": "Meeting a friend's friend",
          "title": "Nice to Meet You",
          "speakers": [
            {
              "name": "Kana",
              "emoji": "🙋"
            },
            {
              "name": "You",
              "emoji": "🤝"
            }
          ],
          "note": "「○○から聞いてるよ」(I've heard about you from ○○) is the warm, standard icebreaker when meeting a friend's friend. And 「タメ」/「タメ口でいいよ」means 'same age / let's drop the polite speech' — a quick way friends signal they can relax into casual form.",
          "lines": [
            {
              "s": 0,
              "t": "あ、この子が前に話してたカナ。",
              "r": "A, kono ko ga mae ni hanashiteta Kana.",
              "e": "Oh, this is Kana, the one I told you about before."
            },
            {
              "s": 1,
              "t": "あ、どうも!話は聞いてるよ。よろしくね。",
              "r": "A, dōmo! Hanashi wa kiiteru yo. Yoroshiku ne.",
              "e": "Oh, hi! I've heard all about you. Nice to meet you."
            },
            {
              "s": 0,
              "t": "こちらこそ〜。なんか初めて会う気しないかも。",
              "r": "Kochira koso~. Nanka hajimete au ki shinai kamo.",
              "e": "Likewise! It doesn't even feel like we're just meeting, honestly."
            },
            {
              "s": 1,
              "t": "わかる(笑)。同い年だっけ?",
              "r": "Wakaru (warai). Onaidoshi dakke?",
              "e": "I know, right, lol. We're the same age, yeah?"
            },
            {
              "s": 0,
              "t": "そうそう、タメだよ。じゃあタメ口でいこ?",
              "r": "Sō sō, tame da yo. Jā tameguchi de iko?",
              "e": "Yep, same age. Let's just talk casually then?"
            },
            {
              "s": 1,
              "t": "それ助かる。敬語って疲れるもんね。",
              "r": "Sore tasukaru. Keigo tte tsukareru mon ne.",
              "e": "That's a relief. Polite speech is exhausting, right?"
            },
            {
              "s": 0,
              "t": "ね〜。ちなみに何系の音楽聴くの?",
              "r": "Ne~. Chinami ni nani kei no ongaku kiku no?",
              "e": "Totally. By the way, what kind of music are you into?"
            },
            {
              "s": 1,
              "t": "最近は邦ロックばっかかな。カナは?",
              "r": "Saikin wa hō rokku bakka kana. Kana wa?",
              "e": "Lately it's mostly Japanese rock. How about you?"
            },
            {
              "s": 0,
              "t": "え、めっちゃ趣味合うじゃん!今度ライブ行こうよ。",
              "r": "E, meccha shumi au jan! Kondo raibu ikō yo.",
              "e": "Whoa, our taste totally matches! Let's go to a show sometime."
            },
            {
              "s": 1,
              "t": "行く行く!連絡先交換しよ。",
              "r": "Iku iku! Renrakusaki kōkan shiyo.",
              "e": "Yes, let's! Let's swap contacts."
            }
          ],
          "vocab": [
            {
              "w": "話は聞いてる",
              "r": "hanashi wa kiiteru",
              "m": "I've heard about you"
            },
            {
              "w": "同い年",
              "r": "onaidoshi",
              "m": "the same age"
            },
            {
              "w": "タメ口",
              "r": "tameguchi",
              "m": "casual (non-polite) speech"
            },
            {
              "w": "邦ロック",
              "r": "hō rokku",
              "m": "Japanese rock music"
            },
            {
              "w": "連絡先",
              "r": "renrakusaki",
              "m": "contact info"
            }
          ]
        },
        {
          "scene": "At a house party",
          "title": "Small Talk at a Party",
          "speakers": [
            {
              "name": "Yuto",
              "emoji": "🧑"
            },
            {
              "name": "You",
              "emoji": "😊"
            }
          ],
          "note": "「〜さんの知り合い?」literally asks 'are you an acquaintance of so-and-so?' — at parties Japanese people identify each other through the host rather than just asking 'who are you?', which would feel blunt.",
          "lines": [
            {
              "s": 0,
              "t": "あ、どうも。今日来てたんだね、気づかなかった。",
              "r": "A, dōmo. Kyō kiteta n da ne, kizukanakatta.",
              "e": "Oh hey. So you came today too — I didn't even notice."
            },
            {
              "s": 1,
              "t": "うん、さっき来たばっかり。けっこう人多いね。",
              "r": "Un, sakki kita bakkari. Kekkō hito ōi ne.",
              "e": "Yeah, I just got here. Wow, there's a lot of people, huh."
            },
            {
              "s": 0,
              "t": "だよね。ところで、ハルキの知り合い?",
              "r": "Da yo ne. Tokoro de, Haruki no shiriai?",
              "e": "Right? By the way, are you a friend of Haruki's?"
            },
            {
              "s": 1,
              "t": "そうそう、大学の同期なんだ。そっちは?",
              "r": "Sō sō, daigaku no dōki na n da. Socchi wa?",
              "e": "Yeah, we were in the same year at uni. How about you?"
            },
            {
              "s": 0,
              "t": "俺は職場が一緒。あ、その飲み物どこにあった?",
              "r": "Ore wa shokuba ga issho. A, sono nomimono doko ni atta?",
              "e": "We work together. Oh, where'd you get that drink?"
            },
            {
              "s": 1,
              "t": "キッチンの奥。冷蔵庫にいっぱい入ってたよ。",
              "r": "Kicchin no oku. Reizōko ni ippai haitteta yo.",
              "e": "Back in the kitchen. The fridge is packed with them."
            },
            {
              "s": 0,
              "t": "まじで?取ってくるわ。あ、名前なんて言うの?",
              "r": "Maji de? Totte kuru wa. A, namae nante iu no?",
              "e": "Seriously? I'll go grab one. Oh, what's your name, by the way?"
            },
            {
              "s": 1,
              "t": "リナだよ。よろしくね。",
              "r": "Rina da yo. Yoroshiku ne.",
              "e": "I'm Rina. Nice to meet you."
            },
            {
              "s": 0,
              "t": "リナちゃんね、了解。後でまた話そう!",
              "r": "Rina-chan ne, ryōkai. Ato de mata hanasō!",
              "e": "Rina, got it. Let's chat more later!"
            }
          ],
          "vocab": [
            {
              "w": "どうも",
              "r": "dōmo",
              "m": "casual 'hey/hi' (also 'thanks')"
            },
            {
              "w": "〜ばっかり",
              "r": "bakkari",
              "m": "just (did something); only"
            },
            {
              "w": "知り合い",
              "r": "shiriai",
              "m": "acquaintance"
            },
            {
              "w": "同期",
              "r": "dōki",
              "m": "someone in the same year/cohort"
            },
            {
              "w": "まじで",
              "r": "maji de",
              "m": "seriously? / for real"
            },
            {
              "w": "了解",
              "r": "ryōkai",
              "m": "got it / roger"
            }
          ]
        },
        {
          "scene": "At the office near a deadline",
          "title": "Help Before the Deadline",
          "speakers": [
            {
              "name": "Kenta",
              "emoji": "🧑‍💼"
            },
            {
              "name": "You",
              "emoji": "😣"
            }
          ],
          "note": "「ちょっといい?」(literally 'is a little okay?') is the go-to way to politely grab a coworker's attention before asking a favor — softer than diving straight into the request.",
          "lines": [
            {
              "s": 1,
              "t": "ケンタ、今ちょっといい?",
              "r": "Kenta, ima chotto ii?",
              "e": "Kenta, got a sec right now?"
            },
            {
              "s": 0,
              "t": "うん、どうした?忙しそうじゃん。",
              "r": "Un, dō shita? Isogashisō jan.",
              "e": "Yeah, what's up? You look swamped."
            },
            {
              "s": 1,
              "t": "それなんだよ。この資料、夕方までに終わらなくて…手伝ってもらえない?",
              "r": "Sore na n da yo. Kono shiryō, yūgata made ni owaranakute… tetsudatte moraenai?",
              "e": "That's the thing. This report won't be done by evening… could you help me out?"
            },
            {
              "s": 0,
              "t": "あー、了解。どこからやればいい?",
              "r": "Ā, ryōkai. Doko kara yareba ii?",
              "e": "Ah, sure. Where should I start?"
            },
            {
              "s": 1,
              "t": "後半のグラフだけお願いしたいんだよね。",
              "r": "Kōhan no gurafu dake onegai shitai n da yo ne.",
              "e": "I just want you to take the graphs in the second half."
            },
            {
              "s": 0,
              "t": "オッケー、それくらいなら全然いけるよ。",
              "r": "Okkē, sore kurai nara zenzen ikeru yo.",
              "e": "Okay, something like that's totally doable."
            },
            {
              "s": 1,
              "t": "助かる〜!ほんとごめんね、急に。",
              "r": "Tasukaru~! Honto gomen ne, kyū ni.",
              "e": "You're a lifesaver! Sorry to spring this on you."
            },
            {
              "s": 0,
              "t": "気にすんな。困ったときはお互いさまでしょ。",
              "r": "Ki ni sun na. Komatta toki wa otagaisama desho.",
              "e": "Don't worry about it. We help each other out, right?"
            },
            {
              "s": 1,
              "t": "ほんとそれ。終わったらコーヒーおごる!",
              "r": "Honto sore. Owattara kōhī ogoru!",
              "e": "So true. When we're done, coffee's on me!"
            }
          ],
          "vocab": [
            {
              "w": "ちょっといい?",
              "r": "chotto ii?",
              "m": "got a sec? (to start a request)"
            },
            {
              "w": "資料",
              "r": "shiryō",
              "m": "document / materials / report"
            },
            {
              "w": "手伝う",
              "r": "tetsudau",
              "m": "to help (with a task)"
            },
            {
              "w": "全然いける",
              "r": "zenzen ikeru",
              "m": "totally doable / no problem"
            },
            {
              "w": "お互いさま",
              "r": "otagaisama",
              "m": "we're in the same boat / mutual"
            },
            {
              "w": "おごる",
              "r": "ogoru",
              "m": "to treat (pay for someone)"
            }
          ]
        },
        {
          "scene": "Catching up on Monday",
          "title": "Telling a Friend About the Weekend",
          "speakers": [
            {
              "name": "Mika",
              "emoji": "👩"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「〜じゃん?」turns a statement into a 'you know how...?' setup, inviting the listener to nod along. It's the storyteller's best friend in casual Japanese for building up to a punchline.",
          "lines": [
            {
              "s": 0,
              "t": "週末どうだった?どっか行った?",
              "r": "Shūmatsu dō datta? Dokka itta?",
              "e": "How was your weekend? Did you go anywhere?"
            },
            {
              "s": 1,
              "t": "それがさ、急に海行くことになって。",
              "r": "Sore ga sa, kyū ni umi iku koto ni natte.",
              "e": "So get this — we ended up going to the beach out of nowhere."
            },
            {
              "s": 0,
              "t": "えー、いいなあ!天気よかったでしょ?",
              "r": "Ē, ii nā! Tenki yokatta desho?",
              "e": "Oh, nice! The weather was good, right?"
            },
            {
              "s": 1,
              "t": "それがめっちゃ晴れてて。でも日焼けがやばくてさ。",
              "r": "Sore ga meccha harete te. Demo hiyake ga yabakute sa.",
              "e": "It was super sunny. But man, the sunburn was brutal."
            },
            {
              "s": 0,
              "t": "あー、わかる。今ヒリヒリしてるんでしょ?",
              "r": "Ā, wakaru. Ima hirihiri shiteru n desho?",
              "e": "Oh, I get it. It's stinging right now, isn't it?"
            },
            {
              "s": 1,
              "t": "まじでそれ。あと夜にBBQやってさ、最高だった。",
              "r": "Maji de sore. Ato yoru ni bībīkyū yatte sa, saikō datta.",
              "e": "Exactly. And we did a barbecue at night — it was awesome."
            },
            {
              "s": 0,
              "t": "いいじゃん!誰と行ったの?",
              "r": "Ii jan! Dare to itta no?",
              "e": "That's great! Who'd you go with?"
            },
            {
              "s": 1,
              "t": "高校の友達。久々に会えてめっちゃ楽しかった。",
              "r": "Kōkō no tomodachi. Hisabisa ni aete meccha tanoshikatta.",
              "e": "My high school friends. It'd been ages, so it was really fun."
            },
            {
              "s": 0,
              "t": "うらやましい〜。今度私も誘ってよ!",
              "r": "Urayamashii~. Kondo watashi mo sasotte yo!",
              "e": "I'm jealous! Invite me next time!"
            }
          ],
          "vocab": [
            {
              "w": "どっか",
              "r": "dokka",
              "m": "somewhere (casual for どこか)"
            },
            {
              "w": "めっちゃ",
              "r": "meccha",
              "m": "super / really (slang)"
            },
            {
              "w": "日焼け",
              "r": "hiyake",
              "m": "sunburn / suntan"
            },
            {
              "w": "やばい",
              "r": "yabai",
              "m": "crazy / intense (good or bad)"
            },
            {
              "w": "久々",
              "r": "hisabisa",
              "m": "after a long time"
            },
            {
              "w": "誘う",
              "r": "sasou",
              "m": "to invite / ask along"
            }
          ]
        },
        {
          "scene": "Two pet owners chatting",
          "title": "Gushing About Pets",
          "speakers": [
            {
              "name": "Saori",
              "emoji": "🐈"
            },
            {
              "name": "You",
              "emoji": "🐕"
            }
          ],
          "note": "Pet owners often call themselves 親 (parent) and refer to a pet as 〜の子 ('the child'). Calling a fully grown dog うちの子 ('our kid') is completely normal and shows affection, not exaggeration.",
          "lines": [
            {
              "s": 0,
              "t": "そのワンちゃん、めっちゃかわいいね!何歳?",
              "r": "Sono wan-chan, meccha kawaii ne! Nan-sai?",
              "e": "Your doggie is so cute! How old?"
            },
            {
              "s": 1,
              "t": "ありがと〜、三歳。もうやんちゃで大変だよ。",
              "r": "Arigatō~, san-sai. Mō yancha de taihen da yo.",
              "e": "Thanks! Three. He's such a handful, so wild."
            },
            {
              "s": 0,
              "t": "わかる。うちの猫も家の中で運動会してる。",
              "r": "Wakaru. Uchi no neko mo ie no naka de undōkai shiteru.",
              "e": "I get it. My cat treats the house like a racetrack too."
            },
            {
              "s": 1,
              "t": "猫飼ってるんだ!夜中に走り回らない?",
              "r": "Neko katteru n da! Yonaka ni hashirimawaranai?",
              "e": "Oh, you have a cat! Doesn't it run around in the middle of the night?"
            },
            {
              "s": 0,
              "t": "走る走る。深夜の運動会で毎回起こされる。",
              "r": "Hashiru hashiru. Shin'ya no undōkai de maikai okosareru.",
              "e": "Oh, totally. Those midnight zoomies wake me up every time."
            },
            {
              "s": 1,
              "t": "あはは、うちもおんなじ。でも顔見たら許しちゃう。",
              "r": "Ahaha, uchi mo onnaji. Demo kao mitara yurushichau.",
              "e": "Haha, same here. But one look at his face and I forgive him."
            },
            {
              "s": 0,
              "t": "それな。結局うちの子が一番かわいいって思っちゃう。",
              "r": "Sore na. Kekkyoku uchi no ko ga ichiban kawaii tte omocchau.",
              "e": "Right? In the end you just think your own kid is the cutest."
            },
            {
              "s": 1,
              "t": "ほんとそれ。完全に親バカだよね。",
              "r": "Honto sore. Kanzen ni oyabaka da yo ne.",
              "e": "So true. We're total doting parents."
            },
            {
              "s": 0,
              "t": "今度ドッグランで会えたらいいね!",
              "r": "Kondo doggu ran de aetara ii ne!",
              "e": "It'd be nice to run into each other at the dog park sometime!"
            }
          ],
          "vocab": [
            {
              "w": "ワンちゃん",
              "r": "wan-chan",
              "m": "doggie (cute word for dog)"
            },
            {
              "w": "やんちゃ",
              "r": "yancha",
              "m": "mischievous / a handful"
            },
            {
              "w": "運動会",
              "r": "undōkai",
              "m": "lit. 'sports day'; here, zoomies"
            },
            {
              "w": "おんなじ",
              "r": "onnaji",
              "m": "the same (casual for 同じ)"
            },
            {
              "w": "うちの子",
              "r": "uchi no ko",
              "m": "our kid (one's own pet)"
            },
            {
              "w": "親バカ",
              "r": "oyabaka",
              "m": "doting/over-fond parent"
            }
          ]
        },
        {
          "scene": "Booking tickets for an event",
          "title": "Buying Tickets for a Concert",
          "speakers": [
            {
              "name": "Daiki",
              "emoji": "🎸"
            },
            {
              "name": "You",
              "emoji": "🎟️"
            }
          ],
          "note": "「取る」(toru, 'to take') is the standard verb for securing tickets — チケット取れた? means 'did you get the tickets?'. Saying 買えた would sound oddly literal for reserved seats.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、来週のライブのチケット取れた?",
              "r": "Nee, raishū no raibu no chiketto toreta?",
              "e": "Hey, did you manage to get the tickets for next week's show?"
            },
            {
              "s": 1,
              "t": "取れた取れた!二枚ゲットしたよ。",
              "r": "Toreta toreta! Ni-mai getto shita yo.",
              "e": "Got 'em! Snagged two."
            },
            {
              "s": 0,
              "t": "まじ?さすが!席どのへん?",
              "r": "Maji? Sasuga! Seki dono hen?",
              "e": "For real? Nice one! Whereabouts are the seats?"
            },
            {
              "s": 1,
              "t": "けっこう前のほう。ステージ近いと思う。",
              "r": "Kekkō mae no hō. Sutēji chikai to omou.",
              "e": "Pretty close to the front. I think we'll be near the stage."
            },
            {
              "s": 0,
              "t": "やった!いくらだった?あとで払うわ。",
              "r": "Yatta! Ikura datta? Ato de harau wa.",
              "e": "Yes! How much was it? I'll pay you back later."
            },
            {
              "s": 1,
              "t": "一枚六千円。PayPayでいいよ。",
              "r": "Ichi-mai roku-sen en. Peipei de ii yo.",
              "e": "Six thousand yen each. You can just PayPay me."
            },
            {
              "s": 0,
              "t": "了解。当日は何時に集合する?",
              "r": "Ryōkai. Tōjitsu wa nan-ji ni shūgō suru?",
              "e": "Got it. What time should we meet up on the day?"
            },
            {
              "s": 1,
              "t": "開場が六時だから、五時半に駅でどう?",
              "r": "Kaijō ga roku-ji da kara, go-ji han ni eki de dō?",
              "e": "Doors open at six, so how about 5:30 at the station?"
            },
            {
              "s": 0,
              "t": "オッケー、楽しみすぎる!",
              "r": "Okkē, tanoshimi sugiru!",
              "e": "Okay, I can't wait!"
            }
          ],
          "vocab": [
            {
              "w": "ライブ",
              "r": "raibu",
              "m": "live concert / gig"
            },
            {
              "w": "チケット取れた?",
              "r": "chiketto toreta?",
              "m": "did you get the tickets?"
            },
            {
              "w": "ゲット",
              "r": "getto",
              "m": "to get/snag (slang from English)"
            },
            {
              "w": "席",
              "r": "seki",
              "m": "seat"
            },
            {
              "w": "集合",
              "r": "shūgō",
              "m": "meeting up / gathering point"
            },
            {
              "w": "開場",
              "r": "kaijō",
              "m": "doors opening (of a venue)"
            }
          ]
        },
        {
          "scene": "Parting ways after hanging out",
          "title": "Saying Goodbye for Now",
          "speakers": [
            {
              "name": "Nao",
              "emoji": "👋"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「また連絡するね」('I'll message you again') is the standard friendly sign-off, but the warmest close is 「また今度!」 — 今度 means 'next time / soon' and signals you genuinely intend to meet again, not just polite filler.",
          "lines": [
            {
              "s": 0,
              "t": "あー、今日めっちゃ楽しかった!",
              "r": "Ā, kyō meccha tanoshikatta!",
              "e": "Ah, today was so much fun!"
            },
            {
              "s": 1,
              "t": "ね!話しすぎて喉カラカラだわ。",
              "r": "Ne! Hanashisugite nodo karakara da wa.",
              "e": "Right? We talked so much my throat's totally dry."
            },
            {
              "s": 0,
              "t": "あはは。そろそろ電車の時間だ、行かなきゃ。",
              "r": "Ahaha. Sorosoro densha no jikan da, ikanakya.",
              "e": "Haha. It's about time for my train, I gotta go."
            },
            {
              "s": 1,
              "t": "あ、もうこんな時間。気をつけて帰ってね。",
              "r": "A, mō konna jikan. Ki o tsukete kaette ne.",
              "e": "Oh, it's that late already. Get home safe, okay?"
            },
            {
              "s": 0,
              "t": "うん。次いつ会える?来月とか空いてる?",
              "r": "Un. Tsugi itsu aeru? Raigetsu toka aiteru?",
              "e": "Yeah. When can we meet next? You free next month or so?"
            },
            {
              "s": 1,
              "t": "たぶんいける!また連絡するね。",
              "r": "Tabun ikeru! Mata renraku suru ne.",
              "e": "Probably! I'll message you."
            },
            {
              "s": 0,
              "t": "了解。次はあの新しいカフェ行こうよ。",
              "r": "Ryōkai. Tsugi wa ano atarashii kafe ikō yo.",
              "e": "Got it. Next time let's hit that new cafe."
            },
            {
              "s": 1,
              "t": "いいね、絶対行こう!じゃあ、またね。",
              "r": "Ii ne, zettai ikō! Jā, mata ne.",
              "e": "Sounds good, let's definitely go! Okay, see you."
            },
            {
              "s": 0,
              "t": "うん、また今度!バイバイ。",
              "r": "Un, mata kondo! Baibai.",
              "e": "Yeah, see you soon! Bye-bye."
            }
          ],
          "vocab": [
            {
              "w": "カラカラ",
              "r": "karakara",
              "m": "bone-dry (e.g. throat)"
            },
            {
              "w": "そろそろ",
              "r": "sorosoro",
              "m": "it's about time to..."
            },
            {
              "w": "気をつけて",
              "r": "ki o tsukete",
              "m": "take care / be safe"
            },
            {
              "w": "連絡する",
              "r": "renraku suru",
              "m": "to get in touch / message"
            },
            {
              "w": "また今度",
              "r": "mata kondo",
              "m": "see you next time / soon"
            },
            {
              "w": "またね",
              "r": "mata ne",
              "m": "see you (casual goodbye)"
            }
          ]
        }
      ],
      "advanced": [
        {
          "scene": "At a cafe counter",
          "title": "Coffee to go",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「ホットで」/「アイスで」 (hotto de / aisu de) is how natives lock in temperature in one breath — you almost never say the full 'hot coffee'. And 'tall/grande' aren't translated; just say サイズはトールで.",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませ、ご注文は？",
              "r": "Irasshaimase, gochūmon wa?",
              "e": "Welcome! What can I get you?"
            },
            {
              "s": 1,
              "t": "あ、ラテをホットで一つ、テイクアウトで。",
              "r": "A, rate o hotto de hitotsu, teikuauto de.",
              "e": "Uh, one hot latte, to go."
            },
            {
              "s": 0,
              "t": "サイズはいかがしますか？",
              "r": "Saizu wa ikaga shimasu ka?",
              "e": "What size would you like?"
            },
            {
              "s": 1,
              "t": "トールで。あ、ミルク多めにできます？",
              "r": "Tōru de. A, miruku ōme ni dekimasu?",
              "e": "Tall. Oh, can you go a bit heavier on the milk?"
            },
            {
              "s": 0,
              "t": "はい、大丈夫ですよ。お砂糖はおつけしますか？",
              "r": "Hai, daijōbu desu yo. Osatō wa otsuke shimasu ka?",
              "e": "Sure, no problem. Want sugar with that?"
            },
            {
              "s": 1,
              "t": "あ、いらないです。あとシロップ抜きで。",
              "r": "A, iranai desu. Ato shiroppu nuki de.",
              "e": "Nah, I'm good. And hold the syrup."
            },
            {
              "s": 0,
              "t": "かしこまりました。お会計500円になります。",
              "r": "Kashikomarimashita. Okaikei gohyaku-en ni narimasu.",
              "e": "Got it. That'll be 500 yen."
            },
            {
              "s": 1,
              "t": "ペイペイで。",
              "r": "PeiPei de.",
              "e": "I'll pay with PayPay."
            },
            {
              "s": 0,
              "t": "はい、こちら読み取りお願いします。少々お待ちください。",
              "r": "Hai, kochira yomitori onegai shimasu. Shōshō omachi kudasai.",
              "e": "Sure, scan here please. One moment."
            },
            {
              "s": 1,
              "t": "あ、急いでないんで全然ゆっくりで大丈夫です。",
              "r": "A, isoide nain de zenzen yukkuri de daijōbu desu.",
              "e": "Oh, I'm not in a rush, take your time."
            }
          ],
          "vocab": [
            {
              "w": "テイクアウト",
              "r": "teikuauto",
              "m": "takeout / to go"
            },
            {
              "w": "多めに",
              "r": "ōme ni",
              "m": "a bit more / heavier on"
            },
            {
              "w": "〜抜きで",
              "r": "~nuki de",
              "m": "without ~ / hold the ~"
            },
            {
              "w": "お会計",
              "r": "okaikei",
              "m": "the bill / total"
            },
            {
              "w": "ペイペイ",
              "r": "PeiPei",
              "m": "PayPay (QR pay app)"
            },
            {
              "w": "ゆっくりで大丈夫",
              "r": "yukkuri de daijōbu",
              "m": "take your time, it's fine"
            }
          ]
        },
        {
          "scene": "On a street corner",
          "title": "Which way to the station",
          "speakers": [
            {
              "name": "Stranger",
              "emoji": "🧭"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "Natives soften a stranger request with すみません + ちょっと (a 'little') even for a big favor — ちょっとお聞きしたいんですけど trails off on purpose. Leaving the sentence hanging on けど is politer than finishing it.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、ちょっとお聞きしたいんですけど…",
              "r": "Sumimasen, chotto okiki shitain desu kedo…",
              "e": "Excuse me, could I ask you something…?"
            },
            {
              "s": 0,
              "t": "あ、はい。どうしました？",
              "r": "A, hai. Dō shimashita?",
              "e": "Oh, sure. What's up?"
            },
            {
              "s": 1,
              "t": "駅ってこっちで合ってます？地下鉄の方の。",
              "r": "Eki tte kotchi de attemasu? Chikatetsu no hō no.",
              "e": "Is the station this way? The subway one, I mean."
            },
            {
              "s": 0,
              "t": "あー、地下鉄ね。それ逆方向だわ。",
              "r": "Ā, chikatetsu ne. Sore gyakuhōkō da wa.",
              "e": "Ah, the subway. That's the opposite direction, actually."
            },
            {
              "s": 1,
              "t": "えっ、まじですか。やばい、完全に逆来てた。",
              "r": "E', maji desu ka. Yabai, kanzen ni gyaku kiteta.",
              "e": "Wait, seriously? Ugh, I totally went the wrong way."
            },
            {
              "s": 0,
              "t": "そこの角までまっすぐ戻って、コンビニ右ね。",
              "r": "Soko no kado made massugu modotte, konbini migi ne.",
              "e": "Head straight back to that corner, then right at the convenience store."
            },
            {
              "s": 1,
              "t": "コンビニ右…で、あとは看板出てます？",
              "r": "Konbini migi… de, ato wa kanban detemasu?",
              "e": "Right at the konbini… and then is there a sign?"
            },
            {
              "s": 0,
              "t": "うん、青いやつ。歩いて5分くらいかな。",
              "r": "Un, aoi yatsu. Aruite gofun kurai kana.",
              "e": "Yeah, a blue one. About a five-minute walk, I'd say."
            },
            {
              "s": 1,
              "t": "助かりました、ほんとに。ありがとうございます！",
              "r": "Tasukarimashita, honto ni. Arigatō gozaimasu!",
              "e": "You really saved me. Thank you so much!"
            },
            {
              "s": 0,
              "t": "いえいえ、気をつけて〜。",
              "r": "Ie ie, ki o tsukete~.",
              "e": "No worries, take care!"
            }
          ],
          "vocab": [
            {
              "w": "合ってます",
              "r": "attemasu",
              "m": "is (this) correct / right"
            },
            {
              "w": "逆方向",
              "r": "gyakuhōkō",
              "m": "opposite direction"
            },
            {
              "w": "やばい",
              "r": "yabai",
              "m": "oh no / crazy (all-purpose)"
            },
            {
              "w": "まっすぐ戻る",
              "r": "massugu modoru",
              "m": "go straight back"
            },
            {
              "w": "看板",
              "r": "kanban",
              "m": "sign / signboard"
            },
            {
              "w": "助かりました",
              "r": "tasukarimashita",
              "m": "you saved me / thanks a ton"
            }
          ]
        },
        {
          "scene": "At the office Monday morning",
          "title": "Monday morning catch-up",
          "speakers": [
            {
              "name": "Tanaka",
              "emoji": "👔"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "だるい (darui) literally means 'sluggish/heavy' but on Mondays it's the go-to gripe for 'I can't be bothered / I'm wiped.' Pair it with 月曜だる〜 and any coworker instantly gets you.",
          "lines": [
            {
              "s": 0,
              "t": "おはよ〜。週末どっか行った？",
              "r": "Ohayo~. Shūmatsu dokka itta?",
              "e": "Morning! Did you go anywhere this weekend?"
            },
            {
              "s": 1,
              "t": "おはようございます。いや、もう家でゴロゴロしてました。",
              "r": "Ohayō gozaimasu. Iya, mō ie de gorogoro shitemashita.",
              "e": "Morning. Nah, I just vegged out at home."
            },
            {
              "s": 0,
              "t": "わかる〜。この雨だと出る気しないよね。",
              "r": "Wakaru~. Kono ame da to deru ki shinai yo ne.",
              "e": "I feel you. With this rain you don't wanna go out, right?"
            },
            {
              "s": 1,
              "t": "ほんとそれ。しかも急に寒くなかったですか？",
              "r": "Honto sore. Shikamo kyū ni samuku nakatta desu ka?",
              "e": "Right? And wasn't it suddenly cold, too?"
            },
            {
              "s": 0,
              "t": "寒かった寒かった。風邪ひきそうだったもん。",
              "r": "Samukatta samukatta. Kaze hikisō datta mon.",
              "e": "So cold. I thought I was gonna catch a cold."
            },
            {
              "s": 1,
              "t": "うわ、お大事に。ってかもう月曜だる〜。",
              "r": "Uwa, odaiji ni. Tte ka mō getsuyō daru~.",
              "e": "Aw, take care. Ugh, it's Monday already, I'm dead."
            },
            {
              "s": 0,
              "t": "それな。週末あっという間すぎ。",
              "r": "Sore na. Shūmatsu attoiuma sugi.",
              "e": "Tell me about it. The weekend went by way too fast."
            },
            {
              "s": 1,
              "t": "ですよね…あ、午後の会議って何時からでしたっけ？",
              "r": "Desu yo ne… a, gogo no kaigi tte nanji kara deshita kke?",
              "e": "Right… oh, what time was the afternoon meeting again?"
            },
            {
              "s": 0,
              "t": "2時から。あ、その前にメール返しとかなきゃ。",
              "r": "Niji kara. A, sono mae ni mēru kaeshitokanakya.",
              "e": "Two o'clock. Oh, I gotta reply to that email before then."
            },
            {
              "s": 1,
              "t": "ですね、頑張りましょ〜。",
              "r": "Desu ne, ganbarimasho~.",
              "e": "Yeah, let's get through it."
            }
          ],
          "vocab": [
            {
              "w": "ゴロゴロする",
              "r": "gorogoro suru",
              "m": "laze around / veg out"
            },
            {
              "w": "出る気しない",
              "r": "deru ki shinai",
              "m": "don't feel like going out"
            },
            {
              "w": "だるい",
              "r": "darui",
              "m": "sluggish / can't be bothered"
            },
            {
              "w": "それな",
              "r": "sore na",
              "m": "exactly / so true"
            },
            {
              "w": "あっという間",
              "r": "attoiuma",
              "m": "in the blink of an eye"
            },
            {
              "w": "〜とかなきゃ",
              "r": "~tokanakya",
              "m": "gotta do ~ (in advance)"
            }
          ]
        },
        {
          "scene": "Texting/chatting with a friend",
          "title": "New place this weekend?",
          "speakers": [
            {
              "name": "Yuka",
              "emoji": "🍜"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "気になってた (ki ni natteta) = 'I've had my eye on it' — the natural way to say you've been curious about a place. And 〜じゃね？ is super-casual 'isn't it?/right?' used between close friends instead of 〜じゃない？",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、今週末空いてる？",
              "r": "Nē, konshūmatsu aiteru?",
              "e": "Hey, are you free this weekend?"
            },
            {
              "s": 1,
              "t": "土曜なら空いてるよ。なんかあるの？",
              "r": "Doyō nara aiteru yo. Nanka aru no?",
              "e": "I'm free Saturday. What's up?"
            },
            {
              "s": 0,
              "t": "駅前に新しいタイ料理屋できたの知ってる？",
              "r": "Ekimae ni atarashii tairyōriya dekita no shitteru?",
              "e": "Did you hear a new Thai place opened by the station?"
            },
            {
              "s": 1,
              "t": "あ〜知ってる知ってる！ずっと気になってたやつ。",
              "r": "Ā shitteru shitteru! Zutto ki ni natteta yatsu.",
              "e": "Oh yeah, I know it! I've been wanting to try that."
            },
            {
              "s": 0,
              "t": "でしょ？口コミめっちゃ良くてさ、行ってみない？",
              "r": "Desho? Kuchikomi metcha yokute sa, itte minai?",
              "e": "Right? The reviews are super good — wanna check it out?"
            },
            {
              "s": 1,
              "t": "行く行く！でもあそこ予約した方がよくない？",
              "r": "Iku iku! Demo asoko yoyaku shita hō ga yokunai?",
              "e": "Yes, let's! But shouldn't we book a table there?"
            },
            {
              "s": 0,
              "t": "だよね、人気らしいから。私やっとくよ。",
              "r": "Da yo ne, ninki rashii kara. Watashi yattoku yo.",
              "e": "Yeah, it's supposed to be popular. I'll handle it."
            },
            {
              "s": 1,
              "t": "助かる〜。じゃあ7時くらいでいい？",
              "r": "Tasukaru~. Jā shichiji kurai de ii?",
              "e": "Thanks! So is around seven okay?"
            },
            {
              "s": 0,
              "t": "オッケー。じゃあ駅の改札で待ち合わせね。",
              "r": "Okkē. Jā eki no kaisatsu de machiawase ne.",
              "e": "Okay. Let's meet at the station ticket gate then."
            },
            {
              "s": 1,
              "t": "りょ！楽しみ〜。",
              "r": "Ryo! Tanoshimi~.",
              "e": "Got it! Can't wait."
            }
          ],
          "vocab": [
            {
              "w": "気になってた",
              "r": "ki ni natteta",
              "m": "had my eye on / been curious about"
            },
            {
              "w": "口コミ",
              "r": "kuchikomi",
              "m": "reviews / word of mouth"
            },
            {
              "w": "〜した方がよくない？",
              "r": "~shita hō ga yokunai?",
              "m": "shouldn't we ~? / better to ~?"
            },
            {
              "w": "やっとく",
              "r": "yattoku",
              "m": "I'll do it (in advance)"
            },
            {
              "w": "待ち合わせ",
              "r": "machiawase",
              "m": "meeting up / rendezvous"
            },
            {
              "w": "りょ",
              "r": "ryo",
              "m": "got it (super-casual 'roger')"
            }
          ]
        },
        {
          "scene": "Chatting about a drama finale",
          "title": "That finale though",
          "speakers": [
            {
              "name": "Mai",
              "emoji": "📺"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "神回 (kamikai), literally 'god episode,' is fan-slang for an absolutely incredible episode. And ネタバレ (netabare) = 'spoiler' — saying ネタバレなしで is the polite way to ask someone not to ruin it.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、昨日の最終回見た！？",
              "r": "Nē, kinō no saishūkai mita!?",
              "e": "Hey, did you watch the finale last night?!"
            },
            {
              "s": 1,
              "t": "見た見た！やばくなかった？泣いたんだけど。",
              "r": "Mita mita! Yabaku nakatta? Naitan dakedo.",
              "e": "I did, I did! Wasn't it insane? I literally cried."
            },
            {
              "s": 0,
              "t": "わかる！まさかあいつが裏切るとはね…",
              "r": "Wakaru! Masaka aitsu ga uragiru to wa ne…",
              "e": "Right?! I never saw that guy betraying everyone coming…"
            },
            {
              "s": 1,
              "t": "それな！完全に騙された。あの伏線やばすぎ。",
              "r": "Sore na! Kanzen ni damasareta. Ano fukusen yabasugi.",
              "e": "Exactly! Totally fooled me. That foreshadowing was wild."
            },
            {
              "s": 0,
              "t": "ほんとあの回、もう神回だったわ。",
              "r": "Honto ano kai, mō kamikai datta wa.",
              "e": "Honestly that episode was a god-tier one."
            },
            {
              "s": 1,
              "t": "わかりすぎる。ラストのセリフでもう一回泣いた。",
              "r": "Wakarisugiru. Rasuto no serifu de mō ikkai naita.",
              "e": "So true. That last line made me cry all over again."
            },
            {
              "s": 0,
              "t": "あれずるいよね。続編やってほしくない？",
              "r": "Are zurui yo ne. Zokuhen yatte hoshikunai?",
              "e": "That part's just unfair, right? Don't you want a sequel?"
            },
            {
              "s": 1,
              "t": "ほしい！ってか絶対あるでしょあの終わり方。",
              "r": "Hoshii! Tte ka zettai aru desho ano owarikata.",
              "e": "I do! I mean, there's gotta be one with an ending like that."
            },
            {
              "s": 0,
              "t": "だよね〜。次のクールの新ドラマもチェックしよ。",
              "r": "Da yo ne~. Tsugi no kūru no shin dorama mo chekku shiyo.",
              "e": "Right? Let's check out the new dramas next season too."
            },
            {
              "s": 1,
              "t": "しよしよ！また実況しながら見よ〜。",
              "r": "Shiyo shiyo! Mata jikkyō shinagara miyo~.",
              "e": "Let's do it! Let's live-text while we watch again."
            }
          ],
          "vocab": [
            {
              "w": "最終回",
              "r": "saishūkai",
              "m": "the finale / last episode"
            },
            {
              "w": "伏線",
              "r": "fukusen",
              "m": "foreshadowing / setup"
            },
            {
              "w": "神回",
              "r": "kamikai",
              "m": "amazing episode ('god episode')"
            },
            {
              "w": "続編",
              "r": "zokuhen",
              "m": "sequel"
            },
            {
              "w": "クール",
              "r": "kūru",
              "m": "TV season (3-month cours)"
            },
            {
              "w": "実況",
              "r": "jikkyō",
              "m": "live commentary / live-texting"
            }
          ]
        },
        {
          "scene": "Leaving the office for drinks",
          "title": "After-work drinks",
          "speakers": [
            {
              "name": "Sato",
              "emoji": "🍺"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "とりあえずビール (toriaezu bīru) — 'a beer to start, for now' — is the iconic opening order in Japan; everyone says it so the table can toast together before deciding what's next. お疲れ (otsukare) doubles as both 'good work' and a casual 'cheers/hey.'",
          "lines": [
            {
              "s": 0,
              "t": "お疲れ〜！このあとちょっと飲んでかない？",
              "r": "Otsukare~! Kono ato chotto nonde kanai?",
              "e": "Good work today! Wanna grab a quick drink after this?"
            },
            {
              "s": 1,
              "t": "お疲れさまです。いいですね、行きましょ！",
              "r": "Otsukaresama desu. Ii desu ne, ikimasho!",
              "e": "Good work. Sounds great, let's go!"
            },
            {
              "s": 0,
              "t": "駅前の居酒屋でいい？安いしうまいんだよあそこ。",
              "r": "Ekimae no izakaya de ii? Yasui shi umain da yo asoko.",
              "e": "The izakaya by the station okay? It's cheap and good there."
            },
            {
              "s": 1,
              "t": "全然いいです。お腹ぺこぺこなんで助かります。",
              "r": "Zenzen ii desu. Onaka pekopeko nan de tasukarimasu.",
              "e": "Totally fine. I'm starving, so that's perfect."
            },
            {
              "s": 0,
              "t": "じゃ決まり。とりあえず生でいい？",
              "r": "Ja kimari. Toriaezu nama de ii?",
              "e": "Then it's settled. A draft beer to start, sound good?"
            },
            {
              "s": 1,
              "t": "もちろん！とりあえずビールっしょ。",
              "r": "Mochiron! Toriaezu bīru ssho.",
              "e": "Of course! Gotta start with a beer."
            },
            {
              "s": 0,
              "t": "だよな〜。今日マジ疲れたわ、乾杯したい。",
              "r": "Da yo na~. Kyō maji tsukareta wa, kanpai shitai.",
              "e": "Right? I'm seriously wiped today, I need that toast."
            },
            {
              "s": 1,
              "t": "ですよね。あの会議長すぎましたもん。",
              "r": "Desu yo ne. Ano kaigi nagasugimashita mon.",
              "e": "For real. That meeting dragged on forever."
            },
            {
              "s": 0,
              "t": "な。じゃ今日は飲も飲も！おごるとは言ってないけど。",
              "r": "Na. Ja kyō wa nomo nomo! Ogoru to wa ittenai kedo.",
              "e": "Right? Let's drink up tonight! Not saying it's on me, though."
            },
            {
              "s": 1,
              "t": "ちょっと〜（笑）。じゃあ割り勘で行きましょ。",
              "r": "Chotto~ (warai). Jā warikan de ikimasho.",
              "e": "Hey now, haha. Let's just split it then."
            }
          ],
          "vocab": [
            {
              "w": "飲んでく",
              "r": "nonde ku",
              "m": "go for a drink (before heading home)"
            },
            {
              "w": "居酒屋",
              "r": "izakaya",
              "m": "Japanese pub / bar-eatery"
            },
            {
              "w": "ぺこぺこ",
              "r": "pekopeko",
              "m": "starving / very hungry"
            },
            {
              "w": "とりあえず生",
              "r": "toriaezu nama",
              "m": "a draft beer to start"
            },
            {
              "w": "乾杯",
              "r": "kanpai",
              "m": "cheers / toast"
            },
            {
              "w": "割り勘",
              "r": "warikan",
              "m": "splitting the bill"
            }
          ]
        },
        {
          "scene": "On the street",
          "title": "Running into an old friend",
          "speakers": [
            {
              "name": "Yuka",
              "emoji": "😄"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "「ひさしぶり」alone can feel a bit flat between close friends — natives stretch it to「めっちゃひさしぶり!」or「ひさしぶりすぎ!」for warmth. And「変わってないね」(you haven't changed a bit) is a standard, friendly compliment when you reunite.",
          "lines": [
            {
              "s": 0,
              "t": "えっ、うそ、ユカじゃん!めっちゃひさしぶり!",
              "r": "E, uso, Yuka jan! Meccha hisashiburi!",
              "e": "Wait, no way, it's you! It's been forever!"
            },
            {
              "s": 1,
              "t": "うわ、ほんとだ!え、何年ぶり?二年くらい?",
              "r": "Uwa, honto da! E, nan-nen-buri? Ni-nen kurai?",
              "e": "Whoa, seriously! How long has it been? Like two years?"
            },
            {
              "s": 0,
              "t": "それくらいかも。全然変わってないね、安心したわ。",
              "r": "Sore kurai kamo. Zenzen kawattenai ne, anshin shita wa.",
              "e": "Probably about that. You haven't changed at all, that's a relief."
            },
            {
              "s": 1,
              "t": "そっちこそ。今なにしてんの?まだあの会社?",
              "r": "Socchi koso. Ima nani shiten no? Mada ano kaisha?",
              "e": "Same to you. What are you up to now? Still at that company?"
            },
            {
              "s": 0,
              "t": "いや、去年転職した。やっと自分に合うとこ見つけて。",
              "r": "Iya, kyonen tenshoku shita. Yatto jibun ni au toko mitsukete.",
              "e": "Nah, I switched jobs last year. Finally found a place that fits me."
            },
            {
              "s": 1,
              "t": "おー、いいじゃん!じゃあ今このへん住んでんの?",
              "r": "Ō, ii jan! Jā ima kono hen sunden no?",
              "e": "Oh, nice! So do you live around here now?"
            },
            {
              "s": 0,
              "t": "うん、駅の向こう側。マジ近いからまた飲も?",
              "r": "Un, eki no mukōgawa. Maji chikai kara mata nomo?",
              "e": "Yeah, just the other side of the station. It's super close, so let's grab a drink sometime?"
            },
            {
              "s": 1,
              "t": "ぜひぜひ!連絡先まだ変わってないよね?あとで送るわ。",
              "r": "Zehi zehi! Renrakusaki mada kawattenai yo ne? Ato de okuru wa.",
              "e": "Absolutely! Your number hasn't changed, right? I'll text you later."
            }
          ],
          "vocab": [
            {
              "w": "めっちゃ",
              "r": "meccha",
              "m": "super, really (casual intensifier)"
            },
            {
              "w": "ひさしぶり",
              "r": "hisashiburi",
              "m": "long time no see"
            },
            {
              "w": "転職",
              "r": "tenshoku",
              "m": "changing jobs"
            },
            {
              "w": "このへん",
              "r": "kono hen",
              "m": "around here, this area"
            },
            {
              "w": "飲も",
              "r": "nomo",
              "m": "let's drink (shortened 飲もう)"
            },
            {
              "w": "連絡先",
              "r": "renrakusaki",
              "m": "contact info"
            }
          ]
        },
        {
          "scene": "At a bar after work",
          "title": "Venting about a coworker",
          "speakers": [
            {
              "name": "Rina",
              "emoji": "😤"
            },
            {
              "name": "You",
              "emoji": "🙄"
            }
          ],
          "note": "「人のせいにする」(blame others) and「手柄を横取りする」(steal someone's credit) are the exact phrases natives use for this. Also「マジありえない」literally means \"truly impossible\" but functions as \"I genuinely can't even\" — a go-to venting line.",
          "lines": [
            {
              "s": 1,
              "t": "ちょっと聞いてよ、今日の田中、マジありえなかったわ。",
              "r": "Chotto kiite yo, kyō no Tanaka, maji arienakatta wa.",
              "e": "Okay, just listen — Tanaka today was honestly unbelievable."
            },
            {
              "s": 0,
              "t": "えー、また?なんかやらかしたの?",
              "r": "Ē, mata? Nanka yarakashita no?",
              "e": "Ugh, again? Did he screw something up?"
            },
            {
              "s": 1,
              "t": "私が全部やった企画、しれっと自分の手柄にしてさ。",
              "r": "Watashi ga zenbu yatta kikaku, shiretto jibun no tegara ni shite sa.",
              "e": "The project I did all the work on — he just casually took all the credit."
            },
            {
              "s": 0,
              "t": "は?最低じゃん。よくそんなこと平気でできるね。",
              "r": "Ha? Saitei jan. Yoku sonna koto heiki de dekiru ne.",
              "e": "What? That's the worst. How can he do that with a straight face?"
            },
            {
              "s": 1,
              "t": "しかもミスったときは私のせいにすんの。ほんと無理。",
              "r": "Shikamo misutta toki wa watashi no sei ni sun no. Honto muri.",
              "e": "And when something goes wrong, he pins it on me. I seriously can't deal."
            },
            {
              "s": 0,
              "t": "うわー、それは腹立つわ。上司気づいてないの?",
              "r": "Uwā, sore wa haratatsu wa. Jōshi kizuitenai no?",
              "e": "Ugh, that's infuriating. Does the boss not notice?"
            },
            {
              "s": 1,
              "t": "それがさ、田中、上の前だけいい顔すんだよね。",
              "r": "Sore ga sa, Tanaka, ue no mae dake ii kao sun da yo ne.",
              "e": "That's the thing — Tanaka only puts on a nice face in front of the higher-ups."
            },
            {
              "s": 0,
              "t": "典型的なやつじゃん。今日はもう飲も、おごるから。",
              "r": "Tenkeiteki na yatsu jan. Kyō wa mō nomo, ogoru kara.",
              "e": "Such a textbook type. Let's just drink tonight, it's on me."
            }
          ],
          "vocab": [
            {
              "w": "ありえない",
              "r": "arienai",
              "m": "unbelievable, no way"
            },
            {
              "w": "やらかす",
              "r": "yarakasu",
              "m": "to mess up, blunder"
            },
            {
              "w": "手柄",
              "r": "tegara",
              "m": "credit, achievement"
            },
            {
              "w": "しれっと",
              "r": "shiretto",
              "m": "nonchalantly, brazenly"
            },
            {
              "w": "〜のせいにする",
              "r": "~no sei ni suru",
              "m": "to blame on ~"
            },
            {
              "w": "腹立つ",
              "r": "haratatsu",
              "m": "to be annoyed/angry"
            }
          ]
        },
        {
          "scene": "Looking at apartment listings",
          "title": "Which apartment to rent",
          "speakers": [
            {
              "name": "Ken",
              "emoji": "🤔"
            },
            {
              "name": "You",
              "emoji": "🏠"
            }
          ],
          "note": "Apartment-hunting slang: 「駅近」(eki-chika) = close to the station, and 「徒歩◯分」(toho ◯-fun) = ◯ minutes on foot, which is on every listing. Natives also say「家賃」for rent but often shorten the discussion to「高い/安い」(expensive/cheap).",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、結局どっちにする?駅近のやつとさ、広いほう。",
              "r": "Nē, kekkyoku docchi ni suru? Eki-chika no yatsu to sa, hiroi hō.",
              "e": "Hey, which one are we going with in the end? The one near the station, or the bigger one."
            },
            {
              "s": 1,
              "t": "うーん、悩むわ。駅近は徒歩三分だけど、ちょっと狭いんだよね。",
              "r": "Ūn, nayamu wa. Eki-chika wa toho san-pun dakedo, chotto semai n da yo ne.",
              "e": "Hmm, tough call. The station one is a 3-minute walk, but it's kind of cramped."
            },
            {
              "s": 0,
              "t": "広いほうは徒歩十五分かー。毎日それは地味にきつくない?",
              "r": "Hiroi hō wa toho jūgo-fun kā. Mainichi sore wa jimi ni kitsukunai?",
              "e": "The bigger one's a 15-minute walk, huh. Doing that every day is low-key rough, no?"
            },
            {
              "s": 1,
              "t": "だよね。でも家賃ほぼ同じで部屋数ちがうのデカいんだよなー。",
              "r": "Da yo ne. Demo yachin hobo onaji de heyakazu chigau no dekai n da yo nā.",
              "e": "Right? But the rent's almost the same and the extra rooms are a big deal."
            },
            {
              "s": 0,
              "t": "雨の日とか、絶対駅近のほうがラクだよ、絶対。",
              "r": "Ame no hi toka, zettai eki-chika no hō ga raku da yo, zettai.",
              "e": "On rainy days, the station one is definitely easier, hands down."
            },
            {
              "s": 1,
              "t": "わかる。けど在宅多いし、広いほうが快適かなって。",
              "r": "Wakaru. Kedo zaitaku ōi shi, hiroi hō ga kaiteki ka na tte.",
              "e": "I get that. But I work from home a lot, so the bigger one might be more comfortable."
            },
            {
              "s": 0,
              "t": "あー、それなら広いほうアリかもね。あとは内見だな。",
              "r": "Ā, sore nara hiroi hō ari kamo ne. Ato wa naiken da na.",
              "e": "Ah, in that case the bigger one might work. Then it's down to the viewing."
            },
            {
              "s": 1,
              "t": "だね、実際見てから決めよ。週末いっしょに行く?",
              "r": "Da ne, jissai mite kara kimeyo. Shūmatsu issho ni iku?",
              "e": "Yeah, let's decide after actually seeing it. Wanna go together this weekend?"
            }
          ],
          "vocab": [
            {
              "w": "駅近",
              "r": "eki-chika",
              "m": "close to the station"
            },
            {
              "w": "徒歩◯分",
              "r": "toho ◯-fun",
              "m": "◯ minutes on foot"
            },
            {
              "w": "家賃",
              "r": "yachin",
              "m": "rent"
            },
            {
              "w": "地味に",
              "r": "jimi ni",
              "m": "subtly, low-key (surprisingly)"
            },
            {
              "w": "在宅",
              "r": "zaitaku",
              "m": "working from home"
            },
            {
              "w": "内見",
              "r": "naiken",
              "m": "apartment viewing"
            }
          ]
        },
        {
          "scene": "At an izakaya",
          "title": "Ordering at a restaurant",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🧑‍🍳"
            },
            {
              "name": "You",
              "emoji": "🍶"
            }
          ],
          "note": "「とりあえず生」(toriaezu nama — \"a draft beer to start\") is the classic opening order at any izakaya; saying it instantly marks you as a regular. Also「おすすめ」(recommendation) and「これって◯◯入ってます?」are the natural ways to ask about ingredients.",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませ、お決まりですか?",
              "r": "Irasshaimase, o-kimari desu ka?",
              "e": "Welcome! Are you ready to order?"
            },
            {
              "s": 1,
              "t": "あ、とりあえず生ふたつと、枝豆ください。",
              "r": "A, toriaezu nama futatsu to, edamame kudasai.",
              "e": "Oh, two draft beers to start, and some edamame please."
            },
            {
              "s": 0,
              "t": "はい、生ふたつと枝豆ですね。お料理は?",
              "r": "Hai, nama futatsu to edamame desu ne. O-ryōri wa?",
              "e": "Sure, two drafts and edamame. And for food?"
            },
            {
              "s": 1,
              "t": "唐揚げと、あと今日のおすすめって何ですか?",
              "r": "Karaage to, ato kyō no osusume tte nan desu ka?",
              "e": "The fried chicken, and what's today's recommendation?"
            },
            {
              "s": 0,
              "t": "本日はブリの刺身がおすすめです。脂のってますよ。",
              "r": "Honjitsu wa buri no sashimi ga osusume desu. Abura nottemasu yo.",
              "e": "Today the yellowtail sashimi is great — it's nice and fatty."
            },
            {
              "s": 1,
              "t": "いいですね、それも。あ、これってニンニク入ってます?",
              "r": "Ii desu ne, sore mo. A, kore tte ninniku haittemasu?",
              "e": "Sounds good, we'll take that too. Oh, does this one have garlic in it?"
            },
            {
              "s": 0,
              "t": "そちらは入ってないので大丈夫ですよ。",
              "r": "Sochira wa haittenai node daijōbu desu yo.",
              "e": "That one doesn't, so you're fine."
            },
            {
              "s": 1,
              "t": "よかった。じゃあそれも一個お願いします。",
              "r": "Yokatta. Jā sore mo ikko onegaishimasu.",
              "e": "Great. Then we'll have one of those too, please."
            },
            {
              "s": 0,
              "t": "かしこまりました。少々お待ちください。",
              "r": "Kashikomarimashita. Shōshō o-machi kudasai.",
              "e": "Got it. Just a moment, please."
            }
          ],
          "vocab": [
            {
              "w": "とりあえず生",
              "r": "toriaezu nama",
              "m": "a draft beer to start"
            },
            {
              "w": "おすすめ",
              "r": "osusume",
              "m": "recommendation"
            },
            {
              "w": "脂がのる",
              "r": "abura ga noru",
              "m": "to be fatty/rich (fish)"
            },
            {
              "w": "入ってる",
              "r": "haitteru",
              "m": "to be contained/included"
            },
            {
              "w": "一個",
              "r": "ikko",
              "m": "one (item)"
            },
            {
              "w": "かしこまりました",
              "r": "kashikomarimashita",
              "m": "certainly (polite \"got it\")"
            }
          ]
        },
        {
          "scene": "At a clothing store",
          "title": "Trying on clothes",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛍️"
            },
            {
              "name": "You",
              "emoji": "👕"
            }
          ],
          "note": "「試着」(shichaku) = trying on, and the staff's standard line is「ご試着できますよ」. For sizing, natives often skip the word \"size\" and just say「ワンサイズ上/下」(one size up/down). 「丈」(take) refers specifically to length (of sleeves, hems).",
          "lines": [
            {
              "s": 1,
              "t": "すみません、これのMサイズって置いてますか?",
              "r": "Sumimasen, kore no emu saizu tte oitemasu ka?",
              "e": "Excuse me, do you have this in a medium?"
            },
            {
              "s": 0,
              "t": "ちょっと見てきますね。今出てるのが全部かもですが…",
              "r": "Chotto mite kimasu ne. Ima deteru no ga zenbu kamo desu ga…",
              "e": "Let me check. What's out might be all we have, but…"
            },
            {
              "s": 1,
              "t": "あ、お願いします。試着ってできますか?",
              "r": "A, onegaishimasu. Shichaku tte dekimasu ka?",
              "e": "Oh, please. Can I try it on?"
            },
            {
              "s": 0,
              "t": "もちろんです。あ、Mありました!どうぞ試着室へ。",
              "r": "Mochiron desu. A, emu arimashita! Dōzo shichakushitsu e.",
              "e": "Of course. Oh, we had a medium! Go ahead to the fitting room."
            },
            {
              "s": 1,
              "t": "ありがとうございます。…うーん、ちょっと丈長いかも。",
              "r": "Arigatō gozaimasu. …Ūn, chotto take nagai kamo.",
              "e": "Thank you. …Hmm, the length might be a bit long."
            },
            {
              "s": 0,
              "t": "あー、でしたらワンサイズ下、お持ちしましょうか?",
              "r": "Ā, deshitara wan saizu shita, o-mochi shimashō ka?",
              "e": "Ah, in that case shall I bring you one size down?"
            },
            {
              "s": 1,
              "t": "あ、いいですか?ついでに色違いも見てみたいです。",
              "r": "A, ii desu ka? Tsuide ni iro-chigai mo mite mitai desu.",
              "e": "Oh, can I? While you're at it, I'd like to see the other color too."
            },
            {
              "s": 0,
              "t": "了解です。紺と白がありますよ。すぐ持ってきますね。",
              "r": "Ryōkai desu. Kon to shiro ga arimasu yo. Sugu motte kimasu ne.",
              "e": "Got it. We have navy and white. I'll bring them right over."
            }
          ],
          "vocab": [
            {
              "w": "試着",
              "r": "shichaku",
              "m": "trying on (clothes)"
            },
            {
              "w": "試着室",
              "r": "shichakushitsu",
              "m": "fitting room"
            },
            {
              "w": "丈",
              "r": "take",
              "m": "length (of a garment)"
            },
            {
              "w": "ワンサイズ下",
              "r": "wan saizu shita",
              "m": "one size down"
            },
            {
              "w": "色違い",
              "r": "iro-chigai",
              "m": "a different color (same item)"
            },
            {
              "w": "ついでに",
              "r": "tsuide ni",
              "m": "while at it, by the way"
            }
          ]
        },
        {
          "scene": "At a convenience store register",
          "title": "Paying at a konbini",
          "speakers": [
            {
              "name": "Clerk",
              "emoji": "🏪"
            },
            {
              "name": "You",
              "emoji": "💳"
            }
          ],
          "note": "Konbini staff fire off set questions fast: 「温めますか?」(heat it up?),「袋ご利用ですか?」(do you need a bag?),「ポイントカードお持ちですか?」(have a points card?). A quick「大丈夫です」means \"no thanks\" to any of them — it's the smoothest way to decline.",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませー。お弁当、温めますか?",
              "r": "Irasshaimasē. O-bentō, atatamemasu ka?",
              "e": "Welcome. Shall I heat up the bento?"
            },
            {
              "s": 1,
              "t": "あ、お願いします。",
              "r": "A, onegaishimasu.",
              "e": "Oh, yes please."
            },
            {
              "s": 0,
              "t": "はい。袋はご利用ですか?",
              "r": "Hai. Fukuro wa go-riyō desu ka?",
              "e": "Sure. Do you need a bag?"
            },
            {
              "s": 1,
              "t": "あ、一枚だけください。あとポイントカードあります。",
              "r": "A, ichi-mai dake kudasai. Ato pointo kādo arimasu.",
              "e": "Oh, just one please. And I have a points card."
            },
            {
              "s": 0,
              "t": "ありがとうございます。お会計、税込みで六百八十円です。",
              "r": "Arigatō gozaimasu. O-kaikei, zeikomi de roppyaku-hachijū-en desu.",
              "e": "Thank you. That'll be 680 yen, tax included."
            },
            {
              "s": 1,
              "t": "ペイペイで。あ、スプーンもらえますか?",
              "r": "Peipei de. A, supūn moraemasu ka?",
              "e": "PayPay, please. Oh, can I get a spoon?"
            },
            {
              "s": 0,
              "t": "はい、お付けしますね。温め、もう少々お待ちください。",
              "r": "Hai, o-tsuke shimasu ne. Atatame, mō shōshō o-machi kudasai.",
              "e": "Sure, I'll add one. The heating will be just a moment longer."
            },
            {
              "s": 1,
              "t": "大丈夫です、ありがとうございます。",
              "r": "Daijōbu desu, arigatō gozaimasu.",
              "e": "No problem, thank you."
            }
          ],
          "vocab": [
            {
              "w": "温める",
              "r": "atatameru",
              "m": "to heat up"
            },
            {
              "w": "袋",
              "r": "fukuro",
              "m": "bag"
            },
            {
              "w": "ご利用",
              "r": "go-riyō",
              "m": "use (polite)"
            },
            {
              "w": "ポイントカード",
              "r": "pointo kādo",
              "m": "points/loyalty card"
            },
            {
              "w": "税込み",
              "r": "zeikomi",
              "m": "tax included"
            },
            {
              "w": "お会計",
              "r": "o-kaikei",
              "m": "the bill, total"
            }
          ]
        },
        {
          "scene": "In a taxi",
          "title": "Hop in the Cab",
          "speakers": [
            {
              "name": "Driver",
              "emoji": "🧑‍✈️"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "Drivers expect a landmark, not just an address. Saying 「〜の方まで」(toward ~) is softer and more natural than barking out a destination, and 「〜でいいです」means 'just drop me near there, that's fine.'",
          "lines": [
            {
              "s": 0,
              "t": "どちらまで？",
              "r": "Dochira made?",
              "e": "Where to?"
            },
            {
              "s": 1,
              "t": "渋谷駅のハチ公口の方まで、お願いします。",
              "r": "Shibuya-eki no Hachikō-guchi no hō made, onegaishimasu.",
              "e": "To Shibuya Station, the Hachiko exit side, please."
            },
            {
              "s": 0,
              "t": "あー、はいはい。今ちょっと道混んでるけど大丈夫？",
              "r": "Ā, hai hai. Ima chotto michi konderu kedo daijōbu?",
              "e": "Ah, got it. The roads are a bit jammed right now, that okay?"
            },
            {
              "s": 1,
              "t": "あ、急いでないんで全然平気です。",
              "r": "A, isoidenai n de zenzen heiki desu.",
              "e": "Oh, I'm not in a hurry so it's totally fine."
            },
            {
              "s": 0,
              "t": "了解。にしても今日暑いねえ。",
              "r": "Ryōkai. Nishitemo kyō atsui nē.",
              "e": "Got it. Man, it's hot today though, huh."
            },
            {
              "s": 1,
              "t": "ほんとですよ。もう完全に夏って感じで。",
              "r": "Honto desu yo. Mō kanzen ni natsu tte kanji de.",
              "e": "Seriously. It already feels totally like summer."
            },
            {
              "s": 0,
              "t": "クーラー、もうちょい強くしよっか？",
              "r": "Kūrā, mō choi tsuyoku shiyokka?",
              "e": "Want me to crank the AC up a bit more?"
            },
            {
              "s": 1,
              "t": "あ、お願いします。助かります。",
              "r": "A, onegaishimasu. Tasukarimasu.",
              "e": "Oh yes please, that'd be great."
            },
            {
              "s": 0,
              "t": "はい、じゃそこの信号右ね。すぐ着くよ。",
              "r": "Hai, ja soko no shingō migi ne. Sugu tsuku yo.",
              "e": "Alright, I'll turn right at that light. We'll be there in no time."
            },
            {
              "s": 1,
              "t": "ありがとうございます。あ、その角で止めてください。",
              "r": "Arigatō gozaimasu. A, sono kado de tomete kudasai.",
              "e": "Thank you. Oh, please pull over at that corner."
            }
          ],
          "vocab": [
            {
              "w": "どちらまで",
              "r": "dochira made",
              "m": "where to? (taxi phrase)"
            },
            {
              "w": "〜の方まで",
              "r": "~no hō made",
              "m": "toward ~ (softer destination)"
            },
            {
              "w": "急いでない",
              "r": "isoidenai",
              "m": "not in a hurry"
            },
            {
              "w": "全然平気",
              "r": "zenzen heiki",
              "m": "totally fine / no problem"
            },
            {
              "w": "もうちょい",
              "r": "mō choi",
              "m": "a little more (casual)"
            },
            {
              "w": "止めてください",
              "r": "tomete kudasai",
              "m": "please stop / pull over"
            }
          ]
        },
        {
          "scene": "Hotel front desk",
          "title": "Checking In",
          "speakers": [
            {
              "name": "Clerk",
              "emoji": "🛎️"
            },
            {
              "name": "You",
              "emoji": "🧳"
            }
          ],
          "note": "At check-in, 「〜で予約してた者なんですけど」(I'm the one who booked under ~) is the standard, natural way to introduce yourself. 「チェックアウト何時まででしたっけ？」with 「〜でしたっけ」softly asks something you half-forgot.",
          "lines": [
            {
              "s": 0,
              "t": "いらっしゃいませ。チェックインですか？",
              "r": "Irasshaimase. Chekkuin desu ka?",
              "e": "Welcome. Are you checking in?"
            },
            {
              "s": 1,
              "t": "はい、山田で予約してた者なんですけど。",
              "r": "Hai, Yamada de yoyaku shiteta mono nan desu kedo.",
              "e": "Yes, I booked under Yamada."
            },
            {
              "s": 0,
              "t": "山田様ですね。少々お待ちください…はい、二泊朝食付きで承っております。",
              "r": "Yamada-sama desu ne. Shōshō omachi kudasai… hai, nihaku chōshoku-tsuki de uketamawatte orimasu.",
              "e": "Mr. Yamada, right. One moment… yes, I have you down for two nights with breakfast."
            },
            {
              "s": 1,
              "t": "あ、それで合ってます。",
              "r": "A, sore de attemasu.",
              "e": "Yeah, that's right."
            },
            {
              "s": 0,
              "t": "では、こちらのカードにご記入お願いします。お部屋は禁煙でよろしかったですか？",
              "r": "Dewa, kochira no kādo ni gokinyū onegaishimasu. Oheya wa kin'en de yoroshikatta desu ka?",
              "e": "Then please fill out this card. A non-smoking room was fine, correct?"
            },
            {
              "s": 1,
              "t": "あ、はい、禁煙でお願いします。あと、チェックアウト何時まででしたっけ？",
              "r": "A, hai, kin'en de onegaishimasu. Ato, chekkuauto nanji made deshita kke?",
              "e": "Yes, non-smoking please. Also, what time's checkout again?"
            },
            {
              "s": 0,
              "t": "十一時までとなっております。Wi-Fiのパスワードはこちらになります。",
              "r": "Jūichi-ji made to natte orimasu. Wai-fai no pasuwādo wa kochira ni narimasu.",
              "e": "It's until eleven. The Wi-Fi password is right here."
            },
            {
              "s": 1,
              "t": "助かります。朝ごはんって何時からですか？",
              "r": "Tasukarimasu. Asagohan tte nanji kara desu ka?",
              "e": "Great, thanks. What time does breakfast start?"
            },
            {
              "s": 0,
              "t": "七時から十時まで、二階のレストランでご利用いただけます。",
              "r": "Shichi-ji kara jū-ji made, ni-kai no resutoran de goriyō itadakemasu.",
              "e": "From seven to ten, in the restaurant on the second floor."
            },
            {
              "s": 1,
              "t": "了解です。ありがとうございます。",
              "r": "Ryōkai desu. Arigatō gozaimasu.",
              "e": "Got it, thank you."
            }
          ],
          "vocab": [
            {
              "w": "予約してた者",
              "r": "yoyaku shiteta mono",
              "m": "the one who made the booking"
            },
            {
              "w": "二泊",
              "r": "nihaku",
              "m": "two nights"
            },
            {
              "w": "朝食付き",
              "r": "chōshoku-tsuki",
              "m": "with breakfast included"
            },
            {
              "w": "禁煙",
              "r": "kin'en",
              "m": "non-smoking"
            },
            {
              "w": "〜でしたっけ",
              "r": "~deshita kke",
              "m": "what was ~ again? (soft recall)"
            },
            {
              "w": "ご記入",
              "r": "gokinyū",
              "m": "filling in (a form)"
            }
          ]
        },
        {
          "scene": "At the pharmacy",
          "title": "Cold Medicine, Please",
          "speakers": [
            {
              "name": "Pharmacist",
              "emoji": "💊"
            },
            {
              "name": "You",
              "emoji": "🤧"
            }
          ],
          "note": "Japanese describes symptoms with vivid onomatopoeia: 「喉がイガイガ」(scratchy throat) and 「鼻がズルズル」(runny/sniffly nose). Using these makes you sound like a native, not a textbook; staff use them too.",
          "lines": [
            {
              "s": 0,
              "t": "今日はどうされました？",
              "r": "Kyō wa dō saremashita?",
              "e": "What seems to be the matter today?"
            },
            {
              "s": 1,
              "t": "昨日から喉がイガイガして、ちょっと熱っぽくて。",
              "r": "Kinō kara nodo ga igaiga shite, chotto netsuppokute.",
              "e": "Since yesterday my throat's been scratchy and I feel a bit feverish."
            },
            {
              "s": 0,
              "t": "鼻水とか咳は？",
              "r": "Hanamizu toka seki wa?",
              "e": "Any runny nose or cough?"
            },
            {
              "s": 1,
              "t": "鼻はズルズルですね。咳はそんなに。",
              "r": "Hana wa zuruzuru desu ne. Seki wa sonna ni.",
              "e": "My nose is pretty runny. Cough not so much."
            },
            {
              "s": 0,
              "t": "熱は測りました？",
              "r": "Netsu wa hakarimashita?",
              "e": "Have you taken your temperature?"
            },
            {
              "s": 1,
              "t": "朝で37度5分くらいでした。",
              "r": "Asa de sanjūnana-do gobu kurai deshita.",
              "e": "Around 37.5 this morning."
            },
            {
              "s": 0,
              "t": "じゃあ典型的な風邪ですね。総合風邪薬出しときますね。眠くなる成分入ってるんで、運転前は控えてくださいね。",
              "r": "Jā tenkeiteki na kaze desu ne. Sōgō kazegusuri dashitokimasu ne. Nemuku naru seibun haitteru n de, untenmae wa hikaete kudasai ne.",
              "e": "Then it's a typical cold. I'll give you an all-in-one cold medicine. It's got a drowsy ingredient, so steer clear of it before driving."
            },
            {
              "s": 1,
              "t": "わかりました。一日何回飲めばいいですか？",
              "r": "Wakarimashita. Ichinichi nankai nomeba ii desu ka?",
              "e": "Got it. How many times a day should I take it?"
            },
            {
              "s": 0,
              "t": "食後に一日三回ですね。無理せず、しっかり寝てくださいね。",
              "r": "Shokugo ni ichinichi sankai desu ne. Muri sezu, shikkari nete kudasai ne.",
              "e": "Three times a day after meals. Don't push yourself, get plenty of rest."
            },
            {
              "s": 1,
              "t": "はい、お大事にって自分に言っときます。ありがとうございます。",
              "r": "Hai, odaiji ni tte jibun ni ittokimasu. Arigatō gozaimasu.",
              "e": "Ha, I'll tell myself 'take care.' Thanks a lot."
            }
          ],
          "vocab": [
            {
              "w": "イガイガ",
              "r": "igaiga",
              "m": "scratchy (throat)"
            },
            {
              "w": "熱っぽい",
              "r": "netsuppoi",
              "m": "feeling feverish"
            },
            {
              "w": "ズルズル",
              "r": "zuruzuru",
              "m": "runny/sniffly (nose)"
            },
            {
              "w": "総合風邪薬",
              "r": "sōgō kazegusuri",
              "m": "all-in-one cold medicine"
            },
            {
              "w": "食後",
              "r": "shokugo",
              "m": "after meals"
            },
            {
              "w": "お大事に",
              "r": "odaiji ni",
              "m": "take care / get well"
            }
          ]
        },
        {
          "scene": "At a hair salon",
          "title": "Just a Trim... Sort Of",
          "speakers": [
            {
              "name": "Stylist",
              "emoji": "💇"
            },
            {
              "name": "You",
              "emoji": "🪞"
            }
          ],
          "note": "Salon shorthand is everywhere: 「巻く」(maku) means to curl/style with an iron, 「軽くする」(karuku suru), literally 'make it lighter,' means thin it out, and 「伸ばしてる途中」(nobashiteru tochū) means 'I'm in the middle of growing it out.'",
          "lines": [
            {
              "s": 0,
              "t": "今日どうされますか？",
              "r": "Kyō dō saremasu ka?",
              "e": "What are we doing today?"
            },
            {
              "s": 1,
              "t": "全体的に軽くしたいんですけど、長さはあんまり変えたくなくて。",
              "r": "Zentaiteki ni karuku shitai n desu kedo, nagasa wa anmari kaetakunakute.",
              "e": "I want it thinned out overall, but I don't really want to change the length."
            },
            {
              "s": 0,
              "t": "なるほど。前髪はどうします？",
              "r": "Naruhodo. Maegami wa dō shimasu?",
              "e": "I see. What about the bangs?"
            },
            {
              "s": 1,
              "t": "前髪は今伸ばしてる途中なんで、目にかからないくらいで。",
              "r": "Maegami wa ima nobashiteru tochū na n de, me ni kakaranai kurai de.",
              "e": "I'm growing the bangs out, so just enough that they don't get in my eyes."
            },
            {
              "s": 0,
              "t": "了解です。じゃあ毛先だけ整えて、すいて軽くする感じで。",
              "r": "Ryōkai desu. Jā kesaki dake totonoete, suite karuku suru kanji de.",
              "e": "Got it. So I'll just clean up the ends and thin it out to lighten it."
            },
            {
              "s": 1,
              "t": "あ、まさにそんな感じです。あと、朝のセットが楽だと嬉しいです。",
              "r": "A, masa ni sonna kanji desu. Ato, asa no setto ga raku da to ureshii desu.",
              "e": "Yeah, exactly like that. Also, it'd be great if it's easy to style in the morning."
            },
            {
              "s": 0,
              "t": "じゃあ少し動きが出るようにカットしますね。普段巻いたりします？",
              "r": "Jā sukoshi ugoki ga deru yō ni katto shimasu ne. Fudan maitari shimasu?",
              "e": "Then I'll cut it so it has a bit of movement. Do you usually curl it?"
            },
            {
              "s": 1,
              "t": "たまにコテで軽く巻くくらいですね。",
              "r": "Tama ni kote de karuku maku kurai desu ne.",
              "e": "Just a light curl with an iron now and then."
            },
            {
              "s": 0,
              "t": "オッケーです。じゃあそれ前提で進めますね。先にシャンプーいきましょう。",
              "r": "Okkē desu. Jā sore zentei de susumemasu ne. Saki ni shanpū ikimashō.",
              "e": "Okay. I'll work with that in mind. Let's do the shampoo first."
            },
            {
              "s": 1,
              "t": "はーい、お願いします。",
              "r": "Hāi, onegaishimasu.",
              "e": "Sure, thanks."
            }
          ],
          "vocab": [
            {
              "w": "軽くする",
              "r": "karuku suru",
              "m": "thin out (hair)"
            },
            {
              "w": "伸ばしてる途中",
              "r": "nobashiteru tochū",
              "m": "in the middle of growing out"
            },
            {
              "w": "毛先",
              "r": "kesaki",
              "m": "the ends/tips of hair"
            },
            {
              "w": "すく",
              "r": "suku",
              "m": "to thin/layer with thinning scissors"
            },
            {
              "w": "コテで巻く",
              "r": "kote de maku",
              "m": "to curl with a curling iron"
            },
            {
              "w": "セットが楽",
              "r": "setto ga raku",
              "m": "easy to style"
            }
          ]
        },
        {
          "scene": "Hanging out with a friend",
          "title": "Anime Nerds Unite",
          "speakers": [
            {
              "name": "Yuki",
              "emoji": "🎮"
            },
            {
              "name": "You",
              "emoji": "🤓"
            }
          ],
          "note": "Fans say 「沼」(numa, literally 'swamp') for a hobby you fall deep into and can't climb out of — 「沼にハマる」= to get hopelessly obsessed. 「尊い」(tōtoi) is fandom slang for 'so precious it hurts.'",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、例のアニメの最終回もう見た？",
              "r": "Nē, rei no anime no saishūkai mō mita?",
              "e": "Hey, did you watch the finale of that anime yet?"
            },
            {
              "s": 1,
              "t": "見た見た！あれはずるいって。最後の戦闘シーン鳥肌立ったわ。",
              "r": "Mita mita! Are wa zurui tte. Saigo no sentō shīn torihada tatta wa.",
              "e": "I did, I did! That was just unfair, man. The last fight scene gave me goosebumps."
            },
            {
              "s": 0,
              "t": "わかる。作画ヤバすぎて何回も巻き戻したわ。",
              "r": "Wakaru. Sakuga yaba sugite nankai mo makimodoshita wa.",
              "e": "Right? The animation was so insane I rewound it a bunch of times."
            },
            {
              "s": 1,
              "t": "あのキャラの最後のセリフ、もう尊すぎて泣いた。",
              "r": "Ano kyara no saigo no serifu, mō tōto sugite naita.",
              "e": "That character's last line was just too precious, I cried."
            },
            {
              "s": 0,
              "t": "ね。私もう完全に沼にハマったわ。グッズも揃えちゃってるし。",
              "r": "Ne. Watashi mō kanzen ni numa ni hamatta wa. Guzzu mo soroechatteru shi.",
              "e": "Same. I've totally fallen down the rabbit hole. I'm even collecting all the merch."
            },
            {
              "s": 1,
              "t": "あー、それはもう沼だわ。原作も読んだ？アニメより先の話あるよ。",
              "r": "Ā, sore wa mō numa da wa. Gensaku mo yonda? Anime yori saki no hanashi aru yo.",
              "e": "Yeah, that's the swamp talking for sure. Did you read the original? There's stuff past where the anime ended."
            },
            {
              "s": 0,
              "t": "まじで？ネタバレなしで言って、その先おもろい？",
              "r": "Maji de? Netabare nashi de itte, sono saki omoroi?",
              "e": "Seriously? No spoilers, but is what comes after good?"
            },
            {
              "s": 1,
              "t": "おもろいってレベルじゃない。むしろここからが本番。",
              "r": "Omoroi tte reberu ja nai. Mushiro koko kara ga honban.",
              "e": "'Good' doesn't even cover it. If anything, this is where it really kicks off."
            },
            {
              "s": 0,
              "t": "やば、今日帰ったら一気読みするわ。",
              "r": "Yaba, kyō kaettara ikkiyomi suru wa.",
              "e": "Oh no, I'm gonna binge-read it the second I get home."
            },
            {
              "s": 1,
              "t": "沼へようこそ。寝不足覚悟ね。",
              "r": "Numa e yōkoso. Nebusoku kakugo ne.",
              "e": "Welcome to the swamp. Prepare to lose some sleep."
            }
          ],
          "vocab": [
            {
              "w": "鳥肌立った",
              "r": "torihada tatta",
              "m": "got goosebumps"
            },
            {
              "w": "作画",
              "r": "sakuga",
              "m": "the animation/art quality"
            },
            {
              "w": "尊い",
              "r": "tōtoi",
              "m": "precious (fandom slang)"
            },
            {
              "w": "沼にハマる",
              "r": "numa ni hamaru",
              "m": "fall deep into an obsession"
            },
            {
              "w": "ネタバレ",
              "r": "netabare",
              "m": "spoiler"
            },
            {
              "w": "一気読み",
              "r": "ikkiyomi",
              "m": "binge-reading in one go"
            }
          ]
        },
        {
          "scene": "Planning a weekend trip",
          "title": "Let's Get Out of Town",
          "speakers": [
            {
              "name": "Aki",
              "emoji": "🗺️"
            },
            {
              "name": "You",
              "emoji": "🚗"
            }
          ],
          "note": "For 'let's roughly aim for ~,' natives say 「〜あたりにしない？」(how about around ~?). 「弾丸」(dangan, literally 'bullet') describes a whirlwind ultra-short trip — 「弾丸旅行」is a rushed there-and-back trip.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、来週末どっか行かない？",
              "r": "Nē, raishūmatsu dokka ikanai?",
              "e": "Hey, wanna go somewhere next weekend?"
            },
            {
              "s": 1,
              "t": "いいね！どこ行く？温泉とかありかも。",
              "r": "Ii ne! Doko iku? Onsen toka ari kamo.",
              "e": "Yes! Where to? A hot spring could be nice."
            },
            {
              "s": 0,
              "t": "あー温泉いいね。箱根あたりにしない？日帰りもできるし。",
              "r": "Ā onsen ii ne. Hakone atari ni shinai? Higaeri mo dekiru shi.",
              "e": "Ooh, hot springs, nice. How about around Hakone? We could even do a day trip."
            },
            {
              "s": 1,
              "t": "せっかくだし一泊しよーよ。土曜の朝出て、日曜の夕方帰る感じで。",
              "r": "Sekkaku da shi ippaku shiyō yo. Doyō no asa dete, nichiyō no yūgata kaeru kanji de.",
              "e": "Since we're going anyway, let's stay a night. Leave Saturday morning, head back Sunday evening."
            },
            {
              "s": 0,
              "t": "それな。じゃあ宿、私が探しとくよ。露天風呂付きがいい？",
              "r": "Sore na. Jā yado, watashi ga sagashitoku yo. Rotenburo-tsuki ga ii?",
              "e": "For real. Okay, I'll look for a place. Want one with an open-air bath?"
            },
            {
              "s": 1,
              "t": "絶対露天！あと、車で行く？電車？",
              "r": "Zettai roten! Ato, kuruma de iku? Densha?",
              "e": "Open-air for sure! Also, are we driving or taking the train?"
            },
            {
              "s": 0,
              "t": "車のほうが楽じゃない？荷物あるし、途中で寄り道もできるし。",
              "r": "Kuruma no hō ga raku ja nai? Nimotsu aru shi, tochū de yorimichi mo dekiru shi.",
              "e": "Driving's easier, no? We've got bags, and we can make stops on the way."
            },
            {
              "s": 1,
              "t": "たしかに。じゃあ運転は交代でね。私、初日の朝やるわ。",
              "r": "Tashika ni. Jā unten wa kōtai de ne. Watashi, shonichi no asa yaru wa.",
              "e": "True. Let's split the driving then. I'll take the first morning."
            },
            {
              "s": 0,
              "t": "助かる！じゃあ宿決まったらグループに送るね。",
              "r": "Tasukaru! Jā yado kimattara gurūpu ni okuru ne.",
              "e": "Lifesaver! I'll drop it in the group chat once the place is booked."
            },
            {
              "s": 1,
              "t": "おっけー。あー、もう楽しみすぎる。",
              "r": "Okkē. Ā, mō tanoshimi sugiru.",
              "e": "Okay. Ugh, I'm way too excited already."
            }
          ],
          "vocab": [
            {
              "w": "どっか",
              "r": "dokka",
              "m": "somewhere (casual for どこか)"
            },
            {
              "w": "日帰り",
              "r": "higaeri",
              "m": "day trip (no overnight)"
            },
            {
              "w": "一泊",
              "r": "ippaku",
              "m": "one night's stay"
            },
            {
              "w": "露天風呂",
              "r": "rotenburo",
              "m": "open-air hot spring bath"
            },
            {
              "w": "寄り道",
              "r": "yorimichi",
              "m": "a stop/detour on the way"
            },
            {
              "w": "それな",
              "r": "sore na",
              "m": "totally / I agree (slang)"
            }
          ]
        },
        {
          "scene": "Outside the gym",
          "title": "Hitting the Gym",
          "speakers": [
            {
              "name": "Yūta",
              "emoji": "💪"
            },
            {
              "name": "You",
              "emoji": "🏋️"
            }
          ],
          "note": "「めっちゃ」means 'super/really' and is extremely common in casual speech (originally Kansai slang, now nationwide). Textbooks teach とても, but young people almost always say めっちゃ instead.",
          "lines": [
            {
              "s": 0,
              "t": "最近ジム通い始めたんだけど、まじで筋肉痛やばい。",
              "r": "Saikin jimu-gayoi hajimeta-n da kedo, maji de kinnikutsū yabai.",
              "e": "I started going to the gym lately and seriously, the muscle soreness is brutal."
            },
            {
              "s": 1,
              "t": "あー、わかる。最初の一週間が一番きついよね。",
              "r": "Ā, wakaru. Saisho no isshūkan ga ichiban kitsui yo ne.",
              "e": "Oh, I get it. The first week is the worst."
            },
            {
              "s": 0,
              "t": "それな。階段下りるのとか地獄じゃん。",
              "r": "Sore na. Kaidan oriru no toka jigoku jan.",
              "e": "Right? Going down stairs is literally hell."
            },
            {
              "s": 1,
              "t": "わかるわー。でも続けてたら勝手に慣れてくから。",
              "r": "Wakaru wā. Demo tsuzuketetara katte ni narete ku kara.",
              "e": "Totally feel you. But if you keep at it, you just naturally get used to it."
            },
            {
              "s": 0,
              "t": "週何回くらい行ってんの?",
              "r": "Shū nankai kurai itten no?",
              "e": "How many times a week do you go?"
            },
            {
              "s": 1,
              "t": "だいたい三回かな。胸の日とか脚の日で分けてる。",
              "r": "Daitai sankai kana. Mune no hi toka ashi no hi de waketeru.",
              "e": "About three. I split it up, like chest day and leg day."
            },
            {
              "s": 0,
              "t": "ガチ勢じゃん(笑)。今度フォーム教えてよ。",
              "r": "Gachi-zei jan (warai). Kondo fōmu oshiete yo.",
              "e": "You're hardcore (lol). Teach me proper form sometime."
            },
            {
              "s": 1,
              "t": "いいよ。じゃあ次一緒に行こ。まずスクワットからガッツリ鍛えよ。",
              "r": "Ii yo. Jā tsugi issho ni iko. Mazu sukuwatto kara gattsuri kitaeyo.",
              "e": "Sure. Let's go together next time then. We'll start with squats and really train hard."
            },
            {
              "s": 0,
              "t": "うわ、脚の日…明日また歩けなくなるやつだ。",
              "r": "Uwa, ashi no hi… ashita mata arukenaku naru yatsu da.",
              "e": "Ugh, leg day… that's the kind where I can't walk again tomorrow."
            }
          ],
          "vocab": [
            {
              "w": "筋肉痛",
              "r": "kinnikutsū",
              "m": "muscle soreness"
            },
            {
              "w": "やばい",
              "r": "yabai",
              "m": "crazy/intense (slang, good or bad)"
            },
            {
              "w": "それな",
              "r": "sore na",
              "m": "exactly / so true (agreement slang)"
            },
            {
              "w": "ガチ勢",
              "r": "gachi-zei",
              "m": "hardcore people, serious about it"
            },
            {
              "w": "鍛える",
              "r": "kitaeru",
              "m": "to train / build up (muscle)"
            },
            {
              "w": "きつい",
              "r": "kitsui",
              "m": "tough / hard / grueling"
            }
          ]
        },
        {
          "scene": "At a cafe",
          "title": "Bumping Into a Friend",
          "speakers": [
            {
              "name": "Mina",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "💻"
            }
          ],
          "note": "「奇遇だね」(kigū da ne) literally means 'what a coincidence' but sounds slightly stiff; friends more often just say 「偶然!」or「久しぶり!」. Using 奇遇 here is playfully formal, a common joking tone among friends.",
          "lines": [
            {
              "s": 0,
              "t": "あれ?もしかして…えっ、何やってんのこんなとこで!",
              "r": "Are? Moshikashite… e', nani yatten no konna toko de!",
              "e": "Huh? Wait, is that… what are you doing here of all places!"
            },
            {
              "s": 1,
              "t": "うわ、びっくりした!レポート書いてたんだよ。",
              "r": "Uwa, bikkuri shita! Repōto kaiteta-n da yo.",
              "e": "Whoa, you scared me! I was writing a report."
            },
            {
              "s": 0,
              "t": "まじか、こんな静かなとこ穴場じゃん。隣いい?",
              "r": "Maji ka, konna shizuka na toko anaba jan. Tonari ii?",
              "e": "No way, this quiet spot is a hidden gem. Can I sit next to you?"
            },
            {
              "s": 1,
              "t": "全然いいよ。ちょうど集中切れてたとこ。",
              "r": "Zenzen ii yo. Chōdo shūchū kireteta toko.",
              "e": "Totally fine. I'd just lost my focus anyway."
            },
            {
              "s": 0,
              "t": "じゃあ邪魔しちゃうな(笑)。コーヒー奢ろうか?",
              "r": "Jā jama shichau na (warai). Kōhī ogorō ka?",
              "e": "Then I'll be a distraction (lol). Want me to buy you a coffee?"
            },
            {
              "s": 1,
              "t": "えっ、いいの?じゃあ遠慮なくいただきます。",
              "r": "E', ii no? Jā enryo naku itadakimasu.",
              "e": "Really? Then I won't hold back, thanks."
            },
            {
              "s": 0,
              "t": "ここのカフェラテ神だから飲んでみて。",
              "r": "Koko no kafe-rate kami da kara nonde mite.",
              "e": "The cafe latte here is amazing, you've gotta try it."
            },
            {
              "s": 1,
              "t": "あざす!じゃあレポートは…まあ後でいっか。",
              "r": "Azasu! Jā repōto wa… mā ato de ikka.",
              "e": "Thanks! Then the report… eh, later's fine I guess."
            },
            {
              "s": 0,
              "t": "だよね、せっかく会えたんだしさ。",
              "r": "Da yo ne, sekkaku aeta-n da shi sa.",
              "e": "Right? We finally ran into each other and all."
            }
          ],
          "vocab": [
            {
              "w": "穴場",
              "r": "anaba",
              "m": "hidden gem / little-known good spot"
            },
            {
              "w": "奢る",
              "r": "ogoru",
              "m": "to treat / pay for someone"
            },
            {
              "w": "神",
              "r": "kami",
              "m": "amazing / godlike (slang praise)"
            },
            {
              "w": "あざす",
              "r": "azasu",
              "m": "thanks (super casual, shortened ありがとうございます)"
            },
            {
              "w": "いっか",
              "r": "ikka",
              "m": "eh, whatever / it's fine (いいか shortened)"
            },
            {
              "w": "せっかく",
              "r": "sekkaku",
              "m": "since we went to the trouble / finally"
            }
          ]
        },
        {
          "scene": "Whispering in a hallway",
          "title": "The Secret Party Plan",
          "speakers": [
            {
              "name": "Rika",
              "emoji": "🎉"
            },
            {
              "name": "You",
              "emoji": "🤫"
            }
          ],
          "note": "「サプライズ」(surprise party) is a borrowed word but pronounced and stressed in a Japanese way. Note 「バレる」(bareru) = 'to get found out/exposed'—essential slang for any secret plan, much more natural than 知られる here.",
          "lines": [
            {
              "s": 0,
              "t": "ねえ、ケンの誕生日サプライズやらない?",
              "r": "Nē, Ken no tanjōbi sapuraizu yaranai?",
              "e": "Hey, wanna throw Ken a surprise birthday thing?"
            },
            {
              "s": 1,
              "t": "いいね!でも本人に絶対バレないようにしないと。",
              "r": "Ii ne! Demo honnin ni zettai barenai yō ni shinai to.",
              "e": "Love it! But we have to make sure he doesn't find out."
            },
            {
              "s": 0,
              "t": "それな。LINEのグループ彼抜きで作ろ。",
              "r": "Sore na. LINE no gurūpu kare nuki de tsukuro.",
              "e": "Right. Let's make a LINE group without him in it."
            },
            {
              "s": 1,
              "t": "ナイス。当日どうやって店まで連れてく?",
              "r": "Naisu. Tōjitsu dō yatte mise made tsureteku?",
              "e": "Nice. How do we get him to the restaurant on the day?"
            },
            {
              "s": 0,
              "t": "私が飲みに誘うふりして連れてくよ。",
              "r": "Watashi ga nomi ni sasou furi shite tsureteku yo.",
              "e": "I'll pretend to invite him for drinks and bring him over."
            },
            {
              "s": 1,
              "t": "完璧じゃん。ケーキは俺が手配しとく。",
              "r": "Kanpeki jan. Kēki wa ore ga tehai shitoku.",
              "e": "Perfect. I'll take care of arranging the cake."
            },
            {
              "s": 0,
              "t": "助かる!プレゼントは皆で割り勘ね。",
              "r": "Tasukaru! Purezento wa minna de warikan ne.",
              "e": "Lifesaver! We'll all split the cost of the gift, okay?"
            },
            {
              "s": 1,
              "t": "了解。あ、彼来た。この話一旦ストップ。",
              "r": "Ryōkai. A, kare kita. Kono hanashi ittan sutoppu.",
              "e": "Got it. Oh, here he comes. Pause this conversation."
            },
            {
              "s": 0,
              "t": "やば、何でもない顔して…おつかれー!",
              "r": "Yaba, nan demo nai kao shite… otsukarē!",
              "e": "Crap, act natural… hey, what's up!"
            }
          ],
          "vocab": [
            {
              "w": "バレる",
              "r": "bareru",
              "m": "to be found out / exposed"
            },
            {
              "w": "〜抜きで",
              "r": "~nuki de",
              "m": "without ~ / leaving ~ out"
            },
            {
              "w": "ふりする",
              "r": "furi suru",
              "m": "to pretend / act like"
            },
            {
              "w": "手配する",
              "r": "tehai suru",
              "m": "to arrange / set up"
            },
            {
              "w": "割り勘",
              "r": "warikan",
              "m": "splitting the bill / going Dutch"
            },
            {
              "w": "一旦",
              "r": "ittan",
              "m": "for now / temporarily"
            }
          ]
        },
        {
          "scene": "At a store counter",
          "title": "Returning a Purchase",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛍️"
            },
            {
              "name": "You",
              "emoji": "🧾"
            }
          ],
          "note": "Even in casual life, store interactions stay polite (敬語). Notice the staff uses 「〜になります」and 「お持ちですか」—super soft, indirect retail language. As a customer you can be a bit more relaxed but still polite; dropping into casual speech with staff sounds rude.",
          "lines": [
            {
              "s": 1,
              "t": "すみません、これ先週買ったんですけど、返品できますか?",
              "r": "Sumimasen, kore senshū katta-n desu kedo, henpin dekimasu ka?",
              "e": "Excuse me, I bought this last week—can I return it?"
            },
            {
              "s": 0,
              "t": "かしこまりました。レシートはお持ちですか?",
              "r": "Kashikomarimashita. Reshīto wa o-mochi desu ka?",
              "e": "Of course. Do you have the receipt with you?"
            },
            {
              "s": 1,
              "t": "あ、はい。これです。サイズが合わなくて。",
              "r": "A, hai. Kore desu. Saizu ga awanakute.",
              "e": "Oh, yes. Here it is. The size didn't fit."
            },
            {
              "s": 0,
              "t": "承知しました。交換と返金、どちらになさいますか?",
              "r": "Shōchi shimashita. Kōkan to henkin, dochira ni nasaimasu ka?",
              "e": "Understood. Would you like an exchange or a refund?"
            },
            {
              "s": 1,
              "t": "ワンサイズ大きいのあれば交換でお願いします。",
              "r": "Wan-saizu ōkii no areba kōkan de onegai shimasu.",
              "e": "If you have one size up, I'll go with an exchange."
            },
            {
              "s": 0,
              "t": "在庫確認しますね。少々お待ちください。",
              "r": "Zaiko kakunin shimasu ne. Shōshō o-machi kudasai.",
              "e": "I'll check our stock. One moment please."
            },
            {
              "s": 0,
              "t": "お待たせしました。Lサイズ、ご用意できます。",
              "r": "O-matase shimashita. Eru-saizu, go-yōi dekimasu.",
              "e": "Thanks for waiting. We can get you a size L."
            },
            {
              "s": 1,
              "t": "よかった、助かります。それでお願いします。",
              "r": "Yokatta, tasukarimasu. Sore de onegai shimasu.",
              "e": "Great, that helps. I'll take that, please."
            },
            {
              "s": 0,
              "t": "では手続きしますね。差額はございませんので。",
              "r": "Dewa tetsuzuki shimasu ne. Sagaku wa gozaimasen node.",
              "e": "I'll process it then. There's no price difference."
            }
          ],
          "vocab": [
            {
              "w": "返品",
              "r": "henpin",
              "m": "returning an item"
            },
            {
              "w": "交換",
              "r": "kōkan",
              "m": "exchange"
            },
            {
              "w": "返金",
              "r": "henkin",
              "m": "refund"
            },
            {
              "w": "在庫",
              "r": "zaiko",
              "m": "stock / inventory"
            },
            {
              "w": "差額",
              "r": "sagaku",
              "m": "price difference / balance"
            },
            {
              "w": "手続き",
              "r": "tetsuzuki",
              "m": "procedure / processing"
            }
          ]
        },
        {
          "scene": "Chatting at home",
          "title": "Comfort Food Talk",
          "speakers": [
            {
              "name": "Haru",
              "emoji": "🍲"
            },
            {
              "name": "You",
              "emoji": "🍚"
            }
          ],
          "note": "「おふくろの味」(ofukuro no aji) literally 'mom's flavor' = the nostalgic taste of home cooking. It carries deep emotional warmth in Japanese culture—the dish that says 'home' to you. A textbook rarely teaches this but every Japanese person feels it.",
          "lines": [
            {
              "s": 0,
              "t": "急にお腹すいてきた。何か無性に食べたいものある?",
              "r": "Kyū ni onaka suite kita. Nanika mushō ni tabetai mono aru?",
              "e": "I suddenly got hungry. Is there anything you're just dying to eat?"
            },
            {
              "s": 1,
              "t": "うーん、やっぱ母さんの作る肉じゃがかな。",
              "r": "Ūn, yappa kāsan no tsukuru nikujaga kana.",
              "e": "Hmm, gotta be my mom's nikujaga, I think."
            },
            {
              "s": 0,
              "t": "わかる、それおふくろの味ってやつじゃん。",
              "r": "Wakaru, sore ofukuro no aji tte yatsu jan.",
              "e": "I get it, that's the whole 'taste of home' thing, right?"
            },
            {
              "s": 1,
              "t": "そうそう。自分で作っても何か違うんだよね。",
              "r": "Sō sō. Jibun de tsukutte mo nanka chigau-n da yo ne.",
              "e": "Exactly. Even when I make it myself, something's off."
            },
            {
              "s": 0,
              "t": "それあるわー。俺は寒い日のおでんが最強。",
              "r": "Sore aru wā. Ore wa samui hi no oden ga saikyō.",
              "e": "Yeah, that happens. For me, oden on a cold day is unbeatable."
            },
            {
              "s": 1,
              "t": "おでんいいね!大根しみしみのやつ最高。",
              "r": "Oden ii ne! Daikon shimi-shimi no yatsu saikō.",
              "e": "Oden's great! Daikon all soaked in broth is the best."
            },
            {
              "s": 0,
              "t": "だよね。今度うち来たら作ってやるよ。",
              "r": "Da yo ne. Kondo uchi kitara tsukutte yaru yo.",
              "e": "Right? Come over sometime and I'll make it for you."
            },
            {
              "s": 1,
              "t": "まじで?楽しみすぎる。腹ペコで行くわ。",
              "r": "Maji de? Tanoshimi sugiru. Hara-peko de iku wa.",
              "e": "For real? Can't wait. I'll come starving."
            },
            {
              "s": 0,
              "t": "おう、期待してて。出汁から取るから。",
              "r": "Ō, kitai shitete. Dashi kara toru kara.",
              "e": "Yeah, look forward to it. I make the broth from scratch."
            }
          ],
          "vocab": [
            {
              "w": "無性に",
              "r": "mushō ni",
              "m": "intensely / can't help wanting"
            },
            {
              "w": "おふくろの味",
              "r": "ofukuro no aji",
              "m": "taste of home / mom's cooking"
            },
            {
              "w": "しみしみ",
              "r": "shimi-shimi",
              "m": "soaked through with flavor"
            },
            {
              "w": "腹ペコ",
              "r": "hara-peko",
              "m": "starving / really hungry"
            },
            {
              "w": "出汁",
              "r": "dashi",
              "m": "Japanese soup stock / broth"
            },
            {
              "w": "最強",
              "r": "saikyō",
              "m": "the strongest / the best (slang for top-tier)"
            }
          ]
        },
        {
          "scene": "At a casual gathering",
          "title": "Meeting a Friend's Friend",
          "speakers": [
            {
              "name": "Sora",
              "emoji": "🙋"
            },
            {
              "name": "You",
              "emoji": "😊"
            }
          ],
          "note": "「初めまして」is the textbook greeting, but among young people meeting casually, a simple 「どうも」or「よろしくー」(with a long う) is more natural. Also 「タメ」(tame) means 'same age'—discovering you're the same age instantly drops the formality between Japanese people.",
          "lines": [
            {
              "s": 0,
              "t": "どうも、ソラです。ユウタの大学の同期なんすよ。",
              "r": "Dōmo, Sora desu. Yūta no daigaku no dōki na-n su yo.",
              "e": "Hey, I'm Sora. I'm Yuta's buddy from uni."
            },
            {
              "s": 1,
              "t": "あ、どうもー。話はユウタからよく聞いてます。",
              "r": "A, dōmō. Hanashi wa Yūta kara yoku kiitemasu.",
              "e": "Oh, hey. I've heard a lot about you from Yuta."
            },
            {
              "s": 0,
              "t": "え、なんか変なこと言われてないっすか?(笑)",
              "r": "E, nanka hen na koto iwarete nai ssu ka? (warai)",
              "e": "Wait, he didn't say anything weird about me, did he? (lol)"
            },
            {
              "s": 1,
              "t": "いやいや、いい話ばっかですよ。ちなみに何歳ですか?",
              "r": "Iya iya, ii hanashi bakka desu yo. Chinami ni nan-sai desu ka?",
              "e": "No no, all good stuff. By the way, how old are you?"
            },
            {
              "s": 0,
              "t": "二十五っす。あれ、もしかして同い年?",
              "r": "Nijūgo ssu. Are, moshikashite onaidoshi?",
              "e": "Twenty-five. Wait, are we maybe the same age?"
            },
            {
              "s": 1,
              "t": "まじ?タメじゃん!じゃあ敬語やめよ。",
              "r": "Maji? Tame jan! Jā keigo yameyo.",
              "e": "Seriously? We're the same age! Let's drop the formal speech then."
            },
            {
              "s": 0,
              "t": "だね(笑)。趣味とか何してんの?",
              "r": "Da ne (warai). Shumi toka nani shiten no?",
              "e": "For sure (lol). What are you into, hobby-wise?"
            },
            {
              "s": 1,
              "t": "最近はキャンプにハマってる。ソラは?",
              "r": "Saikin wa kyanpu ni hamatteru. Sora wa?",
              "e": "Lately I'm hooked on camping. How about you, Sora?"
            },
            {
              "s": 0,
              "t": "うわ、俺も!絶対気が合うわ、これ。",
              "r": "Uwa, ore mo! Zettai ki ga au wa, kore.",
              "e": "Whoa, me too! We're definitely gonna get along, I can tell."
            }
          ],
          "vocab": [
            {
              "w": "同期",
              "r": "dōki",
              "m": "peer / classmate of the same year"
            },
            {
              "w": "タメ",
              "r": "tame",
              "m": "same age (slang)"
            },
            {
              "w": "同い年",
              "r": "onaidoshi",
              "m": "the same age"
            },
            {
              "w": "敬語",
              "r": "keigo",
              "m": "polite/formal speech"
            },
            {
              "w": "ハマる",
              "r": "hamaru",
              "m": "to be hooked on / really into"
            },
            {
              "w": "気が合う",
              "r": "ki ga au",
              "m": "to click / get along well"
            }
          ]
        },
        {
          "scene": "At a house party",
          "title": "Mingling at a Party",
          "speakers": [
            {
              "name": "Yuna",
              "emoji": "🥂"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "「○○つながり」(◯◯ tsunagari, lit. \"◯◯ connection\") is the super-common casual way Japanese people explain how they know someone or the host. \"大学つながり\" = \"we go back to uni.\" Way more natural than 「○○の友達です」 at a party.",
          "lines": [
            {
              "s": 0,
              "t": "あれ、初めましてだよね？私ユナ。ハルカつながりで来た感じ。",
              "r": "Are, hajimemashite da yo ne? Watashi Yuna. Haruka tsunagari de kita kanji.",
              "e": "Oh, we haven't met, right? I'm Yuna. I'm here through Haruka."
            },
            {
              "s": 1,
              "t": "あー、どうも！俺もハルカの大学の友達。てか人多くない、ここ？",
              "r": "Ā, dōmo! Ore mo Haruka no daigaku no tomodachi. Teka hito ōkunai, koko?",
              "e": "Oh, hey! I'm a uni friend of Haruka's too. I mean, isn't it kinda packed in here?"
            },
            {
              "s": 0,
              "t": "ね、めっちゃ多い（笑）。私もう誰が誰だか全然わかってない。",
              "r": "Ne, meccha ōi (warai). Watashi mō dare ga dare da ka zenzen wakattenai.",
              "e": "Right, totally crammed, haha. I have no idea who's who anymore."
            },
            {
              "s": 1,
              "t": "わかる。とりあえず飲み物取ってきた方がいいよね、これ。",
              "r": "Wakaru. Toriaezu nomimono totte kita hō ga ii yo ne, kore.",
              "e": "I feel you. We should probably grab a drink first, huh."
            },
            {
              "s": 0,
              "t": "あ、キッチンに色々あったよ。ビールとか、なんか手作りのサングリアも。",
              "r": "A, kitchin ni iroiro atta yo. Bīru toka, nanka tezukuri no sangria mo.",
              "e": "Oh, there's all kinds of stuff in the kitchen. Beer and even some homemade sangria."
            },
            {
              "s": 1,
              "t": "まじで？サングリア気になる。ユナさんもう食べた、料理？",
              "r": "Maji de? Sangria ki ni naru. Yuna-san mō tabeta, ryōri?",
              "e": "Seriously? The sangria sounds good. Have you eaten yet, Yuna?"
            },
            {
              "s": 0,
              "t": "ちょっとだけ。あのチーズのやつ、やばいから絶対食べな。",
              "r": "Chotto dake. Ano chīzu no yatsu, yabai kara zettai tabe na.",
              "e": "Just a bit. That cheese thing is insane, you've gotta try it."
            },
            {
              "s": 1,
              "t": "了解、絶対行く（笑）。じゃあ取ってくるから、ちょっと待ってて。",
              "r": "Ryōkai, zettai iku (warai). Jā totte kuru kara, chotto mattete.",
              "e": "Got it, definitely, haha. I'll go grab some, hang on a sec."
            },
            {
              "s": 0,
              "t": "うん、待ってる待ってる。ついでに私のグラスも頼んでいい？",
              "r": "Un, matteru matteru. Tsuide ni watashi no gurasu mo tanonde ii?",
              "e": "Yeah, I'll wait. Can you grab a glass for me too while you're at it?"
            }
          ],
          "vocab": [
            {
              "w": "つながり",
              "r": "tsunagari",
              "m": "connection (how you know someone)"
            },
            {
              "w": "てか",
              "r": "teka",
              "m": "I mean / by the way (casual filler)"
            },
            {
              "w": "めっちゃ",
              "r": "meccha",
              "m": "super / really (slang)"
            },
            {
              "w": "やばい",
              "r": "yabai",
              "m": "amazing / crazy (good or bad)"
            },
            {
              "w": "ついでに",
              "r": "tsuide ni",
              "m": "while you're at it"
            },
            {
              "w": "気になる",
              "r": "ki ni naru",
              "m": "I'm curious about / intrigued by it"
            }
          ]
        },
        {
          "scene": "At the office near a deadline",
          "title": "Help Before the Deadline",
          "speakers": [
            {
              "name": "Tanaka",
              "emoji": "💻"
            },
            {
              "name": "You",
              "emoji": "😣"
            }
          ],
          "note": "「巻き取る」(makitoru) is real office slang for \"taking over someone's task to absorb the workload\" — like winding it up onto your own spool. You'll hear it constantly in Japanese workplaces but it's not in textbooks.",
          "lines": [
            {
              "s": 1,
              "t": "田中さん、今ちょっといいですか？マジでヤバくて、これ。",
              "r": "Tanaka-san, ima chotto ii desu ka? Maji de yabakute, kore.",
              "e": "Tanaka, you got a sec? I'm seriously in trouble with this."
            },
            {
              "s": 0,
              "t": "ん、どうした？例の資料？締め切り今日の夕方だっけ。",
              "r": "N, dō shita? Rei no shiryō? Shimekiri kyō no yūgata dakke.",
              "e": "Hm, what's up? That document? Deadline's this evening, right?"
            },
            {
              "s": 1,
              "t": "そうなんですよ。数字の集計が全然終わってなくて、手が回らなくて。",
              "r": "Sō nan desu yo. Sūji no shūkei ga zenzen owattenakute, te ga mawaranakute.",
              "e": "Exactly. The number-crunching's nowhere near done and I can't keep up."
            },
            {
              "s": 0,
              "t": "あー、なるほどね。じゃあそこの集計、俺が巻き取るわ。",
              "r": "Ā, naruhodo ne. Jā soko no shūkei, ore ga makitoru wa.",
              "e": "Ah, got it. Okay, I'll take that number part off your hands."
            },
            {
              "s": 1,
              "t": "え、いいんですか？助かります、ほんと。恩に着ます。",
              "r": "E, ii n desu ka? Tasukarimasu, honto. On ni kimasu.",
              "e": "Wait, really? That's a huge help, honestly. I owe you one."
            },
            {
              "s": 0,
              "t": "いいよいいよ。その代わりさ、レイアウトの方ざっと見といて。",
              "r": "Ii yo ii yo. Sono kawari sa, reiauto no hō zatto mitoite.",
              "e": "No worries. In exchange, give the layout a quick once-over, yeah?"
            },
            {
              "s": 1,
              "t": "了解です。じゃあ俺、文章のとこ詰めちゃいますね。",
              "r": "Ryōkai desu. Jā ore, bunshō no toko tsumechaimasu ne.",
              "e": "Got it. I'll hammer out the writing part then."
            },
            {
              "s": 0,
              "t": "うん。三時くらいに一回すり合わせしよ。それで間に合うっしょ。",
              "r": "Un. Sanji kurai ni ikkai suriawase shiyo. Sore de maniau ssho.",
              "e": "Yeah. Let's sync up once around three. We'll make it that way."
            },
            {
              "s": 1,
              "t": "ですね。終わったらコーヒー奢らせてください、絶対。",
              "r": "Desu ne. Owattara kōhī ogorasete kudasai, zettai.",
              "e": "For sure. Once we're done, let me buy you a coffee, no question."
            }
          ],
          "vocab": [
            {
              "w": "巻き取る",
              "r": "makitoru",
              "m": "take over (absorb someone's task)"
            },
            {
              "w": "手が回らない",
              "r": "te ga mawaranai",
              "m": "can't keep up / spread too thin"
            },
            {
              "w": "恩に着る",
              "r": "on ni kiru",
              "m": "I'm in your debt / I owe you"
            },
            {
              "w": "すり合わせ",
              "r": "suriawase",
              "m": "syncing up / aligning"
            },
            {
              "w": "間に合う",
              "r": "maniau",
              "m": "make it in time"
            },
            {
              "w": "奢る",
              "r": "ogoru",
              "m": "treat / pay for someone"
            }
          ]
        },
        {
          "scene": "Catching up over coffee",
          "title": "How Was Your Weekend",
          "speakers": [
            {
              "name": "Rina",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "😄"
            }
          ],
          "note": "「それな」(sore na) is the go-to young-people agreement filler — basically \"right?? / exactly that.\" It's the Japanese equivalent of \"facts\" or \"so true.\" Drop it after a friend complains or makes a relatable point.",
          "lines": [
            {
              "s": 0,
              "t": "週末どうだった？なんか楽しそうな投稿上がってたけど。",
              "r": "Shūmatsu dō datta? Nanka tanoshisō na tōkō agatteta kedo.",
              "e": "How was your weekend? Looked like you posted some fun stuff."
            },
            {
              "s": 1,
              "t": "あー、それね！土曜に急にキャンプ行くことになってさ。",
              "r": "Ā, sore ne! Doyō ni kyū ni kyanpu iku koto ni natte sa.",
              "e": "Oh, that! We ended up suddenly going camping on Saturday."
            },
            {
              "s": 0,
              "t": "え、いいじゃん！天気よかったもんね、土曜。",
              "r": "E, ii jan! Tenki yokatta mon ne, doyō.",
              "e": "Oh nice! The weather was great Saturday, huh."
            },
            {
              "s": 1,
              "t": "そうそう、最高だった。でも夜めっちゃ冷えて、まじで凍えた。",
              "r": "Sō sō, saikō datta. Demo yoru meccha hiete, maji de kogoeta.",
              "e": "Yeah, it was the best. But it got freezing at night, I was literally frozen."
            },
            {
              "s": 0,
              "t": "わかる、山の夜やばいよね。で、バーベキューとかした？",
              "r": "Wakaru, yama no yoru yabai yo ne. De, bābekyū toka shita?",
              "e": "I get it, nights in the mountains are brutal. So, did you do a BBQ or anything?"
            },
            {
              "s": 1,
              "t": "した！焚き火で焼いた肉がもう、別次元のうまさで。",
              "r": "Shita! Takibi de yaita niku ga mō, betsujigen no umasa de.",
              "e": "We did! The meat we grilled over the fire was like, next-level delicious."
            },
            {
              "s": 0,
              "t": "うわ、いいなー。それな、外で食べるとなんか倍うまいよね。",
              "r": "Uwa, ii nā. Sore na, soto de taberu to nanka bai umai yo ne.",
              "e": "Ugh, so jealous. Right? Eating outside somehow makes it twice as good."
            },
            {
              "s": 1,
              "t": "ほんとそれ。次みんなで行こうよ、リナも誘うから。",
              "r": "Honto sore. Tsugi minna de ikō yo, Rina mo sasou kara.",
              "e": "So true. Let's all go next time, I'll invite you too, Rina."
            },
            {
              "s": 0,
              "t": "行く行く！絶対呼んでね、テント張るの手伝うから。",
              "r": "Iku iku! Zettai yonde ne, tento haru no tetsudau kara.",
              "e": "I'm so in! Definitely call me, I'll help pitch the tent."
            }
          ],
          "vocab": [
            {
              "w": "それな",
              "r": "sore na",
              "m": "right? / exactly (agreement slang)"
            },
            {
              "w": "凍える",
              "r": "kogoeru",
              "m": "to freeze (be cold)"
            },
            {
              "w": "別次元",
              "r": "betsujigen",
              "m": "next-level / a whole other dimension"
            },
            {
              "w": "焚き火",
              "r": "takibi",
              "m": "campfire / bonfire"
            },
            {
              "w": "いいじゃん",
              "r": "ii jan",
              "m": "nice! / that's great"
            },
            {
              "w": "誘う",
              "r": "sasou",
              "m": "to invite"
            }
          ]
        },
        {
          "scene": "Two pet owners chatting",
          "title": "Gushing About My Dog",
          "speakers": [
            {
              "name": "Mika",
              "emoji": "🐕"
            },
            {
              "name": "You",
              "emoji": "🥰"
            }
          ],
          "note": "Japanese pet owners constantly use 「うちの子」(uchi no ko, \"our kid\") to refer to their pet — treating them as a family member, never \"my dog.\" Calling a cute pet 「あざとい」(azatoi, \"deliberately cutesy/sly\") is an affectionate compliment, not an insult.",
          "lines": [
            {
              "s": 0,
              "t": "わー、その子めっちゃ可愛い！何歳ですか、うちの子と同じ柴？",
              "r": "Wā, sono ko meccha kawaii! Nansai desu ka, uchi no ko to onaji shiba?",
              "e": "Aww, your little one's so cute! How old? Same Shiba as ours?"
            },
            {
              "s": 1,
              "t": "そうなんです、二歳の柴で。やんちゃ盛りでもう大変で（笑）。",
              "r": "Sō nan desu, nisai no shiba de. Yancha-zakari de mō taihen de (warai).",
              "e": "Yeah, a two-year-old Shiba. Peak troublemaker phase, it's a handful, haha."
            },
            {
              "s": 0,
              "t": "わかります！うちのも二歳の時すごかった。靴とか全部やられて。",
              "r": "Wakarimasu! Uchi no mo nisai no toki sugokatta. Kutsu toka zenbu yararete.",
              "e": "Totally get it! Ours was wild at two. All my shoes got destroyed."
            },
            {
              "s": 1,
              "t": "それうちもです（笑）。でも顔見ると全部許しちゃうんですよね。",
              "r": "Sore uchi mo desu (warai). Demo kao miru to zenbu yurushichau n desu yo ne.",
              "e": "Same with mine, haha. But one look at that face and I forgive everything."
            },
            {
              "s": 0,
              "t": "わかりすぎる。あの上目遣い、あざといですよね、柴って。",
              "r": "Wakari sugiru. Ano uwamezukai, azatoi desu yo ne, shiba tte.",
              "e": "So relatable. That puppy-eyed look, Shibas are such little charmers, right?"
            },
            {
              "s": 1,
              "t": "あざといです（笑）。おやつの袋の音だけで飛んでくるし。",
              "r": "Azatoi desu (warai). Oyatsu no fukuro no oto dake de tonde kuru shi.",
              "e": "Total charmers, haha. Comes flying just from the sound of the treat bag."
            },
            {
              "s": 0,
              "t": "あるある！耳めっちゃいいんですよね、寝てても起きる。",
              "r": "Aru aru! Mimi meccha ii n desu yo ne, netetemo okiru.",
              "e": "Classic! Their ears are so sharp, they wake up even while sleeping."
            },
            {
              "s": 1,
              "t": "ですよね。あー、もうこの子のためなら何でもできちゃう。",
              "r": "Desu yo ne. Ā, mō kono ko no tame nara nan demo dekichau.",
              "e": "Right? Honestly, I'd do anything for this little guy."
            },
            {
              "s": 0,
              "t": "わかります。また公園で会えたらいいですね、二匹一緒に。",
              "r": "Wakarimasu. Mata kōen de aetara ii desu ne, nihiki issho ni.",
              "e": "I know exactly. Hope we run into each other at the park again, the two of them together."
            }
          ],
          "vocab": [
            {
              "w": "うちの子",
              "r": "uchi no ko",
              "m": "our pet (lit. \"our kid\")"
            },
            {
              "w": "やんちゃ盛り",
              "r": "yancha-zakari",
              "m": "peak mischief phase"
            },
            {
              "w": "あざとい",
              "r": "azatoi",
              "m": "deliberately cutesy/charming"
            },
            {
              "w": "上目遣い",
              "r": "uwamezukai",
              "m": "upward (puppy-eyed) glance"
            },
            {
              "w": "あるある",
              "r": "aru aru",
              "m": "classic / so relatable"
            },
            {
              "w": "おやつ",
              "r": "oyatsu",
              "m": "treat / snack"
            }
          ]
        },
        {
          "scene": "Buying tickets for a concert",
          "title": "Tickets to the Show",
          "speakers": [
            {
              "name": "Kenta",
              "emoji": "🎤"
            },
            {
              "name": "You",
              "emoji": "🎟️"
            }
          ],
          "note": "Concert tickets in Japan are usually 抽選 (chūsen, lottery) rather than first-come, so people say 当たった (atatta, \"I won/got picked\") or 外れた (hazureta, \"I lost the lottery\"). 神席 (kanseki, \"god seat\") is fan slang for an amazing seat up close.",
          "lines": [
            {
              "s": 0,
              "t": "やばい、ライブのチケット当たったらしいよ、さっき通知来た！",
              "r": "Yabai, raibu no chiketto atatta rashii yo, sakki tsūchi kita!",
              "e": "No way, looks like we won the concert tickets, the notification just came in!"
            },
            {
              "s": 1,
              "t": "え、まじで！？うわー、外れると思ってたから普通に叫んだ。",
              "r": "E, maji de!? Uwā, hazureru to omotteta kara futsū ni sakenda.",
              "e": "Wait, for real?! Ugh, I was sure we'd lose, I literally screamed."
            },
            {
              "s": 0,
              "t": "席どこ？っていうかアリーナ？スタンド？",
              "r": "Seki doko? Tte iu ka arīna? Sutando?",
              "e": "Where are the seats? Like, arena floor? Stands?"
            },
            {
              "s": 1,
              "t": "ちょっと待って…うわ、アリーナの前の方じゃん、これ神席！",
              "r": "Chotto matte… uwa, arīna no mae no hō jan, kore kanseki!",
              "e": "Hold on... whoa, it's near the front of the floor, these are god seats!"
            },
            {
              "s": 0,
              "t": "嘘でしょ！？神すぎる。当日めっちゃ早く行かないとだね。",
              "r": "Uso desho!? Kami sugiru. Tōjitsu meccha hayaku ikanai to da ne.",
              "e": "You're kidding?! That's amazing. We gotta get there super early that day."
            },
            {
              "s": 1,
              "t": "だね。グッズも並ぶだろうし、開場の二時間前くらい？",
              "r": "Da ne. Guzzu mo narabu darō shi, kaijō no nijikan mae kurai?",
              "e": "Yeah. There'll be a line for merch too, like two hours before doors?"
            },
            {
              "s": 0,
              "t": "オッケー、じゃあ昼集合で。支払い俺がまとめてやっとくわ。",
              "r": "Okkē, jā hiru shūgō de. Shiharai ore ga matomete yattoku wa.",
              "e": "Okay, let's meet at noon then. I'll handle the payment all at once."
            },
            {
              "s": 1,
              "t": "ありがと！あとで割り勘の分すぐ送る。当日まじ楽しみすぎ。",
              "r": "Arigato! Ato de warikan no bun sugu okuru. Tōjitsu maji tanoshimi sugi.",
              "e": "Thanks! I'll send my half right away. I'm way too hyped for the day."
            },
            {
              "s": 0,
              "t": "ね、もうそれまで生きる目標できたわ（笑）。",
              "r": "Ne, mō sore made ikiru mokuhyō dekita wa (warai).",
              "e": "Right, that's literally my reason to live until then now, haha."
            }
          ],
          "vocab": [
            {
              "w": "当たる",
              "r": "ataru",
              "m": "to win (a lottery/draw)"
            },
            {
              "w": "外れる",
              "r": "hazureru",
              "m": "to lose / not get picked"
            },
            {
              "w": "神席",
              "r": "kanseki",
              "m": "amazing seat (\"god seat\")"
            },
            {
              "w": "グッズ",
              "r": "guzzu",
              "m": "merch / goods"
            },
            {
              "w": "割り勘",
              "r": "warikan",
              "m": "splitting the bill"
            },
            {
              "w": "開場",
              "r": "kaijō",
              "m": "doors open / venue opening"
            }
          ]
        },
        {
          "scene": "Parting ways after hanging out",
          "title": "See You Soon",
          "speakers": [
            {
              "name": "Sho",
              "emoji": "👋"
            },
            {
              "name": "You",
              "emoji": "😊"
            }
          ],
          "note": "「またね」alone can feel like it never actually happens. Adding 「今度ちゃんと」(kondo chanto, \"properly next time\") or naming a concrete plan signals you genuinely mean it. Also 「気をつけて帰ってね」(get home safe) is the warm, expected way to send someone off.",
          "lines": [
            {
              "s": 0,
              "t": "やば、もうこんな時間じゃん。めっちゃ喋っちゃったね今日。",
              "r": "Yaba, mō konna jikan jan. Meccha shabecchatta ne kyō.",
              "e": "Whoa, it's already this late. We talked so much today."
            },
            {
              "s": 1,
              "t": "ね、全然時間足りなかった。話したいことまだあったのに。",
              "r": "Ne, zenzen jikan tarinakatta. Hanashitai koto mada atta no ni.",
              "e": "Right, nowhere near enough time. I still had stuff I wanted to talk about."
            },
            {
              "s": 0,
              "t": "だよね。今度ちゃんと飲みに行こうよ、ゆっくり。",
              "r": "Da yo ne. Kondo chanto nomi ni ikō yo, yukkuri.",
              "e": "For real. Let's properly go for drinks next time, take it slow."
            },
            {
              "s": 1,
              "t": "行こう行こう。来月とかどう？お互い予定すり合わせてさ。",
              "r": "Ikō ikō. Raigetsu toka dō? Otagai yotei suriawasete sa.",
              "e": "Yes, let's. How about next month? We'll line up our schedules."
            },
            {
              "s": 0,
              "t": "いいね。じゃあ後でグループに候補日投げとくわ。",
              "r": "Ii ne. Jā ato de gurūpu ni kōhobi nagetoku wa.",
              "e": "Sounds good. I'll toss some date options in the group chat later."
            },
            {
              "s": 1,
              "t": "助かる、よろしく！今日ほんと楽しかった、ありがとね。",
              "r": "Tasukaru, yoroshiku! Kyō honto tanoshikatta, arigato ne.",
              "e": "Awesome, thanks! Today was really fun, thank you."
            },
            {
              "s": 0,
              "t": "こちらこそ。電車間に合う？ぎりぎりっぽくない？",
              "r": "Kochira koso. Densha maniau? Girigiri ppoku nai?",
              "e": "Same here. Gonna catch your train? Looks kinda cutting it close."
            },
            {
              "s": 1,
              "t": "あ、やば、ほんとだ。じゃあ走るわ、また連絡する！",
              "r": "A, yaba, honto da. Jā hashiru wa, mata renraku suru!",
              "e": "Oh crap, you're right. I'll run for it, I'll text you!"
            },
            {
              "s": 0,
              "t": "うん、気をつけて帰ってね。今度こそ絶対飲も！",
              "r": "Un, ki o tsukete kaette ne. Kondo koso zettai nomo!",
              "e": "Yeah, get home safe. Next time for sure, we're definitely drinking!"
            }
          ],
          "vocab": [
            {
              "w": "今度ちゃんと",
              "r": "kondo chanto",
              "m": "properly next time"
            },
            {
              "w": "すり合わせる",
              "r": "suriawaseru",
              "m": "to coordinate/align (schedules)"
            },
            {
              "w": "候補日",
              "r": "kōhobi",
              "m": "candidate dates"
            },
            {
              "w": "ぎりぎり",
              "r": "girigiri",
              "m": "just barely / cutting it close"
            },
            {
              "w": "気をつけて",
              "r": "ki o tsukete",
              "m": "take care / be safe"
            },
            {
              "w": "また連絡する",
              "r": "mata renraku suru",
              "m": "I'll be in touch"
            }
          ]
        }
      ]
    }
  },
  "ko": {
    "label": "Korean",
    "voice": "ko-KR",
    "levels": {
      "beginner": [
        {
          "scene": "At a cafe counter",
          "title": "Coffee to Go",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "When you want a drink to take out, just say '테이크아웃이요' (teikeu-autiyo). Staff often ask '드시고 가세요?' (eating/drinking here?) — answer '아니요, 가져갈게요' (no, I'll take it to go). '아아' is everyday slang for iced americano, and '뜨아' is hot americano.",
          "lines": [
            {
              "s": 0,
              "t": "어서 오세요. 주문 도와드릴까요?",
              "r": "eoseo oseyo. jumun dowadeurilkkayo?",
              "e": "Welcome! Can I take your order?"
            },
            {
              "s": 1,
              "t": "네, 아이스 아메리카노 한 잔 주세요.",
              "r": "ne, aiseu amerikano han jan juseyo.",
              "e": "Yes, one iced americano, please."
            },
            {
              "s": 0,
              "t": "사이즈는 어떤 걸로 드릴까요?",
              "r": "saijeuneun eotteon geollo deurilkkayo?",
              "e": "Which size would you like?"
            },
            {
              "s": 1,
              "t": "음… 큰 걸로 할게요.",
              "r": "eum… keun geollo halgeyo.",
              "e": "Hmm… I'll go with the large."
            },
            {
              "s": 0,
              "t": "드시고 가세요, 아니면 가져가세요?",
              "r": "deusigo gaseyo, animyeon gajyeogaseyo?",
              "e": "For here or to go?"
            },
            {
              "s": 1,
              "t": "가져갈게요. 테이크아웃이요.",
              "r": "gajyeogalgeyo. teikeu-autiyo.",
              "e": "To go, please. Takeout."
            },
            {
              "s": 0,
              "t": "네, 사천오백 원입니다. 카드 되세요?",
              "r": "ne, sacheonobaek wonimnida. kadeu doeseyo?",
              "e": "Okay, that's 4,500 won. Are you paying by card?"
            },
            {
              "s": 1,
              "t": "네, 카드로 할게요.",
              "r": "ne, kadeuro halgeyo.",
              "e": "Yes, I'll pay by card."
            },
            {
              "s": 0,
              "t": "감사합니다. 진동벨 울리면 가져가세요.",
              "r": "gamsahamnida. jindongbel ullimyeon gajyeogaseyo.",
              "e": "Thank you. When the buzzer goes off, please come get it."
            },
            {
              "s": 1,
              "t": "네, 감사합니다!",
              "r": "ne, gamsahamnida!",
              "e": "Okay, thank you!"
            }
          ],
          "vocab": [
            {
              "w": "주문",
              "r": "jumun",
              "m": "order"
            },
            {
              "w": "한 잔",
              "r": "han jan",
              "m": "one cup/glass"
            },
            {
              "w": "큰 걸로",
              "r": "keun geollo",
              "m": "the large one (I'll have...)"
            },
            {
              "w": "테이크아웃",
              "r": "teikeu-aut",
              "m": "takeout / to go"
            },
            {
              "w": "진동벨",
              "r": "jindongbel",
              "m": "vibrating pager/buzzer"
            }
          ]
        },
        {
          "scene": "On the street",
          "title": "Where's the Station?",
          "speakers": [
            {
              "name": "Passerby",
              "emoji": "🧑"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "Start with '저기요' (jeogiyo, 'excuse me') to get a stranger's attention politely — it's far more natural than the textbook '실례합니다'. To say 'go straight' people usually say '쭉 가세요' (jjuk gaseyo); '쭉' adds a nice 'all the way' feeling.",
          "lines": [
            {
              "s": 1,
              "t": "저기요, 뭐 좀 여쭤볼게요.",
              "r": "jeogiyo, mwo jom yeojjwobolgeyo.",
              "e": "Excuse me, may I ask you something?"
            },
            {
              "s": 0,
              "t": "네, 말씀하세요.",
              "r": "ne, malsseumhaseyo.",
              "e": "Sure, go ahead."
            },
            {
              "s": 1,
              "t": "지하철역이 어디예요?",
              "r": "jihacheoryeogi eodiyeyo?",
              "e": "Where is the subway station?"
            },
            {
              "s": 0,
              "t": "아, 여기서 쭉 가시면 돼요.",
              "r": "a, yeogiseo jjuk gasimyeon dwaeyo.",
              "e": "Ah, you just go straight from here."
            },
            {
              "s": 1,
              "t": "쭉 가다가 어디서 돌아요?",
              "r": "jjuk gadaga eodiseo dorayo?",
              "e": "I go straight and then turn where?"
            },
            {
              "s": 0,
              "t": "저 편의점에서 왼쪽으로 도세요.",
              "r": "jeo pyeonuijeomeseo oenjjogeuro doseyo.",
              "e": "Turn left at that convenience store."
            },
            {
              "s": 1,
              "t": "여기서 멀어요?",
              "r": "yeogiseo meoreoyo?",
              "e": "Is it far from here?"
            },
            {
              "s": 0,
              "t": "아니요, 걸어서 오 분이면 가요.",
              "r": "aniyo, georeoseo o bunimyeon gayo.",
              "e": "No, it's about a five-minute walk."
            },
            {
              "s": 1,
              "t": "아, 가깝네요. 감사합니다!",
              "r": "a, gakkamneyo. gamsahamnida!",
              "e": "Oh, that's close. Thank you!"
            },
            {
              "s": 0,
              "t": "네, 조심히 가세요.",
              "r": "ne, josimhi gaseyo.",
              "e": "Sure, take care on your way."
            }
          ],
          "vocab": [
            {
              "w": "저기요",
              "r": "jeogiyo",
              "m": "excuse me (to get attention)"
            },
            {
              "w": "지하철역",
              "r": "jihacheoryeok",
              "m": "subway station"
            },
            {
              "w": "쭉 가세요",
              "r": "jjuk gaseyo",
              "m": "go straight (all the way)"
            },
            {
              "w": "왼쪽",
              "r": "oenjjok",
              "m": "left side"
            },
            {
              "w": "편의점",
              "r": "pyeonuijeom",
              "m": "convenience store"
            },
            {
              "w": "가깝다",
              "r": "gakkapda",
              "m": "to be close/near"
            }
          ]
        },
        {
          "scene": "At the office on Monday",
          "title": "Monday Morning Chat",
          "speakers": [
            {
              "name": "Coworker",
              "emoji": "👔"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'월요병' (woryobyeong, literally 'Monday sickness') is the universal Korean term for the Monday blues — drop it and you'll sound like a real office worker. '푹 쉬다' (puk swida) means to rest fully/deeply, the go-to phrase for a good weekend's rest.",
          "lines": [
            {
              "s": 0,
              "t": "좋은 아침이에요. 주말 잘 보냈어요?",
              "r": "joeun achimieyo. jumal jal bonaesseoyo?",
              "e": "Good morning. Did you have a good weekend?"
            },
            {
              "s": 1,
              "t": "네, 집에서 푹 쉬었어요.",
              "r": "ne, jibeseo puk swieosseoyo.",
              "e": "Yes, I just rested well at home."
            },
            {
              "s": 0,
              "t": "잘했네요. 날씨가 좋았잖아요.",
              "r": "jalhaenneyo. nalssiga joatjanayo.",
              "e": "Nice. The weather was so good, you know."
            },
            {
              "s": 1,
              "t": "맞아요. 근데 오늘은 좀 흐리네요.",
              "r": "majayo. geunde oneureun jom heurineyo.",
              "e": "Right. But today it's a bit cloudy."
            },
            {
              "s": 0,
              "t": "그러니까요. 또 월요일이라서 힘드네요.",
              "r": "geureonikkayo. tto woryoiriraseo himdeuneyo.",
              "e": "Tell me about it. And it's Monday again, so it's rough."
            },
            {
              "s": 1,
              "t": "월요병이죠. 커피 한 잔 해야겠어요.",
              "r": "woryobyeongijyo. keopi han jan haeyagesseoyo.",
              "e": "Classic Monday blues. I need a cup of coffee."
            },
            {
              "s": 0,
              "t": "좋죠. 같이 한 잔 할래요?",
              "r": "jotjyo. gachi han jan hallaeyo?",
              "e": "Sounds good. Want to grab one together?"
            },
            {
              "s": 1,
              "t": "네, 좋아요. 같이 가요.",
              "r": "ne, joayo. gachi gayo.",
              "e": "Yeah, sure. Let's go together."
            },
            {
              "s": 0,
              "t": "그럼 일하기 전에 얼른 가요.",
              "r": "geureom ilhagi jeone eolleun gayo.",
              "e": "Then let's go quick before work starts."
            },
            {
              "s": 1,
              "t": "네, 가시죠!",
              "r": "ne, gasijyo!",
              "e": "Okay, let's go!"
            }
          ],
          "vocab": [
            {
              "w": "주말",
              "r": "jumal",
              "m": "weekend"
            },
            {
              "w": "푹 쉬다",
              "r": "puk swida",
              "m": "to rest fully/well"
            },
            {
              "w": "날씨",
              "r": "nalssi",
              "m": "weather"
            },
            {
              "w": "흐리다",
              "r": "heurida",
              "m": "to be cloudy/overcast"
            },
            {
              "w": "월요병",
              "r": "woryobyeong",
              "m": "the Monday blues"
            },
            {
              "w": "힘들다",
              "r": "himdeulda",
              "m": "to be tough/hard"
            }
          ]
        },
        {
          "scene": "Texting/chatting with a friend",
          "title": "Trying a New Restaurant",
          "speakers": [
            {
              "name": "Jisoo",
              "emoji": "😄"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'맛집' (matjip, literally 'taste house') means a restaurant known for great food — Koreans search '맛집' constantly. '핫하다' (from English 'hot') means trendy/popular right now. Note these friends still use polite 요 form, common between adults who aren't super close.",
          "lines": [
            {
              "s": 0,
              "t": "이번 주말에 뭐 해요?",
              "r": "ibeon jumare mwo haeyo?",
              "e": "What are you doing this weekend?"
            },
            {
              "s": 1,
              "t": "아직 계획 없어요. 왜요?",
              "r": "ajik gyehoek eopseoyo. waeyo?",
              "e": "No plans yet. Why?"
            },
            {
              "s": 0,
              "t": "역 앞에 새로 생긴 식당 있잖아요.",
              "r": "yeok ape saero saenggin sikdang itjanayo.",
              "e": "You know that new restaurant that opened in front of the station?"
            },
            {
              "s": 1,
              "t": "아, 그 파스타집이요? 거기 핫하던데.",
              "r": "a, geu paseutajibiyo? geogi hathadeonde.",
              "e": "Oh, that pasta place? I heard it's really popular."
            },
            {
              "s": 0,
              "t": "맞아요! 요즘 완전 맛집이래요.",
              "r": "majayo! yojeum wanjeon matjibiraeyo.",
              "e": "Exactly! Apparently it's a total foodie spot these days."
            },
            {
              "s": 1,
              "t": "오, 가 보고 싶었는데 잘됐다!",
              "r": "o, ga bogo sipeonneunde jaldwaetda!",
              "e": "Oh, I've been wanting to go — perfect!"
            },
            {
              "s": 0,
              "t": "그럼 토요일 점심 어때요?",
              "r": "geureom toyoil jeomsim eottaeyo?",
              "e": "Then how about Saturday lunch?"
            },
            {
              "s": 1,
              "t": "좋아요. 사람 많을 테니까 예약할까요?",
              "r": "joayo. saram maneul tenikka yeyakhalkkayo?",
              "e": "Sounds good. It'll be packed, so should we make a reservation?"
            },
            {
              "s": 0,
              "t": "네, 제가 전화해서 예약할게요.",
              "r": "ne, jega jeonhwaeseo yeyakhalgeyo.",
              "e": "Yeah, I'll call and book it."
            },
            {
              "s": 1,
              "t": "땡큐! 토요일에 봐요.",
              "r": "ttaengkyu! toyoire bwayo.",
              "e": "Thank you! See you Saturday."
            }
          ],
          "vocab": [
            {
              "w": "계획",
              "r": "gyehoek",
              "m": "plan"
            },
            {
              "w": "새로 생기다",
              "r": "saero saenggida",
              "m": "to newly open/appear"
            },
            {
              "w": "맛집",
              "r": "matjip",
              "m": "a great food spot"
            },
            {
              "w": "핫하다",
              "r": "hathada",
              "m": "to be trendy/hot"
            },
            {
              "w": "예약하다",
              "r": "yeyakhada",
              "m": "to reserve/book"
            },
            {
              "w": "잘됐다",
              "r": "jaldwaetda",
              "m": "great / that worked out"
            }
          ]
        },
        {
          "scene": "Chatting about a TV drama",
          "title": "That Drama Finale!",
          "speakers": [
            {
              "name": "Minho",
              "emoji": "🤩"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'본방사수' (bonbangsasu) means watching a show live on its original broadcast (rather than later online) — a badge of honor for serious fans. '소름' (soreum, 'goosebumps') is the go-to one-word reaction for something thrilling or shocking.",
          "lines": [
            {
              "s": 0,
              "t": "어제 그 드라마 마지막 회 봤어요?",
              "r": "eoje geu deurama majimak hoe bwasseoyo?",
              "e": "Did you watch the drama's last episode yesterday?"
            },
            {
              "s": 1,
              "t": "당연하죠! 본방사수 했어요.",
              "r": "dangyeonhajyo! bonbangsasu haesseoyo.",
              "e": "Of course! I watched it live."
            },
            {
              "s": 0,
              "t": "마지막 장면 진짜 소름 돋지 않았어요?",
              "r": "majimak jangmyeon jinjja soreum dotji anasseoyo?",
              "e": "Didn't the final scene give you total goosebumps?"
            },
            {
              "s": 1,
              "t": "헐, 저 거기서 완전 울었어요.",
              "r": "heol, jeo geogiseo wanjeon ureosseoyo.",
              "e": "Oh my gosh, I totally cried at that part."
            },
            {
              "s": 0,
              "t": "그쵸? 결말이 너무 충격이었어요.",
              "r": "geuchyo? gyeolmari neomu chunggyeogieosseoyo.",
              "e": "Right?! The ending was such a shock."
            },
            {
              "s": 1,
              "t": "솔직히 해피엔딩일 줄 알았어요.",
              "r": "soljikhi haepiending-il jul arasseoyo.",
              "e": "Honestly, I thought it'd be a happy ending."
            },
            {
              "s": 0,
              "t": "저도요! 그래서 더 놀랐어요.",
              "r": "jeodoyo! geuraeseo deo nollasseoyo.",
              "e": "Me too! That's why I was even more surprised."
            },
            {
              "s": 1,
              "t": "시즌 2 나오면 좋겠어요.",
              "r": "sijeun tu naomyeon jokesseoyo.",
              "e": "I hope a season 2 comes out."
            },
            {
              "s": 0,
              "t": "그러니까요. 무조건 봐야죠.",
              "r": "geureonikkayo. mujogeon bwayajyo.",
              "e": "Right? I'd definitely have to watch it."
            },
            {
              "s": 1,
              "t": "ㅋㅋ 빨리 나왔으면!",
              "r": "kk ppalli nawasseumyeon!",
              "e": "Haha, I hope it comes out soon!"
            }
          ],
          "vocab": [
            {
              "w": "마지막 회",
              "r": "majimak hoe",
              "m": "the last episode"
            },
            {
              "w": "본방사수",
              "r": "bonbangsasu",
              "m": "watching live on air"
            },
            {
              "w": "소름 돋다",
              "r": "soreum dotda",
              "m": "to get goosebumps"
            },
            {
              "w": "결말",
              "r": "gyeolmal",
              "m": "ending/conclusion"
            },
            {
              "w": "충격",
              "r": "chunggyeok",
              "m": "shock"
            },
            {
              "w": "무조건",
              "r": "mujogeon",
              "m": "absolutely / no matter what"
            }
          ]
        },
        {
          "scene": "Leaving the office in the evening",
          "title": "Grabbing a Drink After Work",
          "speakers": [
            {
              "name": "Coworker",
              "emoji": "🍻"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'한잔하다' (hanjanhada, 'have a drink') rarely means literally one glass — it's a friendly invite to go drinking. '치맥' (chimaek) is the beloved combo of chicken (chikin) + beer (maekju), a Korean after-work staple. '짠!' is what you say when clinking glasses (cheers!).",
          "lines": [
            {
              "s": 0,
              "t": "오늘 일 끝나고 한잔할래요?",
              "r": "oneul il kkeunnago hanjanhallaeyo?",
              "e": "Want to grab a drink after work today?"
            },
            {
              "s": 1,
              "t": "오, 좋아요. 뭐 먹을까요?",
              "r": "o, joayo. mwo meogeulkkayo?",
              "e": "Oh, sounds great. What should we eat?"
            },
            {
              "s": 0,
              "t": "그냥 치맥 어때요? 회사 앞에 잘하는 데 있어요.",
              "r": "geunyang chimaek eottaeyo? hoesa ape jalhaneun de isseoyo.",
              "e": "How about just chicken and beer? There's a good place near the office."
            },
            {
              "s": 1,
              "t": "완전 좋죠. 저 배고팠어요.",
              "r": "wanjeon jotjyo. jeo baegopasseoyo.",
              "e": "Perfect. I'm starving."
            },
            {
              "s": 0,
              "t": "그럼 정리하고 바로 가요.",
              "r": "geureom jeongnihago baro gayo.",
              "e": "Then let's wrap up and head out right away."
            },
            {
              "s": 1,
              "t": "네! 자리 있으려나 모르겠네요.",
              "r": "ne! jari isseuryeona moreugenneyo.",
              "e": "Okay! I wonder if they'll have a table though."
            },
            {
              "s": 0,
              "t": "이 시간엔 괜찮을 거예요. 가시죠.",
              "r": "i siganen gwaenchaneul geoyeyo. gasijyo.",
              "e": "At this hour it should be fine. Let's go."
            },
            {
              "s": 1,
              "t": "좋아요. 오늘 제가 살게요.",
              "r": "joayo. oneul jega salgeyo.",
              "e": "Sounds good. I'll treat you today."
            },
            {
              "s": 0,
              "t": "오, 진짜요? 그럼 잘 먹을게요!",
              "r": "o, jinjjayo? geureom jal meogeulgeyo!",
              "e": "Oh, really? Then thanks, I'll enjoy it!"
            },
            {
              "s": 1,
              "t": "가서 시원하게 한잔해요. 짠!",
              "r": "gaseo siwonhage hanjanhaeyo. jjan!",
              "e": "Let's go have a nice cold one. Cheers!"
            }
          ],
          "vocab": [
            {
              "w": "한잔하다",
              "r": "hanjanhada",
              "m": "to go for a drink"
            },
            {
              "w": "치맥",
              "r": "chimaek",
              "m": "chicken and beer combo"
            },
            {
              "w": "배고프다",
              "r": "baegopeuda",
              "m": "to be hungry"
            },
            {
              "w": "정리하다",
              "r": "jeongnihada",
              "m": "to wrap up/tidy up"
            },
            {
              "w": "제가 살게요",
              "r": "jega salgeyo",
              "m": "I'll pay/treat"
            },
            {
              "w": "짠",
              "r": "jjan",
              "m": "cheers (clinking glasses)"
            }
          ]
        },
        {
          "scene": "On a busy street",
          "title": "Running Into an Old Friend",
          "speakers": [
            {
              "name": "Jihye",
              "emoji": "😄"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'오랜만이에요' (oraenmanieyo) means 'long time no see.' Among friends you'll also hear the casual '얼마 만이야!' (eolma maniya!), literally 'how long has it been!' The polite version is '얼마 만이에요!' Here both keep it friendly with the 요 ending.",
          "lines": [
            {
              "s": 0,
              "t": "어? 혹시... 민수 씨 아니에요?",
              "r": "eo? hoksi... minsu ssi anieyo?",
              "e": "Huh? Are you... Minsu, by any chance?"
            },
            {
              "s": 1,
              "t": "어! 지혜 씨! 와, 진짜 오랜만이에요!",
              "r": "eo! jihye ssi! wa, jinjja oraenmanieyo!",
              "e": "Oh! Jihye! Wow, it's really been ages!"
            },
            {
              "s": 0,
              "t": "그러니까요. 우리 한 2년 됐죠?",
              "r": "geureonikkayo. uri han inyeon dwaetjyo?",
              "e": "Right? It's been about two years, hasn't it?"
            },
            {
              "s": 1,
              "t": "맞아요. 요즘 어떻게 지내요?",
              "r": "majayo. yojeum eotteoke jinaeyo?",
              "e": "Yeah. How have you been these days?"
            },
            {
              "s": 0,
              "t": "그냥 그래요. 회사 다니느라 바빠요. 민수 씨는요?",
              "r": "geunyang geuraeyo. hoesa danineura bappayo. minsu ssineunyo?",
              "e": "So-so. I'm busy with work. How about you, Minsu?"
            },
            {
              "s": 1,
              "t": "저도 비슷해요. 근데 진짜 하나도 안 변했네요!",
              "r": "jeodo biseutaeyo. geunde jinjja hanado an byeonhaenneyo!",
              "e": "Pretty much the same. But seriously, you haven't changed a bit!"
            },
            {
              "s": 0,
              "t": "에이, 무슨요. 우리 언제 시간 되면 차 한잔해요.",
              "r": "ei, museunyo. uri eonje sigan doemyeon cha hanjanhaeyo.",
              "e": "Oh stop it. Let's grab a coffee sometime when we're free."
            },
            {
              "s": 1,
              "t": "좋아요! 제가 연락할게요. 번호 그대로죠?",
              "r": "joayo! jega yeollakhalgeyo. beonho geudaerojyo?",
              "e": "Sounds great! I'll get in touch. Same number, right?"
            },
            {
              "s": 0,
              "t": "네, 그대로예요. 꼭 연락해요!",
              "r": "ne, geudaeroyeyo. kkok yeollakhaeyo!",
              "e": "Yep, same one. Make sure you reach out!"
            },
            {
              "s": 1,
              "t": "그럴게요. 들어가요, 조심히!",
              "r": "geureolgeyo. deureogayo, josimhi!",
              "e": "I will. Take care getting home!"
            }
          ],
          "vocab": [
            {
              "w": "오랜만이에요",
              "r": "oraenmanieyo",
              "m": "long time no see"
            },
            {
              "w": "어떻게 지내요?",
              "r": "eotteoke jinaeyo?",
              "m": "how have you been?"
            },
            {
              "w": "그냥 그래요",
              "r": "geunyang geuraeyo",
              "m": "so-so / nothing special"
            },
            {
              "w": "안 변했네요",
              "r": "an byeonhaenneyo",
              "m": "you haven't changed"
            },
            {
              "w": "차 한잔해요",
              "r": "cha hanjanhaeyo",
              "m": "let's grab a coffee/tea"
            },
            {
              "w": "연락할게요",
              "r": "yeollakhalgeyo",
              "m": "I'll contact you"
            }
          ]
        },
        {
          "scene": "At a cafe after work",
          "title": "Venting About a Coworker",
          "speakers": [
            {
              "name": "Eunji",
              "emoji": "🙄"
            },
            {
              "name": "You",
              "emoji": "😤"
            }
          ],
          "note": "'제 탓으로 돌리다' (je tateuro dollida) = 'to pin the blame on me.' For venting, '얄밉다' (yalmipda) describes someone who's annoyingly sly or smug, and '참다' (chamda) means to hold something in or put up with it — both come up a lot in office gossip.",
          "lines": [
            {
              "s": 1,
              "t": "하... 오늘 회사에서 진짜 짜증 났어요.",
              "r": "ha... oneul hoesaeseo jinjja jjajeung nasseoyo.",
              "e": "Ugh... I was so annoyed at work today."
            },
            {
              "s": 0,
              "t": "왜요? 무슨 일 있었어요?",
              "r": "waeyo? museun il isseosseoyo?",
              "e": "Why? Did something happen?"
            },
            {
              "s": 1,
              "t": "제가 한 일인데, 그 선배가 자기가 했다고 했어요.",
              "r": "jega han irinde, geu seonbaega jagiga haetdago haesseoyo.",
              "e": "It was my work, but that senior coworker said he did it."
            },
            {
              "s": 0,
              "t": "네? 진짜요? 너무하네요.",
              "r": "ne? jinjjayo? neomuhaneyo.",
              "e": "What? Seriously? That's too much."
            },
            {
              "s": 1,
              "t": "그리고 문제 생기니까 다 제 탓으로 돌렸어요.",
              "r": "geurigo munje saengginikka da je tateuro dollyeosseoyo.",
              "e": "And when a problem came up, he put all the blame on me."
            },
            {
              "s": 0,
              "t": "와, 진짜 얄밉네요. 어떻게 그래요?",
              "r": "wa, jinjja yalmimneyo. eotteoke geuraeyo?",
              "e": "Wow, that's so sneaky. How could he do that?"
            },
            {
              "s": 1,
              "t": "그러니까요. 말도 못 하고 그냥 참았어요.",
              "r": "geureonikkayo. maldo mot hago geunyang chamasseoyo.",
              "e": "I know. I couldn't even say anything, I just held it in."
            },
            {
              "s": 0,
              "t": "에이, 너무 참지 마요. 스트레스받아요.",
              "r": "ei, neomu chamji mayo. seuteureseubadayo.",
              "e": "Hey, don't hold it in too much. You'll get stressed."
            },
            {
              "s": 1,
              "t": "맞아요. 오늘은 그냥 시원하게 맥주나 마셔요.",
              "r": "majayo. oneureun geunyang siwonhage maekjuna masyeoyo.",
              "e": "True. Let's just have a refreshing beer tonight."
            },
            {
              "s": 0,
              "t": "좋아요! 제가 들어줄게요. 다 말해요.",
              "r": "joayo! jega deureojulgeyo. da malhaeyo.",
              "e": "Sounds good! I'll listen. Tell me everything."
            }
          ],
          "vocab": [
            {
              "w": "짜증 났어요",
              "r": "jjajeung nasseoyo",
              "m": "I was annoyed/irritated"
            },
            {
              "w": "너무하네요",
              "r": "neomuhaneyo",
              "m": "that's too much / unfair"
            },
            {
              "w": "제 탓으로 돌렸어요",
              "r": "je tateuro dollyeosseoyo",
              "m": "blamed it on me"
            },
            {
              "w": "얄밉네요",
              "r": "yalmimneyo",
              "m": "that's so sly/spiteful"
            },
            {
              "w": "참았어요",
              "r": "chamasseoyo",
              "m": "I held it in / endured"
            },
            {
              "w": "스트레스받아요",
              "r": "seuteureseubadayo",
              "m": "you'll get stressed"
            }
          ]
        },
        {
          "scene": "Looking at apartment listings",
          "title": "Which Apartment to Rent",
          "speakers": [
            {
              "name": "Minji",
              "emoji": "🤔"
            },
            {
              "name": "You",
              "emoji": "🏠"
            }
          ],
          "note": "'역세권' (yeoksegwon) is an important real-estate word meaning 'within the station's zone' — i.e. walkable to a subway station. Koreans treat being 역세권 as a major selling point, so you'll see it in every listing and hear it in every apartment debate.",
          "lines": [
            {
              "s": 0,
              "t": "둘 중에 어디가 더 나아요? 고민돼요.",
              "r": "dul jungae eodiga deo naayo? gomindwaeyo.",
              "e": "Which of the two is better? I can't decide."
            },
            {
              "s": 1,
              "t": "저는 역 근처 집이 좋아요. 출퇴근 편하잖아요.",
              "r": "jeoneun yeok geuncheo jibi joayo. chultoegeun pyeonhajanayo.",
              "e": "I like the one near the station. The commute's easy, right?"
            },
            {
              "s": 0,
              "t": "근데 거기는 좀 작지 않아요?",
              "r": "geunde geogineun jom jakji anayo?",
              "e": "But isn't that one a bit small?"
            },
            {
              "s": 1,
              "t": "맞아요. 다른 집은 넓은데 역에서 멀어요.",
              "r": "majayo. dareun jibeun neolbeunde yeogeseo meoreoyo.",
              "e": "True. The other place is bigger but far from the station."
            },
            {
              "s": 0,
              "t": "걸어서 한 15분? 매일 그러면 힘들 것 같아요.",
              "r": "georeoseo han sibobun? maeil geureomyeon himdeul geot gatayo.",
              "e": "Like a 15-minute walk? Doing that every day would be rough."
            },
            {
              "s": 1,
              "t": "그쵸. 비 오는 날엔 진짜 별로예요.",
              "r": "geuchyo. bi oneun naren jinjja byeolloyeyo.",
              "e": "Right. On rainy days it'd really be no fun."
            },
            {
              "s": 0,
              "t": "근데 넓으면 친구도 부르고 좋잖아요.",
              "r": "geunde neolbeumyeon chingudo bureugo jochanayo.",
              "e": "But if it's roomy, you can invite friends over, which is nice."
            },
            {
              "s": 1,
              "t": "음... 저는 그래도 가까운 게 더 중요해요.",
              "r": "eum... jeoneun geuraedo gakkaun ge deo jungyohaeyo.",
              "e": "Hmm... still, being close matters more to me."
            },
            {
              "s": 0,
              "t": "알겠어요. 그럼 역세권으로 가요!",
              "r": "algesseoyo. geureom yeoksegwoneuro gayo!",
              "e": "Got it. Then let's go with the one near the station!"
            },
            {
              "s": 1,
              "t": "좋아요. 내일 한번 보러 가요.",
              "r": "joayo. naeil hanbeon boreo gayo.",
              "e": "Great. Let's go check it out tomorrow."
            }
          ],
          "vocab": [
            {
              "w": "고민돼요",
              "r": "gomindwaeyo",
              "m": "I'm torn / can't decide"
            },
            {
              "w": "출퇴근",
              "r": "chultoegeun",
              "m": "commute (to/from work)"
            },
            {
              "w": "넓다",
              "r": "neopta",
              "m": "to be spacious"
            },
            {
              "w": "걸어서",
              "r": "georeoseo",
              "m": "on foot / by walking"
            },
            {
              "w": "별로예요",
              "r": "byeolloyeyo",
              "m": "it's not great / meh"
            },
            {
              "w": "역세권",
              "r": "yeoksegwon",
              "m": "area walkable to a station"
            }
          ]
        },
        {
          "scene": "At a Korean restaurant",
          "title": "Ordering Several Dishes",
          "speakers": [
            {
              "name": "Server",
              "emoji": "🧑‍🍳"
            },
            {
              "name": "You",
              "emoji": "🍽️"
            }
          ],
          "note": "'덜 맵게 해 주세요' (deol maepge hae juseyo) = 'please make it less spicy' — a lifesaver phrase. Also, calling a server with '여기요' (yeogiyo, literally 'over here') or '저기요' is completely normal and polite in Korea.",
          "lines": [
            {
              "s": 1,
              "t": "여기요, 주문할게요.",
              "r": "yeogiyo, jumunhalgeyo.",
              "e": "Excuse me, we'd like to order."
            },
            {
              "s": 0,
              "t": "네, 주문하시겠어요?",
              "r": "ne, jumunhasigesseoyo?",
              "e": "Yes, are you ready to order?"
            },
            {
              "s": 1,
              "t": "김치찌개 하나랑 제육볶음 하나 주세요.",
              "r": "gimchijjigae hanarang jeyukbokkeum hana juseyo.",
              "e": "One kimchi stew and one spicy stir-fried pork, please."
            },
            {
              "s": 0,
              "t": "네, 더 필요하신 거 있으세요?",
              "r": "ne, deo piryohasin geo isseuseyo?",
              "e": "Sure, is there anything else you need?"
            },
            {
              "s": 1,
              "t": "공깃밥 두 개랑요. 혹시 이거 많이 매워요?",
              "r": "gonggitbap du gaerangyo. hoksi igeo mani maewoyo?",
              "e": "Two bowls of rice too. By the way, is this very spicy?"
            },
            {
              "s": 0,
              "t": "조금 매운 편이에요. 덜 맵게 해 드릴까요?",
              "r": "jogeum maeun pyeonieyo. deol maepge hae deurilkkayo?",
              "e": "It's a bit on the spicy side. Shall I make it less spicy?"
            },
            {
              "s": 1,
              "t": "네, 덜 맵게 해 주세요. 그리고 물 좀 주세요.",
              "r": "ne, deol maepge hae juseyo. geurigo mul jom juseyo.",
              "e": "Yes, please make it less spicy. And some water, please."
            },
            {
              "s": 0,
              "t": "네, 반찬은 셀프예요. 저기 있어요.",
              "r": "ne, banchaneun selpeuyeyo. jeogi isseoyo.",
              "e": "Sure. Side dishes are self-serve. They're over there."
            },
            {
              "s": 1,
              "t": "아, 알겠습니다. 음식 얼마나 걸려요?",
              "r": "a, algesseumnida. eumsik eolmana geollyeoyo?",
              "e": "Oh, got it. How long will the food take?"
            },
            {
              "s": 0,
              "t": "한 10분 정도 걸려요. 잠시만 기다려 주세요.",
              "r": "han sippun jeongdo geollyeoyo. jamsiman gidaryeo juseyo.",
              "e": "About 10 minutes. Please wait just a moment."
            }
          ],
          "vocab": [
            {
              "w": "여기요",
              "r": "yeogiyo",
              "m": "excuse me (to call staff)"
            },
            {
              "w": "주세요",
              "r": "juseyo",
              "m": "please give me"
            },
            {
              "w": "공깃밥",
              "r": "gonggitbap",
              "m": "a bowl of (steamed) rice"
            },
            {
              "w": "매워요",
              "r": "maewoyo",
              "m": "it's spicy"
            },
            {
              "w": "덜 맵게",
              "r": "deol maepge",
              "m": "less spicy"
            },
            {
              "w": "반찬은 셀프예요",
              "r": "banchaneun selpeuyeyo",
              "m": "side dishes are self-serve"
            }
          ]
        },
        {
          "scene": "At a clothing store",
          "title": "Trying On Clothes",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛍️"
            },
            {
              "name": "You",
              "emoji": "👕"
            }
          ],
          "note": "Sizes in Korea are often said as English borrowings: 라지 (laji, large), 미디엄 (midieom, medium), 스몰 (seumol, small). Also '한 사이즈 큰 거' (han saijeu keun geo) = 'one size up' is the exact phrase to grab a bigger size fast.",
          "lines": [
            {
              "s": 0,
              "t": "찾으시는 거 있으세요?",
              "r": "chajeusineun geo isseuseyo?",
              "e": "Are you looking for anything in particular?"
            },
            {
              "s": 1,
              "t": "이 셔츠 입어 봐도 돼요?",
              "r": "i syeocheu ibeo bwado dwaeyo?",
              "e": "Can I try on this shirt?"
            },
            {
              "s": 0,
              "t": "네, 그럼요. 사이즈 어떻게 되세요?",
              "r": "ne, geureomyo. saijeu eotteoke doeseyo?",
              "e": "Yes, of course. What's your size?"
            },
            {
              "s": 1,
              "t": "보통 미디엄인데, 좀 작을까 봐요.",
              "r": "botong midieominde, jom jageulkka bwayo.",
              "e": "Usually medium, but I'm worried it might be small."
            },
            {
              "s": 0,
              "t": "그럼 라지도 같이 드릴게요. 탈의실은 저쪽이에요.",
              "r": "geureom lajido gachi deurilgeyo. taruisireun jeojjogieyo.",
              "e": "Then I'll give you a large too. The fitting room is over there."
            },
            {
              "s": 1,
              "t": "감사합니다. (잠시 후) 음, 이거 좀 끼네요.",
              "r": "gamsahamnida. (jamsi hu) eum, igeo jom kkineyo.",
              "e": "Thank you. (a moment later) Hmm, this is a bit tight."
            },
            {
              "s": 0,
              "t": "그럼 한 사이즈 큰 걸로 드릴까요?",
              "r": "geureom han saijeu keun geollo deurilkkayo?",
              "e": "Then shall I get you one size up?"
            },
            {
              "s": 1,
              "t": "네. 혹시 다른 색깔도 있어요?",
              "r": "ne. hoksi dareun saekkaldo isseoyo?",
              "e": "Yes. By the way, do you have other colors?"
            },
            {
              "s": 0,
              "t": "검은색이랑 흰색 있어요. 가져다드릴게요.",
              "r": "geomeunsaegirang huinsaek isseoyo. gajyeodadeurilgeyo.",
              "e": "We have black and white. I'll bring them for you."
            },
            {
              "s": 1,
              "t": "네, 이걸로 할게요. 잘 맞아요!",
              "r": "ne, igeollo halgeyo. jal majayo!",
              "e": "Okay, I'll take this one. It fits well!"
            }
          ],
          "vocab": [
            {
              "w": "입어 봐도 돼요?",
              "r": "ibeo bwado dwaeyo?",
              "m": "can I try it on?"
            },
            {
              "w": "사이즈",
              "r": "saijeu",
              "m": "size"
            },
            {
              "w": "탈의실",
              "r": "taruisil",
              "m": "fitting room"
            },
            {
              "w": "끼네요",
              "r": "kkineyo",
              "m": "it's tight (on me)"
            },
            {
              "w": "한 사이즈 큰 거",
              "r": "han saijeu keun geo",
              "m": "one size up"
            },
            {
              "w": "잘 맞아요",
              "r": "jal majayo",
              "m": "it fits well"
            }
          ]
        },
        {
          "scene": "At a convenience store",
          "title": "Paying at the Convenience Store",
          "speakers": [
            {
              "name": "Clerk",
              "emoji": "🏪"
            },
            {
              "name": "You",
              "emoji": "💳"
            }
          ],
          "note": "Clerks always ask '봉투 드릴까요?' (bongtu deurilkkayo?, 'need a bag?') because bags now cost money in Korea. And '데워 드릴까요?' (dewo deurilkkayo?, 'shall I heat it up?') is the standard offer for instant food — say '네' and they'll microwave it right there.",
          "lines": [
            {
              "s": 0,
              "t": "어서 오세요. 다 고르셨어요?",
              "r": "eoseo oseyo. da goreusyeosseoyo?",
              "e": "Welcome. Did you find everything?"
            },
            {
              "s": 1,
              "t": "네, 이거 계산해 주세요.",
              "r": "ne, igeo gyesanhae juseyo.",
              "e": "Yes, please ring these up."
            },
            {
              "s": 0,
              "t": "도시락은 데워 드릴까요?",
              "r": "dosirageun dewo deurilkkayo?",
              "e": "Shall I heat up the lunchbox for you?"
            },
            {
              "s": 1,
              "t": "네, 데워 주세요.",
              "r": "ne, dewo juseyo.",
              "e": "Yes, please heat it up."
            },
            {
              "s": 0,
              "t": "봉투 필요하세요? 봉투는 백 원이에요.",
              "r": "bongtu piryohaseyo? bongtuneun baek wonieyo.",
              "e": "Do you need a bag? Bags are 100 won."
            },
            {
              "s": 1,
              "t": "아, 그냥 주세요. 포인트 적립도 돼요?",
              "r": "a, geunyang juseyo. pointeu jeongnipdo dwaeyo?",
              "e": "Oh, just give me one. Can I earn points too?"
            },
            {
              "s": 0,
              "t": "네, 번호 눌러 주세요. 다 됐어요.",
              "r": "ne, beonho nulleo juseyo. da dwaesseoyo.",
              "e": "Yes, please enter your number. All done."
            },
            {
              "s": 1,
              "t": "카드로 할게요. 여기요.",
              "r": "kadeuro halgeyo. yeogiyo.",
              "e": "I'll pay by card. Here you go."
            },
            {
              "s": 0,
              "t": "네, 결제됐습니다. 도시락 데운 거 여기 있어요.",
              "r": "ne, gyeoljedwaetseumnida. dosirak deun geo yeogi isseoyo.",
              "e": "Okay, payment's done. Here's your heated lunchbox."
            },
            {
              "s": 1,
              "t": "감사합니다. 좋은 하루 보내세요!",
              "r": "gamsahamnida. joeun haru bonaeseyo!",
              "e": "Thank you. Have a nice day!"
            }
          ],
          "vocab": [
            {
              "w": "계산해 주세요",
              "r": "gyesanhae juseyo",
              "m": "please ring it up / I'll pay"
            },
            {
              "w": "데워 드릴까요?",
              "r": "dewo deurilkkayo?",
              "m": "shall I heat it up?"
            },
            {
              "w": "봉투",
              "r": "bongtu",
              "m": "(plastic) bag"
            },
            {
              "w": "포인트 적립",
              "r": "pointeu jeongnip",
              "m": "earning (loyalty) points"
            },
            {
              "w": "카드로 할게요",
              "r": "kadeuro halgeyo",
              "m": "I'll pay by card"
            },
            {
              "w": "결제됐습니다",
              "r": "gyeoljedwaetseumnida",
              "m": "payment is complete"
            }
          ]
        },
        {
          "scene": "In a taxi",
          "title": "Taking a Taxi",
          "speakers": [
            {
              "name": "Driver",
              "emoji": "🧑‍✈️"
            },
            {
              "name": "You",
              "emoji": "🧳"
            }
          ],
          "note": "To say a place is your destination, just add '까지요' (-kkajiyo) after it — 'Seoul Station, please' becomes 'Seoul-yeok-kkajiyo'. Drivers love this because it's short and clear, and it sounds far more natural than a full sentence.",
          "lines": [
            {
              "s": 0,
              "t": "안녕하세요, 어디까지 가세요?",
              "r": "annyeonghaseyo, eodikkaji gaseyo?",
              "e": "Hello, where are you headed?"
            },
            {
              "s": 1,
              "t": "서울역까지요. 좀 급해요.",
              "r": "seoul-yeok-kkajiyo. jom geuphaeyo.",
              "e": "To Seoul Station, please. I'm in a bit of a hurry."
            },
            {
              "s": 0,
              "t": "아, 네. 지금 길이 좀 막혀요.",
              "r": "a, ne. jigeum giri jom makhyeoyo.",
              "e": "Ah, okay. The roads are a little jammed right now."
            },
            {
              "s": 1,
              "t": "많이 막혀요? 기차를 타야 해서요.",
              "r": "mani makhyeoyo? gichareul taya haeseoyo.",
              "e": "Is it really bad? I have a train to catch."
            },
            {
              "s": 0,
              "t": "걱정 마세요. 20분이면 도착해요.",
              "r": "geokjeong maseyo. isipbunimyeon dochakaeyo.",
              "e": "Don't worry. We'll be there in about 20 minutes."
            },
            {
              "s": 1,
              "t": "다행이에요. 감사합니다.",
              "r": "dahaengieyo. gamsahamnida.",
              "e": "Oh, that's a relief. Thank you."
            },
            {
              "s": 0,
              "t": "날씨가 참 좋죠? 오늘.",
              "r": "nalssiga cham jotjyo? oneul.",
              "e": "Nice weather today, isn't it?"
            },
            {
              "s": 1,
              "t": "네, 정말 좋아요. 여기서 세워 주세요.",
              "r": "ne, jeongmal joayo. yeogiseo sewo juseyo.",
              "e": "Yes, really lovely. You can stop right here, please."
            },
            {
              "s": 0,
              "t": "네, 9,500원입니다.",
              "r": "ne, gucheonobaegwonimnida.",
              "e": "Okay, that'll be 9,500 won."
            },
            {
              "s": 1,
              "t": "카드로 할게요. 안녕히 가세요!",
              "r": "kadeuro halgeyo. annyeonghi gaseyo!",
              "e": "I'll pay by card. Take care, bye!"
            }
          ],
          "vocab": [
            {
              "w": "까지",
              "r": "kkaji",
              "m": "up to / as far as (a place)"
            },
            {
              "w": "급해요",
              "r": "geuphaeyo",
              "m": "to be in a hurry"
            },
            {
              "w": "막혀요",
              "r": "makhyeoyo",
              "m": "(traffic) is jammed"
            },
            {
              "w": "도착해요",
              "r": "dochakaeyo",
              "m": "to arrive"
            },
            {
              "w": "세워 주세요",
              "r": "sewo juseyo",
              "m": "please stop (the car)"
            },
            {
              "w": "다행이에요",
              "r": "dahaengieyo",
              "m": "that's a relief"
            }
          ]
        },
        {
          "scene": "Hotel front desk",
          "title": "Hotel Check-In",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛎️"
            },
            {
              "name": "You",
              "emoji": "🧳"
            }
          ],
          "note": "At hotels and restaurants, staff use the ultra-polite '-실게요' / '-시겠어요' style and call you '고객님' (gogaengnim, 'dear customer'). You don't have to copy that level — your simple '요' answers are perfectly polite and expected from a guest.",
          "lines": [
            {
              "s": 0,
              "t": "어서 오세요. 체크인 도와드릴까요?",
              "r": "eoseo oseyo. chekeuin dowadeurilkkayo?",
              "e": "Welcome. Shall I help you check in?"
            },
            {
              "s": 1,
              "t": "네, 예약했어요. 김민수예요.",
              "r": "ne, yeyakaesseoyo. gimminsuyeyo.",
              "e": "Yes, I have a reservation. It's under Kim Minsu."
            },
            {
              "s": 0,
              "t": "잠시만요... 네, 확인됐습니다. 2박 맞으세요?",
              "r": "jamsimanyo... ne, hwagindwaetseumnida. ibak majeuseyo?",
              "e": "One moment... yes, I've got it. Two nights, correct?"
            },
            {
              "s": 1,
              "t": "맞아요. 혹시 금연 방이에요?",
              "r": "majayo. hoksi geumyeon bangieyo?",
              "e": "That's right. Is it a non-smoking room, by any chance?"
            },
            {
              "s": 0,
              "t": "네, 금연 방이에요. 여권 주시겠어요?",
              "r": "ne, geumyeon bangieyo. yeogwon jusigesseoyo?",
              "e": "Yes, it's non-smoking. Could I have your passport?"
            },
            {
              "s": 1,
              "t": "여기요. 아침은 몇 시예요?",
              "r": "yeogiyo. achimeun myeot siyeyo?",
              "e": "Here you go. What time is breakfast?"
            },
            {
              "s": 0,
              "t": "7시부터 10시까지예요. 2층이에요.",
              "r": "ilgopsibuteo yeolsikkajiyeyo. icheungieyo.",
              "e": "From 7 to 10, on the second floor."
            },
            {
              "s": 1,
              "t": "좋아요. 와이파이 비밀번호도 알려 주세요.",
              "r": "joayo. waipai bimilbeonhodo allyeo juseyo.",
              "e": "Great. Please give me the Wi-Fi password too."
            },
            {
              "s": 0,
              "t": "카드 뒤에 적혀 있어요. 805호입니다.",
              "r": "kadeu dwie jeokhyeo isseoyo. palbaegohoimnida.",
              "e": "It's written on the back of the key card. Room 805."
            },
            {
              "s": 1,
              "t": "감사합니다. 좋은 하루 되세요!",
              "r": "gamsahamnida. joeun haru doeseyo!",
              "e": "Thank you. Have a nice day!"
            }
          ],
          "vocab": [
            {
              "w": "예약했어요",
              "r": "yeyakaesseoyo",
              "m": "I made a reservation"
            },
            {
              "w": "확인됐습니다",
              "r": "hwagindwaetseumnida",
              "m": "it's confirmed / checked"
            },
            {
              "w": "금연 방",
              "r": "geumyeon bang",
              "m": "non-smoking room"
            },
            {
              "w": "여권",
              "r": "yeogwon",
              "m": "passport"
            },
            {
              "w": "비밀번호",
              "r": "bimilbeonho",
              "m": "password"
            },
            {
              "w": "2박",
              "r": "ibak",
              "m": "two nights (stay)"
            }
          ]
        },
        {
          "scene": "At the pharmacy",
          "title": "Cold Medicine",
          "speakers": [
            {
              "name": "Pharmacist",
              "emoji": "💊"
            },
            {
              "name": "You",
              "emoji": "🤧"
            }
          ],
          "note": "Koreans say '몸살 났어요' (momsal nasseoyo) for that whole-body achy, run-down feeling when you're coming down with something — there's no single English word for it, and pharmacists will instantly know what kind of medicine you need.",
          "lines": [
            {
              "s": 0,
              "t": "어떻게 오셨어요? 어디가 안 좋으세요?",
              "r": "eotteoke osyeosseoyo? eodiga an joeuseyo?",
              "e": "What brings you in? What's bothering you?"
            },
            {
              "s": 1,
              "t": "감기에 걸린 것 같아요. 목이 아파요.",
              "r": "gamgie geollin geot gatayo. mogi apayo.",
              "e": "I think I caught a cold. My throat hurts."
            },
            {
              "s": 0,
              "t": "열도 있어요? 기침은요?",
              "r": "yeoldo isseoyo? gichimeunyo?",
              "e": "Do you have a fever too? What about a cough?"
            },
            {
              "s": 1,
              "t": "열은 조금 있고, 콧물도 나요.",
              "r": "yeoreun jogeum itgo, konmuldo nayo.",
              "e": "A slight fever, and a runny nose as well."
            },
            {
              "s": 0,
              "t": "몸살 기운도 있는 것 같네요. 약 드릴게요.",
              "r": "momsal giundo inneun geot gatneyo. yak deurilgeyo.",
              "e": "Sounds like body aches too. I'll get you some medicine."
            },
            {
              "s": 1,
              "t": "네. 하루에 몇 번 먹어요?",
              "r": "ne. harue myeot beon meogeoyo?",
              "e": "Okay. How many times a day do I take it?"
            },
            {
              "s": 0,
              "t": "식후에 하루 세 번 드세요.",
              "r": "sikhue haru se beon deuseyo.",
              "e": "Take it three times a day, after meals."
            },
            {
              "s": 1,
              "t": "졸린 약이에요? 운전해야 해서요.",
              "r": "jollin yagieyo? unjeonhaeya haeseoyo.",
              "e": "Will it make me drowsy? I have to drive."
            },
            {
              "s": 0,
              "t": "이건 안 졸려요. 물 많이 드세요.",
              "r": "igeon an jollyeoyo. mul mani deuseyo.",
              "e": "This one won't. Drink plenty of water."
            },
            {
              "s": 1,
              "t": "알겠습니다. 감사합니다.",
              "r": "algetseumnida. gamsahamnida.",
              "e": "Got it. Thank you."
            }
          ],
          "vocab": [
            {
              "w": "감기에 걸렸어요",
              "r": "gamgie geollyeosseoyo",
              "m": "I caught a cold"
            },
            {
              "w": "목이 아파요",
              "r": "mogi apayo",
              "m": "my throat hurts"
            },
            {
              "w": "콧물",
              "r": "konmul",
              "m": "runny nose / snot"
            },
            {
              "w": "몸살",
              "r": "momsal",
              "m": "body aches from being run-down"
            },
            {
              "w": "식후",
              "r": "sikhu",
              "m": "after a meal"
            },
            {
              "w": "졸려요",
              "r": "jollyeoyo",
              "m": "to feel sleepy/drowsy"
            }
          ]
        },
        {
          "scene": "At a hair salon",
          "title": "Getting a Haircut",
          "speakers": [
            {
              "name": "Stylist",
              "emoji": "💇"
            },
            {
              "name": "You",
              "emoji": "🪞"
            }
          ],
          "note": "'다듬어 주세요' (dadeumeo juseyo, 'just tidy it up') is the magic phrase when you only want a small trim, not a real change — say it and the stylist won't go scissor-happy. For 'a little', '조금만' (jogeumman) sets a firm limit.",
          "lines": [
            {
              "s": 0,
              "t": "안녕하세요. 오늘 어떻게 해 드릴까요?",
              "r": "annyeonghaseyo. oneul eotteoke hae deurilkkayo?",
              "e": "Hi there. How would you like it done today?"
            },
            {
              "s": 1,
              "t": "그냥 좀 다듬어 주세요. 너무 길어졌어요.",
              "r": "geunyang jom dadeumeo juseyo. neomu gireojeosseoyo.",
              "e": "Just a trim, please. It's gotten too long."
            },
            {
              "s": 0,
              "t": "얼마나 자를까요? 어깨까지 어떠세요?",
              "r": "eolmana jareulkkayo? eokkaekkaji eotteoseyo?",
              "e": "How much should I cut? How about down to your shoulders?"
            },
            {
              "s": 1,
              "t": "음... 조금만요. 2센티 정도요.",
              "r": "eum... jogeummanyo. icenti jeongdoyo.",
              "e": "Hmm... just a little. About two centimeters."
            },
            {
              "s": 0,
              "t": "앞머리는요? 그대로 둘까요?",
              "r": "apmeorineunyo? geudaero dulkkayo?",
              "e": "And the bangs? Shall I leave them as they are?"
            },
            {
              "s": 1,
              "t": "네, 앞머리는 그대로 두세요.",
              "r": "ne, apmeorineun geudaero duseyo.",
              "e": "Yes, please leave the bangs alone."
            },
            {
              "s": 0,
              "t": "알겠습니다. 머리 감고 시작할게요.",
              "r": "algetseumnida. meori gamgo sijakalgeyo.",
              "e": "Got it. I'll wash your hair and then start."
            },
            {
              "s": 1,
              "t": "네. 끝나고 드라이도 해 주세요.",
              "r": "ne. kkeutnago deuraido hae juseyo.",
              "e": "Sure. Please blow-dry it at the end too."
            },
            {
              "s": 0,
              "t": "그럼요. 다 됐어요. 어떠세요?",
              "r": "geureomyo. da dwaesseoyo. eotteoseyo?",
              "e": "Of course. All done. How is it?"
            },
            {
              "s": 1,
              "t": "와, 마음에 들어요! 감사합니다.",
              "r": "wa, maeume deureoyo! gamsahamnida.",
              "e": "Wow, I love it! Thank you."
            }
          ],
          "vocab": [
            {
              "w": "다듬어 주세요",
              "r": "dadeumeo juseyo",
              "m": "please trim/tidy it up"
            },
            {
              "w": "자를까요?",
              "r": "jareulkkayo?",
              "m": "shall I cut (it)?"
            },
            {
              "w": "앞머리",
              "r": "apmeori",
              "m": "bangs / front hair"
            },
            {
              "w": "그대로 두세요",
              "r": "geudaero duseyo",
              "m": "leave it as it is"
            },
            {
              "w": "드라이",
              "r": "deurai",
              "m": "blow-dry"
            },
            {
              "w": "마음에 들어요",
              "r": "maeume deureoyo",
              "m": "I like it / it suits my taste"
            }
          ]
        },
        {
          "scene": "Chatting with a friend",
          "title": "Hobby Talk",
          "speakers": [
            {
              "name": "Jiwon",
              "emoji": "🎮"
            },
            {
              "name": "You",
              "emoji": "😆"
            }
          ],
          "note": "'덕후' (deokhu) means a super-fan or 'geek' about something, and '입덕했어요' (ipdeokaesseoyo) literally means 'I entered fandom' — i.e. 'I just got obsessed'. Even in polite speech, friends sprinkle these in constantly when talking about hobbies.",
          "lines": [
            {
              "s": 0,
              "t": "어, 그 게임 새 시즌 나온 거 봤어요?",
              "r": "eo, geu geim sae sijeun naon geo bwasseoyo?",
              "e": "Oh, did you see the new season of that game dropped?"
            },
            {
              "s": 1,
              "t": "봤어요! 어제 밤새 했어요. 진짜 재밌어요.",
              "r": "bwasseoyo! eoje bamsae haesseoyo. jinjja jaemisseoyo.",
              "e": "I did! I stayed up all night playing yesterday. So fun."
            },
            {
              "s": 0,
              "t": "대박. 새 캐릭터 진짜 세죠?",
              "r": "daebak. sae kaerikteo jinjja sejyo?",
              "e": "Awesome. The new character is super strong, right?"
            },
            {
              "s": 1,
              "t": "맞아요! 저 완전 입덕했어요.",
              "r": "majayo! jeo wanjeon ipdeokaesseoyo.",
              "e": "Totally! I'm completely obsessed now."
            },
            {
              "s": 0,
              "t": "그럼 우리 주말에 같이 할래요?",
              "r": "geureom uri jumare gachi hallaeyo?",
              "e": "Then want to play together this weekend?"
            },
            {
              "s": 1,
              "t": "좋아요! 근데 저 아직 잘 못해요.",
              "r": "joayo! geunde jeo ajik jal motaeyo.",
              "e": "Sounds great! But I'm still not very good."
            },
            {
              "s": 0,
              "t": "괜찮아요. 제가 알려 줄게요.",
              "r": "gwaenchanayo. jega allyeo julgeyo.",
              "e": "No worries. I'll show you the ropes."
            },
            {
              "s": 1,
              "t": "고마워요. OST도 진짜 좋지 않아요?",
              "r": "gomawoyo. oeseutido jinjja jochi anayo?",
              "e": "Thanks. And isn't the soundtrack amazing too?"
            },
            {
              "s": 0,
              "t": "맞아요! 요즘 그것만 들어요.",
              "r": "majayo! yojeum geugeotman deureoyo.",
              "e": "Right?! That's all I've been listening to lately."
            },
            {
              "s": 1,
              "t": "우리 진짜 덕후네요. ㅋㅋ",
              "r": "uri jinjja deokhuneyo. kk",
              "e": "We're such total geeks, lol."
            }
          ],
          "vocab": [
            {
              "w": "밤새",
              "r": "bamsae",
              "m": "all night long"
            },
            {
              "w": "대박",
              "r": "daebak",
              "m": "awesome / amazing (slang)"
            },
            {
              "w": "입덕했어요",
              "r": "ipdeokaesseoyo",
              "m": "I got into (a fandom), got obsessed"
            },
            {
              "w": "덕후",
              "r": "deokhu",
              "m": "super-fan / geek / otaku"
            },
            {
              "w": "세죠?",
              "r": "sejyo?",
              "m": "it's strong/powerful, right?"
            },
            {
              "w": "ㅋㅋ",
              "r": "kk",
              "m": "haha / lol (typed laughter)"
            }
          ]
        },
        {
          "scene": "Planning a weekend trip",
          "title": "Weekend Trip Plan",
          "speakers": [
            {
              "name": "Suji",
              "emoji": "🗺️"
            },
            {
              "name": "You",
              "emoji": "🎒"
            }
          ],
          "note": "'당일치기' (dangilchigi) means a day trip with no overnight stay, while '1박 2일' (ilbak iil, 'one night two days') is the classic short-trip length Koreans use constantly. Naming the trip length this way instantly tells your friend how much to pack.",
          "lines": [
            {
              "s": 0,
              "t": "우리 이번 주말에 여행 갈래요?",
              "r": "uri ibeon jumare yeohaeng gallaeyo?",
              "e": "Want to go on a trip this weekend?"
            },
            {
              "s": 1,
              "t": "좋아요! 어디로 갈까요?",
              "r": "joayo! eodiro galkkayo?",
              "e": "Yes! Where should we go?"
            },
            {
              "s": 0,
              "t": "강릉 어때요? 바다 보러 가요.",
              "r": "gangneung eottaeyo? bada boreo gayo.",
              "e": "How about Gangneung? Let's go see the ocean."
            },
            {
              "s": 1,
              "t": "오, 좋아요. 당일치기예요, 아니면 1박 2일?",
              "r": "o, joayo. dangilchigiyeyo, animyeon ilbak iil?",
              "e": "Ooh, nice. Is it a day trip, or one night two days?"
            },
            {
              "s": 0,
              "t": "1박 2일로 해요. 토요일에 출발해요.",
              "r": "ilbak iillo haeyo. toyoire chulbalhaeyo.",
              "e": "Let's make it overnight. We'll leave Saturday."
            },
            {
              "s": 1,
              "t": "기차로 가요? 표 미리 예매해요.",
              "r": "gicharo gayo? pyo miri yemaehaeyo.",
              "e": "Shall we take the train? Let's book tickets in advance."
            },
            {
              "s": 0,
              "t": "네, 제가 예매할게요. 숙소는요?",
              "r": "ne, jega yemaehalgeyo. suksoneunyo?",
              "e": "Yeah, I'll book them. What about the place to stay?"
            },
            {
              "s": 1,
              "t": "바다 근처로 잡아요. 회도 먹어요!",
              "r": "bada geuncheoro jabayo. hoedo meogeoyo!",
              "e": "Let's get one near the beach. And eat raw fish too!"
            },
            {
              "s": 0,
              "t": "좋아요. 일요일엔 카페 투어 어때요?",
              "r": "joayo. iryoiren kape tueo eottaeyo?",
              "e": "Great. How about a cafe tour on Sunday?"
            },
            {
              "s": 1,
              "t": "완전 좋아요! 벌써 설레요.",
              "r": "wanjeon joayo! beolsseo seollaeyo.",
              "e": "Love it! I'm already excited."
            }
          ],
          "vocab": [
            {
              "w": "여행 갈래요?",
              "r": "yeohaeng gallaeyo?",
              "m": "want to go on a trip?"
            },
            {
              "w": "당일치기",
              "r": "dangilchigi",
              "m": "day trip (no overnight)"
            },
            {
              "w": "1박 2일",
              "r": "ilbak iil",
              "m": "one night, two days"
            },
            {
              "w": "출발해요",
              "r": "chulbalhaeyo",
              "m": "to depart / set off"
            },
            {
              "w": "예매해요",
              "r": "yemaehaeyo",
              "m": "to book (tickets) in advance"
            },
            {
              "w": "설레요",
              "r": "seollaeyo",
              "m": "to feel excited/fluttery"
            }
          ]
        },
        {
          "scene": "At the gym",
          "title": "Working Out Together",
          "speakers": [
            {
              "name": "Minji",
              "emoji": "💪"
            },
            {
              "name": "You",
              "emoji": "🏋️"
            }
          ],
          "note": "Koreans often call the gym '헬스장' (heolseu-jang, from 'health'), not '체육관' which means a sports hall. Saying you go to '헬스' just means you go work out.",
          "lines": [
            {
              "s": 0,
              "t": "어, 오랜만에 헬스장에서 보네요!",
              "r": "eo, oraenmane heolseujangeseo boneyo!",
              "e": "Oh, it's been a while since I saw you at the gym!"
            },
            {
              "s": 1,
              "t": "그러게요. 요즘 운동 자주 오세요?",
              "r": "geureogeyo. yojeum undong jaju oseyo?",
              "e": "Right? Do you come work out often these days?"
            },
            {
              "s": 0,
              "t": "네, 일주일에 세 번 정도요. 민지 씨는요?",
              "r": "ne, iljuire se beon jeongdoyo. minji ssineunyo?",
              "e": "Yeah, about three times a week. How about you?"
            },
            {
              "s": 1,
              "t": "저는 이제 막 시작했어요. 좀 힘드네요.",
              "r": "jeoneun ije mak sijakaesseoyo. jom himdeuneyo.",
              "e": "I just started recently. It's kind of tough."
            },
            {
              "s": 0,
              "t": "처음엔 다 그래요. 오늘은 뭐 하세요?",
              "r": "cheoeumen da geuraeyo. oneureun mwo haseyo?",
              "e": "It's like that for everyone at first. What are you doing today?"
            },
            {
              "s": 1,
              "t": "다리 운동 하려고요. 스쿼트가 좀 무서워요.",
              "r": "dari undong haryeogoyo. seukwoteuga jom museowoyo.",
              "e": "I'm planning to do legs. Squats are a little scary."
            },
            {
              "s": 0,
              "t": "제가 옆에서 봐 드릴게요. 천천히 해요.",
              "r": "jega yeopeseo bwa deurilgeyo. cheoncheonhi haeyo.",
              "e": "I'll watch your form for you. Take it slow."
            },
            {
              "s": 1,
              "t": "정말요? 감사해요! 든든하네요.",
              "r": "jeongmaryo? gamsahaeyo! deundeunhaneyo.",
              "e": "Really? Thank you! That's reassuring."
            },
            {
              "s": 0,
              "t": "끝나고 단백질 음료 한잔해요.",
              "r": "kkeunnago danbaekjil eumnyo hanjanhaeyo.",
              "e": "Let's grab a protein drink after we finish."
            },
            {
              "s": 1,
              "t": "좋아요. 오늘 열심히 해 볼게요!",
              "r": "joayo. oneul yeolsimhi hae bolgeyo!",
              "e": "Sounds good. I'll give it my best today!"
            }
          ],
          "vocab": [
            {
              "w": "헬스장",
              "r": "heolseujang",
              "m": "gym (fitness center)"
            },
            {
              "w": "운동",
              "r": "undong",
              "m": "exercise, working out"
            },
            {
              "w": "일주일에 세 번",
              "r": "iljuire se beon",
              "m": "three times a week"
            },
            {
              "w": "스쿼트",
              "r": "seukwoteu",
              "m": "squat"
            },
            {
              "w": "든든하다",
              "r": "deundeunhada",
              "m": "to feel reassured/supported"
            },
            {
              "w": "단백질",
              "r": "danbaekjil",
              "m": "protein"
            }
          ]
        },
        {
          "scene": "At a cafe",
          "title": "A Surprise at the Cafe",
          "speakers": [
            {
              "name": "Jihun",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "📚"
            }
          ],
          "note": "'카공' (kagong) is short for '카페 공부' — studying at a cafe. It's a huge habit in Korea, so cafes are full of students with laptops for hours.",
          "lines": [
            {
              "s": 0,
              "t": "어? 너 여기서 뭐 해?",
              "r": "eo? neo yeogiseo mwo hae?",
              "e": "Huh? What are you doing here?"
            },
            {
              "s": 1,
              "t": "어머, 지훈아! 깜짝이야. 시험 공부 중이야.",
              "r": "eomeo, jihuna! kkamjjagiya. siheom gongbu jungiya.",
              "e": "Oh my, Jihun! You scared me. I'm studying for an exam."
            },
            {
              "s": 0,
              "t": "여기 자주 와? 처음 봤어.",
              "r": "yeogi jaju wa? cheoeum bwasseo.",
              "e": "Do you come here often? I've never seen you here."
            },
            {
              "s": 1,
              "t": "응, 조용해서 카공하기 좋아.",
              "r": "eung, joyonghaeseo kagonghagi joa.",
              "e": "Yeah, it's quiet, so it's good for studying."
            },
            {
              "s": 0,
              "t": "나도 커피 한 잔 사서 옆에 앉아도 돼?",
              "r": "nado keopi han jan saseo yeope anjado dwae?",
              "e": "Can I buy a coffee and sit next to you?"
            },
            {
              "s": 1,
              "t": "당연하지. 근데 나 방해하면 안 돼.",
              "r": "dangyeonhaji. geunde na banghaehamyeon an dwae.",
              "e": "Of course. But don't distract me, okay?"
            },
            {
              "s": 0,
              "t": "알았어. 조용히 있을게. 뭐 공부해?",
              "r": "arasseo. joyonghi isseulge. mwo gongbuhae?",
              "e": "Got it. I'll stay quiet. What are you studying?"
            },
            {
              "s": 1,
              "t": "영어. 내일 시험이라 큰일 났어.",
              "r": "yeongeo. naeil siheomira keunil nasseo.",
              "e": "English. The exam's tomorrow, so I'm in big trouble."
            },
            {
              "s": 0,
              "t": "그럼 끝나고 밥이나 먹자. 내가 살게.",
              "r": "geureom kkeunnago babina meokja. naega salge.",
              "e": "Then let's grab food after. My treat."
            },
            {
              "s": 1,
              "t": "콜! 그 말 들으니까 힘난다.",
              "r": "kol! geu mal deureunikka himnanda.",
              "e": "Deal! Hearing that gives me energy."
            }
          ],
          "vocab": [
            {
              "w": "깜짝이야",
              "r": "kkamjjagiya",
              "m": "you scared me!"
            },
            {
              "w": "카공",
              "r": "kagong",
              "m": "studying at a cafe (slang)"
            },
            {
              "w": "방해하다",
              "r": "banghaehada",
              "m": "to disturb/distract"
            },
            {
              "w": "큰일 났다",
              "r": "keunil natda",
              "m": "to be in big trouble"
            },
            {
              "w": "내가 살게",
              "r": "naega salge",
              "m": "my treat / I'll pay"
            },
            {
              "w": "콜",
              "r": "kol",
              "m": "deal! (casual 'I'm in')"
            }
          ]
        },
        {
          "scene": "Whispering in a hallway",
          "title": "Planning a Surprise Party",
          "speakers": [
            {
              "name": "Soyeon",
              "emoji": "🎂"
            },
            {
              "name": "You",
              "emoji": "🤫"
            }
          ],
          "note": "'몰래' (mollae) means 'secretly/behind someone's back' and is the go-to word for surprise plans. A surprise party is literally a '깜짝 파티' (kkamjjak party).",
          "lines": [
            {
              "s": 0,
              "t": "야, 잠깐만. 조용히 얘기하자.",
              "r": "ya, jamkkanman. joyonghi yaegihaja.",
              "e": "Hey, hold on. Let's talk quietly."
            },
            {
              "s": 1,
              "t": "왜? 무슨 일 있어?",
              "r": "wae? museun il isseo?",
              "e": "Why? Is something going on?"
            },
            {
              "s": 0,
              "t": "다음 주가 민수 생일이잖아. 깜짝 파티 하자.",
              "r": "daeum juga minsu saengirijana. kkamjjak pati haja.",
              "e": "Next week is Minsu's birthday, right? Let's throw a surprise party."
            },
            {
              "s": 1,
              "t": "오, 좋다! 민수 모르게 준비해야겠네.",
              "r": "o, jota! minsu moreuge junbihaeyagenne.",
              "e": "Oh, nice! We have to prepare without Minsu knowing."
            },
            {
              "s": 0,
              "t": "응, 절대 비밀이야. 케이크는 내가 살게.",
              "r": "eung, jeoldae bimiriya. keikeuneun naega salge.",
              "e": "Yeah, total secret. I'll buy the cake."
            },
            {
              "s": 1,
              "t": "그럼 나는 친구들한테 연락할게.",
              "r": "geureom naneun chingudeulhante yeollakhalge.",
              "e": "Then I'll reach out to the friends."
            },
            {
              "s": 0,
              "t": "장소는 어디가 좋을까?",
              "r": "jangsoneun eodiga joeulkka?",
              "e": "Where would be a good place?"
            },
            {
              "s": 1,
              "t": "우리 집 어때? 넓어서 괜찮아.",
              "r": "uri jip eottae? neolbeoseo gwaenchana.",
              "e": "How about my place? It's spacious, so it works."
            },
            {
              "s": 0,
              "t": "완벽해. 민수한테는 절대 말하지 마!",
              "r": "wanbyeokhae. minsuhanteneun jeoldae malhaji ma!",
              "e": "Perfect. Don't say a word to Minsu!"
            },
            {
              "s": 1,
              "t": "걱정 마. 입 꾹 다물게.",
              "r": "geokjeong ma. ip kkuk damulge.",
              "e": "Don't worry. My lips are sealed."
            }
          ],
          "vocab": [
            {
              "w": "깜짝 파티",
              "r": "kkamjjak pati",
              "m": "surprise party"
            },
            {
              "w": "몰래",
              "r": "mollae",
              "m": "secretly, without someone knowing"
            },
            {
              "w": "비밀",
              "r": "bimil",
              "m": "secret"
            },
            {
              "w": "연락하다",
              "r": "yeollakhada",
              "m": "to contact/reach out"
            },
            {
              "w": "장소",
              "r": "jangso",
              "m": "place, location"
            },
            {
              "w": "입 다물다",
              "r": "ip damulda",
              "m": "to keep one's mouth shut"
            }
          ]
        },
        {
          "scene": "At a clothing store",
          "title": "Exchanging a Purchase",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛍️"
            },
            {
              "name": "You",
              "emoji": "🧾"
            }
          ],
          "note": "'교환' (gyohwan) is exchange and '환불' (hwanbul) is refund — keep them straight. Stores almost always ask for the '영수증' (receipt), so mentioning it first speeds things up.",
          "lines": [
            {
              "s": 0,
              "t": "어서 오세요. 무엇을 도와드릴까요?",
              "r": "eoseo oseyo. mueoseul dowadeurilkkayo?",
              "e": "Welcome. How can I help you?"
            },
            {
              "s": 1,
              "t": "이거 어제 샀는데 교환하고 싶어요.",
              "r": "igeo eoje sanneunde gyohwanhago sipeoyo.",
              "e": "I bought this yesterday and I'd like to exchange it."
            },
            {
              "s": 0,
              "t": "네, 혹시 무슨 문제가 있으세요?",
              "r": "ne, hoksi museun munjega isseuseyo?",
              "e": "Sure, is there some kind of problem?"
            },
            {
              "s": 1,
              "t": "사이즈가 좀 작아서요. 한 치수 큰 거 있어요?",
              "r": "saijeuga jom jagaseoyo. han chisu keun geo isseoyo?",
              "e": "It's a bit small. Do you have one size up?"
            },
            {
              "s": 0,
              "t": "확인해 볼게요. 영수증 가지고 오셨어요?",
              "r": "hwaginhae bolgeyo. yeongsujeung gajigo osyeosseoyo?",
              "e": "Let me check. Did you bring the receipt?"
            },
            {
              "s": 1,
              "t": "네, 여기 있어요. 카드로 결제했어요.",
              "r": "ne, yeogi isseoyo. kadeuro gyeoljehaesseoyo.",
              "e": "Yes, here it is. I paid by card."
            },
            {
              "s": 0,
              "t": "마침 큰 사이즈 재고가 있네요. 잠시만요.",
              "r": "machim keun saijeu jaegoga inneyo. jamsimanyo.",
              "e": "We happen to have the larger size in stock. One moment."
            },
            {
              "s": 1,
              "t": "다행이다. 환불은 안 해도 돼요.",
              "r": "dahaengida. hwanbureun an haedo dwaeyo.",
              "e": "What a relief. I don't need a refund then."
            },
            {
              "s": 0,
              "t": "여기 새 제품이요. 한번 입어 보세요.",
              "r": "yeogi sae jepumiyo. hanbeon ibeo boseyo.",
              "e": "Here's the new item. Try it on."
            },
            {
              "s": 1,
              "t": "딱 맞아요. 감사합니다!",
              "r": "ttak majayo. gamsahamnida!",
              "e": "It fits perfectly. Thank you!"
            }
          ],
          "vocab": [
            {
              "w": "교환하다",
              "r": "gyohwanhada",
              "m": "to exchange"
            },
            {
              "w": "환불",
              "r": "hwanbul",
              "m": "refund"
            },
            {
              "w": "영수증",
              "r": "yeongsujeung",
              "m": "receipt"
            },
            {
              "w": "사이즈",
              "r": "saijeu",
              "m": "size"
            },
            {
              "w": "재고",
              "r": "jaego",
              "m": "stock, inventory"
            },
            {
              "w": "딱 맞다",
              "r": "ttak matda",
              "m": "to fit perfectly"
            }
          ]
        },
        {
          "scene": "At the dinner table",
          "title": "Talking About Favorite Foods",
          "speakers": [
            {
              "name": "Yuna",
              "emoji": "🍲"
            },
            {
              "name": "You",
              "emoji": "🍚"
            }
          ],
          "note": "'집밥' (jipbap) literally 'home rice' means home-cooked food, and Koreans get emotional about missing it. Saying food is '손맛' (sonmat, 'hand taste') is the ultimate compliment for someone's cooking.",
          "lines": [
            {
              "s": 0,
              "t": "제일 좋아하는 음식이 뭐예요?",
              "r": "jeil joahaneun eumsigi mwoyeyo?",
              "e": "What's your favorite food?"
            },
            {
              "s": 1,
              "t": "저는 김치찌개를 제일 좋아해요.",
              "r": "jeoneun gimchijjigaereul jeil joahaeyo.",
              "e": "I like kimchi stew the most."
            },
            {
              "s": 0,
              "t": "오, 저도요! 집에서 자주 해 먹어요?",
              "r": "o, jeodoyo! jibeseo jaju hae meogeoyo?",
              "e": "Oh, me too! Do you make it at home often?"
            },
            {
              "s": 1,
              "t": "가끔요. 근데 엄마 손맛은 못 따라가요.",
              "r": "gakkeumyo. geunde eomma sonmaseun mot ttaragayo.",
              "e": "Sometimes. But I can't match my mom's cooking."
            },
            {
              "s": 0,
              "t": "맞아요. 집밥이 제일 맛있죠.",
              "r": "majayo. jipbabi jeil masitjyo.",
              "e": "True. Home cooking is the most delicious."
            },
            {
              "s": 1,
              "t": "유나 씨는 요리 잘해요?",
              "r": "yuna ssineun yori jalhaeyo?",
              "e": "Yuna, are you good at cooking?"
            },
            {
              "s": 0,
              "t": "계란찜 정도는 할 수 있어요. 간단하거든요.",
              "r": "gyeranjjim jeongdoneun hal su isseoyo. gandanhageodeunyo.",
              "e": "I can manage steamed egg. It's simple."
            },
            {
              "s": 1,
              "t": "그거 진짜 맛있는데! 다음에 해 주세요.",
              "r": "geugeo jinjja masinneunde! daeume hae juseyo.",
              "e": "That's really tasty! Make it for me sometime."
            },
            {
              "s": 0,
              "t": "좋아요. 대신 김치찌개는 그쪽이 끓여요.",
              "r": "joayo. daesin gimchijjigaeneun geujjogi kkeuryeoyo.",
              "e": "Okay. In exchange, you cook the kimchi stew."
            },
            {
              "s": 1,
              "t": "콜! 다음 주에 같이 해 먹어요.",
              "r": "kol! daeum jue gachi hae meogeoyo.",
              "e": "Deal! Let's cook together next week."
            }
          ],
          "vocab": [
            {
              "w": "김치찌개",
              "r": "gimchijjigae",
              "m": "kimchi stew"
            },
            {
              "w": "집밥",
              "r": "jipbap",
              "m": "home-cooked meal"
            },
            {
              "w": "손맛",
              "r": "sonmat",
              "m": "a cook's special touch ('hand taste')"
            },
            {
              "w": "요리",
              "r": "yori",
              "m": "cooking, dish"
            },
            {
              "w": "계란찜",
              "r": "gyeranjjim",
              "m": "steamed egg"
            },
            {
              "w": "끓이다",
              "r": "kkeurida",
              "m": "to boil/cook (soup, stew)"
            }
          ]
        },
        {
          "scene": "At a gathering",
          "title": "Meeting a Friend's Friend",
          "speakers": [
            {
              "name": "Junho",
              "emoji": "🤝"
            },
            {
              "name": "You",
              "emoji": "😊"
            }
          ],
          "note": "On a first meeting Koreans say '처음 뵙겠습니다' (literally 'I'm meeting you for the first time'). Asking someone's age early is normal here — it decides the speech level and what you call each other.",
          "lines": [
            {
              "s": 0,
              "t": "안녕하세요. 처음 뵙겠습니다.",
              "r": "annyeonghaseyo. cheoeum boepgetseumnida.",
              "e": "Hello. Nice to meet you for the first time."
            },
            {
              "s": 1,
              "t": "안녕하세요. 지민이 친구분이시죠?",
              "r": "annyeonghaseyo. jimini chingubunisijyo?",
              "e": "Hello. You're Jimin's friend, right?"
            },
            {
              "s": 0,
              "t": "네, 맞아요. 저는 준호라고 해요.",
              "r": "ne, majayo. jeoneun junhorago haeyo.",
              "e": "Yes, that's right. I'm Junho."
            },
            {
              "s": 1,
              "t": "반가워요. 말씀 많이 들었어요.",
              "r": "bangawoyo. malsseum mani deureosseoyo.",
              "e": "Nice to meet you. I've heard a lot about you."
            },
            {
              "s": 0,
              "t": "좋은 얘기였으면 좋겠네요. 실례지만 나이가 어떻게 되세요?",
              "r": "joeun yaegiyeosseumyeon jokenneyo. sillyejiman naiga eotteoke doeseyo?",
              "e": "I hope it was good things. Excuse me, but how old are you?"
            },
            {
              "s": 1,
              "t": "저는 스물여섯이에요. 준호 씨는요?",
              "r": "jeoneun seumullyeoseosieyo. junho ssineunyo?",
              "e": "I'm twenty-six. How about you, Junho?"
            },
            {
              "s": 0,
              "t": "어, 저랑 동갑이네요! 편하게 말해요.",
              "r": "eo, jeorang donggabineyo! pyeonhage malhaeyo.",
              "e": "Oh, we're the same age! Let's speak comfortably."
            },
            {
              "s": 1,
              "t": "그럴까요? 그럼 우리 친구 하자!",
              "r": "geureolkkayo? geureom uri chingu haja!",
              "e": "Shall we? Then let's be friends!"
            },
            {
              "s": 0,
              "t": "좋아. 앞으로 자주 보자.",
              "r": "joa. apeuro jaju boja.",
              "e": "Great. Let's hang out often from now on."
            },
            {
              "s": 1,
              "t": "그래! 오늘 만나서 진짜 반가워.",
              "r": "geurae! oneul mannaseo jinjja bangawo.",
              "e": "Yeah! Really glad we met today."
            }
          ],
          "vocab": [
            {
              "w": "처음 뵙겠습니다",
              "r": "cheoeum boepgetseumnida",
              "m": "nice to meet you (first time, formal)"
            },
            {
              "w": "반갑다",
              "r": "bangapda",
              "m": "to be glad to meet"
            },
            {
              "w": "말씀 많이 들었어요",
              "r": "malsseum mani deureosseoyo",
              "m": "I've heard a lot about you"
            },
            {
              "w": "나이",
              "r": "nai",
              "m": "age"
            },
            {
              "w": "동갑",
              "r": "donggap",
              "m": "same age"
            },
            {
              "w": "편하게 말하다",
              "r": "pyeonhage malhada",
              "m": "to speak casually/comfortably"
            }
          ]
        },
        {
          "scene": "At a house party",
          "title": "Small Talk at a Party",
          "speakers": [
            {
              "name": "Jiho",
              "emoji": "🧑"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "When you meet someone at a casual gathering, '처음 뵙겠습니다' (cheoeum boepgesseumnida) sounds quite formal. Among younger people at a party, a lighter '안녕하세요, 반가워요' feels warmer and less stiff. Also, asking '여기 어떻게 오셨어요?' literally means 'how did you come here?' but really means 'how do you know the host / why are you here?'",
          "lines": [
            {
              "s": 0,
              "t": "안녕하세요! 저는 지호예요.",
              "r": "annyeonghaseyo! jeoneun jihoyeyo.",
              "e": "Hi! I'm Jiho."
            },
            {
              "s": 1,
              "t": "안녕하세요, 반가워요. 저는 민수예요.",
              "r": "annyeonghaseyo, bangawoyo. jeoneun minsuyeyo.",
              "e": "Hi, nice to meet you. I'm Minsu."
            },
            {
              "s": 0,
              "t": "여기 어떻게 오셨어요?",
              "r": "yeogi eotteoke osyeosseoyo?",
              "e": "So how do you know everyone here?"
            },
            {
              "s": 1,
              "t": "수진 씨 친구예요. 지호 씨는요?",
              "r": "sujin ssi chinguyeyo. jiho ssineunyo?",
              "e": "I'm Sujin's friend. How about you, Jiho?"
            },
            {
              "s": 0,
              "t": "아, 저도 수진 씨 친구예요! 신기하네요.",
              "r": "a, jeodo sujin ssi chinguyeyo! singihaneyo.",
              "e": "Oh, I'm Sujin's friend too! What a coincidence."
            },
            {
              "s": 1,
              "t": "진짜요? 세상 좁네요.",
              "r": "jinjjayo? sesang jomneyo.",
              "e": "Really? It's a small world."
            },
            {
              "s": 0,
              "t": "맞아요. 음료수 좀 드릴까요?",
              "r": "majayo. eumnyosu jom deurilkkayo?",
              "e": "It really is. Can I get you something to drink?"
            },
            {
              "s": 1,
              "t": "네, 감사해요. 콜라 주세요.",
              "r": "ne, gamsahaeyo. kolla juseyo.",
              "e": "Yes, thanks. A cola, please."
            },
            {
              "s": 0,
              "t": "알겠어요. 잠깐만요!",
              "r": "algesseoyo. jamkkanmanyo!",
              "e": "Got it. One sec!"
            }
          ],
          "vocab": [
            {
              "w": "반가워요",
              "r": "bangawoyo",
              "m": "nice to meet you"
            },
            {
              "w": "신기하네요",
              "r": "singihaneyo",
              "m": "how interesting / what a coincidence"
            },
            {
              "w": "세상 좁네요",
              "r": "sesang jomneyo",
              "m": "it's a small world"
            },
            {
              "w": "음료수",
              "r": "eumnyosu",
              "m": "a drink / beverage"
            },
            {
              "w": "잠깐만요",
              "r": "jamkkanmanyo",
              "m": "hold on a second"
            }
          ]
        },
        {
          "scene": "At the office",
          "title": "Help Before the Deadline",
          "speakers": [
            {
              "name": "Eunji",
              "emoji": "👩‍💼"
            },
            {
              "name": "You",
              "emoji": "🧑‍💻"
            }
          ],
          "note": "At work, 'A 씨' (using the person's name + 씨) is the normal, polite way to address a coworker. To soften a request, Koreans often add '혹시' (hoksi, 'by any chance') and '-아/어 주실 수 있어요?' rather than a direct command. It makes the ask feel less pushy.",
          "lines": [
            {
              "s": 1,
              "t": "은지 씨, 혹시 지금 바빠요?",
              "r": "eunji ssi, hoksi jigeum bappayo?",
              "e": "Eunji, are you busy right now by any chance?"
            },
            {
              "s": 0,
              "t": "조금요. 왜요? 무슨 일 있어요?",
              "r": "jogeumyo. waeyo? museun il isseoyo?",
              "e": "A little. Why? Is something up?"
            },
            {
              "s": 1,
              "t": "이 보고서를 오늘까지 끝내야 해요. 좀 도와줄 수 있어요?",
              "r": "i bogoseoreul oneulkkaji kkeunnaeya haeyo. jom dowajul su isseoyo?",
              "e": "I have to finish this report by today. Could you help me a bit?"
            },
            {
              "s": 0,
              "t": "마감이 언제예요?",
              "r": "magami eonjeyeyo?",
              "e": "When's the deadline?"
            },
            {
              "s": 1,
              "t": "오후 다섯 시까지요. 시간이 부족해요.",
              "r": "ohu daseot sikkajiyo. sigani bujokaeyo.",
              "e": "By five p.m. I'm running out of time."
            },
            {
              "s": 0,
              "t": "알겠어요. 제가 표 부분을 할게요.",
              "r": "algesseoyo. jega pyo bubuneul halgeyo.",
              "e": "Okay. I'll take the chart section."
            },
            {
              "s": 1,
              "t": "정말요? 진짜 감사해요!",
              "r": "jeongmaryo? jinjja gamsahaeyo!",
              "e": "Really? Thank you so much!"
            },
            {
              "s": 0,
              "t": "괜찮아요. 같이 하면 금방 끝나요.",
              "r": "gwaenchanayo. gachi hamyeon geumbang kkeunnayo.",
              "e": "No problem. If we do it together it'll be done quickly."
            },
            {
              "s": 1,
              "t": "네, 끝나고 제가 커피 살게요!",
              "r": "ne, kkeunnago jega keopi salgeyo!",
              "e": "Yeah, I'll buy you coffee when we're done!"
            }
          ],
          "vocab": [
            {
              "w": "혹시",
              "r": "hoksi",
              "m": "by any chance"
            },
            {
              "w": "보고서",
              "r": "bogoseo",
              "m": "report"
            },
            {
              "w": "마감",
              "r": "magam",
              "m": "deadline"
            },
            {
              "w": "도와줄 수 있어요?",
              "r": "dowajul su isseoyo?",
              "m": "can you help me?"
            },
            {
              "w": "금방",
              "r": "geumbang",
              "m": "soon / quickly"
            },
            {
              "w": "부족해요",
              "r": "bujokaeyo",
              "m": "it's not enough / lacking"
            }
          ]
        },
        {
          "scene": "Catching up with a friend",
          "title": "How Was Your Weekend",
          "speakers": [
            {
              "name": "Yuna",
              "emoji": "👧"
            },
            {
              "name": "You",
              "emoji": "😄"
            }
          ],
          "note": "'대박' (daebak) is everyday slang meaning 'wow / awesome / no way' — used for anything impressive or surprising, good or bad. It's super common in casual speech. Even at the polite level, friends sprinkle it in as a reaction, like '대박이에요!'",
          "lines": [
            {
              "s": 0,
              "t": "주말 잘 보냈어요?",
              "r": "jumal jal bonaesseoyo?",
              "e": "Did you have a good weekend?"
            },
            {
              "s": 1,
              "t": "네! 진짜 재밌었어요. 바다에 갔어요.",
              "r": "ne! jinjja jaemisseosseoyo. badae gasseoyo.",
              "e": "Yeah! It was really fun. I went to the beach."
            },
            {
              "s": 0,
              "t": "오, 어디 바다요?",
              "r": "o, eodi badayo?",
              "e": "Oh, which beach?"
            },
            {
              "s": 1,
              "t": "부산이요. 회도 먹고 사진도 많이 찍었어요.",
              "r": "busaniyo. hoedo meokgo sajindo mani jjigeosseoyo.",
              "e": "Busan. I ate raw fish and took lots of photos."
            },
            {
              "s": 0,
              "t": "대박! 날씨는 좋았어요?",
              "r": "daebak! nalssineun joasseoyo?",
              "e": "Awesome! Was the weather nice?"
            },
            {
              "s": 1,
              "t": "엄청 좋았어요. 근데 좀 더웠어요.",
              "r": "eomcheong joasseoyo. geunde jom deowosseoyo.",
              "e": "Super nice. But it was a bit hot."
            },
            {
              "s": 0,
              "t": "그래도 부럽네요. 저는 집에만 있었어요.",
              "r": "geuraedo bureomneyo. jeoneun jibeman isseosseoyo.",
              "e": "Still, I'm jealous. I just stayed home."
            },
            {
              "s": 1,
              "t": "다음에 같이 가요! 진짜 좋아요.",
              "r": "daeume gachi gayo! jinjja joayo.",
              "e": "Let's go together next time! It's really great."
            },
            {
              "s": 0,
              "t": "좋아요, 꼭이요!",
              "r": "joayo, kkogiyo!",
              "e": "Sounds great, definitely!"
            }
          ],
          "vocab": [
            {
              "w": "주말",
              "r": "jumal",
              "m": "weekend"
            },
            {
              "w": "대박",
              "r": "daebak",
              "m": "wow / awesome (slang)"
            },
            {
              "w": "엄청",
              "r": "eomcheong",
              "m": "extremely / a lot"
            },
            {
              "w": "부럽네요",
              "r": "bureomneyo",
              "m": "I'm jealous"
            },
            {
              "w": "꼭",
              "r": "kkok",
              "m": "for sure / definitely"
            },
            {
              "w": "재밌었어요",
              "r": "jaemisseosseoyo",
              "m": "it was fun"
            }
          ]
        },
        {
          "scene": "At a dog park",
          "title": "Gushing About Pets",
          "speakers": [
            {
              "name": "Owner",
              "emoji": "🧔"
            },
            {
              "name": "You",
              "emoji": "🐶"
            }
          ],
          "note": "Korean pet owners often call themselves '엄마/아빠' (mom/dad) to their pets and refer to the pet's age in '살'. A common gushing word is '귀여워요' (gwiyeowoyo, 'cute'), and '댕댕이' is internet-slang for a dog (a playful misspelling of 멍멍이). At the polite level, 'cute!' as a reaction is just '귀엽다!' or '너무 귀여워요!'",
          "lines": [
            {
              "s": 0,
              "t": "강아지가 너무 귀여워요! 몇 살이에요?",
              "r": "gangajiga neomu gwiyeowoyo! myeot sarieyo?",
              "e": "Your dog is so cute! How old is he?"
            },
            {
              "s": 1,
              "t": "감사해요! 이제 세 살이에요.",
              "r": "gamsahaeyo! ije se sarieyo.",
              "e": "Thank you! He's three now."
            },
            {
              "s": 0,
              "t": "이름이 뭐예요?",
              "r": "ireumi mwoyeyo?",
              "e": "What's his name?"
            },
            {
              "s": 1,
              "t": "콩이에요. 저쪽이 사장님 강아지예요?",
              "r": "kongieyo. jeojjogi sajangnim gangajiyeyo?",
              "e": "It's Kongi. Is that one over there yours?"
            },
            {
              "s": 0,
              "t": "네, 우리 보리예요. 둘이 친구 됐네요!",
              "r": "ne, uri boriyeyo. duri chingu dwaenneyo!",
              "e": "Yes, that's our Bori. Looks like they've become friends!"
            },
            {
              "s": 1,
              "t": "그러게요. 보리도 진짜 순하네요.",
              "r": "geureogeyo. borido jinjja sunhaneyo.",
              "e": "Right? Bori is so gentle too."
            },
            {
              "s": 0,
              "t": "콩이는 산책 좋아해요?",
              "r": "kongineun sanchaek joahaeyo?",
              "e": "Does Kongi like walks?"
            },
            {
              "s": 1,
              "t": "완전 좋아해요. 매일 산책 가요.",
              "r": "wanjeon joahaeyo. maeil sanchaek gayo.",
              "e": "Loves it. We go for a walk every day."
            },
            {
              "s": 0,
              "t": "다음에 또 만나요, 콩아!",
              "r": "daeume tto mannayo, konga!",
              "e": "See you again next time, Kongi!"
            }
          ],
          "vocab": [
            {
              "w": "강아지",
              "r": "gangaji",
              "m": "puppy / dog"
            },
            {
              "w": "귀여워요",
              "r": "gwiyeowoyo",
              "m": "it's cute"
            },
            {
              "w": "산책",
              "r": "sanchaek",
              "m": "a walk"
            },
            {
              "w": "순하네요",
              "r": "sunhaneyo",
              "m": "(it's) gentle / docile"
            },
            {
              "w": "완전",
              "r": "wanjeon",
              "m": "totally / really"
            },
            {
              "w": "몇 살이에요?",
              "r": "myeot sarieyo?",
              "m": "how old is it?"
            }
          ]
        },
        {
          "scene": "Planning a concert outing",
          "title": "Getting Concert Tickets",
          "speakers": [
            {
              "name": "Sumin",
              "emoji": "🎤"
            },
            {
              "name": "You",
              "emoji": "🎟️"
            }
          ],
          "note": "Concert and movie tickets are usually booked online in Korea, so '예매' (yemae, advance booking) is the key word — different from '예약' (reservation) for restaurants. '매진' (maejin) means 'sold out', a word you'll see a lot when popular tickets go fast.",
          "lines": [
            {
              "s": 0,
              "t": "이번 주말에 콘서트 같이 갈래요?",
              "r": "ibeon jumare konseoteu gachi gallaeyo?",
              "e": "Want to go to a concert together this weekend?"
            },
            {
              "s": 1,
              "t": "좋아요! 표 있어요?",
              "r": "joayo! pyo isseoyo?",
              "e": "Sure! Do you have tickets?"
            },
            {
              "s": 0,
              "t": "아직요. 지금 같이 예매할까요?",
              "r": "ajigyo. jigeum gachi yemaehalkkayo?",
              "e": "Not yet. Shall we book them together now?"
            },
            {
              "s": 1,
              "t": "네. 자리는 어디가 좋아요?",
              "r": "ne. jarineun eodiga joayo?",
              "e": "Yeah. Which seats are good?"
            },
            {
              "s": 0,
              "t": "앞자리는 벌써 매진이에요. 뒤쪽 어때요?",
              "r": "apjarineun beolsseo maejinieyo. dwijjok eottaeyo?",
              "e": "The front is already sold out. How about the back?"
            },
            {
              "s": 1,
              "t": "괜찮아요. 가격은 얼마예요?",
              "r": "gwaenchanayo. gageogeun eolmayeyo?",
              "e": "That's fine. How much is it?"
            },
            {
              "s": 0,
              "t": "한 장에 칠만 원이에요.",
              "r": "han jange chilman wonieyo.",
              "e": "It's seventy thousand won per ticket."
            },
            {
              "s": 1,
              "t": "오케이. 제 표값은 제가 보낼게요.",
              "r": "okei. je pyogapseun jega bonaelgeyo.",
              "e": "Okay. I'll send you the money for my ticket."
            },
            {
              "s": 0,
              "t": "고마워요! 그럼 주말에 봐요!",
              "r": "gomawoyo! geureom jumare bwayo!",
              "e": "Thanks! See you on the weekend then!"
            }
          ],
          "vocab": [
            {
              "w": "콘서트",
              "r": "konseoteu",
              "m": "concert"
            },
            {
              "w": "예매",
              "r": "yemae",
              "m": "advance booking (tickets)"
            },
            {
              "w": "매진",
              "r": "maejin",
              "m": "sold out"
            },
            {
              "w": "자리",
              "r": "jari",
              "m": "seat"
            },
            {
              "w": "가격",
              "r": "gageok",
              "m": "price"
            },
            {
              "w": "한 장",
              "r": "han jang",
              "m": "one ticket / sheet"
            }
          ]
        },
        {
          "scene": "Saying goodbye after hanging out",
          "title": "See You Soon",
          "speakers": [
            {
              "name": "Hara",
              "emoji": "👋"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "'들어가세요' (deureogaseyo, literally 'go inside') is the warm, standard way to say bye when parting — it means 'get home safe'. Also '조심히 가세요' (be careful going). Saying just '안녕히 가세요' can feel a touch formal between friends; '들어가요' or '잘 가요' is friendlier.",
          "lines": [
            {
              "s": 0,
              "t": "아, 벌써 시간이 이렇게 됐네요.",
              "r": "a, beolsseo sigani ireoke dwaenneyo.",
              "e": "Oh, it's gotten this late already."
            },
            {
              "s": 1,
              "t": "그러게요. 오늘 진짜 재밌었어요.",
              "r": "geureogeyo. oneul jinjja jaemisseosseoyo.",
              "e": "I know. Today was really fun."
            },
            {
              "s": 0,
              "t": "저도요. 다음에 또 봐요!",
              "r": "jeodoyo. daeume tto bwayo!",
              "e": "Me too. Let's meet again next time!"
            },
            {
              "s": 1,
              "t": "네! 다음 주에 시간 어때요?",
              "r": "ne! daeum jue sigan eottaeyo?",
              "e": "Yeah! How's your time next week?"
            },
            {
              "s": 0,
              "t": "좋아요. 제가 연락할게요.",
              "r": "joayo. jega yeollakalgeyo.",
              "e": "Good. I'll get in touch."
            },
            {
              "s": 1,
              "t": "네, 꼭이요! 조심히 들어가세요.",
              "r": "ne, kkogiyo! josimhi deureogaseyo.",
              "e": "Okay, for sure! Get home safe."
            },
            {
              "s": 0,
              "t": "고마워요. 집에 도착하면 연락해요.",
              "r": "gomawoyo. jibe dochakamyeon yeollakaeyo.",
              "e": "Thanks. Text me when you get home."
            },
            {
              "s": 1,
              "t": "그럴게요. 잘 가요!",
              "r": "geureolgeyo. jal gayo!",
              "e": "I will. Bye now!"
            },
            {
              "s": 0,
              "t": "잘 가요! 다음에 봐요!",
              "r": "jal gayo! daeume bwayo!",
              "e": "Bye! See you next time!"
            }
          ],
          "vocab": [
            {
              "w": "벌써",
              "r": "beolsseo",
              "m": "already"
            },
            {
              "w": "다음에 또 봐요",
              "r": "daeume tto bwayo",
              "m": "see you again next time"
            },
            {
              "w": "연락할게요",
              "r": "yeollakalgeyo",
              "m": "I'll contact you"
            },
            {
              "w": "조심히",
              "r": "josimhi",
              "m": "carefully / safely"
            },
            {
              "w": "들어가세요",
              "r": "deureogaseyo",
              "m": "get home safe (parting)"
            },
            {
              "w": "잘 가요",
              "r": "jal gayo",
              "m": "bye / take care"
            }
          ]
        }
      ],
      "intermediate": [
        {
          "scene": "At a cafe counter",
          "title": "Ordering Coffee to Go",
          "speakers": [
            {
              "name": "Barista",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "When you want a drink to take out, just say '테이크아웃이요' or '가져갈게요.' Staff often ask '드시고 가세요?' (eating/drinking here?) — answer '아니요, 가지고 갈게요' for to-go. '얼죽아' is trendy slang for 'iced coffee even if I freeze to death.'",
          "lines": [
            {
              "s": 0,
              "t": "어서 오세요, 주문 도와드릴까요?",
              "r": "eoseo oseyo, jumun dowadeurilkkayo?",
              "e": "Welcome, can I help you order?"
            },
            {
              "s": 1,
              "t": "네, 아이스 아메리카노 하나 주세요.",
              "r": "ne, aiseu amerikano hana juseyo.",
              "e": "Yeah, one iced americano, please."
            },
            {
              "s": 0,
              "t": "드시고 가세요, 아니면 테이크아웃이세요?",
              "r": "deusigo gaseyo, animyeon teikeuausiseyo?",
              "e": "For here, or to go?"
            },
            {
              "s": 1,
              "t": "가지고 갈게요. 사이즈는 큰 걸로요.",
              "r": "gajigo galgeyo. saijeuneun keun geolloyo.",
              "e": "To go. And make it a large."
            },
            {
              "s": 0,
              "t": "시럽이나 샷 추가 필요하세요?",
              "r": "sireobina syat chuga piryohaseyo?",
              "e": "Do you need any syrup or an extra shot?"
            },
            {
              "s": 1,
              "t": "아, 샷 하나만 추가해 주세요.",
              "r": "a, syat hanaman chugahae juseyo.",
              "e": "Oh, just add one extra shot, please."
            },
            {
              "s": 0,
              "t": "네, 다 해서 사천오백 원이에요.",
              "r": "ne, da haeseo sacheonobaek wonieyo.",
              "e": "Okay, that's 4,500 won total."
            },
            {
              "s": 1,
              "t": "카드로 할게요. 여기요.",
              "r": "kadeuro halgeyo. yeogiyo.",
              "e": "I'll pay by card. Here you go."
            },
            {
              "s": 0,
              "t": "진동벨 드릴게요. 울리면 와 주세요!",
              "r": "jindongbel deurilgeyo. ullimyeon wa juseyo!",
              "e": "I'll give you a buzzer. Come over when it goes off!"
            },
            {
              "s": 1,
              "t": "네, 감사합니다!",
              "r": "ne, gamsahamnida!",
              "e": "Sure, thank you!"
            }
          ],
          "vocab": [
            {
              "w": "테이크아웃",
              "r": "teikeuaut",
              "m": "takeout / to go"
            },
            {
              "w": "드시고 가세요?",
              "r": "deusigo gaseyo?",
              "m": "for here? (lit. eat/drink and go?)"
            },
            {
              "w": "샷 추가",
              "r": "syat chuga",
              "m": "extra espresso shot"
            },
            {
              "w": "큰 걸로",
              "r": "keun geollo",
              "m": "the large one"
            },
            {
              "w": "진동벨",
              "r": "jindongbel",
              "m": "vibrating pager / buzzer"
            },
            {
              "w": "다 해서",
              "r": "da haeseo",
              "m": "all together / in total"
            }
          ]
        },
        {
          "scene": "On a street, asking a stranger",
          "title": "Finding the Subway Station",
          "speakers": [
            {
              "name": "Passerby",
              "emoji": "🚶"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "'저기요' is the polite, normal way to flag down a stranger — never use someone's name or '야!' Koreans give directions by exits (출구) and landmarks more than street names. '쭉' (jjuk = straight on) is super common in real directions.",
          "lines": [
            {
              "s": 1,
              "t": "저기요, 뭐 좀 여쭤볼게요.",
              "r": "jeogiyo, mwo jom yeojjwobolgeyo.",
              "e": "Excuse me, can I ask you something?"
            },
            {
              "s": 0,
              "t": "네, 말씀하세요.",
              "r": "ne, malsseumhaseyo.",
              "e": "Sure, go ahead."
            },
            {
              "s": 1,
              "t": "여기서 지하철역 가려면 어떻게 가요?",
              "r": "yeogiseo jihacheoryeok garyeomyeon eotteoke gayo?",
              "e": "How do I get to the subway station from here?"
            },
            {
              "s": 0,
              "t": "아, 이 길로 쭉 가시면 돼요.",
              "r": "a, i gillo jjuk gasimyeon dwaeyo.",
              "e": "Ah, just go straight down this road."
            },
            {
              "s": 1,
              "t": "쭉이요? 얼마나 걸려요?",
              "r": "jjugiyo? eolmana geollyeoyo?",
              "e": "Straight on? How long does it take?"
            },
            {
              "s": 0,
              "t": "한 오 분? 편의점 보이면 거기서 왼쪽이요.",
              "r": "han o bun? pyeonuijeom boimyeon geogiseo oenjjogiyo.",
              "e": "About five minutes? When you see the convenience store, turn left there."
            },
            {
              "s": 1,
              "t": "편의점에서 왼쪽. 알겠어요.",
              "r": "pyeonuijeomeseo oenjjok. algesseoyo.",
              "e": "Left at the convenience store. Got it."
            },
            {
              "s": 0,
              "t": "네, 2번 출구 바로 보일 거예요.",
              "r": "ne, ibeon chulgu baro boil geoyeyo.",
              "e": "Yeah, you'll see Exit 2 right away."
            },
            {
              "s": 1,
              "t": "와, 진짜 감사합니다!",
              "r": "wa, jinjja gamsahamnida!",
              "e": "Oh wow, thank you so much!"
            },
            {
              "s": 0,
              "t": "네, 조심히 가세요.",
              "r": "ne, josimhi gaseyo.",
              "e": "Sure, take care."
            }
          ],
          "vocab": [
            {
              "w": "저기요",
              "r": "jeogiyo",
              "m": "excuse me (to get attention)"
            },
            {
              "w": "여쭤보다",
              "r": "yeojjwoboda",
              "m": "to ask (humble/polite)"
            },
            {
              "w": "쭉",
              "r": "jjuk",
              "m": "straight (on) / all the way"
            },
            {
              "w": "한 오 분",
              "r": "han o bun",
              "m": "about five minutes"
            },
            {
              "w": "출구",
              "r": "chulgu",
              "m": "exit"
            },
            {
              "w": "조심히 가세요",
              "r": "josimhi gaseyo",
              "m": "take care / get there safely"
            }
          ]
        },
        {
          "scene": "Monday morning at the office",
          "title": "Monday Small Talk",
          "speakers": [
            {
              "name": "Jiwon",
              "emoji": "💁"
            },
            {
              "name": "You",
              "emoji": "🧑‍💼"
            }
          ],
          "note": "'월요병' (Monday sickness) is the universal Korean office word for Monday blues. Coworkers in their 30s+ often default to casual 요 with each other. '꿀잠' = a 'honey sleep,' i.e. amazing deep sleep — very common slang.",
          "lines": [
            {
              "s": 0,
              "t": "주말 잘 보냈어요? 월요일이라 너무 힘드네요.",
              "r": "jumal jal bonaesseoyo? woryoirira neomu himdeuneyo.",
              "e": "Did you have a good weekend? It's Monday so I'm totally drained."
            },
            {
              "s": 1,
              "t": "그러게요, 완전 월요병이에요.",
              "r": "geureogeyo, wanjeon woryobyeongieyo.",
              "e": "Tell me about it, total Monday blues."
            },
            {
              "s": 0,
              "t": "날씨도 갑자기 추워졌더라고요.",
              "r": "nalssido gapjagi chuwojyeotdeoragoyo.",
              "e": "And the weather suddenly got cold, you know."
            },
            {
              "s": 1,
              "t": "맞아요, 아침에 깜짝 놀랐어요.",
              "r": "majayo, achime kkamjjak nollasseoyo.",
              "e": "Right, it surprised me this morning."
            },
            {
              "s": 0,
              "t": "주말엔 뭐 했어요?",
              "r": "jumaren mwo haesseoyo?",
              "e": "What did you do over the weekend?"
            },
            {
              "s": 1,
              "t": "그냥 집에서 푹 쉬었어요. 꿀잠 잤어요.",
              "r": "geunyang jibeseo puk swieosseoyo. kkuljam jasseoyo.",
              "e": "Just rested up at home. Slept like a baby."
            },
            {
              "s": 0,
              "t": "부럽다, 난 애들이랑 정신없었어요.",
              "r": "bureopda, nan aedeurirang jeongsineopseosseoyo.",
              "e": "Jealous, I was run off my feet with the kids."
            },
            {
              "s": 1,
              "t": "고생했어요. 커피 한잔하면서 시작해요.",
              "r": "gosaenghaesseoyo. keopi hanjanhamyeonseo sijakhaeyo.",
              "e": "That's rough. Let's start the day with a coffee."
            },
            {
              "s": 0,
              "t": "좋아요, 내가 살게요. 가요!",
              "r": "joayo, naega salgeyo. gayo!",
              "e": "Sounds good, I'll buy. Let's go!"
            }
          ],
          "vocab": [
            {
              "w": "월요병",
              "r": "woryobyeong",
              "m": "the Monday blues"
            },
            {
              "w": "그러게요",
              "r": "geureogeyo",
              "m": "I know, right / tell me about it"
            },
            {
              "w": "꿀잠",
              "r": "kkuljam",
              "m": "great deep sleep (slang)"
            },
            {
              "w": "푹 쉬다",
              "r": "puk swida",
              "m": "to rest fully / recharge"
            },
            {
              "w": "정신없다",
              "r": "jeongsineopda",
              "m": "to be hectic / swamped"
            },
            {
              "w": "고생했어요",
              "r": "gosaenghaesseoyo",
              "m": "you worked hard / that was tough"
            }
          ]
        },
        {
          "scene": "Texting/chatting with a friend",
          "title": "New Restaurant Plans",
          "speakers": [
            {
              "name": "Mina",
              "emoji": "👧"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "'맛집' (matjip = 'tasty house') is THE word for a good restaurant Koreans go out of their way for. '핫하다' (hot-hada) means a place is trending. To save trouble, friends say '내가 예약할게' — walk-ins to new hot spots often mean long waits.",
          "lines": [
            {
              "s": 0,
              "t": "야, 우리 동네에 새로운 맛집 생겼대!",
              "r": "ya, uri dongnee saeroun matjip saenggyeotdae!",
              "e": "Hey, I heard a new hot restaurant opened in our neighborhood!"
            },
            {
              "s": 1,
              "t": "오 진짜? 뭐 파는 데야?",
              "r": "o jinjja? mwo paneun deya?",
              "e": "Oh really? What do they serve?"
            },
            {
              "s": 0,
              "t": "파스타집인데 요즘 완전 핫하대.",
              "r": "paseutajibinde yojeum wanjeon hathadae.",
              "e": "It's a pasta place, and apparently it's super trendy right now."
            },
            {
              "s": 1,
              "t": "오 좋다. 이번 주말에 가볼까?",
              "r": "o jota. ibeon jumare gabolkka?",
              "e": "Oh nice. Should we check it out this weekend?"
            },
            {
              "s": 0,
              "t": "콜! 토요일 점심 어때?",
              "r": "kol! toyoil jeomsim eottae?",
              "e": "Deal! How about Saturday lunch?"
            },
            {
              "s": 1,
              "t": "좋아, 근데 웨이팅 길지 않을까?",
              "r": "joa, geunde weiting gilji aneulkka?",
              "e": "Sounds good, but won't the wait be long?"
            },
            {
              "s": 0,
              "t": "그니까. 내가 미리 예약해 놓을게.",
              "r": "geunikka. naega miri yeyakhae noeulge.",
              "e": "Right? I'll go ahead and make a reservation."
            },
            {
              "s": 1,
              "t": "오 역시. 그럼 12시쯤 만나자.",
              "r": "o yeoksi. geureom yeoldusijjeum mannaja.",
              "e": "Oh, you're the best. Let's meet around 12 then."
            },
            {
              "s": 0,
              "t": "ㅇㅋ, 배고프게 와! 많이 먹게.",
              "r": "ok, baegopeuge wa! mani meokge.",
              "e": "Okay, come hungry! So we can eat a lot."
            }
          ],
          "vocab": [
            {
              "w": "맛집",
              "r": "matjip",
              "m": "a great/popular restaurant"
            },
            {
              "w": "핫하다",
              "r": "hathada",
              "m": "to be trendy / hot (slang)"
            },
            {
              "w": "콜!",
              "r": "kol!",
              "m": "deal! / I'm in! (slang)"
            },
            {
              "w": "웨이팅",
              "r": "weiting",
              "m": "the wait / waiting in line"
            },
            {
              "w": "예약하다",
              "r": "yeyakhada",
              "m": "to make a reservation"
            },
            {
              "w": "역시",
              "r": "yeoksi",
              "m": "as expected / you're the best"
            }
          ]
        },
        {
          "scene": "Hanging out, talking about a drama",
          "title": "The Drama Finale",
          "speakers": [
            {
              "name": "Hyun",
              "emoji": "🧑"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "'본방사수' literally means 'defending the live broadcast' — watching an episode in real time instead of streaming later, a fandom badge of honor. '소름' (goosebumps) is the go-to reaction word for a shocking, amazing scene.",
          "lines": [
            {
              "s": 0,
              "t": "어제 그 드라마 마지막 회 봤어?",
              "r": "eoje geu deurama majimak hoe bwasseo?",
              "e": "Did you watch the finale of that drama yesterday?"
            },
            {
              "s": 1,
              "t": "당연하지! 본방사수했잖아.",
              "r": "dangyeonhaji! bonbangsasuhaetjana.",
              "e": "Of course! I watched it live, obviously."
            },
            {
              "s": 0,
              "t": "결말 진짜 미쳤지 않아?",
              "r": "gyeolmal jinjja michyeotji ana?",
              "e": "Wasn't the ending totally insane?"
            },
            {
              "s": 1,
              "t": "헐, 나 마지막 반전에서 소름 돋았어.",
              "r": "heol, na majimak banjeoneseo soreum dodasseo.",
              "e": "OMG, I got goosebumps at that last twist."
            },
            {
              "s": 0,
              "t": "그치? 난 솔직히 울 뻔했어.",
              "r": "geuchi? nan soljikhi ul ppeonhaesseo.",
              "e": "Right? Honestly, I almost cried."
            },
            {
              "s": 1,
              "t": "주인공 둘이 결국 이어져서 다행이야.",
              "r": "juingong duri gyeolguk ieojyeoseo dahaengiya.",
              "e": "I'm just glad the two leads ended up together."
            },
            {
              "s": 0,
              "t": "근데 시즌 2 나올 것 같지 않아?",
              "r": "geunde sijeun i naol geot gatji ana?",
              "e": "But don't you think there'll be a season 2?"
            },
            {
              "s": 1,
              "t": "제발! 떡밥 엄청 뿌렸잖아.",
              "r": "jebal! tteokbap eomcheong ppuryeotjana.",
              "e": "Please! They left so many hints, after all."
            },
            {
              "s": 0,
              "t": "맞아, 나오면 또 정주행할 거야.",
              "r": "maja, naomyeon tto jeongjuhaenghal geoya.",
              "e": "Yeah, if it comes out I'll binge it all over again."
            }
          ],
          "vocab": [
            {
              "w": "마지막 회",
              "r": "majimak hoe",
              "m": "the final episode / finale"
            },
            {
              "w": "본방사수",
              "r": "bonbangsasu",
              "m": "watching the live broadcast on air"
            },
            {
              "w": "소름 돋다",
              "r": "soreum dotda",
              "m": "to get goosebumps"
            },
            {
              "w": "반전",
              "r": "banjeon",
              "m": "plot twist"
            },
            {
              "w": "떡밥",
              "r": "tteokbap",
              "m": "foreshadowing / planted hints (slang)"
            },
            {
              "w": "정주행",
              "r": "jeongjuhaeng",
              "m": "binge-watching from the start"
            }
          ]
        },
        {
          "scene": "Leaving the office after work",
          "title": "After-Work Drinks",
          "speakers": [
            {
              "name": "Seongho",
              "emoji": "🧑‍💼"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "'한잔하다' (have a drink) and '치맥' (chicken + beer) are core after-work culture. '1차/2차' means the first/second venue of the night — moving spots is expected. '딱 한 잔만' ('just one drink') is the classic famous-last-words promise.",
          "lines": [
            {
              "s": 0,
              "t": "오늘 일도 끝났는데 한잔 어때요?",
              "r": "oneul ildo kkeunnanneunde hanjan eottaeyo?",
              "e": "Work's done for the day, how about a drink?"
            },
            {
              "s": 1,
              "t": "오 좋죠, 안 그래도 한잔하고 싶었어요.",
              "r": "o jochyo, an geuraedo hanjanhago sipeosseoyo.",
              "e": "Oh, sounds great, I was actually craving one."
            },
            {
              "s": 0,
              "t": "뭐 먹을까요? 치맥 콜?",
              "r": "mwo meogeulkkayo? chimaek kol?",
              "e": "What should we eat? Chicken and beer, deal?"
            },
            {
              "s": 1,
              "t": "치맥 너무 좋죠. 근처에 괜찮은 데 알아요.",
              "r": "chimaek neomu jochyo. geuncheoe gwaenchaneun de arayo.",
              "e": "Chicken and beer sounds perfect. I know a good spot nearby."
            },
            {
              "s": 0,
              "t": "오, 가요 가요. 오늘 내가 쏠게요.",
              "r": "o, gayo gayo. oneul naega ssolgeyo.",
              "e": "Oh, let's go, let's go. Drinks are on me today."
            },
            {
              "s": 1,
              "t": "진짜요? 그럼 잘 먹겠습니다!",
              "r": "jinjjayo? geureom jal meokgesseumnida!",
              "e": "Really? Then thanks for the treat!"
            },
            {
              "s": 0,
              "t": "대신 딱 한 잔만이에요, 내일 또 출근해야 되니까.",
              "r": "daesin ttak han janmanieyo, naeil tto chulgeunhaeya doenikka.",
              "e": "Just one drink though, since we've got work again tomorrow."
            },
            {
              "s": 1,
              "t": "에이, 그 말 누가 믿어요?",
              "r": "ei, geu mal nuga mideoyo?",
              "e": "Oh come on, who actually believes that?"
            },
            {
              "s": 0,
              "t": "ㅋㅋ 하긴, 2차까지 가는 거죠.",
              "r": "kk hagin, ichakkaji ganeun geojyo.",
              "e": "Haha, true, we'll end up going to round two."
            },
            {
              "s": 1,
              "t": "그럼요, 일단 가요!",
              "r": "geureomyo, ildan gayo!",
              "e": "Exactly, let's just go!"
            }
          ],
          "vocab": [
            {
              "w": "한잔하다",
              "r": "hanjanhada",
              "m": "to have a drink (together)"
            },
            {
              "w": "치맥",
              "r": "chimaek",
              "m": "fried chicken and beer"
            },
            {
              "w": "쏘다",
              "r": "ssoda",
              "m": "to treat / pay (slang)"
            },
            {
              "w": "딱 한 잔만",
              "r": "ttak han janman",
              "m": "just one drink only"
            },
            {
              "w": "출근하다",
              "r": "chulgeunhada",
              "m": "to go to work / commute in"
            },
            {
              "w": "2차",
              "r": "icha",
              "m": "second round / next venue"
            }
          ]
        },
        {
          "scene": "On the street",
          "title": "Running Into an Old Friend",
          "speakers": [
            {
              "name": "Jihun",
              "emoji": "😄"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "오랜만이야 (oraenmaniya) literally means 'it's been a while.' Native speakers often double up the reaction with 헐 (heol) — a surprised 'whoa/no way' filler — before the actual greeting, which makes it sound way more natural than jumping straight to the textbook line.",
          "lines": [
            {
              "s": 0,
              "t": "헐, 너 지훈이 아니야?",
              "r": "heol, neo jihuni aniya?",
              "e": "Whoa, aren't you Jihun?"
            },
            {
              "s": 1,
              "t": "어? 진짜 오랜만이다! 너 하나도 안 변했네.",
              "r": "eo? jinjja oraenmanida! neo hanado an byeonhaenne.",
              "e": "Huh? It's really been ages! You haven't changed a bit."
            },
            {
              "s": 0,
              "t": "야, 이게 얼마 만이야. 한 2년 됐나?",
              "r": "ya, ige eolma maniya. han inyeon dwaenna?",
              "e": "Dude, how long has it been. Like two years?"
            },
            {
              "s": 1,
              "t": "그치, 그쯤 됐지. 너 요즘 뭐 하고 지내?",
              "r": "geuchi, geujjeum dwaetji. neo yojeum mwo hago jinae?",
              "e": "Yeah, about that. What've you been up to these days?"
            },
            {
              "s": 0,
              "t": "나 회사 옮겼어. 지금 강남 쪽에서 일해.",
              "r": "na hoesa omgyeosseo. jigeum gangnam jjogeseo ilhae.",
              "e": "I switched jobs. I work over in Gangnam now."
            },
            {
              "s": 1,
              "t": "오, 잘됐다! 어쩐지 분위기가 좀 달라졌더라.",
              "r": "o, jaldwaetda! eojjeonji bunwigiga jom dallajyeotdeora.",
              "e": "Oh, nice! No wonder you seem a little different."
            },
            {
              "s": 0,
              "t": "너는? 아직 그 동네 살아?",
              "r": "neoneun? ajik geu dongne sara?",
              "e": "What about you? Still living in that neighborhood?"
            },
            {
              "s": 1,
              "t": "응, 아직. 우리 조만간 밥 한번 먹자. 연락할게!",
              "r": "eung, ajik. uri jomangan bap hanbeon meokja. yeollakhalge!",
              "e": "Yeah, still there. Let's grab a meal sometime soon. I'll text you!"
            },
            {
              "s": 0,
              "t": "그래, 꼭이야. 번호 그대로지?",
              "r": "geurae, kkogiya. beonho geudaeroji?",
              "e": "For sure, you better. Same number, right?"
            },
            {
              "s": 1,
              "t": "응 그대로! 조심히 들어가.",
              "r": "eung geudaero! josimhi deureoga.",
              "e": "Yep, same one! Get home safe."
            }
          ],
          "vocab": [
            {
              "w": "오랜만이다",
              "r": "oraenmanida",
              "m": "it's been a long time"
            },
            {
              "w": "변하다",
              "r": "byeonhada",
              "m": "to change"
            },
            {
              "w": "옮기다",
              "r": "omgida",
              "m": "to move/switch (jobs)"
            },
            {
              "w": "어쩐지",
              "r": "eojjeonji",
              "m": "no wonder / somehow"
            },
            {
              "w": "조만간",
              "r": "jomangan",
              "m": "sometime soon"
            },
            {
              "w": "조심히 들어가",
              "r": "josimhi deureoga",
              "m": "get home safe (parting phrase)"
            }
          ]
        },
        {
          "scene": "At a cafe, complaining",
          "title": "The Annoying Coworker",
          "speakers": [
            {
              "name": "Suyeon",
              "emoji": "🙄"
            },
            {
              "name": "You",
              "emoji": "😤"
            }
          ],
          "note": "남 탓 (nam tat) means 'blaming others.' When someone takes credit, Koreans say 숟가락 얹다 (sutgarak eontta) — literally 'to lay a spoon on (the meal someone else cooked),' i.e. swooping in to claim a share of work they didn't do. It's a very common, vivid idiom for credit-stealing.",
          "lines": [
            {
              "s": 0,
              "t": "야, 너 표정이 왜 그래? 무슨 일 있었어?",
              "r": "ya, neo pyojeongi wae geurae? museun il isseosseo?",
              "e": "Hey, what's with that face? Did something happen?"
            },
            {
              "s": 1,
              "t": "말도 마. 나 오늘 진짜 빡쳤어.",
              "r": "maldo ma. na oneul jinjja ppakchyeosseo.",
              "e": "Don't even ask. I was so pissed today."
            },
            {
              "s": 0,
              "t": "왜? 또 그 박 대리야?",
              "r": "wae? tto geu bak daeriya?",
              "e": "Why? That Mr. Park again?"
            },
            {
              "s": 1,
              "t": "어. 내가 다 한 프로젝트인데 자기가 했다고 숟가락 얹더라.",
              "r": "eo. naega da han peurojekteuinde jagiga haetdago sutgarak eonteora.",
              "e": "Yeah. It was my whole project and he swooped in claiming he did it."
            },
            {
              "s": 0,
              "t": "헐, 진짜? 어이없다.",
              "r": "heol, jinjja? eoieopda.",
              "e": "What, seriously? That's ridiculous."
            },
            {
              "s": 1,
              "t": "그러니까. 게다가 일 잘못되니까 나한테 다 떠넘기는 거 있지.",
              "r": "geureonikka. gedaga il jalmotdoenikka nahante da tteoneomgineun geo itji.",
              "e": "Right? And when it went wrong, he dumped all the blame on me, can you believe it."
            },
            {
              "s": 0,
              "t": "와, 그건 좀 너무했다. 팀장님은 뭐래?",
              "r": "wa, geugeon jom neomuhaetda. timjangnimeun mworae?",
              "e": "Wow, that's going too far. What did the team lead say?"
            },
            {
              "s": 1,
              "t": "몰라, 그냥 넘어갔어. 그게 더 답답해.",
              "r": "molla, geunyang neomeogasseo. geuge deo dapdaphae.",
              "e": "Dunno, just let it slide. That's what's even more frustrating."
            },
            {
              "s": 0,
              "t": "그런 사람은 진짜 답 없어. 술이나 한잔하자.",
              "r": "geureon sarameun jinjja dap eopseo. surina hanjanhaja.",
              "e": "There's just no fixing people like that. Let's go grab a drink."
            },
            {
              "s": 1,
              "t": "콜. 오늘은 네가 사라.",
              "r": "kol. oneureun nega sara.",
              "e": "Deal. You're buying today."
            }
          ],
          "vocab": [
            {
              "w": "빡치다",
              "r": "ppakchida",
              "m": "to be furious (slang)"
            },
            {
              "w": "숟가락 얹다",
              "r": "sutgarak eontta",
              "m": "to take undeserved credit"
            },
            {
              "w": "어이없다",
              "r": "eoieopda",
              "m": "to be absurd/dumbfounding"
            },
            {
              "w": "떠넘기다",
              "r": "tteoneomgida",
              "m": "to pass the blame/work onto"
            },
            {
              "w": "답답하다",
              "r": "dapdaphada",
              "m": "to be frustrating/stifling"
            },
            {
              "w": "답 없다",
              "r": "dap eopda",
              "m": "hopeless / no fixing it (slang)"
            }
          ]
        },
        {
          "scene": "Looking at apartments",
          "title": "Which Apartment to Rent",
          "speakers": [
            {
              "name": "Minji",
              "emoji": "🤔"
            },
            {
              "name": "You",
              "emoji": "🏠"
            }
          ],
          "note": "역세권 (yeoksegwon) literally means 'station influence zone' — a place close enough to a subway station to count as prime real estate. It's a huge selling point in Korean listings, and people throw it around casually as a positive even for cafes/restaurants near stations.",
          "lines": [
            {
              "s": 0,
              "t": "그래서 둘 중에 어디로 할지 정했어?",
              "r": "geuraeseo dul junge eodiro halji jeonghaesseo?",
              "e": "So did you decide which of the two you're going with?"
            },
            {
              "s": 1,
              "t": "아직 고민 중이야. 역 근처 집은 진짜 가까운데 좁아.",
              "r": "ajik gomin jungiya. yeok geuncheo jibeun jinjja gakkaunde joba.",
              "e": "Still thinking. The one by the station is super close but cramped."
            },
            {
              "s": 0,
              "t": "역세권이면 좋지. 출퇴근 편하잖아.",
              "r": "yeoksegwonimyeon jochi. chultoegeun pyeonhajana.",
              "e": "Being near the station is great though. Commute's easy, right?"
            },
            {
              "s": 1,
              "t": "그렇긴 한데, 다른 집은 넓어서 그게 또 끌려.",
              "r": "geureokin hande, dareun jibeun neolbeoseo geuge tto kkeollyeo.",
              "e": "True, but the other place is roomy and that's tempting too."
            },
            {
              "s": 0,
              "t": "거긴 역에서 얼마나 걸리는데?",
              "r": "geogin yeogeseo eolmana geollineunde?",
              "e": "How far is that one from the station?"
            },
            {
              "s": 1,
              "t": "걸어서 한 15분? 비 오는 날엔 좀 빡세지.",
              "r": "georeoseo han sibobun? bi oneun naren jom ppakseji.",
              "e": "About 15 minutes on foot. Kind of rough on rainy days."
            },
            {
              "s": 0,
              "t": "음, 매일 다니는 거면 가까운 게 낫지 않아?",
              "r": "eum, maeil danineun geomyeon gakkaun ge natji ana?",
              "e": "Hmm, if you go every day, isn't closer better?"
            },
            {
              "s": 1,
              "t": "맞아. 근데 집에 있는 시간도 많은데 좁으면 답답할 것 같고.",
              "r": "maja. geunde jibe inneun sigando maneunde jobeumyeon dapdaphal geot gatgo.",
              "e": "True. But I'm home a lot too, and cramped might feel stifling."
            },
            {
              "s": 0,
              "t": "그럼 그냥 넓은 데로 가. 후회 안 하게.",
              "r": "geureom geunyang neolbeun dero ga. huhoe an hage.",
              "e": "Then just go for the bigger one. So you won't regret it."
            },
            {
              "s": 1,
              "t": "그래야 되나... 좀 더 생각해 볼게.",
              "r": "geuraeya doena... jom deo saenggakhae bolge.",
              "e": "Maybe I should... let me think on it a bit more."
            }
          ],
          "vocab": [
            {
              "w": "고민 중",
              "r": "gomin jung",
              "m": "in the middle of deciding/worrying"
            },
            {
              "w": "역세권",
              "r": "yeoksegwon",
              "m": "area near a subway station"
            },
            {
              "w": "출퇴근",
              "r": "chultoegeun",
              "m": "commute (to/from work)"
            },
            {
              "w": "끌리다",
              "r": "kkeollida",
              "m": "to be drawn/tempted"
            },
            {
              "w": "빡세다",
              "r": "ppakseda",
              "m": "to be tough/rough (slang)"
            },
            {
              "w": "후회하다",
              "r": "huhoehada",
              "m": "to regret"
            }
          ]
        },
        {
          "scene": "At a restaurant",
          "title": "Ordering Several Dishes",
          "speakers": [
            {
              "name": "Server",
              "emoji": "🧑‍🍳"
            },
            {
              "name": "You",
              "emoji": "🍽️"
            }
          ],
          "note": "리필 (rifil, 'refill') is everywhere in Korean dining — side dishes (반찬) are usually free to refill, so asking 리필 되나요? is totally normal and expected. Also, 적당히 (jeokdanghi) for 'moderately/just right' is the go-to way to dial spice up or down.",
          "lines": [
            {
              "s": 0,
              "t": "주문하시겠어요?",
              "r": "jumunhasigesseoyo?",
              "e": "Are you ready to order?"
            },
            {
              "s": 1,
              "t": "네, 여기 제육볶음이랑 된장찌개 하나씩 주세요.",
              "r": "ne, yeogi jeyukbokkeumirang doenjangjjigae hanassik juseyo.",
              "e": "Yes, one spicy pork stir-fry and one soybean stew, please."
            },
            {
              "s": 0,
              "t": "네, 더 필요하신 거 있으세요?",
              "r": "ne, deo piryohasin geo isseuseyo?",
              "e": "Sure, anything else you need?"
            },
            {
              "s": 1,
              "t": "아, 계란말이도 하나 추가할게요. 혹시 제육 많이 매워요?",
              "r": "a, gyeranmarido hana chugahalgeyo. hoksi jeyuk mani maewoyo?",
              "e": "Oh, I'll add a rolled omelet too. By the way, is the pork really spicy?"
            },
            {
              "s": 0,
              "t": "조금 매운 편이에요. 덜 맵게 해 드릴까요?",
              "r": "jogeum maeun pyeonieyo. deol maepge hae deurilkkayo?",
              "e": "It's on the spicier side. Want me to make it milder?"
            },
            {
              "s": 1,
              "t": "아니에요, 적당히 매운 거 좋아해요. 그대로 주세요.",
              "r": "anieyo, jeokdanghi maeun geo joahaeyo. geudaero juseyo.",
              "e": "No, I like it moderately spicy. Just as it is, please."
            },
            {
              "s": 0,
              "t": "네, 알겠습니다. 밥은 두 개 드릴까요?",
              "r": "ne, algetseumnida. babeun du gae deurilkkayo?",
              "e": "Got it. Shall I bring two bowls of rice?"
            },
            {
              "s": 1,
              "t": "네 두 개요. 아, 반찬 리필 되죠?",
              "r": "ne du gaeyo. a, banchan rifil doejyo?",
              "e": "Yes, two. Oh, the side dishes are refillable, right?"
            },
            {
              "s": 0,
              "t": "그럼요, 모자라면 말씀하세요.",
              "r": "geureomyo, mojaramyeon malsseumhaseyo.",
              "e": "Of course, just let us know if you run low."
            },
            {
              "s": 1,
              "t": "네, 감사합니다!",
              "r": "ne, gamsahamnida!",
              "e": "Okay, thank you!"
            }
          ],
          "vocab": [
            {
              "w": "제육볶음",
              "r": "jeyukbokkeum",
              "m": "spicy stir-fried pork"
            },
            {
              "w": "추가하다",
              "r": "chugahada",
              "m": "to add (to an order)"
            },
            {
              "w": "매운 편",
              "r": "maeun pyeon",
              "m": "on the spicy side"
            },
            {
              "w": "적당히",
              "r": "jeokdanghi",
              "m": "moderately / just right"
            },
            {
              "w": "반찬",
              "r": "banchan",
              "m": "side dishes"
            },
            {
              "w": "리필",
              "r": "rifil",
              "m": "refill"
            }
          ]
        },
        {
          "scene": "At a clothing store",
          "title": "Asking for a Different Size",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛍️"
            },
            {
              "name": "You",
              "emoji": "👕"
            }
          ],
          "note": "한 사이즈 크게 (han saijeu keuge) = 'one size up.' Note 입어 보다 is 'try on (clothes you wear),' while shoes use 신어 보다 — Korean splits 'try on' by body part. The 피팅룸 (fitting room) is also commonly called 탈의실 (taruisil) on signs.",
          "lines": [
            {
              "s": 0,
              "t": "찾으시는 거 있으세요?",
              "r": "chajeusineun geo isseuseyo?",
              "e": "Are you looking for anything in particular?"
            },
            {
              "s": 1,
              "t": "이 티셔츠 다른 색도 있어요?",
              "r": "i tisyeocheu dareun saekdo isseoyo?",
              "e": "Does this T-shirt come in other colors?"
            },
            {
              "s": 0,
              "t": "네, 검정이랑 흰색도 있어요.",
              "r": "ne, geomjeongirang huinsaekdo isseoyo.",
              "e": "Yes, we have it in black and white too."
            },
            {
              "s": 1,
              "t": "오, 검정으로 한번 입어 봐도 돼요?",
              "r": "o, geomjeongeuro hanbeon ibeo bwado dwaeyo?",
              "e": "Oh, can I try the black one on?"
            },
            {
              "s": 0,
              "t": "그럼요. 사이즈 뭐 드릴까요?",
              "r": "geureomyo. saijeu mwo deurilkkayo?",
              "e": "Of course. What size should I get you?"
            },
            {
              "s": 1,
              "t": "음... 이거 좀 작은 것 같은데, 한 사이즈 큰 거 있어요?",
              "r": "eum... igeo jom jageun geot gateunde, han saijeu keun geo isseoyo?",
              "e": "Hmm... this feels a bit small, do you have it one size up?"
            },
            {
              "s": 0,
              "t": "잠시만요, 라지 가져다드릴게요. 피팅룸은 저쪽이에요.",
              "r": "jamsimanyo, raji gajyeodadeurilgeyo. pitingnumeun jeojjogieyo.",
              "e": "One moment, I'll bring you a large. The fitting room is over there."
            },
            {
              "s": 1,
              "t": "네, 감사해요. (잠시 후) 이거 딱 맞네요!",
              "r": "ne, gamsahaeyo. (jamsi hu) igeo ttak manneyo!",
              "e": "Thanks. (a moment later) This fits perfectly!"
            },
            {
              "s": 0,
              "t": "잘 어울리시네요. 이걸로 하시겠어요?",
              "r": "jal eoullisineyo. igeollo hasigesseoyo?",
              "e": "It looks great on you. Will you take this one?"
            },
            {
              "s": 1,
              "t": "네, 이걸로 할게요!",
              "r": "ne, igeollo halgeyo!",
              "e": "Yes, I'll go with this one!"
            }
          ],
          "vocab": [
            {
              "w": "입어 보다",
              "r": "ibeo boda",
              "m": "to try on (clothes)"
            },
            {
              "w": "한 사이즈 크게",
              "r": "han saijeu keuge",
              "m": "one size bigger"
            },
            {
              "w": "피팅룸",
              "r": "pitingnum",
              "m": "fitting room"
            },
            {
              "w": "딱 맞다",
              "r": "ttak matda",
              "m": "to fit perfectly"
            },
            {
              "w": "어울리다",
              "r": "eoullida",
              "m": "to suit / look good on"
            },
            {
              "w": "이걸로",
              "r": "igeollo",
              "m": "with this one"
            }
          ]
        },
        {
          "scene": "At a convenience store",
          "title": "Paying at the Convenience Store",
          "speakers": [
            {
              "name": "Clerk",
              "emoji": "🏪"
            },
            {
              "name": "You",
              "emoji": "🧾"
            }
          ],
          "note": "데워 드릴까요? (dewo deurilkkayo?) — 'shall I heat it up?' — is standard for instant food at Korean convenience stores; clerks microwave it for you. Also 봉투 (bongtu, bag) now usually costs money, so they always ask, and points cards (적립) like OK캐시백 are super common.",
          "lines": [
            {
              "s": 0,
              "t": "봉투 필요하세요?",
              "r": "bongtu piryohaseyo?",
              "e": "Do you need a bag?"
            },
            {
              "s": 1,
              "t": "네, 하나 주세요. 아, 이 도시락 데워 주실 수 있어요?",
              "r": "ne, hana juseyo. a, i dosirak dewo jusil su isseoyo?",
              "e": "Yes, one please. Oh, can you heat up this lunchbox?"
            },
            {
              "s": 0,
              "t": "그럼요, 잠시만요. 데우는 동안 다른 거 계산해 드릴게요.",
              "r": "geureomyo, jamsimanyo. dewuneun dongan dareun geo gyesanhae deurilgeyo.",
              "e": "Sure, one sec. I'll ring up the rest while it heats."
            },
            {
              "s": 1,
              "t": "네. 그리고 적립도 돼요?",
              "r": "ne. geurigo jeongnipdo dwaeyo?",
              "e": "Okay. And can I earn points too?"
            },
            {
              "s": 0,
              "t": "네, 적립 카드 있으세요?",
              "r": "ne, jeongnip kadeu isseuseyo?",
              "e": "Yes, do you have a points card?"
            },
            {
              "s": 1,
              "t": "휴대폰 번호로 해 주세요.",
              "r": "hyudaepon beonhoro hae juseyo.",
              "e": "Just use my phone number, please."
            },
            {
              "s": 0,
              "t": "네. 다 해서 8,500원이에요.",
              "r": "ne. da haeseo palcheonobaegwonieyo.",
              "e": "Okay. That'll be 8,500 won total."
            },
            {
              "s": 1,
              "t": "카드로 할게요.",
              "r": "kadeuro halgeyo.",
              "e": "I'll pay by card."
            },
            {
              "s": 0,
              "t": "네, 여기 도시락이랑 봉투요. 영수증 드릴까요?",
              "r": "ne, yeogi dosiragirang bongtuyo. yeongsujeung deurilkkayo?",
              "e": "Here's your lunchbox and bag. Want a receipt?"
            },
            {
              "s": 1,
              "t": "아니요, 괜찮아요. 감사합니다!",
              "r": "aniyo, gwaenchanayo. gamsahamnida!",
              "e": "No, I'm good. Thank you!"
            }
          ],
          "vocab": [
            {
              "w": "봉투",
              "r": "bongtu",
              "m": "bag"
            },
            {
              "w": "데우다",
              "r": "dewuda",
              "m": "to heat up"
            },
            {
              "w": "도시락",
              "r": "dosirak",
              "m": "lunchbox / boxed meal"
            },
            {
              "w": "적립",
              "r": "jeongnip",
              "m": "earning (loyalty) points"
            },
            {
              "w": "계산하다",
              "r": "gyesanhada",
              "m": "to ring up / pay"
            },
            {
              "w": "영수증",
              "r": "yeongsujeung",
              "m": "receipt"
            }
          ]
        },
        {
          "scene": "In a taxi",
          "title": "Catching a Taxi Home",
          "speakers": [
            {
              "name": "Driver",
              "emoji": "🚖"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "When telling a taxi driver where to go, Koreans usually end with 가 주세요 ('please go to ~'). Adding 좀 (jom) before it, like 홍대 쪽으로 좀 가 주세요, softens the request and sounds more natural and polite than just barking the destination.",
          "lines": [
            {
              "s": 0,
              "t": "어서 오세요. 어디로 모실까요?",
              "r": "eoseo oseyo. eodiro mosilkkayo?",
              "e": "Welcome. Where can I take you?"
            },
            {
              "s": 1,
              "t": "홍대입구역 쪽으로 좀 가 주세요.",
              "r": "hongdaeipguyeok jjogeuro jom ga juseyo.",
              "e": "Toward Hongik University Station, please."
            },
            {
              "s": 0,
              "t": "네, 알겠습니다. 지금 길이 좀 막힐 수도 있어요.",
              "r": "ne, algetseumnida. jigeum giri jom makil sudo isseoyo.",
              "e": "Sure thing. The roads might be a bit jammed right now, though."
            },
            {
              "s": 1,
              "t": "아, 괜찮아요. 안 급해요.",
              "r": "a, gwaenchanayo. an geupaeyo.",
              "e": "Oh, it's fine. I'm not in a rush."
            },
            {
              "s": 0,
              "t": "오늘 날씨 진짜 좋죠? 이런 날엔 드라이브가 딱인데.",
              "r": "oneul nalssi jinjja jochyo? ireon nalen deuraibeuga ttaginde.",
              "e": "The weather's really nice today, right? Perfect day for a drive."
            },
            {
              "s": 1,
              "t": "그러니까요. 창문 좀 열어도 돼요?",
              "r": "geureonikkayo. changmun jom yeoreodo dwaeyo?",
              "e": "Right? Mind if I crack the window open?"
            },
            {
              "s": 0,
              "t": "그럼요, 편하게 하세요. 다 왔어요, 저 앞에서 세워 드릴게요.",
              "r": "geureomyo, pyeonhage haseyo. da wasseoyo, jeo apeseo sewo deurilgeyo.",
              "e": "Of course, make yourself comfortable. We're here, I'll pull over up ahead."
            },
            {
              "s": 1,
              "t": "감사합니다. 카드로 계산할게요.",
              "r": "gamsahamnida. kadeuro gyesanhalgeyo.",
              "e": "Thank you. I'll pay by card."
            },
            {
              "s": 0,
              "t": "네, 여기 단말기 찍어 주세요. 조심히 들어가세요!",
              "r": "ne, yeogi danmalgi jjigeo juseyo. josimhi deureogaseyo!",
              "e": "Okay, just tap here on the reader. Get home safe!"
            }
          ],
          "vocab": [
            {
              "w": "어디로 모실까요?",
              "r": "eodiro mosilkkayo?",
              "m": "Where shall I take you? (polite, driver's phrase)"
            },
            {
              "w": "막히다",
              "r": "makida",
              "m": "to be jammed/congested (traffic)"
            },
            {
              "w": "안 급해요",
              "r": "an geupaeyo",
              "m": "I'm not in a hurry"
            },
            {
              "w": "딱이다",
              "r": "ttagida",
              "m": "to be just perfect/spot-on"
            },
            {
              "w": "세워 주세요",
              "r": "sewo juseyo",
              "m": "please pull over / stop the car"
            },
            {
              "w": "카드로 계산하다",
              "r": "kadeuro gyesanhada",
              "m": "to pay by card"
            }
          ]
        },
        {
          "scene": "Hotel front desk",
          "title": "Checking Into the Hotel",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛎️"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "At hotels you'll constantly hear 체크인 (chekeu-in) and 체크아웃 — Korean borrows these English words directly. Also, staff almost always ask for 신분증 (sinbunjeung, ID); foreigners just hand over a passport (여권, yeogwon).",
          "lines": [
            {
              "s": 0,
              "t": "안녕하세요, 체크인 도와드릴까요?",
              "r": "annyeonghaseyo, chekeu-in dowadeurilkkayo?",
              "e": "Hello, would you like to check in?"
            },
            {
              "s": 1,
              "t": "네, 인터넷으로 예약했는데요.",
              "r": "ne, inteoneseuro yeyakhaenneundeyo.",
              "e": "Yes, I booked online."
            },
            {
              "s": 0,
              "t": "성함이 어떻게 되세요?",
              "r": "seonghami eotteoke doeseyo?",
              "e": "May I have your name?"
            },
            {
              "s": 1,
              "t": "김민준이요. 1박 예약했어요.",
              "r": "gimminjuniyo. ilbak yeyakhaesseoyo.",
              "e": "Kim Minjun. I booked for one night."
            },
            {
              "s": 0,
              "t": "확인됐습니다. 신분증 하나만 보여 주시겠어요?",
              "r": "hwagindwaetseumnida. sinbunjeung hanaman boyeo jusigesseoyo?",
              "e": "Got it, confirmed. Could you show me an ID?"
            },
            {
              "s": 1,
              "t": "여기요. 혹시 조식 포함이에요?",
              "r": "yeogiyo. hoksi josik pohamieyo?",
              "e": "Here you go. By the way, is breakfast included?"
            },
            {
              "s": 0,
              "t": "네, 조식 포함이고요, 1층 식당에서 아침 7시부터예요.",
              "r": "ne, josik pohamigoyo, ilcheung sikdangeseo achim ilgopsibuteoyeyo.",
              "e": "Yes, breakfast is included, served in the first-floor restaurant from 7 a.m."
            },
            {
              "s": 1,
              "t": "오, 좋네요. 와이파이 비밀번호도 알 수 있을까요?",
              "r": "o, jonneyo. waipai bimilbeonhodo al su isseulkkayo?",
              "e": "Oh, nice. Could I also get the Wi-Fi password?"
            },
            {
              "s": 0,
              "t": "객실 안내문에 적혀 있어요. 1205호, 엘리베이터는 오른쪽이에요.",
              "r": "gaeksil annaemune jeokyeo isseoyo. cheonibaegoho, ellibeiteoneun oreunjjogieyo.",
              "e": "It's written in the room guide. You're in 1205, the elevator's on the right."
            }
          ],
          "vocab": [
            {
              "w": "예약하다",
              "r": "yeyakhada",
              "m": "to make a reservation"
            },
            {
              "w": "성함",
              "r": "seongham",
              "m": "name (honorific form)"
            },
            {
              "w": "신분증",
              "r": "sinbunjeung",
              "m": "ID / identification"
            },
            {
              "w": "조식 포함",
              "r": "josik poham",
              "m": "breakfast included"
            },
            {
              "w": "비밀번호",
              "r": "bimilbeonho",
              "m": "password"
            },
            {
              "w": "객실",
              "r": "gaeksil",
              "m": "guest room"
            }
          ]
        },
        {
          "scene": "At a pharmacy",
          "title": "Cold Medicine at the Pharmacy",
          "speakers": [
            {
              "name": "Pharmacist",
              "emoji": "💊"
            },
            {
              "name": "You",
              "emoji": "🤧"
            }
          ],
          "note": "Koreans describe being sick with 몸살 (momsal) — that whole-body achy, run-down feeling that comes with a cold. There's no perfect English word for it, but saying 몸살 기운이 있어요 ('I've got the start of body aches') instantly tells a pharmacist you're coming down with something.",
          "lines": [
            {
              "s": 0,
              "t": "어떻게 오셨어요?",
              "r": "eotteoke osyeosseoyo?",
              "e": "What brings you in?"
            },
            {
              "s": 1,
              "t": "어제부터 콧물이 나고 목도 좀 아파요.",
              "r": "eojebuteo konmuri nago mokdo jom apayo.",
              "e": "Since yesterday I've had a runny nose and my throat hurts a bit."
            },
            {
              "s": 0,
              "t": "열은 좀 있으세요?",
              "r": "yeoreun jom isseuseyo?",
              "e": "Do you have a fever at all?"
            },
            {
              "s": 1,
              "t": "미열 정도? 그리고 몸살 기운도 좀 있어요.",
              "r": "miyeol jeongdo? geurigo momsal giundo jom isseoyo.",
              "e": "A slight fever, maybe? And I feel kind of achy all over too."
            },
            {
              "s": 0,
              "t": "감기 초기네요. 콧물약이랑 종합감기약 드릴게요.",
              "r": "gamgi chogineyo. konmullyagirang jonghapgamgiyak deurilgeyo.",
              "e": "Sounds like an early cold. I'll give you something for the runny nose and a general cold medicine."
            },
            {
              "s": 1,
              "t": "이거 하루에 몇 번 먹어요?",
              "r": "igeo harue myeot beon meogeoyo?",
              "e": "How many times a day do I take this?"
            },
            {
              "s": 0,
              "t": "식후 30분에 하루 세 번이요. 졸릴 수 있으니까 운전은 조심하세요.",
              "r": "siku samsipbune harue se beoniyo. jollil su isseunikka unjeoneun josimhaseyo.",
              "e": "Three times a day, 30 minutes after meals. It can make you drowsy, so be careful driving."
            },
            {
              "s": 1,
              "t": "아, 알겠어요. 물 많이 마시면 되겠죠?",
              "r": "a, algesseoyo. mul mani masimyeon doegetjyo.",
              "e": "Ah, got it. Drinking lots of water should help, right?"
            },
            {
              "s": 0,
              "t": "네, 푹 쉬시고요. 이틀 지나도 안 나으면 병원 가 보세요.",
              "r": "ne, puk swisigoyo. iteul jinado an naeumyeon byeongwon ga boseyo.",
              "e": "Yes, and get plenty of rest. If it's not better in two days, see a doctor."
            }
          ],
          "vocab": [
            {
              "w": "콧물이 나다",
              "r": "konmuri nada",
              "m": "to have a runny nose"
            },
            {
              "w": "미열",
              "r": "miyeol",
              "m": "slight/low fever"
            },
            {
              "w": "몸살 기운",
              "r": "momsal giun",
              "m": "the start of body aches (run-down feeling)"
            },
            {
              "w": "종합감기약",
              "r": "jonghapgamgiyak",
              "m": "general/all-in-one cold medicine"
            },
            {
              "w": "식후 30분",
              "r": "siku samsipbun",
              "m": "30 minutes after a meal"
            },
            {
              "w": "푹 쉬다",
              "r": "puk swida",
              "m": "to rest well / get plenty of rest"
            }
          ]
        },
        {
          "scene": "At a hair salon",
          "title": "Getting a Haircut",
          "speakers": [
            {
              "name": "Stylist",
              "emoji": "💇"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "When you want just a little off, say 다듬어 주세요 (dadeumeo juseyo, 'just tidy it up') — it's the magic phrase that saves you from a stylist taking off way more than you wanted. 살짝 (saljjak, 'just a tiny bit') is your other best friend in the chair.",
          "lines": [
            {
              "s": 0,
              "t": "오늘 어떻게 해 드릴까요?",
              "r": "oneul eotteoke hae deurilkkayo?",
              "e": "What are we doing today?"
            },
            {
              "s": 1,
              "t": "그냥 좀 다듬어 주세요. 너무 짧지 않게요.",
              "r": "geunyang jom dadeumeo juseyo. neomu jjalji ankeyo.",
              "e": "Just a trim, please. Not too short."
            },
            {
              "s": 0,
              "t": "기장은 어느 정도로 할까요?",
              "r": "gijangeun eoneu jeongdoro halkkayo?",
              "e": "How much length do you want to keep?"
            },
            {
              "s": 1,
              "t": "옆이랑 뒤만 살짝 치고, 앞머리는 눈썹 정도로요.",
              "r": "yeopirang dwiman saljjak chigo, ammeorineun nunsseop jeongdoroyo.",
              "e": "Just thin out the sides and back a touch, and bangs around eyebrow length."
            },
            {
              "s": 0,
              "t": "아, 깔끔하게요. 펌이나 염색은 안 하시고요?",
              "r": "a, kkalkkeumhageyo. peomina yeomsaegeun an hasigoyo?",
              "e": "Ah, nice and clean. No perm or color today?"
            },
            {
              "s": 1,
              "t": "네, 오늘은 커트만 할게요.",
              "r": "ne, oneureun keoteuman halgeyo.",
              "e": "Right, just a cut today."
            },
            {
              "s": 0,
              "t": "알겠습니다. 머리 감겨 드릴 테니까 이쪽으로 오세요.",
              "r": "algetseumnida. meori gamgyeo deuril tenikka ijjogeuro oseyo.",
              "e": "Sounds good. Let me wash your hair first, come this way."
            },
            {
              "s": 1,
              "t": "혹시 끝나고 스타일링 어떻게 하는지 알려 주실 수 있어요?",
              "r": "hoksi kkeunnago seutailling eotteoke haneunji allyeo jusil su isseoyo?",
              "e": "Could you maybe show me how to style it afterward?"
            },
            {
              "s": 0,
              "t": "그럼요. 드라이로 어떻게 넘기는지 알려 드릴게요.",
              "r": "geureomyo. deuraillo eotteoke neomgineunji allyeo deurilgeyo.",
              "e": "Of course. I'll show you how to blow it out and sweep it over."
            }
          ],
          "vocab": [
            {
              "w": "다듬다",
              "r": "dadeumda",
              "m": "to trim / tidy up"
            },
            {
              "w": "기장",
              "r": "gijang",
              "m": "length (of hair)"
            },
            {
              "w": "앞머리",
              "r": "ammeori",
              "m": "bangs / fringe"
            },
            {
              "w": "살짝 치다",
              "r": "saljjak chida",
              "m": "to thin out / cut just a little"
            },
            {
              "w": "펌",
              "r": "peom",
              "m": "perm"
            },
            {
              "w": "염색",
              "r": "yeomsaek",
              "m": "hair coloring/dyeing"
            }
          ]
        },
        {
          "scene": "Hanging out with a friend",
          "title": "Geeking Out Over a Band",
          "speakers": [
            {
              "name": "Jiwoo",
              "emoji": "🎧"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "입덕 (ipdeok) means 'falling into being a fan' — literally 'entering otaku-dom.' Young Koreans use 덕질 (deokjil) for the act of fangirling/fanboying and 최애 (choe-ae) for your absolute favorite member or song. These are everyday slang in any fan conversation.",
          "lines": [
            {
              "s": 0,
              "t": "야, 너 그 밴드 새 앨범 들어 봤어?",
              "r": "ya, neo geu baendeu sae aelbeom deureo bwasseo?",
              "e": "Hey, did you listen to that band's new album?"
            },
            {
              "s": 1,
              "t": "당연하지! 어제 나오자마자 다 들었어. 미쳤더라.",
              "r": "dangyeonhaji! eoje naojamaja da deureosseo. michyeotdeora.",
              "e": "Obviously! I listened to the whole thing the second it dropped. It's insane."
            },
            {
              "s": 0,
              "t": "그치? 나 타이틀곡 듣고 바로 입덕했잖아.",
              "r": "geuchi? na taiteulgok deutgo baro ipdeokaetjana.",
              "e": "Right? I became a full-on fan the moment I heard the title track."
            },
            {
              "s": 1,
              "t": "너 최애 누구야? 나는 드러머가 제일 좋더라.",
              "r": "neo choe-ae nuguya? naneun deureomeoga jeil joteora.",
              "e": "Who's your favorite? For me it's the drummer, hands down."
            },
            {
              "s": 0,
              "t": "헐, 나도! 라이브 영상 봤는데 진짜 장난 아니야.",
              "r": "heol, nado! raibeu yeongsang bwanneunde jinjja jangnan aniya.",
              "e": "No way, me too! I watched a live clip and he's no joke."
            },
            {
              "s": 1,
              "t": "이번에 내한 공연 한다던데, 같이 보러 갈래?",
              "r": "ibeone naehan gongyeon handadeonde, gachi boreo gallae?",
              "e": "I heard they're doing a show here this time, wanna go together?"
            },
            {
              "s": 0,
              "t": "헐 진짜? 티켓팅 언제야? 무조건 가야지.",
              "r": "heol jinjja? tiketting eonjeya? mujogeon gayaji.",
              "e": "Wait, for real? When's ticketing? We absolutely have to go."
            },
            {
              "s": 1,
              "t": "다음 주 토요일 8시 오픈이래. 알람 맞춰 놓자.",
              "r": "daeum ju toyoil yeodeolsi opeunirae. allam matchwo nocha.",
              "e": "Next Saturday, opens at 8. Let's set an alarm."
            },
            {
              "s": 0,
              "t": "콜! 둘 다 동시에 들어가야 성공 확률 높지.",
              "r": "kol! dul da dongsie deureogaya seonggong hwangnyul nopji.",
              "e": "Deal! Better odds if we both log in at the same time."
            }
          ],
          "vocab": [
            {
              "w": "입덕하다",
              "r": "ipdeokada",
              "m": "to become a fan / fall down the rabbit hole"
            },
            {
              "w": "타이틀곡",
              "r": "taiteulgok",
              "m": "title track (lead single)"
            },
            {
              "w": "최애",
              "r": "choe-ae",
              "m": "one's absolute favorite (member/song)"
            },
            {
              "w": "장난 아니야",
              "r": "jangnan aniya",
              "m": "it's no joke / it's seriously good"
            },
            {
              "w": "내한 공연",
              "r": "naehan gongyeon",
              "m": "a concert/performance in Korea (by foreign artist)"
            },
            {
              "w": "콜!",
              "r": "kol!",
              "m": "deal! / I'm in! (casual agreement)"
            }
          ]
        },
        {
          "scene": "Planning a weekend trip",
          "title": "Planning a Weekend Getaway",
          "speakers": [
            {
              "name": "Sora",
              "emoji": "🗺️"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "당일치기 (dangilchigi) means a day trip with no overnight stay, while 1박 2일 (ilbak iil, 'one night two days') is the classic short Korean getaway format. You'll hear these constantly when friends plan trips — knowing them instantly makes your plans sound natural.",
          "lines": [
            {
              "s": 0,
              "t": "우리 이번 주말에 어디 놀러 갈까?",
              "r": "uri ibeon jumare eodi nolleo galkka?",
              "e": "Should we go somewhere this weekend?"
            },
            {
              "s": 1,
              "t": "좋지! 당일치기로 갈까, 아니면 1박 2일?",
              "r": "jochi! dangilchigiro galkka, animyeon ilbak iil?",
              "e": "I'm down! A day trip, or stay one night?"
            },
            {
              "s": 0,
              "t": "그냥 1박 2일로 가자. 강릉 어때? 바다 보고 오게.",
              "r": "geunyang ilbak iillo gaja. gangneung eottae? bada bogo oge.",
              "e": "Let's just do one night. How about Gangneung? We can see the ocean."
            },
            {
              "s": 1,
              "t": "오 좋다! 토요일 아침에 출발하면 되겠다.",
              "r": "o jota! toyoil achime chulbalhamyeon doegetda.",
              "e": "Oh nice! We could leave Saturday morning."
            },
            {
              "s": 0,
              "t": "숙소는 내가 알아볼게. 바다 보이는 데로 잡을까?",
              "r": "suksoneun naega arabolge. bada boineun dero jabeulkka?",
              "e": "I'll look up a place to stay. Should I book one with an ocean view?"
            },
            {
              "s": 1,
              "t": "완전 좋지. 가서 회 먹고 카페 투어도 하자.",
              "r": "wanjeon jochi. gaseo hoe meokgo kape tueodo haja.",
              "e": "Totally. Let's eat sashimi there and do a little cafe tour too."
            },
            {
              "s": 0,
              "t": "콜. 차 가져갈까, 아니면 기차 탈까?",
              "r": "kol. cha gajyeogalkka, animyeon gicha talkka?",
              "e": "Deal. Should we drive, or take the train?"
            },
            {
              "s": 1,
              "t": "기차가 편하지. KTX 예매 미리 해 놓자.",
              "r": "gichaga pyeonhaji. keitiekseu yemae miri hae nocha.",
              "e": "The train's easier. Let's book KTX tickets ahead of time."
            },
            {
              "s": 0,
              "t": "오케이, 내가 표 끊을게. 날씨만 좋으면 완벽하겠다!",
              "r": "okei, naega pyo kkeuneulge. nalssiman joeumyeon wanbyeokagetda!",
              "e": "Okay, I'll grab the tickets. If the weather's good, it'll be perfect!"
            }
          ],
          "vocab": [
            {
              "w": "당일치기",
              "r": "dangilchigi",
              "m": "a day trip (no overnight stay)"
            },
            {
              "w": "1박 2일",
              "r": "ilbak iil",
              "m": "one night, two days (short getaway)"
            },
            {
              "w": "숙소",
              "r": "sukso",
              "m": "lodging / accommodation"
            },
            {
              "w": "회",
              "r": "hoe",
              "m": "raw fish / sashimi"
            },
            {
              "w": "예매하다",
              "r": "yemaehada",
              "m": "to book (tickets) in advance"
            },
            {
              "w": "표 끊다",
              "r": "pyo kkeunta",
              "m": "to buy/get a ticket (casual)"
            }
          ]
        },
        {
          "scene": "Chatting at the gym",
          "title": "Hitting the Gym",
          "speakers": [
            {
              "name": "Minjun",
              "emoji": "💪"
            },
            {
              "name": "You",
              "emoji": "🏋️"
            }
          ],
          "note": "'헬스장' (helseujang) is the everyday Korean word for a gym, from English 'health' + 장 (place). Koreans rarely say '운동장' for a gym — that means a sports field. And '오운완' (oun-wan) is super common gym slang: short for '오늘 운동 완료' (today's workout done), often posted with a mirror selfie.",
          "lines": [
            {
              "s": 0,
              "t": "어 왔어? 오늘은 좀 일찍 왔네?",
              "r": "eo wasseo? oneureun jom iljjik wanne?",
              "e": "Oh you're here? You came kind of early today, huh?"
            },
            {
              "s": 1,
              "t": "응, 요즘 운동 좀 빡세게 해보려고.",
              "r": "eung, yojeum undong jom ppaksege haeboryeogo.",
              "e": "Yeah, I'm trying to work out pretty hard these days."
            },
            {
              "s": 0,
              "t": "오 웬일이야. 너 맨날 작심삼일이었잖아.",
              "r": "o wennirya. neo maennal jaksimsamirieotjanha.",
              "e": "Whoa, what's gotten into you? You always gave up after like three days."
            },
            {
              "s": 1,
              "t": "야 그건 좀 너무했다. 이번엔 진짜야.",
              "r": "ya geugeon jom neomuhaetda. ibeonen jinjjaya.",
              "e": "Hey, that's a bit harsh. This time I'm for real."
            },
            {
              "s": 0,
              "t": "그래 그래. 오늘 등 할 거야? 같이 하자.",
              "r": "geurae geurae. oneul deung hal geoya? gachi haja.",
              "e": "Sure, sure. You doing back today? Let's do it together."
            },
            {
              "s": 1,
              "t": "좋지. 근데 나 아직 폼이 좀 별로야.",
              "r": "jochi. geunde na ajik pomi jom byeolloya.",
              "e": "Sounds good. But my form's still kinda bad though."
            },
            {
              "s": 0,
              "t": "내가 봐줄게. 무게 욕심내지 말고 천천히.",
              "r": "naega bwajulge. muge yoksimnaeji malgo cheoncheonhi.",
              "e": "I'll watch for you. Don't get greedy with the weight, take it slow."
            },
            {
              "s": 1,
              "t": "오케이. 끝나고 단백질 쉐이크 콜?",
              "r": "okei. kkeunnago danbaekjil shweikeu kol?",
              "e": "Okay. Protein shake after we're done, deal?"
            },
            {
              "s": 0,
              "t": "콜. 오운완하고 인증샷 찍자.",
              "r": "kol. ounwanhago injeungsyat jjikja.",
              "e": "Deal. Let's finish the workout and take a proof selfie."
            }
          ],
          "vocab": [
            {
              "w": "헬스장",
              "r": "helseujang",
              "m": "gym"
            },
            {
              "w": "빡세게",
              "r": "ppaksege",
              "m": "hard, intensely (slang)"
            },
            {
              "w": "작심삼일",
              "r": "jaksimsamil",
              "m": "giving up after 3 days"
            },
            {
              "w": "폼",
              "r": "pom",
              "m": "form (exercise posture)"
            },
            {
              "w": "오운완",
              "r": "ounwan",
              "m": "'today's workout done' (slang)"
            },
            {
              "w": "콜",
              "r": "kol",
              "m": "deal / I'm in"
            }
          ]
        },
        {
          "scene": "At a cafe studying",
          "title": "Surprise at the Cafe",
          "speakers": [
            {
              "name": "Sora",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "📚"
            }
          ],
          "note": "'카공' (kagong) is a blend of '카페' + '공부' (cafe + studying) — Korea's huge cafe-study culture has its own word for it. Also, '여기 웬일이야?' literally means 'what's the occasion here?' but is the natural way to say 'what are YOU doing here?' when you bump into someone unexpectedly.",
          "lines": [
            {
              "s": 0,
              "t": "어? 너 여기서 뭐 해? 웬일이야!",
              "r": "eo? neo yeogiseo mwo hae? wennirya!",
              "e": "Huh? What are you doing here? What a surprise!"
            },
            {
              "s": 1,
              "t": "헐, 소라야! 나 시험 때문에 카공 중이지.",
              "r": "heol, soraya! na siheom ttaemune kagong jungiji.",
              "e": "Whoa, Sora! I'm here cramming for an exam."
            },
            {
              "s": 0,
              "t": "대박, 우연이다. 나도 근처에서 약속 있었거든.",
              "r": "daebak, uyeonida. nado geuncheoeseo yaksok isseotgeodeun.",
              "e": "No way, what a coincidence. I had plans nearby too."
            },
            {
              "s": 1,
              "t": "잠깐 앉았다 가. 나도 머리 좀 식히고 싶었어.",
              "r": "jamkkan anjatda ga. nado meori jom sikhigo sipeosseo.",
              "e": "Sit for a sec before you go. I wanted to clear my head anyway."
            },
            {
              "s": 0,
              "t": "그럴까? 근데 공부 방해되는 거 아니야?",
              "r": "geureolkka? geunde gongbu banghaedoeneun geo aniya?",
              "e": "Should I? But won't I be interrupting your studying?"
            },
            {
              "s": 1,
              "t": "아니야 아니야, 어차피 집중 안 됐어.",
              "r": "aniya aniya, eochapi jipjung an dwaesseo.",
              "e": "No no, I couldn't focus anyway."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 그럼 내가 커피 한 잔 사줄게.",
              "r": "kk geureom naega keopi han jan sajulge.",
              "e": "Haha, then let me buy you a coffee."
            },
            {
              "s": 1,
              "t": "오 진짜? 그럼 아아 한 잔!",
              "r": "o jinjja? geureom aa han jan!",
              "e": "Oh really? Then an iced americano!"
            },
            {
              "s": 0,
              "t": "콜. 시험 끝나면 우리 제대로 한 번 보자.",
              "r": "kol. siheom kkeunnamyeon uri jedaero han beon boja.",
              "e": "Deal. Once your exam's over, let's hang out properly."
            }
          ],
          "vocab": [
            {
              "w": "웬일이야",
              "r": "wennirya",
              "m": "what a surprise / what brings you here"
            },
            {
              "w": "카공",
              "r": "kagong",
              "m": "studying at a cafe (slang)"
            },
            {
              "w": "우연",
              "r": "uyeon",
              "m": "coincidence"
            },
            {
              "w": "머리 식히다",
              "r": "meori sikhida",
              "m": "to clear one's head"
            },
            {
              "w": "아아",
              "r": "aa",
              "m": "iced americano (slang)"
            },
            {
              "w": "제대로",
              "r": "jedaero",
              "m": "properly"
            }
          ]
        },
        {
          "scene": "Planning a surprise party",
          "title": "The Secret Plan",
          "speakers": [
            {
              "name": "Jiwon",
              "emoji": "🤫"
            },
            {
              "name": "You",
              "emoji": "🎂"
            }
          ],
          "note": "'깜놀' (kkamnol) is clipped slang from '깜짝 놀라다' (to be startled/surprised) — perfect for surprise-party talk. Note also '쉿' (swit) is the Korean 'shhh' sound — it just means 'be quiet.'",
          "lines": [
            {
              "s": 0,
              "t": "야, 다음 주 지민이 생일인 거 알지?",
              "r": "ya, daeum ju jimini saengirin geo alji?",
              "e": "Hey, you know it's Jimin's birthday next week, right?"
            },
            {
              "s": 1,
              "t": "당연하지. 우리 깜짝 파티 해주는 거 어때?",
              "r": "dangyeonhaji. uri kkamjjak pati haejuneun geo eottae?",
              "e": "Of course. How about we throw a surprise party?"
            },
            {
              "s": 0,
              "t": "오 좋은데? 걔 깜놀하는 거 보고 싶다 ㅋㅋ",
              "r": "o joeunde? gyae kkamnolhaneun geo bogo sipda kk",
              "e": "Oh nice! I wanna see them freak out, haha."
            },
            {
              "s": 1,
              "t": "장소는 내가 알아볼게. 케이크는 네가 맡아.",
              "r": "jangsoneun naega arabolge. keikeuneun nega mata.",
              "e": "I'll look into a place. You handle the cake."
            },
            {
              "s": 0,
              "t": "콜. 근데 절대 티 내면 안 돼. 입 무거워야 돼.",
              "r": "kol. geunde jeoldae ti naemyeon an dwae. ip mugeowoya dwae.",
              "e": "Deal. But we can't let it slip. We gotta keep it secret."
            },
            {
              "s": 1,
              "t": "걱정 마. 나 입 진짜 무거워.",
              "r": "geokjeong ma. na ip jinjja mugeowo.",
              "e": "Don't worry. I'm really good at keeping secrets."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 누가 그래. 너 지난번에도 다 흘렸잖아.",
              "r": "kk nuga geurae. neo jinanbeonedo da heullyeotjanha.",
              "e": "Haha says who? You spilled everything last time."
            },
            {
              "s": 1,
              "t": "야! 그땐 실수였어. 이번엔 진짜 비밀로 할게.",
              "r": "ya! geuttaen silsuyeosseo. ibeonen jinjja bimillo halge.",
              "e": "Hey! That was a slip-up. This time I'll really keep it secret."
            },
            {
              "s": 0,
              "t": "그래, 단톡방은 따로 파자. 지민이 빼고.",
              "r": "geurae, dantokbangeun ttaro paja. jimini ppaego.",
              "e": "Okay, let's make a separate group chat — without Jimin."
            }
          ],
          "vocab": [
            {
              "w": "깜짝 파티",
              "r": "kkamjjak pati",
              "m": "surprise party"
            },
            {
              "w": "깜놀",
              "r": "kkamnol",
              "m": "to be startled (slang)"
            },
            {
              "w": "티 내다",
              "r": "ti naeda",
              "m": "to show / give it away"
            },
            {
              "w": "입이 무겁다",
              "r": "ibi mugeopda",
              "m": "to be tight-lipped"
            },
            {
              "w": "흘리다",
              "r": "heullida",
              "m": "to let slip (info)"
            },
            {
              "w": "단톡방",
              "r": "dantokbang",
              "m": "group chat room"
            }
          ]
        },
        {
          "scene": "At a clothing store counter",
          "title": "Exchanging a Shirt",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛍️"
            },
            {
              "name": "You",
              "emoji": "👕"
            }
          ],
          "note": "With a stranger like store staff you'd normally use polite 요/-습니다 speech, but the casual 해요-style here keeps it friendly-everyday. Useful word: '환불' (hwanbul) = refund vs '교환' (gyohwan) = exchange — stores always ask which one you want, so know both.",
          "lines": [
            {
              "s": 0,
              "t": "어서 오세요. 뭐 도와드릴까요?",
              "r": "eoseo oseyo. mwo dowadeurilkkayo?",
              "e": "Welcome. How can I help you?"
            },
            {
              "s": 1,
              "t": "아 이거 어제 샀는데 사이즈가 좀 작아서요.",
              "r": "a igeo eoje sanneunde saijeuga jom jagaseoyo.",
              "e": "Oh, I bought this yesterday but the size is a bit small."
            },
            {
              "s": 0,
              "t": "아 그러세요? 영수증 가지고 오셨어요?",
              "r": "a geureoseyo? yeongsujeung gajigo osyeosseoyo?",
              "e": "Oh, is that so? Did you bring the receipt?"
            },
            {
              "s": 1,
              "t": "네, 여기요. 한 사이즈 큰 걸로 교환되나요?",
              "r": "ne, yeogiyo. han saijeu keun geollo gyohwandoenayo?",
              "e": "Yes, here. Can I exchange it for one size up?"
            },
            {
              "s": 0,
              "t": "잠시만요, 재고 확인해 볼게요... 아, 다행히 있네요.",
              "r": "jamsimanyo, jaego hwaginhae bolgeyo... a, dahaenghi inneyo.",
              "e": "One moment, let me check stock... oh, luckily we have it."
            },
            {
              "s": 1,
              "t": "오 다행이다. 혹시 색깔도 바꿀 수 있어요?",
              "r": "o dahaengida. hoksi saekkkaldo bakkul su isseoyo?",
              "e": "Oh, great. Can I maybe also change the color?"
            },
            {
              "s": 0,
              "t": "색깔 변경은 가능한데, 가격 차이가 좀 나요.",
              "r": "saekkkal byeongyeongeun ganeunghande, gagyeok chaiga jom nayo.",
              "e": "Changing the color is possible, but there's a price difference."
            },
            {
              "s": 1,
              "t": "아 그럼 그냥 같은 색으로 할게요.",
              "r": "a geureom geunyang gateun saegeuro halgeyo.",
              "e": "Ah, then I'll just go with the same color."
            },
            {
              "s": 0,
              "t": "네, 바로 교환해 드릴게요. 잠시만 기다려 주세요.",
              "r": "ne, baro gyohwanhae deurilgeyo. jamsiman gidaryeo juseyo.",
              "e": "Okay, I'll exchange it right away. Please wait a moment."
            }
          ],
          "vocab": [
            {
              "w": "교환",
              "r": "gyohwan",
              "m": "exchange"
            },
            {
              "w": "환불",
              "r": "hwanbul",
              "m": "refund"
            },
            {
              "w": "영수증",
              "r": "yeongsujeung",
              "m": "receipt"
            },
            {
              "w": "재고",
              "r": "jaego",
              "m": "stock / inventory"
            },
            {
              "w": "사이즈",
              "r": "saijeu",
              "m": "size"
            },
            {
              "w": "가격 차이",
              "r": "gagyeok chai",
              "m": "price difference"
            }
          ]
        },
        {
          "scene": "Chatting about food",
          "title": "Comfort Food Talk",
          "speakers": [
            {
              "name": "Hyun",
              "emoji": "🍲"
            },
            {
              "name": "You",
              "emoji": "🍚"
            }
          ],
          "note": "'집밥' (jipbap) literally 'home rice' = home-cooked food, and carries a warm, comforting nuance you can't get from eating out. Also '엄마손맛' (eommasonmat, 'mom's hand-taste') is the ultimate Korean compliment for cooking — that indescribable flavor only home cooking has.",
          "lines": [
            {
              "s": 0,
              "t": "야 배고프다. 너 제일 좋아하는 음식 뭐야?",
              "r": "ya baegopeuda. neo jeil joahaneun eumsik mwoya?",
              "e": "Ugh, I'm hungry. What's your favorite food?"
            },
            {
              "s": 1,
              "t": "음... 난 그냥 김치찌개가 최고야.",
              "r": "eum... nan geunyang gimchijjigaega choegoya.",
              "e": "Hmm... honestly kimchi stew is the best for me."
            },
            {
              "s": 0,
              "t": "오 인정. 역시 집밥이 짱이지.",
              "r": "o injeong. yeoksi jipbabi jjangiji.",
              "e": "Oh, agreed. Home cooking really is the best."
            },
            {
              "s": 1,
              "t": "맞아. 우리 엄마 손맛 진짜 못 따라가.",
              "r": "maja. uri eomma sonmat jinjja mot ttaraga.",
              "e": "Right. Nobody can match my mom's cooking."
            },
            {
              "s": 0,
              "t": "부럽다. 너 요리는 좀 해?",
              "r": "bureopda. neo yorineun jom hae?",
              "e": "Lucky you. Do you cook at all?"
            },
            {
              "s": 1,
              "t": "계란말이 정도는 해. 그 이상은 무리야 ㅋㅋ",
              "r": "gyeranmari jeongdoneun hae. geu isangeun muriya kk",
              "e": "I can manage a rolled omelette. Anything more is too much, haha."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 나도 라면 끓이는 게 한계야.",
              "r": "kk nado ramyeon kkeurineun ge hangyeya.",
              "e": "Haha, my limit is boiling ramen too."
            },
            {
              "s": 1,
              "t": "우리 언제 같이 뭐 해 먹을까? 백종원 레시피로.",
              "r": "uri eonje gachi mwo hae meogeulkka? baekjongwon resipiro.",
              "e": "Should we cook something together sometime? With a Baek Jong-won recipe."
            },
            {
              "s": 0,
              "t": "오 좋아! 실패해도 시켜 먹으면 되니까 ㅋㅋ",
              "r": "o joa! silpaehaedo sikyeo meogeumyeon doenikka kk",
              "e": "Oh nice! Even if we fail we can just order in, haha."
            }
          ],
          "vocab": [
            {
              "w": "집밥",
              "r": "jipbap",
              "m": "home-cooked food"
            },
            {
              "w": "손맛",
              "r": "sonmat",
              "m": "the special taste of one's cooking"
            },
            {
              "w": "짱",
              "r": "jjang",
              "m": "the best (slang)"
            },
            {
              "w": "계란말이",
              "r": "gyeranmari",
              "m": "rolled egg omelette"
            },
            {
              "w": "한계",
              "r": "hangye",
              "m": "limit"
            },
            {
              "w": "시켜 먹다",
              "r": "sikyeo meokda",
              "m": "to order in (food)"
            }
          ]
        },
        {
          "scene": "Meeting a friend's friend",
          "title": "Nice to Meet You",
          "speakers": [
            {
              "name": "Taeyang",
              "emoji": "🙋"
            },
            {
              "name": "You",
              "emoji": "😊"
            }
          ],
          "note": "When meeting a friend's friend casually, Koreans often skip stiff '만나서 반갑습니다' and use the lighter '반가워요' or just '반가워.' Asking '몇 살이에요?' (how old are you) early on isn't rude here — age sets whether you'll speak 반말 or 존댓말, so it's a practical, normal question. Once both agree they're the same age, they switch to 반말.",
          "lines": [
            {
              "s": 0,
              "t": "아 소개할게. 얘가 내가 말했던 친구야.",
              "r": "a sogaehalge. yaega naega malhaetdeon chinguya.",
              "e": "Oh, let me introduce you. This is the friend I told you about."
            },
            {
              "s": 1,
              "t": "안녕하세요, 반가워요. 얘기 많이 들었어요.",
              "r": "annyeonghaseyo, bangawoyo. yaegi mani deureosseoyo.",
              "e": "Hi, nice to meet you. I've heard a lot about you."
            },
            {
              "s": 0,
              "t": "좋은 얘기였길 바라요 ㅋㅋ 저는 태양이에요.",
              "r": "joeun yaegiyeotgil barayo kk jeoneun taeyangieyo.",
              "e": "Hope it was good stuff, haha. I'm Taeyang."
            },
            {
              "s": 1,
              "t": "다 좋은 얘기였어요. 혹시 몇 살이에요?",
              "r": "da joeun yaegiyeosseoyo. hoksi myeot sarieyo?",
              "e": "It was all good. By the way, how old are you?"
            },
            {
              "s": 0,
              "t": "저 스물여섯이요. 그쪽은요?",
              "r": "jeo seumullyeoseosiyo. geujjogeunyo?",
              "e": "I'm twenty-six. And you?"
            },
            {
              "s": 1,
              "t": "어 저랑 동갑이네요! 그럼 말 편하게 해요.",
              "r": "eo jeorang donggabineyo! geureom mal pyeonhage haeyo.",
              "e": "Oh, we're the same age! Then let's talk casually."
            },
            {
              "s": 0,
              "t": "오 좋아. 우리 잘 통할 것 같은데?",
              "r": "o joa. uri jal tonghal geot gateunde?",
              "e": "Oh, sounds good. I feel like we'll click."
            },
            {
              "s": 1,
              "t": "그러게 ㅋㅋ 취미 뭐 있어? 나 등산 좋아하는데.",
              "r": "geureoge kk chwimi mwo isseo? na deungsan joahaneunde.",
              "e": "Right, haha. What hobbies do you have? I like hiking."
            },
            {
              "s": 0,
              "t": "오 나도! 다음에 같이 가자. 완전 반갑다 진짜.",
              "r": "o nado! daeume gachi gaja. wanjeon bangapda jinjja.",
              "e": "Oh, me too! Let's go together next time. Really nice to meet you."
            }
          ],
          "vocab": [
            {
              "w": "소개하다",
              "r": "sogaehada",
              "m": "to introduce"
            },
            {
              "w": "반가워요",
              "r": "bangawoyo",
              "m": "nice to meet you (casual polite)"
            },
            {
              "w": "동갑",
              "r": "donggap",
              "m": "same age"
            },
            {
              "w": "말 편하게 하다",
              "r": "mal pyeonhage hada",
              "m": "to speak casually (drop formality)"
            },
            {
              "w": "통하다",
              "r": "tonghada",
              "m": "to click / get along"
            },
            {
              "w": "취미",
              "r": "chwimi",
              "m": "hobby"
            }
          ]
        },
        {
          "scene": "At a house party",
          "title": "Small Talk at a Party",
          "speakers": [
            {
              "name": "Jiwon",
              "emoji": "🥳"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "When you meet someone through a mutual friend, Koreans almost always ask '~ 어떻게 알아요?' / '어떻게 아는 사이예요?' (how do you know them?) to place each other socially. It's the default ice-breaker, like asking 'so how do you two know each other?' at a Western party.",
          "lines": [
            {
              "s": 0,
              "t": "어, 안녕하세요! 여기 사람 진짜 많죠?",
              "r": "eo, annyeonghaseyo! yeogi saram jinjja manchyo?",
              "e": "Oh, hi! There are so many people here, right?"
            },
            {
              "s": 1,
              "t": "그러니까요. 저 아는 사람 거의 없어서 좀 뻘쭘했어요.",
              "r": "geureonikkayo. jeo aneun saram geoui eopseoseo jom ppeoljjumhaesseoyo.",
              "e": "Right? I barely know anyone here, so I was feeling kinda awkward."
            },
            {
              "s": 0,
              "t": "아 진짜요? 혹시 민수 친구예요?",
              "r": "a jinjjayo? hoksi minsu chinguyeyo?",
              "e": "Oh really? Are you maybe a friend of Minsu's?"
            },
            {
              "s": 1,
              "t": "네네, 대학 때 같은 동아리였어요. 민수랑은 어떻게 아세요?",
              "r": "nene, daehak ttae gateun dongariyeosseoyo. minsurangeun eotteoke aseyo?",
              "e": "Yeah, we were in the same club in college. How do you know Minsu?"
            },
            {
              "s": 0,
              "t": "회사 동기예요. 근데 와, 동아리면 진짜 오래 봤겠다.",
              "r": "hoesa donggiyeyo. geunde wa, dongarimyeon jinjja orae batgetda.",
              "e": "We started at the same company. Wow, if you were clubmates you've known him forever then."
            },
            {
              "s": 1,
              "t": "그쵸. 한 8년 됐나? 시간 진짜 빠르다.",
              "r": "geuchyo. han 8nyeon dwaenna? sigan jinjja ppareuda.",
              "e": "Right? Like eight years now? Time really flies."
            },
            {
              "s": 0,
              "t": "헐, 부럽다. 저기 음료 있던데 한잔 가지러 갈래요?",
              "r": "heol, bureopda. jeogi eumnyo itdeonde hanjan gajireo gallaeyo?",
              "e": "Whoa, I'm jealous. There are drinks over there, wanna go grab one?"
            },
            {
              "s": 1,
              "t": "오 좋아요. 가요 가요. 덕분에 안 심심하겠다.",
              "r": "o joayo. gayo gayo. deokbune an simsimhagetda.",
              "e": "Oh, sounds good. Let's go. Thanks to you I won't be bored now."
            }
          ],
          "vocab": [
            {
              "w": "뻘쭘하다",
              "r": "ppeoljjumhada",
              "m": "to feel awkward / out of place"
            },
            {
              "w": "동기",
              "r": "donggi",
              "m": "person who joined at the same time (school/company)"
            },
            {
              "w": "동아리",
              "r": "dongari",
              "m": "(school) club/circle"
            },
            {
              "w": "헐",
              "r": "heol",
              "m": "whoa / no way (surprise slang)"
            },
            {
              "w": "부럽다",
              "r": "bureopda",
              "m": "I'm jealous / lucky you"
            },
            {
              "w": "심심하다",
              "r": "simsimhada",
              "m": "to be bored"
            }
          ]
        },
        {
          "scene": "At the office near a deadline",
          "title": "A Hand Before the Deadline",
          "speakers": [
            {
              "name": "Hyunwoo",
              "emoji": "💼"
            },
            {
              "name": "You",
              "emoji": "😬"
            }
          ],
          "note": "'쳐내다' literally means 'to swat away,' but coworkers use it to mean 'knock out / clear a chunk of work fast.' Saying you'll '같이 쳐내자' (let's knock it out together) sounds way more natural and team-spirited than the textbook '같이 일을 끝냅시다.'",
          "lines": [
            {
              "s": 1,
              "t": "현우야, 너 지금 많이 바빠?",
              "r": "hyeonuya, neo jigeum mani bappa?",
              "e": "Hyunwoo, are you super busy right now?"
            },
            {
              "s": 0,
              "t": "어, 좀. 왜? 무슨 일 있어?",
              "r": "eo, jom. wae? museun il isseo?",
              "e": "Yeah, a bit. Why? Something up?"
            },
            {
              "s": 1,
              "t": "이거 오늘 6시까지 보내야 되는데 나 혼자 못 끝낼 것 같아.",
              "r": "igeo oneul 6sikkaji bonaeya doeneunde na honja mot kkeunnael geot gata.",
              "e": "I have to send this off by 6 today, and I don't think I can finish it alone."
            },
            {
              "s": 0,
              "t": "헐, 6시? 얼마나 남았는데?",
              "r": "heol, 6si? eolmana namanneunde?",
              "e": "Whoa, 6 o'clock? How much is left?"
            },
            {
              "s": 1,
              "t": "표 정리랑 마지막 장표만 하면 돼. 진짜 미안한데 좀 도와줄 수 있어?",
              "r": "pyo jeongnirang majimak jangpyoman hamyeon dwae. jinjja mianhande jom dowajul su isseo?",
              "e": "Just the tables and the last slide. I'm really sorry, but could you help me out?"
            },
            {
              "s": 0,
              "t": "아 그 정도면 할 만하지. 표는 내가 할게, 넌 장표 해.",
              "r": "a geu jeongdomyeon hal manhaji. pyoneun naega halge, neon jangpyo hae.",
              "e": "Oh, that much is doable. I'll take the tables, you do the slide."
            },
            {
              "s": 1,
              "t": "와 진짜 너밖에 없다. 커피는 내가 쏠게!",
              "r": "wa jinjja neobakke eopda. keopineun naega ssolge!",
              "e": "Wow, you're a lifesaver. Coffee's on me!"
            },
            {
              "s": 0,
              "t": "콜. 자, 빨리 쳐내고 칼퇴하자.",
              "r": "kol. ja, ppalli chyeonaego kaltoehaja.",
              "e": "Deal. Alright, let's knock it out fast and leave right on time."
            }
          ],
          "vocab": [
            {
              "w": "장표",
              "r": "jangpyo",
              "m": "slide / page of a presentation deck"
            },
            {
              "w": "도와주다",
              "r": "dowajuda",
              "m": "to help (someone)"
            },
            {
              "w": "쏘다",
              "r": "ssoda",
              "m": "to treat / pay for (slang)"
            },
            {
              "w": "콜",
              "r": "kol",
              "m": "deal! / I'm in (from English 'call')"
            },
            {
              "w": "쳐내다",
              "r": "chyeonaeda",
              "m": "to knock out / clear work quickly"
            },
            {
              "w": "칼퇴",
              "r": "kaltoe",
              "m": "leaving work exactly on time"
            }
          ]
        },
        {
          "scene": "Catching up over coffee",
          "title": "All About My Weekend",
          "speakers": [
            {
              "name": "Sora",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "😄"
            }
          ],
          "note": "'~더라' (as in '좋더라') is the storyteller's ending — it reports something you personally witnessed or experienced, with a nuance of 'and let me tell you, it was...'. It's perfect for recounting a weekend because it makes your account sound vivid and firsthand, unlike the flat '좋았어'.",
          "lines": [
            {
              "s": 0,
              "t": "주말 잘 보냈어? 뭐 했어?",
              "r": "jumal jal bonaesseo? mwo haesseo?",
              "e": "Did you have a good weekend? What'd you do?"
            },
            {
              "s": 1,
              "t": "야, 말도 마. 나 토요일에 강릉 갔다 왔잖아.",
              "r": "ya, maldo ma. na toyoire gangneung gatda watjana.",
              "e": "Oh man, don't even get me started. I went to Gangneung on Saturday."
            },
            {
              "s": 0,
              "t": "헐 진짜? 당일치기로? 안 힘들었어?",
              "r": "heol jinjja? dangilchigiro? an himdeureosseo?",
              "e": "Whoa, really? As a day trip? Wasn't it exhausting?"
            },
            {
              "s": 1,
              "t": "힘들긴 했는데 바다가 진짜 미쳤더라. 날씨도 완전 좋았고.",
              "r": "himdeulgin haenneunde badaga jinjja michyeotdeora. nalssido wanjeon joatgo.",
              "e": "It was tiring, but the ocean was insane, I'm telling you. The weather was perfect too."
            },
            {
              "s": 0,
              "t": "오 부럽다. 맛있는 것도 먹었어?",
              "r": "o bureopda. masinneun geotdo meogeosseo?",
              "e": "Oh, jealous. Did you eat anything good too?"
            },
            {
              "s": 1,
              "t": "당연하지. 회 먹고 카페 갔는데 거기 뷰가 장난 아니었어.",
              "r": "dangyeonhaji. hoe meokgo kape ganneunde geogi byuga jangnan anieosseo.",
              "e": "Obviously. We had sashimi and went to a cafe with an unreal view."
            },
            {
              "s": 0,
              "t": "와 완전 알찼네. 다음엔 나도 좀 데려가라.",
              "r": "wa wanjeon alchanne. daeumen nado jom deryeogara.",
              "e": "Wow, sounds packed and great. Next time take me too."
            },
            {
              "s": 1,
              "t": "콜. 우리 담에 1박으로 제대로 가자.",
              "r": "kol. uri dame 1bageuro jedaero gaja.",
              "e": "Deal. Let's go properly for an overnight trip next time."
            }
          ],
          "vocab": [
            {
              "w": "당일치기",
              "r": "dangilchigi",
              "m": "a (same-)day trip"
            },
            {
              "w": "미쳤다",
              "r": "michyeotda",
              "m": "crazy/amazing (as a compliment)"
            },
            {
              "w": "회",
              "r": "hoe",
              "m": "raw fish / sashimi"
            },
            {
              "w": "장난 아니다",
              "r": "jangnan anida",
              "m": "no joke / seriously impressive"
            },
            {
              "w": "알차다",
              "r": "alchada",
              "m": "full / packed (well spent)"
            },
            {
              "w": "1박",
              "r": "ilbak",
              "m": "one night (overnight stay)"
            }
          ]
        },
        {
          "scene": "At the dog park",
          "title": "Gushing About Our Dogs",
          "speakers": [
            {
              "name": "Eunji",
              "emoji": "🐶"
            },
            {
              "name": "You",
              "emoji": "🥰"
            }
          ],
          "note": "Dog owners call themselves the dog's '엄마/아빠' and refer to other people's dogs by '~ 누나/형/언니' jokingly. The big in-group word is '댕댕이' — internet-born baby-talk for 강아지 (because the characters look alike). Using it instantly signals you're a real dog person.",
          "lines": [
            {
              "s": 0,
              "t": "어머, 얘 너무 귀엽다! 몇 살이에요?",
              "r": "eomeo, yae neomu gwiyeopda! myeot sarieyo?",
              "e": "Oh my, your dog is so cute! How old is it?"
            },
            {
              "s": 1,
              "t": "이제 두 살이요. 근데 아직도 완전 애기예요.",
              "r": "ije du sariyo. geunde ajikdo wanjeon aegiyeyo.",
              "e": "Just turned two. But it still acts like such a baby."
            },
            {
              "s": 0,
              "t": "헐, 우리 댕댕이도 두 살인데! 종이 뭐예요?",
              "r": "heol, uri daengdaengido du sarinde! jongi mwoyeyo?",
              "e": "Whoa, my pup is two as well! What breed is it?"
            },
            {
              "s": 1,
              "t": "비숑이요. 털 관리가 좀 빡센데 그래도 너무 예뻐요.",
              "r": "bisyongiyo. teol gwalliga jom ppaksende geuraedo neomu yeppeoyo.",
              "e": "A Bichon. The grooming is kind of a pain, but it's just so adorable."
            },
            {
              "s": 0,
              "t": "맞아요 맞아요. 우리 애도 미용 갈 때마다 지갑이 운다니까요.",
              "r": "majayo majayo. uri aedo miyong gal ttaemada jigabi undanikkayo.",
              "e": "So true. Every time mine goes for grooming, my wallet weeps."
            },
            {
              "s": 1,
              "t": "ㅋㅋㅋ 인정. 근데 그 돈이 하나도 안 아까워요.",
              "r": "kkk injeong. geunde geu doni hanado an akkawoyo.",
              "e": "Haha, facts. But honestly I don't regret a single penny of it."
            },
            {
              "s": 0,
              "t": "그쵸. 얘네 보면 하루 피로가 싹 풀려요.",
              "r": "geuchyo. yaene bomyeon haru piroga ssak pullyeoyo.",
              "e": "Right? One look at them and the whole day's exhaustion just melts away."
            },
            {
              "s": 1,
              "t": "진짜요. 우리 애들 친구 하게 산책 또 와요!",
              "r": "jinjjayo. uri aedeul chingu hage sanchaek tto wayo!",
              "e": "Totally. Let's come for a walk again so our kids can be friends!"
            }
          ],
          "vocab": [
            {
              "w": "댕댕이",
              "r": "daengdaengi",
              "m": "doggo / pup (cute slang for dog)"
            },
            {
              "w": "애기",
              "r": "aegi",
              "m": "baby (affectionate for a pet)"
            },
            {
              "w": "빡세다",
              "r": "ppakseda",
              "m": "tough / demanding (slang)"
            },
            {
              "w": "미용",
              "r": "miyong",
              "m": "grooming (for pets)"
            },
            {
              "w": "인정",
              "r": "injeong",
              "m": "true that / I agree (slang)"
            },
            {
              "w": "산책",
              "r": "sanchaek",
              "m": "a walk"
            }
          ]
        },
        {
          "scene": "Booking and heading to a concert",
          "title": "Grabbing Concert Tickets",
          "speakers": [
            {
              "name": "Taeyang",
              "emoji": "🎤"
            },
            {
              "name": "You",
              "emoji": "🎟️"
            }
          ],
          "note": "'피켓팅' (a blend of 'blood' 피 + 'ticketing') is the dreaded ultra-competitive ticket rush for popular shows — so brutal it's a 'bloodbath.' Knowing this word, plus '예매' (advance booking) vs. '현매' (buying at the door), marks you as someone who actually goes to shows in Korea.",
          "lines": [
            {
              "s": 0,
              "t": "야, 그 밴드 콘서트 표 오늘 푼대! 같이 갈래?",
              "r": "ya, geu baendeu konseoteu pyo oneul pundae! gachi gallae?",
              "e": "Hey, that band drops their concert tickets today! Wanna go together?"
            },
            {
              "s": 1,
              "t": "헐 진짜? 몇 시에 열려? 나 완전 가고 싶어.",
              "r": "heol jinjja? myeot sie yeollyeo? na wanjeon gago sipeo.",
              "e": "Whoa, really? What time do they open? I totally wanna go."
            },
            {
              "s": 0,
              "t": "8시 정각. 이거 피켓팅이라 손 빨라야 돼.",
              "r": "8si jeonggak. igeo piketingira son ppallaya dwae.",
              "e": "8 on the dot. It's a bloodbath, so you gotta be quick on the draw."
            },
            {
              "s": 1,
              "t": "오케이, 나도 동시에 예매 돌릴게. 자리 어디로 노려?",
              "r": "okei, nado dongsie yemae dollilge. jari eodiro noryeo?",
              "e": "Okay, I'll try booking at the same time. Which seats are we aiming for?"
            },
            {
              "s": 0,
              "t": "스탠딩은 너무 빡세니까 그냥 2층 앞쪽 노리자.",
              "r": "seutaendingeun neomu ppaksenikka geunyang 2cheung apjjok norija.",
              "e": "Standing's too brutal, so let's just aim for the front of the second floor."
            },
            {
              "s": 1,
              "t": "콜! ...어 잡았다! 나 두 자리 잡았어!",
              "r": "kol! ...eo jabatda! na du jari jabasseo!",
              "e": "Deal! ...Oh, got it! I snagged two seats!"
            },
            {
              "s": 0,
              "t": "대박, 역시 너다. 그럼 표값은 내가 보낼게.",
              "r": "daebak, yeoksi neoda. geureom pyogabeun naega bonaelge.",
              "e": "Amazing, knew I could count on you. I'll send you my half then."
            },
            {
              "s": 1,
              "t": "오케이. 그날 일찍 만나서 밥부터 먹자!",
              "r": "okei. geunal iljjik mannaseo bapbuteo meokja!",
              "e": "Okay. Let's meet up early that day and grab food first!"
            }
          ],
          "vocab": [
            {
              "w": "표 풀다",
              "r": "pyo pulda",
              "m": "to release tickets (for sale)"
            },
            {
              "w": "예매",
              "r": "yemae",
              "m": "advance booking/reservation"
            },
            {
              "w": "피켓팅",
              "r": "piketing",
              "m": "cutthroat ticket rush ('blood-ticketing')"
            },
            {
              "w": "노리다",
              "r": "norida",
              "m": "to aim for / target"
            },
            {
              "w": "스탠딩",
              "r": "seutaending",
              "m": "standing (floor) section"
            },
            {
              "w": "대박",
              "r": "daebak",
              "m": "awesome / jackpot (exclamation)"
            }
          ]
        },
        {
          "scene": "Parting ways after hanging out",
          "title": "See You Soon",
          "speakers": [
            {
              "name": "Minji",
              "emoji": "👋"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'들어가서 연락해' (text me when you get in) is the standard caring goodbye in Korea — you confirm your friend got home safe. Also, '조심히 가' (go carefully) is far more common than a literal '안녕히 가세요' between friends; the latter sounds stiff and formal among peers.",
          "lines": [
            {
              "s": 0,
              "t": "와 벌써 시간 이렇게 됐네. 나 슬슬 가봐야겠다.",
              "r": "wa beolsseo sigan ireoke dwaenne. na seulseul gabwayagetda.",
              "e": "Wow, it's gotten this late already. I should get going soon."
            },
            {
              "s": 1,
              "t": "그러게, 오늘 진짜 재밌었다. 시간 가는 줄 몰랐어.",
              "r": "geureoge, oneul jinjja jaemisseotda. sigan ganeun jul mollasseo.",
              "e": "Yeah, today was so fun. I lost track of time completely."
            },
            {
              "s": 0,
              "t": "맞아. 우리 이렇게 자주 봐야 되는데 말이야.",
              "r": "maja. uri ireoke jaju bwaya doeneunde mariya.",
              "e": "For real. We really should hang out this often, you know."
            },
            {
              "s": 1,
              "t": "그러니까. 다음엔 내가 맛집 알아볼게. 담주 어때?",
              "r": "geureonikka. daeumen naega matjip arabolge. damju eottae?",
              "e": "Right? Next time I'll scout a good restaurant. How about next week?"
            },
            {
              "s": 0,
              "t": "오 좋지. 그럼 단톡방에 날짜 던져줘.",
              "r": "o jochi. geureom dantokbange naljja deonjyeojwo.",
              "e": "Oh, nice. Then throw some dates into our group chat."
            },
            {
              "s": 1,
              "t": "오케이. 너 지하철 타지? 조심히 들어가.",
              "r": "okei. neo jihacheol taji? josimhi deureoga.",
              "e": "Okay. You're taking the subway, right? Get home safe."
            },
            {
              "s": 0,
              "t": "응응. 너도 도착하면 연락하고! 오늘 고마웠어.",
              "r": "eungeung. neodo dochakamyeon yeollakago! oneul gomawosseo.",
              "e": "Yeah yeah. Text me when you get there too! Thanks for today."
            },
            {
              "s": 1,
              "t": "ㅋㅋ 알겠어. 들어가서 톡할게. 다음에 또 보자!",
              "r": "kk algesseo. deureogaseo tokalge. daeume tto boja!",
              "e": "Haha, got it. I'll message when I'm in. Let's do this again soon!"
            }
          ],
          "vocab": [
            {
              "w": "슬슬",
              "r": "seulseul",
              "m": "gradually / time to start (doing)"
            },
            {
              "w": "맛집",
              "r": "matjip",
              "m": "a great/popular eatery"
            },
            {
              "w": "담주",
              "r": "damju",
              "m": "next week (contraction of 다음 주)"
            },
            {
              "w": "단톡방",
              "r": "dantokbang",
              "m": "group chat room (KakaoTalk)"
            },
            {
              "w": "조심히 가",
              "r": "josimhi ga",
              "m": "get home safe (casual goodbye)"
            },
            {
              "w": "톡하다",
              "r": "tokada",
              "m": "to text/message (on KakaoTalk)"
            }
          ]
        }
      ],
      "advanced": [
        {
          "scene": "At a cafe counter",
          "title": "Coffee to go",
          "speakers": [
            {
              "name": "Barista",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'얼죽아' (eoljuga) literally means 'even if I freeze to death, iced americano' — Koreans drink iced coffee even in winter, and this slang is super common. '아아' (aa) is the iced version, '뜨아' (tteua) the hot one. Locals throw these abbreviations around constantly when ordering.",
          "lines": [
            {
              "s": 0,
              "t": "어서 오세요~ 주문 도와드릴게요.",
              "r": "eoseo oseyo~ jumun dowadeurilgeyo.",
              "e": "Welcome~ what can I get you?"
            },
            {
              "s": 1,
              "t": "아아 톨 사이즈 하나요. 아, 테이크아웃이요.",
              "r": "aa tol saijeu hanayo. a, teikeuausiyo.",
              "e": "One tall iced americano. Oh, to go please."
            },
            {
              "s": 0,
              "t": "넵, 시럽이나 샷 추가 있으세요?",
              "r": "nep, sireobina syat chuga isseuseyo?",
              "e": "Got it, any syrup or extra shot?"
            },
            {
              "s": 1,
              "t": "샷 하나만 추가해 주세요. 얼음은 좀 적게요.",
              "r": "syat hanaman chugahae juseyo. eoreumeun jom jeokgeyo.",
              "e": "Just one extra shot. And go light on the ice."
            },
            {
              "s": 0,
              "t": "네~ 진동벨 드릴게요. 결제는 카드세요?",
              "r": "ne~ jindongbel deurilgeyo. gyeoljeneun kadeuseyo?",
              "e": "Sure~ here's your buzzer. Paying by card?"
            },
            {
              "s": 1,
              "t": "네, 카드요. 아 적립도 해주세요.",
              "r": "ne, kadeuyo. a jeongnipdo haejuseyo.",
              "e": "Yeah, card. Oh, can you add points too?"
            },
            {
              "s": 0,
              "t": "번호 뒷자리 불러주시겠어요?",
              "r": "beonho dwitjari bulleojusigesseoyo?",
              "e": "Can you give me the last digits of your number?"
            },
            {
              "s": 1,
              "t": "공팔공칠이요.",
              "r": "gongpalgongchiriyo.",
              "e": "0807."
            },
            {
              "s": 0,
              "t": "적립됐고요~ 음료 나오면 벨 울려요!",
              "r": "jeongnipdwaetgoyo~ eumnyo naomyeon bel ullyeoyo!",
              "e": "Points added~ the buzzer'll ring when it's ready!"
            },
            {
              "s": 1,
              "t": "넵 감사합니다!",
              "r": "nep gamsahamnida!",
              "e": "Got it, thanks!"
            }
          ],
          "vocab": [
            {
              "w": "아아",
              "r": "aa",
              "m": "iced americano (slang abbreviation)"
            },
            {
              "w": "테이크아웃",
              "r": "teikeuaut",
              "m": "takeout / to go"
            },
            {
              "w": "샷 추가",
              "r": "syat chuga",
              "m": "extra espresso shot"
            },
            {
              "w": "진동벨",
              "r": "jindongbel",
              "m": "vibrating pager/buzzer"
            },
            {
              "w": "적립",
              "r": "jeongnip",
              "m": "earning loyalty points"
            },
            {
              "w": "뒷자리",
              "r": "dwitjari",
              "m": "last digits (of a number)"
            }
          ]
        },
        {
          "scene": "On a street, asking a stranger",
          "title": "Where's the station?",
          "speakers": [
            {
              "name": "Stranger",
              "emoji": "🧑"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "Koreans rarely use full sentences for directions — '쭉 가다가' (jjuk gadaga, 'go straight and then') and '바로' (baro, 'right there') do a lot of work. Also '저기요' (jeogiyo) is the polite, universal way to flag down a stranger, way more natural than '실례합니다'.",
          "lines": [
            {
              "s": 1,
              "t": "저기요, 혹시 지하철역이 어느 쪽이에요?",
              "r": "jeogiyo, hoksi jihacheoryeogi eoneu jjogieyo?",
              "e": "Excuse me, which way's the subway station?"
            },
            {
              "s": 0,
              "t": "아 역이요? 이쪽으로 쭉 가시면 돼요.",
              "r": "a yeogiyo? ijjogeuro jjuk gasimyeon dwaeyo.",
              "e": "Oh, the station? Just head straight this way."
            },
            {
              "s": 1,
              "t": "쭉 가다가 어디서 꺾어요?",
              "r": "jjuk gadaga eodiseo kkeokkeoyo?",
              "e": "Go straight and turn where?"
            },
            {
              "s": 0,
              "t": "저 편의점 보이죠? 거기서 왼쪽이요.",
              "r": "jeo pyeonuijeom boijyo? geogiseo oenjjogiyo.",
              "e": "See that convenience store? Left there."
            },
            {
              "s": 1,
              "t": "아 네네. 거기서 멀어요?",
              "r": "a nene. geogiseo meoreoyo?",
              "e": "Ah okay. Is it far from there?"
            },
            {
              "s": 0,
              "t": "아니요, 한 3분? 금방이에요.",
              "r": "aniyo, han sambun? geumbangieyo.",
              "e": "Nah, like 3 minutes? Super close."
            },
            {
              "s": 1,
              "t": "몇 번 출구로 나오면 돼요?",
              "r": "myeot beon chulguro naomyeon dwaeyo?",
              "e": "Which exit do I come out of?"
            },
            {
              "s": 0,
              "t": "그냥 들어가서 안내판 보고 가시면 돼요.",
              "r": "geunyang deureogaseo annaepan bogo gasimyeon dwaeyo.",
              "e": "Just go in and follow the signs."
            },
            {
              "s": 1,
              "t": "감사합니다! 도움 많이 됐어요.",
              "r": "gamsahamnida! doum manhi dwaesseoyo.",
              "e": "Thank you! That helped a lot."
            },
            {
              "s": 0,
              "t": "네~ 조심히 가세요!",
              "r": "ne~ josimhi gaseyo!",
              "e": "Sure~ take care!"
            }
          ],
          "vocab": [
            {
              "w": "저기요",
              "r": "jeogiyo",
              "m": "excuse me (to get attention)"
            },
            {
              "w": "쭉",
              "r": "jjuk",
              "m": "straight (continuously)"
            },
            {
              "w": "꺾다",
              "r": "kkeokkda",
              "m": "to turn (a corner)"
            },
            {
              "w": "편의점",
              "r": "pyeonuijeom",
              "m": "convenience store"
            },
            {
              "w": "금방",
              "r": "geumbang",
              "m": "in no time / very soon"
            },
            {
              "w": "출구",
              "r": "chulgu",
              "m": "exit"
            }
          ]
        },
        {
          "scene": "Monday morning at the office",
          "title": "Monday small talk",
          "speakers": [
            {
              "name": "Jihun",
              "emoji": "🧑‍💼"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'불금' (bulgeum) = 'burning Friday', the Korean TGIF, and '월요병' (woryobyeong, 'Monday sickness') is the universal name for that Monday-blues feeling. Tossing 'ㅋㅋ' into speech and a tired '아 진짜' gives it real native rhythm.",
          "lines": [
            {
              "s": 0,
              "t": "주말 잘 보냈어요? 표정이 영 별로네 ㅋㅋ",
              "r": "jumal jal bonaesseoyo? pyojeongi yeong byeollone kk",
              "e": "Have a good weekend? You look kinda rough, haha."
            },
            {
              "s": 1,
              "t": "아 진짜 월요병 제대로 왔어요.",
              "r": "a jinjja woryobyeong jedaero wasseoyo.",
              "e": "Ugh, the Monday blues hit me hard."
            },
            {
              "s": 0,
              "t": "그니까요. 주말이 왜 이렇게 빨리 가지.",
              "r": "geunikkayo. jumari wae ireoke ppalli gaji.",
              "e": "Right? Why does the weekend fly by so fast."
            },
            {
              "s": 1,
              "t": "그래도 토요일엔 날씨 좋아서 좀 걸었어요.",
              "r": "geuraedo toyoiren nalssi joaseo jom georeosseoyo.",
              "e": "At least Saturday was nice, so I walked a bit."
            },
            {
              "s": 0,
              "t": "맞아 어제는 좀 풀렸죠? 미세먼지도 없고.",
              "r": "maja eojeneun jom pullyeotjyo? misemeonjido eopgo.",
              "e": "Yeah, yesterday warmed up, right? No fine dust either."
            },
            {
              "s": 1,
              "t": "근데 오늘 아침엔 또 쌀쌀하더라고요.",
              "r": "geunde oneul achimen tto ssalssalhadeoragoyo.",
              "e": "But this morning it got chilly again."
            },
            {
              "s": 0,
              "t": "환절기라 그래요. 감기 조심해요.",
              "r": "hwanjeolgira geuraeyo. gamgi josimhaeyo.",
              "e": "It's the change of seasons. Watch out for colds."
            },
            {
              "s": 1,
              "t": "그쵸. 아 커피 안 마시면 못 버틸 듯.",
              "r": "geuchyo. a keopi an masimyeon mot beotil deut.",
              "e": "For real. I won't survive without coffee."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 내려올 때 제 것도 하나 부탁해요~",
              "r": "kk naeryeool ttae je geotdo hana butakhaeyo~",
              "e": "Haha, grab one for me on your way back~"
            }
          ],
          "vocab": [
            {
              "w": "월요병",
              "r": "woryobyeong",
              "m": "the Monday blues"
            },
            {
              "w": "풀리다",
              "r": "pullida",
              "m": "to warm up (weather)"
            },
            {
              "w": "미세먼지",
              "r": "misemeonji",
              "m": "fine dust / air pollution"
            },
            {
              "w": "쌀쌀하다",
              "r": "ssalssalhada",
              "m": "to be chilly"
            },
            {
              "w": "환절기",
              "r": "hwanjeolgi",
              "m": "change of seasons"
            },
            {
              "w": "버티다",
              "r": "beotida",
              "m": "to hold out / endure"
            }
          ]
        },
        {
          "scene": "Texting / chatting with a friend",
          "title": "New place this weekend",
          "speakers": [
            {
              "name": "Minji",
              "emoji": "👭"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'핫플' (hatpeul) is short for 'hot place' — the trendy spot everyone's posting about. '오픈빨' (opeunppal, 'opening hype') is when a place is only good because it's new. '웨이팅' (weiting) is the borrowed word for waiting in line at a restaurant, used as a noun: 웨이팅 있다 = 'there's a wait'.",
          "lines": [
            {
              "s": 0,
              "t": "야 이번 주말에 뭐 해? 약속 있어?",
              "r": "ya ibeon jumare mwo hae? yaksok isseo?",
              "e": "Hey, what're you doing this weekend? You busy?"
            },
            {
              "s": 1,
              "t": "아직 없는데, 왜 뭐 하게?",
              "r": "ajik eomneunde, wae mwo hage?",
              "e": "Nothing yet, why, what's up?"
            },
            {
              "s": 0,
              "t": "성수에 새로 생긴 데 가자. 완전 핫플이래.",
              "r": "seongsue saero saenggin de gaja. wanjeon hatpeurirae.",
              "e": "Let's hit that new spot in Seongsu. Total hot place, apparently."
            },
            {
              "s": 1,
              "t": "오 좋지. 근데 웨이팅 엄청 길지 않아?",
              "r": "o jochi. geunde weiting eomcheong gilji ana?",
              "e": "Ooh nice. But isn't the wait crazy long?"
            },
            {
              "s": 0,
              "t": "그래서 오픈런 해야 돼. 11시쯤 만날까?",
              "r": "geuraeseo opeunneon haeya dwae. yeolhansijjeum mannalkka?",
              "e": "That's why we gotta go right at open. Meet around 11?"
            },
            {
              "s": 1,
              "t": "콜. 근데 거기 뭐가 맛있대?",
              "r": "kol. geunde geogi mwoga masitdae?",
              "e": "Deal. So what's good there?"
            },
            {
              "s": 0,
              "t": "파스타가 유명한데 디저트도 미쳤대.",
              "r": "paseutaga yumyeonghande dijeoteudo michyeotdae.",
              "e": "The pasta's famous, but the dessert's insane too, they say."
            },
            {
              "s": 1,
              "t": "오 기대된다. 오픈빨인지 진짜인지 가서 보자 ㅋㅋ",
              "r": "o gidaedoenda. opeunpparinji jinjjainji gaseo boja kk",
              "e": "Ooh, excited. Let's see if it's real or just opening hype, lol."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 일단 가보고 별로면 딴 데 가지 뭐.",
              "r": "kk ildan gabogo byeollomyeon ttan de gaji mwo.",
              "e": "Haha, let's just go, and if it's meh we'll go somewhere else."
            },
            {
              "s": 1,
              "t": "오케이 토요일 11시! 내가 줄 서 있을게.",
              "r": "okei toyoil yeolhansi! naega jul seo isseulge.",
              "e": "Okay, Saturday 11! I'll go line up."
            }
          ],
          "vocab": [
            {
              "w": "핫플",
              "r": "hatpeul",
              "m": "trendy/hot spot (slang)"
            },
            {
              "w": "웨이팅",
              "r": "weiting",
              "m": "wait/line at a restaurant"
            },
            {
              "w": "오픈런",
              "r": "opeunneon",
              "m": "rushing in right at opening"
            },
            {
              "w": "콜",
              "r": "kol",
              "m": "deal / I'm in (slang)"
            },
            {
              "w": "미쳤다",
              "r": "michyeotda",
              "m": "insane / amazing (slang)"
            },
            {
              "w": "오픈빨",
              "r": "opeunppal",
              "m": "hype just from being newly opened"
            }
          ]
        },
        {
          "scene": "Two friends chatting on the couch",
          "title": "That drama finale",
          "speakers": [
            {
              "name": "Sora",
              "emoji": "📺"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'본방사수' (bonbangsasu) means 'defending the live broadcast' — watching a show in real time so you don't get spoiled. '떡밥' (tteokbap, literally 'rice-cake bait') is fandom slang for plot clues/foreshadowing, and '회수하다' (hoesuhada) is 'to pay off' those clues. Drama fans live by these words.",
          "lines": [
            {
              "s": 0,
              "t": "야 너 어제 마지막 회 봤어?? 나 진짜 울었잖아.",
              "r": "ya neo eoje majimak hoe bwasseo?? na jinjja ureotjana.",
              "e": "Hey, did you watch the finale last night?? I literally cried."
            },
            {
              "s": 1,
              "t": "봤지! 본방사수했어. 마지막 반전 미쳤더라.",
              "r": "bwatji! bonbangsasuhaesseo. majimak banjeon michyeotdeora.",
              "e": "Of course! Watched it live. That last twist was insane."
            },
            {
              "s": 0,
              "t": "그치?? 떡밥을 그렇게 다 회수할 줄 몰랐어.",
              "r": "geuchi?? tteokbabeul geureoke da hoesuhal jul mollasseo.",
              "e": "Right?? I didn't expect every clue to pay off like that."
            },
            {
              "s": 1,
              "t": "근데 남주 죽는 건 좀 너무했어 아니야?",
              "r": "geunde namju jungneun geon jom neomuhaesseo aniya?",
              "e": "But killing off the male lead was a bit much, no?"
            },
            {
              "s": 0,
              "t": "그니까! 작가가 우리한테 왜 그래 진짜.",
              "r": "geunikka! jakgaga urihante wae geurae jinjja.",
              "e": "Right! Why's the writer doing this to us."
            },
            {
              "s": 1,
              "t": "열린 결말이라 시즌2 나올 수도 있지 않을까?",
              "r": "yeollin gyeolmarira sijeun iro naol sudo itji aneulkka?",
              "e": "It was an open ending, so maybe a season 2?"
            },
            {
              "s": 0,
              "t": "오 제발. 나 OST부터 무한반복 중이야.",
              "r": "o jebal. na oeseuteu buteo muhanbanbok jungiya.",
              "e": "Oh please. I've got the OST on repeat already."
            },
            {
              "s": 1,
              "t": "ㅋㅋ 나도. 여주 연기 이번에 진짜 물올랐더라.",
              "r": "kk nado. yeoju yeongi ibeone jinjja murollatdeora.",
              "e": "Haha same. The lead actress was on fire this time."
            },
            {
              "s": 0,
              "t": "인정. 연기 대상 못 받으면 안 된다 진짜.",
              "r": "injeong. yeongi daesang mot badeumyeon an doenda jinjja.",
              "e": "Agreed. She'd better win the acting award."
            },
            {
              "s": 1,
              "t": "ㅋㅋ 우리 다음 작품도 같이 보자.",
              "r": "kk uri daeum jakpumdo gachi boja.",
              "e": "Haha let's watch the next one together too."
            }
          ],
          "vocab": [
            {
              "w": "본방사수",
              "r": "bonbangsasu",
              "m": "watching a show live (no spoilers)"
            },
            {
              "w": "반전",
              "r": "banjeon",
              "m": "plot twist"
            },
            {
              "w": "떡밥",
              "r": "tteokbap",
              "m": "plot clue / foreshadowing (slang)"
            },
            {
              "w": "회수하다",
              "r": "hoesuhada",
              "m": "to pay off (a setup/clue)"
            },
            {
              "w": "열린 결말",
              "r": "yeollin gyeolmal",
              "m": "open ending"
            },
            {
              "w": "물오르다",
              "r": "muroreuda",
              "m": "to be at one's peak/on fire"
            }
          ]
        },
        {
          "scene": "Leaving the office together after work",
          "title": "Drinks after work",
          "speakers": [
            {
              "name": "Seonbae",
              "emoji": "🍻"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "'한잔하다' (hanjanhada, 'have a drink') is the standard invite for after-work drinks, but '치맥' (chimaek = chicken + beer) and '1차/2차' (ilcha/icha, 'first round/second round') are essential nightlife vocab. '딱 한잔만' (just one drink) is almost always a polite lie — everyone knows it'll be more.",
          "lines": [
            {
              "s": 0,
              "t": "오늘 고생했는데 우리 한잔할까?",
              "r": "oneul gosaenghaenneunde uri hanjanhalkka?",
              "e": "We worked hard today — wanna grab a drink?"
            },
            {
              "s": 1,
              "t": "오 좋아요. 안 그래도 출출했는데.",
              "r": "o joayo. an geuraedo chulchulhaenneunde.",
              "e": "Oh nice. I was getting kinda hungry anyway."
            },
            {
              "s": 0,
              "t": "치맥 어때? 회사 앞에 새로 생긴 데 있던데.",
              "r": "chimaek eottae? hoesa ape saero saenggin de itdeonde.",
              "e": "Chicken and beer? There's a new place in front of the office."
            },
            {
              "s": 1,
              "t": "콜이요. 근데 저 내일 일찍 출근이라 딱 한잔만요.",
              "r": "koriyo. geunde jeo naeil iljjik chulgeunira ttak hanjanmanyo.",
              "e": "I'm in. But I've got an early start, so just one drink."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 다들 그렇게 말하고 2차 가더라.",
              "r": "kk dadeul geureoke malhago icha gadeora.",
              "e": "Haha everyone says that and ends up at round two."
            },
            {
              "s": 1,
              "t": "아 진짜 오늘은 안 돼요! 선배가 또 꼬시지 마요.",
              "r": "a jinjja oneureun an dwaeyo! seonbaega tto kkosiji mayo.",
              "e": "No, seriously, not today! Don't go tempting me again."
            },
            {
              "s": 0,
              "t": "알았어 알았어. 일단 가서 시원하게 한 잔 ㄱㄱ.",
              "r": "arasseo arasseo. ildan gaseo siwonhage han jan gg.",
              "e": "Okay okay. Let's just go and have a cold one."
            },
            {
              "s": 1,
              "t": "좋죠. 안주는 제가 쏠게요.",
              "r": "jochyo. anjuneun jega ssolgeyo.",
              "e": "Sounds good. The food's on me."
            },
            {
              "s": 0,
              "t": "오 웬일이야~ 그럼 술은 내가 산다.",
              "r": "o weniriya~ geureom sureun naega sanda.",
              "e": "Whoa, what's the occasion~ Then drinks are on me."
            },
            {
              "s": 1,
              "t": "콜! 빨리 가요, 배고파 죽겠어요.",
              "r": "kol! ppalli gayo, baegopa jukgesseoyo.",
              "e": "Deal! Let's hurry, I'm starving."
            }
          ],
          "vocab": [
            {
              "w": "한잔하다",
              "r": "hanjanhada",
              "m": "to grab a drink"
            },
            {
              "w": "출출하다",
              "r": "chulchulhada",
              "m": "to be a bit hungry/peckish"
            },
            {
              "w": "치맥",
              "r": "chimaek",
              "m": "fried chicken + beer"
            },
            {
              "w": "2차",
              "r": "icha",
              "m": "second round (next venue)"
            },
            {
              "w": "꼬시다",
              "r": "kkosida",
              "m": "to tempt / talk into"
            },
            {
              "w": "쏘다",
              "r": "ssoda",
              "m": "to treat / pay for (slang)"
            }
          ]
        },
        {
          "scene": "On a busy street",
          "title": "Running Into an Old Friend",
          "speakers": [
            {
              "name": "Jiho",
              "emoji": "😄"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "When you bump into someone, native speakers often say '이게 얼마 만이야?' (literally 'how long has it been?') rather than a stiff '오랜만이에요.' Also, '잘 지냈어?' drops the subject entirely and is way more natural than a full sentence.",
          "lines": [
            {
              "s": 0,
              "t": "어? 야, 너 지호 아니야?",
              "r": "eo? ya, neo jiho aniya?",
              "e": "Huh? Hey, aren't you Jiho?"
            },
            {
              "s": 1,
              "t": "헐 대박, 이게 진짜 얼마 만이야!",
              "r": "heol daebak, ige jinjja eolma maniya!",
              "e": "Whoa, no way—how long has it been?!"
            },
            {
              "s": 0,
              "t": "그러게, 한 이 년 됐나? 너 하나도 안 변했다.",
              "r": "geureoge, han i nyeon dwaenna? neo hanado an byeonhaetda.",
              "e": "Right? Like two years? You haven't changed a bit."
            },
            {
              "s": 1,
              "t": "에이, 너야말로. 요즘 뭐 하고 지내?",
              "r": "ei, neoyamallo. yojeum mwo hago jinae?",
              "e": "Oh please, look who's talking. What've you been up to lately?"
            },
            {
              "s": 0,
              "t": "나 회사 옮겼어. 이 근처에서 일해.",
              "r": "na hoesa omgyeosseo. i geuncheoeseo ilhae.",
              "e": "I switched jobs. I work right around here now."
            },
            {
              "s": 1,
              "t": "오 진짜? 그럼 자주 보겠네.",
              "r": "o jinjja? geureom jaju bogetne.",
              "e": "Oh for real? Then we'll probably run into each other a lot."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 그러게. 야, 우리 조만간 밥 한번 먹자.",
              "r": "kk geureoge. ya, uri jomangan bap hanbeon meokja.",
              "e": "Haha right. Hey, let's grab a meal sometime soon."
            },
            {
              "s": 1,
              "t": "콜. 나 번호 그대로니까 연락해.",
              "r": "kol. na beonho geudaeronikka yeollakhae.",
              "e": "Deal. My number's the same, so hit me up."
            },
            {
              "s": 0,
              "t": "오케이, 카톡 할게! 들어가.",
              "r": "okei, katok halge! deureoga.",
              "e": "Okay, I'll text you on KakaoTalk! Take care."
            }
          ],
          "vocab": [
            {
              "w": "얼마 만이야",
              "r": "eolma maniya",
              "m": "how long has it been (since we met)"
            },
            {
              "w": "대박",
              "r": "daebak",
              "m": "wow / no way (exclamation)"
            },
            {
              "w": "변했다",
              "r": "byeonhaetda",
              "m": "(you) changed / look different"
            },
            {
              "w": "조만간",
              "r": "jomangan",
              "m": "sometime soon / before long"
            },
            {
              "w": "콜",
              "r": "kol",
              "m": "deal / I'm in (slang from 'call')"
            },
            {
              "w": "들어가",
              "r": "deureoga",
              "m": "take care / go home safe (casual sign-off)"
            }
          ]
        },
        {
          "scene": "At a bar after work",
          "title": "Venting About a Coworker",
          "speakers": [
            {
              "name": "Sora",
              "emoji": "🍺"
            },
            {
              "name": "You",
              "emoji": "😤"
            }
          ],
          "note": "'뒤통수치다' (literally 'to hit the back of the head') means to betray or stab someone in the back—super common when venting. '진짜 어이없어' is the go-to phrase for 'I can't even believe this' when someone does something outrageous.",
          "lines": [
            {
              "s": 1,
              "t": "야, 나 오늘 회사에서 진짜 어이없는 일 있었어.",
              "r": "ya, na oneul hoesaeseo jinjja eoineomneun il isseosseo.",
              "e": "Ugh, something so ridiculous happened at work today."
            },
            {
              "s": 0,
              "t": "왜왜? 무슨 일인데?",
              "r": "waewae? museun ilinde?",
              "e": "What, what? What happened?"
            },
            {
              "s": 1,
              "t": "내가 다 한 프로젝트를 걔가 자기가 했다고 윗사람한테 말했대.",
              "r": "naega da han peurojekteureul gyaega jagiga haetdago witsaramhante malhaetdae.",
              "e": "I did the whole project, and he told the boss he did it."
            },
            {
              "s": 0,
              "t": "헐, 진짜? 완전 뒤통수쳤네.",
              "r": "heol, jinjja? wanjeon dwitongsuchyeotne.",
              "e": "What?! That's a total stab in the back."
            },
            {
              "s": 1,
              "t": "그러니까. 근데 일 터지니까 또 나한테 떠넘기더라?",
              "r": "geureonikka. geunde il teojinikka tto nahante tteoneomgideora?",
              "e": "Right? And then when it blew up, he pinned the blame on me again."
            },
            {
              "s": 0,
              "t": "와 진짜 양심도 없다. 그냥 확 들이받지 그랬어.",
              "r": "wa jinjja yangsimdo eopda. geunyang hwak deuribatji geuraesseo.",
              "e": "Wow, no shame at all. You should've just called him out right there."
            },
            {
              "s": 1,
              "t": "참았지 뭐. 괜히 나만 이상한 사람 될까 봐.",
              "r": "chamatji mwo. gwaenhi naman isanghan saram doelkka bwa.",
              "e": "I just held it in. Didn't wanna come off as the crazy one."
            },
            {
              "s": 0,
              "t": "에휴, 속상했겠다. 오늘은 그냥 마시자.",
              "r": "ehyu, soksanghaetgetda. oneureun geunyang masija.",
              "e": "Aw, that must've sucked. Let's just drink tonight."
            },
            {
              "s": 1,
              "t": "콜. 너랑 얘기하니까 좀 풀린다.",
              "r": "kol. neorang yaegihanikka jom pullinda.",
              "e": "Deal. Talking to you actually makes me feel a bit better."
            }
          ],
          "vocab": [
            {
              "w": "어이없다",
              "r": "eoineopda",
              "m": "absurd / unbelievable (in a bad way)"
            },
            {
              "w": "뒤통수치다",
              "r": "dwitongsuchida",
              "m": "to stab in the back / betray"
            },
            {
              "w": "떠넘기다",
              "r": "tteoneomgida",
              "m": "to pass off (blame/work) onto someone"
            },
            {
              "w": "양심도 없다",
              "r": "yangsimdo eopda",
              "m": "to have no conscience / no shame"
            },
            {
              "w": "들이받다",
              "r": "deuribatda",
              "m": "to confront head-on / clash with someone"
            },
            {
              "w": "풀리다",
              "r": "pullida",
              "m": "(stress/anger) to ease up, get resolved"
            }
          ]
        },
        {
          "scene": "Apartment hunting",
          "title": "Which Apartment to Rent",
          "speakers": [
            {
              "name": "Minju",
              "emoji": "🏠"
            },
            {
              "name": "You",
              "emoji": "🤔"
            }
          ],
          "note": "'역세권' (station-area) is a huge selling point in Korean real estate—anything within walking distance of a subway station. Koreans also say '집값에 다 반영돼' (it's all reflected in the price) to note that convenience costs more.",
          "lines": [
            {
              "s": 0,
              "t": "둘 중에 어디가 더 나을 것 같아?",
              "r": "dul junge eodiga deo naeul geot gata?",
              "e": "Which of the two do you think is better?"
            },
            {
              "s": 1,
              "t": "음, 난 역 가까운 데가 끌리긴 해.",
              "r": "eum, nan yeok gakkaun dega kkeulligin hae.",
              "e": "Hmm, I'm kinda leaning toward the one near the station."
            },
            {
              "s": 0,
              "t": "근데 거긴 좀 좁잖아. 평수 차이 꽤 나던데.",
              "r": "geunde geogin jom jopjana. pyeongsu chai kkwae nadeonde.",
              "e": "But that one's a bit cramped. The size difference is pretty big."
            },
            {
              "s": 1,
              "t": "그건 그래. 근데 역세권이면 출퇴근이 편하잖아.",
              "r": "geugeon geurae. geunde yeoksegwonimyeon chultoegeuni pyeonhajana.",
              "e": "True. But if it's near the station, the commute is so much easier."
            },
            {
              "s": 0,
              "t": "넓은 집은 걸어서 한 십오 분 걸린다며.",
              "r": "neolbeun jibeun georeoseo han sibo bun geollindamyeo.",
              "e": "The bigger place is like a 15-minute walk, you said."
            },
            {
              "s": 1,
              "t": "맞아. 매일 그 거리 걷는 거 은근 빡세.",
              "r": "maja. maeil geu geori geotneun geo eungeun ppakse.",
              "e": "Yeah. Walking that every day is secretly pretty rough."
            },
            {
              "s": 0,
              "t": "그래도 집 넓으면 삶의 질이 다르긴 해.",
              "r": "geuraedo jip neolbeumyeon salmui jiri dareugin hae.",
              "e": "Still, a bigger place makes a real difference in quality of life."
            },
            {
              "s": 1,
              "t": "아 진짜 고민되네. 역 가까운 건 월세도 더 비싸고.",
              "r": "a jinjja gomindoene. yeok gakkaun geon wolsedo deo bissago.",
              "e": "Ugh, tough call. The one near the station has higher rent too."
            },
            {
              "s": 0,
              "t": "그건 다 집값에 반영되는 거지 뭐.",
              "r": "geugeon da jipgape banyeongdoeneun geoji mwo.",
              "e": "Yeah, that convenience is all baked into the price."
            },
            {
              "s": 1,
              "t": "일단 둘 다 한 번 더 보고 결정하자.",
              "r": "ildan dul da han beon deo bogo gyeoljeonghaja.",
              "e": "Let's see both one more time and then decide."
            }
          ],
          "vocab": [
            {
              "w": "역세권",
              "r": "yeoksegwon",
              "m": "area within walking distance of a station"
            },
            {
              "w": "평수",
              "r": "pyeongsu",
              "m": "floor area / size (in pyeong)"
            },
            {
              "w": "출퇴근",
              "r": "chultoegeun",
              "m": "commute (to and from work)"
            },
            {
              "w": "은근",
              "r": "eungeun",
              "m": "secretly / surprisingly (more than expected)"
            },
            {
              "w": "빡세다",
              "r": "ppakseda",
              "m": "tough / grueling (slang)"
            },
            {
              "w": "월세",
              "r": "wolse",
              "m": "monthly rent"
            }
          ]
        },
        {
          "scene": "At a Korean restaurant",
          "title": "Ordering and Asking the Staff",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🧑‍🍳"
            },
            {
              "name": "You",
              "emoji": "🍽️"
            }
          ],
          "note": "'안 맵게 해주세요' (please make it not spicy) is essential. Also '여기요!' is the standard way to call staff—polite but casual. '리필 되나요?' asks if a side dish/drink can be refilled for free, which is common with banchan.",
          "lines": [
            {
              "s": 1,
              "t": "여기요~ 주문할게요!",
              "r": "yeogiyo~ jumunhalgeyo!",
              "e": "Excuse me—we'd like to order!"
            },
            {
              "s": 0,
              "t": "네, 주문하시겠어요?",
              "r": "ne, jumunhasigesseoyo?",
              "e": "Sure, ready to order?"
            },
            {
              "s": 1,
              "t": "여기 제육볶음 하나랑 된장찌개 둘 주세요.",
              "r": "yeogi jeyukbokkeum hanarang doenjangjjigae dul juseyo.",
              "e": "We'll have one spicy pork stir-fry and two soybean stews."
            },
            {
              "s": 0,
              "t": "네, 혹시 매운 거 괜찮으세요?",
              "r": "ne, hoksi maeun geo gwaenchaneuseyo?",
              "e": "Got it. Is spicy food okay for you?"
            },
            {
              "s": 1,
              "t": "아, 하나는 안 맵게 해주실 수 있어요?",
              "r": "a, hananeun an maepge haejusil su isseoyo?",
              "e": "Oh, could you make one of them not spicy?"
            },
            {
              "s": 0,
              "t": "그럼요, 덜 맵게 해드릴게요.",
              "r": "geureomyo, deol maepge haedeurilgeyo.",
              "e": "Of course, I'll make it milder for you."
            },
            {
              "s": 1,
              "t": "감사해요. 그리고 밑반찬 리필 되나요?",
              "r": "gamsahaeyo. geurigo mitbanchan ripil doenayo?",
              "e": "Thanks. And are the side dishes free refill?"
            },
            {
              "s": 0,
              "t": "네, 셀프바에서 가져다 드시면 돼요.",
              "r": "ne, selpeubaeseo gajyeoda deusimyeon dwaeyo.",
              "e": "Yes, just help yourself at the self-serve bar."
            },
            {
              "s": 1,
              "t": "오 좋아요. 공깃밥도 두 개 추가요!",
              "r": "o joayo. gonggitbapdo du gae chugayo!",
              "e": "Oh, nice. And add two bowls of rice too!"
            },
            {
              "s": 0,
              "t": "네, 바로 준비해 드릴게요!",
              "r": "ne, baro junbihae deurilgeyo!",
              "e": "Sure, I'll get that ready right away!"
            }
          ],
          "vocab": [
            {
              "w": "여기요",
              "r": "yeogiyo",
              "m": "excuse me (to call staff)"
            },
            {
              "w": "제육볶음",
              "r": "jeyukbokkeum",
              "m": "spicy stir-fried pork"
            },
            {
              "w": "안 맵게",
              "r": "an maepge",
              "m": "not spicy / mild"
            },
            {
              "w": "밑반찬",
              "r": "mitbanchan",
              "m": "side dishes (banchan)"
            },
            {
              "w": "리필",
              "r": "ripil",
              "m": "refill"
            },
            {
              "w": "공깃밥",
              "r": "gonggitbap",
              "m": "a bowl of (extra) rice"
            }
          ]
        },
        {
          "scene": "In a clothing store",
          "title": "Asking for a Different Size",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "👕"
            },
            {
              "name": "You",
              "emoji": "🛍️"
            }
          ],
          "note": "'입어봐도 돼요?' (can I try it on?) is the must-know fitting-room phrase. Koreans size loosely with '한 사이즈 크게/작게' (one size up/down) rather than exact numbers, and '딱 맞아요' means 'it fits just right.'",
          "lines": [
            {
              "s": 1,
              "t": "저기요, 이거 다른 사이즈도 있어요?",
              "r": "jeogiyo, igeo dareun saijeudo isseoyo?",
              "e": "Excuse me, do you have this in other sizes?"
            },
            {
              "s": 0,
              "t": "네, 어떤 사이즈 찾으세요?",
              "r": "ne, eotteon saijeu chajeuseyo?",
              "e": "Yes, what size are you looking for?"
            },
            {
              "s": 1,
              "t": "이거 한 사이즈 큰 걸로 볼 수 있을까요?",
              "r": "igeo han saijeu keun geollo bol su isseulkkayo?",
              "e": "Could I see this one size up?"
            },
            {
              "s": 0,
              "t": "잠시만요, 가져다 드릴게요.",
              "r": "jamsimanyo, gajyeoda deurilgeyo.",
              "e": "One moment, I'll bring it for you."
            },
            {
              "s": 1,
              "t": "감사해요. 혹시 입어봐도 돼요?",
              "r": "gamsahaeyo. hoksi ibeobwado dwaeyo?",
              "e": "Thanks. Can I try it on, by the way?"
            },
            {
              "s": 0,
              "t": "그럼요, 피팅룸 저쪽이에요.",
              "r": "geureomyo, pitingrum jeojjogieyo.",
              "e": "Of course, the fitting room is over there."
            },
            {
              "s": 1,
              "t": "(잠시 후) 음, 이게 딱 맞네요!",
              "r": "(jamsi hu) eum, ige ttak matneyo!",
              "e": "(a moment later) Hmm, this fits just right!"
            },
            {
              "s": 0,
              "t": "잘 어울리세요. 색도 잘 받으시네요.",
              "r": "jal eoulliseyo. saekdo jal badeusineyo.",
              "e": "It suits you. The color looks great on you too."
            },
            {
              "s": 1,
              "t": "그쵸? 그럼 이걸로 할게요.",
              "r": "geuchyo? geureom igeollo halgeyo.",
              "e": "Right? Okay, I'll take this one."
            },
            {
              "s": 0,
              "t": "네, 계산 도와드릴게요.",
              "r": "ne, gyesan dowadeurilgeyo.",
              "e": "Sure, I'll help you check out."
            }
          ],
          "vocab": [
            {
              "w": "사이즈",
              "r": "saijeu",
              "m": "size"
            },
            {
              "w": "한 사이즈 크게",
              "r": "han saijeu keuge",
              "m": "one size bigger"
            },
            {
              "w": "입어보다",
              "r": "ibeoboda",
              "m": "to try on (clothes)"
            },
            {
              "w": "피팅룸",
              "r": "pitingrum",
              "m": "fitting room"
            },
            {
              "w": "딱 맞다",
              "r": "ttak matda",
              "m": "to fit perfectly"
            },
            {
              "w": "잘 어울리다",
              "r": "jal eoullida",
              "m": "to suit / look good on someone"
            }
          ]
        },
        {
          "scene": "At a convenience store",
          "title": "Paying at the Convenience Store",
          "speakers": [
            {
              "name": "Clerk",
              "emoji": "🏪"
            },
            {
              "name": "You",
              "emoji": "💳"
            }
          ],
          "note": "'봉투 드릴까요?' (shall I give you a bag?) always comes up since bags cost money now. '데워 드릴까요?' means 'shall I heat it up?'—they microwave your food for you. '포인트 적립' is earning points on a membership card.",
          "lines": [
            {
              "s": 0,
              "t": "봉투 드릴까요?",
              "r": "bongtu deurilkkayo?",
              "e": "Would you like a bag?"
            },
            {
              "s": 1,
              "t": "네, 하나 주세요. 얼마예요?",
              "r": "ne, hana juseyo. eolmayeyo?",
              "e": "Yes, one please. How much is it?"
            },
            {
              "s": 0,
              "t": "봉투는 백 원이에요. 도시락 데워 드릴까요?",
              "r": "bongtuneun baek wonieyo. dosirak dewo deurilkkayo?",
              "e": "The bag is 100 won. Shall I heat up the lunchbox?"
            },
            {
              "s": 1,
              "t": "아 네, 데워 주세요.",
              "r": "a ne, dewo juseyo.",
              "e": "Oh yes, please heat it up."
            },
            {
              "s": 0,
              "t": "네, 잠시만요. 포인트 적립하세요?",
              "r": "ne, jamsimanyo. pointeu jeongniphaseyo?",
              "e": "Sure, one sec. Do you want to collect points?"
            },
            {
              "s": 1,
              "t": "네, 여기 전화번호로 해주세요.",
              "r": "ne, yeogi jeonhwabeonhoro haejuseyo.",
              "e": "Yes, with this phone number please."
            },
            {
              "s": 0,
              "t": "적립됐고요, 다 해서 칠천이백 원입니다.",
              "r": "jeongnipdwaetgoyo, da haeseo chilcheonibaek wonimnida.",
              "e": "Points added, and that comes to 7,200 won total."
            },
            {
              "s": 1,
              "t": "카드로 할게요.",
              "r": "kadeuro halgeyo.",
              "e": "I'll pay by card."
            },
            {
              "s": 0,
              "t": "네, 여기 찍어주세요. 데운 거 조심하세요.",
              "r": "ne, yeogi jjigeojuseyo. deun geo josimhaseyo.",
              "e": "Okay, tap here please. Careful, the heated one's hot."
            },
            {
              "s": 1,
              "t": "넵, 감사합니다!",
              "r": "nep, gamsahamnida!",
              "e": "Got it, thank you!"
            }
          ],
          "vocab": [
            {
              "w": "봉투",
              "r": "bongtu",
              "m": "(plastic/paper) bag"
            },
            {
              "w": "데우다",
              "r": "deuuda",
              "m": "to heat up / warm up (food)"
            },
            {
              "w": "도시락",
              "r": "dosirak",
              "m": "lunchbox / packed meal"
            },
            {
              "w": "포인트 적립",
              "r": "pointeu jeongnip",
              "m": "earning/collecting points"
            },
            {
              "w": "찍다",
              "r": "jjikda",
              "m": "to tap/scan (a card)"
            },
            {
              "w": "넵",
              "r": "nep",
              "m": "yep / got it (casual yes)"
            }
          ]
        },
        {
          "scene": "In a taxi",
          "title": "Catching a Taxi Home",
          "speakers": [
            {
              "name": "Driver",
              "emoji": "🚕"
            },
            {
              "name": "You",
              "emoji": "🙋"
            }
          ],
          "note": "Drivers love a casual '아저씨' (ajeossi) to get attention, but younger riders increasingly just say '기사님' (gisanim), which is more polite. Also, '알아서' (araseo) means 'as you see fit / use your judgment' — handing the decision to the driver, which sounds natural and trusting rather than bossy.",
          "lines": [
            {
              "s": 0,
              "t": "어서 오세요, 어디로 모실까요?",
              "r": "eoseo oseyo, eodiro mosilkkayo?",
              "e": "Welcome, where can I take you?"
            },
            {
              "s": 1,
              "t": "아, 강남역 쪽으로요. 11번 출구 앞에 세워 주시면 돼요.",
              "r": "a, gangnamyeok jjogeuro-yo. sibilbeon chulgu ape sewo jusimyeon dwaeyo.",
              "e": "Oh, towards Gangnam Station please. You can just drop me by Exit 11."
            },
            {
              "s": 0,
              "t": "네, 지금 이 시간엔 좀 막힐 텐데 큰길로 갈까요?",
              "r": "ne, jigeum i siganen jom makil tende keungillo galkkayo?",
              "e": "Sure. It's gonna be a bit jammed this time of day — should I take the main road?"
            },
            {
              "s": 1,
              "t": "음… 기사님이 더 잘 아시니까 그냥 알아서 빠른 길로 가 주세요.",
              "r": "eum… gisanimi deo jal asinikka geunyang araseo ppareun gillo ga juseyo.",
              "e": "Hmm, you know better than me, so just go whatever way's fastest."
            },
            {
              "s": 0,
              "t": "오케이. 오늘 날씨 진짜 덥죠? 손님은 일 끝나고 가시는 거예요?",
              "r": "okei. oneul nalssi jinjja deopjyo? sonnimeun il kkeunnago gasineun geoyeyo?",
              "e": "Okay. Crazy hot today, right? You heading home from work?"
            },
            {
              "s": 1,
              "t": "네, 야근하고 이제 퇴근하는 거예요. 완전 녹초예요.",
              "r": "ne, yageunhago ije toegeunhaneun geoyeyo. wanjeon nokchoyeyo.",
              "e": "Yeah, did overtime and I'm finally off. I'm completely wiped out."
            },
            {
              "s": 0,
              "t": "아이고, 고생 많으셨네. 요즘 다들 너무 빡세게 일해요.",
              "r": "aigo, gosaeng maneusyeonne. yojeum dadeul neomu ppakssege ilhaeyo.",
              "e": "Aw, you've had a rough one. Everyone's working way too hard these days."
            },
            {
              "s": 1,
              "t": "그러니까요. 아, 저기 신호 지나서 바로 내려 주세요.",
              "r": "geureonikkayo. a, jeogi sinho jinaseo baro naeryeo juseyo.",
              "e": "Tell me about it. Oh — just past that light, you can let me off right there."
            },
            {
              "s": 0,
              "t": "네, 다 왔습니다. 만 사천 원 나왔어요.",
              "r": "ne, da watseumnida. man sacheon won nawasseoyo.",
              "e": "Here we are. That'll be 14,000 won."
            },
            {
              "s": 1,
              "t": "여기요. 수고하셨습니다, 안전 운전하세요!",
              "r": "yeogiyo. sugohasyeotseumnida, anjeon unjeonhaseyo!",
              "e": "Here you go. Thanks so much — drive safe!"
            }
          ],
          "vocab": [
            {
              "w": "세워 주세요",
              "r": "sewo juseyo",
              "m": "please pull over / stop (the car)"
            },
            {
              "w": "막히다",
              "r": "makida",
              "m": "to be jammed/congested (traffic)"
            },
            {
              "w": "퇴근하다",
              "r": "toegeunhada",
              "m": "to leave work / clock off"
            },
            {
              "w": "녹초",
              "r": "nokcho",
              "m": "totally exhausted, wiped out"
            },
            {
              "w": "빡세다",
              "r": "ppaksseda",
              "m": "tough, intense, grueling (slang)"
            },
            {
              "w": "수고하셨습니다",
              "r": "sugohasyeotseumnida",
              "m": "thanks for your hard work (common parting line)"
            }
          ]
        },
        {
          "scene": "Hotel front desk",
          "title": "Checking Into the Hotel",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛎️"
            },
            {
              "name": "You",
              "emoji": "🧳"
            }
          ],
          "note": "'조식' (josik) specifically means 'breakfast included with a hotel stay' — Koreans rarely use '아침밥' in this context. And when staff say '신분증', they'll almost always accept a passport for foreigners; just say '여권이요' (yeogwoniyo) and hand it over.",
          "lines": [
            {
              "s": 0,
              "t": "안녕하세요, 체크인 도와드릴까요?",
              "r": "annyeonghaseyo, chekeuin dowadeurilkkayo?",
              "e": "Hello, can I help you check in?"
            },
            {
              "s": 1,
              "t": "네, 김민수 이름으로 예약했는데요. 2박이요.",
              "r": "ne, gimminsu ireumeuro yeyakaenneundeyo. ibagiyo.",
              "e": "Yes, I booked under the name Kim Minsu. Two nights."
            },
            {
              "s": 0,
              "t": "확인해 볼게요… 네, 더블룸 하나 맞으시죠?",
              "r": "hwaginhae bolgeyo… ne, deobeullum hana majeusijyo?",
              "e": "Let me check… yep, one double room, correct?"
            },
            {
              "s": 1,
              "t": "맞아요. 혹시 좀 높은 층으로 받을 수 있을까요?",
              "r": "majayo. hoksi jom nopeun cheungeuro badeul su isseulkkayo?",
              "e": "That's right. Any chance I could get a higher floor?"
            },
            {
              "s": 0,
              "t": "잠시만요… 아, 마침 12층 비어 있네요. 거기로 드릴게요.",
              "r": "jamsimanyo… a, machim sibichung bieo inneyo. geogiro deurilgeyo.",
              "e": "One sec… oh, the 12th floor happens to be open. I'll give you that."
            },
            {
              "s": 1,
              "t": "오, 잘됐다. 그리고 조식 포함이죠?",
              "r": "o, jaldwaetda. geurigo josik pohamijyo?",
              "e": "Oh nice. And breakfast is included, right?"
            },
            {
              "s": 0,
              "t": "네, 1층 식당에서 7시부터 10시까지예요. 와이파이 비번은 영수증에 적혀 있어요.",
              "r": "ne, ilcheung sikdangeseo ilgopsibuteo yeolsikkajiyeyo. waipai bibeoneun yeongsujeunge jeokyeo isseoyo.",
              "e": "Yes, in the first-floor restaurant from 7 to 10. The Wi-Fi password's printed on your receipt."
            },
            {
              "s": 1,
              "t": "감사합니다. 체크아웃은 몇 시까지예요?",
              "r": "gamsahamnida. chekeuauseun myeot sikkajiyeyo?",
              "e": "Thank you. What time's checkout?"
            },
            {
              "s": 0,
              "t": "11시까지요. 여기 카드키 두 개 드릴게요. 편히 쉬세요!",
              "r": "yeolhansikkajiyo. yeogi kadeuki du gae deurilgeyo. pyeonhi swiseyo!",
              "e": "By 11. Here are your two key cards. Enjoy your stay!"
            }
          ],
          "vocab": [
            {
              "w": "예약하다",
              "r": "yeyakada",
              "m": "to reserve / book"
            },
            {
              "w": "2박",
              "r": "ibak",
              "m": "two nights (stay)"
            },
            {
              "w": "조식",
              "r": "josik",
              "m": "(hotel) breakfast"
            },
            {
              "w": "포함",
              "r": "poham",
              "m": "included"
            },
            {
              "w": "비번",
              "r": "bibeon",
              "m": "password (short for 비밀번호)"
            },
            {
              "w": "카드키",
              "r": "kadeuki",
              "m": "key card"
            }
          ]
        },
        {
          "scene": "At the pharmacy",
          "title": "Getting Cold Medicine",
          "speakers": [
            {
              "name": "Pharmacist",
              "emoji": "💊"
            },
            {
              "name": "You",
              "emoji": "🤧"
            }
          ],
          "note": "'몸살' (momsal) has no clean English equivalent — it's that achy, fatigued, run-down feeling all over your body that comes with a cold. Saying '몸살 기운이 있어요' instantly tells a pharmacist you feel achy and feverish without listing symptoms.",
          "lines": [
            {
              "s": 0,
              "t": "어떻게 오셨어요?",
              "r": "eotteoke osyeosseoyo?",
              "e": "What can I do for you?"
            },
            {
              "s": 1,
              "t": "어제부터 목이 따끔따끔하고 콧물도 나고… 몸살 기운이 좀 있어요.",
              "r": "eojebuteo mogi ttakkeumttakkeumhago konmuldo nago… momsal giuni jom isseoyo.",
              "e": "Since yesterday my throat's been scratchy and my nose is running… and I feel kind of achy and run-down."
            },
            {
              "s": 0,
              "t": "열은요? 재 보셨어요?",
              "r": "yeoreunyo? jae bosyeosseoyo?",
              "e": "Any fever? Did you take your temperature?"
            },
            {
              "s": 1,
              "t": "아침에 37도 8 정도 나왔어요. 살짝 미열 있는 것 같아요.",
              "r": "achime samsipchildo pal jeongdo nawasseoyo. saljjak miyeol inneun geot gatayo.",
              "e": "This morning it was around 37.8. I think I've got a slight fever."
            },
            {
              "s": 0,
              "t": "감기 초기네요. 기침은 많이 하세요?",
              "r": "gamgi chogineyo. gichimeun mani haseyo?",
              "e": "Sounds like an early cold. Are you coughing a lot?"
            },
            {
              "s": 1,
              "t": "아뇨, 기침은 거의 없는데 머리가 좀 무거워요.",
              "r": "anyo, gichimeun geoui eomneunde meoriga jom mugeowoyo.",
              "e": "No, barely any cough, but my head feels kind of heavy."
            },
            {
              "s": 0,
              "t": "그럼 종합감기약으로 드릴게요. 하루 세 번, 식후 30분에 드세요.",
              "r": "geureom jonghapgamgiyageuro deurilgeyo. haru se beon, sikhu samsippune deuseyo.",
              "e": "Then I'll give you a general cold med. Three times a day, 30 minutes after meals."
            },
            {
              "s": 1,
              "t": "이거 먹으면 졸려요? 운전해야 돼서요.",
              "r": "igeo meogeumyeon jollyeoyo? unjeonhaeya dwaeseoyo.",
              "e": "Will this make me drowsy? I have to drive."
            },
            {
              "s": 0,
              "t": "졸음 없는 걸로 드렸어요. 푹 쉬고 물 많이 드세요. 이틀 지나도 안 나으면 병원 가 보시고요.",
              "r": "joreum eomneun geollo deuryeosseoyo. puk swigo mul mani deuseyo. iteul jinado an naeumyeon byeongwon ga bosigoyo.",
              "e": "I gave you the non-drowsy kind. Rest well and drink lots of water. If it's not better in two days, see a doctor."
            },
            {
              "s": 1,
              "t": "네, 감사합니다. 얼마예요?",
              "r": "ne, gamsahamnida. eolmayeyo?",
              "e": "Okay, thank you. How much is it?"
            }
          ],
          "vocab": [
            {
              "w": "몸살",
              "r": "momsal",
              "m": "achy, run-down body feeling from a cold"
            },
            {
              "w": "콧물",
              "r": "konmul",
              "m": "runny nose / nasal mucus"
            },
            {
              "w": "미열",
              "r": "miyeol",
              "m": "slight/low-grade fever"
            },
            {
              "w": "종합감기약",
              "r": "jonghapgamgiyak",
              "m": "all-in-one cold medicine"
            },
            {
              "w": "식후",
              "r": "sikhu",
              "m": "after a meal"
            },
            {
              "w": "졸리다",
              "r": "jollida",
              "m": "to be/feel drowsy"
            }
          ]
        },
        {
          "scene": "At the hair salon",
          "title": "Getting a Haircut",
          "speakers": [
            {
              "name": "Stylist",
              "emoji": "✂️"
            },
            {
              "name": "You",
              "emoji": "💇"
            }
          ],
          "note": "'다듬다' (dadeumda) means just a light trim to clean up the shape — use it when you want length kept. '머릿결' (meoritgyeol) refers to hair texture/condition, and salons will often upsell a '클리닉' (treatment) for damaged hair. A polite '그냥 깔끔하게요' (just keep it neat) is the safest catch-all request.",
          "lines": [
            {
              "s": 0,
              "t": "어떻게 해 드릴까요?",
              "r": "eotteoke hae deurilkkayo?",
              "e": "What are we doing today?"
            },
            {
              "s": 1,
              "t": "음, 길이는 그대로 두고 끝만 살짝 다듬어 주세요.",
              "r": "eum, girineun geudaero dugo kkeunman saljjak dadeumeo juseyo.",
              "e": "Hmm, keep the length but just trim the ends a little."
            },
            {
              "s": 0,
              "t": "앞머리는요? 좀 길어 보이는데 자를까요?",
              "r": "ammeorineunyo? jom gireo boineunde jareulkkayo?",
              "e": "What about the bangs? They look a bit long — want me to cut them?"
            },
            {
              "s": 1,
              "t": "아, 앞머리는 눈썹 살짝 덮을 정도로만 해 주세요.",
              "r": "a, ammeorineun nunsseop saljjak deopeul jeongdoroman hae juseyo.",
              "e": "Oh, just make the bangs hit right around the eyebrows."
            },
            {
              "s": 0,
              "t": "네. 옆이랑 뒤는 숱 좀 칠까요? 지금 좀 많아 보여요.",
              "r": "ne. yeobirang dwineun sut jom chilkkayo? jigeum jom mana boyeoyo.",
              "e": "Got it. Want me to thin out the sides and back? It looks a bit thick right now."
            },
            {
              "s": 1,
              "t": "네, 숱 좀 쳐 주시면 좋을 것 같아요. 너무 가볍지 않게요.",
              "r": "ne, sut jom chyeo jusimyeon joeul geot gatayo. neomu gabyeopji ankeyo.",
              "e": "Yeah, thinning it would be great. But not too thin."
            },
            {
              "s": 0,
              "t": "오케이. 혹시 머릿결이 좀 상해서 클리닉도 같이 하실래요?",
              "r": "okei. hoksi meoritgyeori jom sanghaeseo keullinikdo gachi hasillaeyo?",
              "e": "Okay. Your hair's a bit damaged — want to add a treatment too?"
            },
            {
              "s": 1,
              "t": "오늘은 컷만 할게요. 다음에 받을게요!",
              "r": "oneureun keonman halgeyo. daeume badeulgeyo!",
              "e": "I'll just do the cut today. I'll get it next time!"
            },
            {
              "s": 0,
              "t": "네네, 그럼 머리 먼저 감겨 드릴게요. 이쪽으로 오세요.",
              "r": "nene, geureom meori meonjeo gamgyeo deurilgeyo. ijjogeuro oseyo.",
              "e": "Sure, then let me wash your hair first. This way please."
            }
          ],
          "vocab": [
            {
              "w": "다듬다",
              "r": "dadeumda",
              "m": "to trim / tidy up (keeping length)"
            },
            {
              "w": "앞머리",
              "r": "ammeori",
              "m": "bangs / fringe"
            },
            {
              "w": "숱을 치다",
              "r": "suteul chida",
              "m": "to thin out hair"
            },
            {
              "w": "머릿결",
              "r": "meoritgyeol",
              "m": "hair texture/condition"
            },
            {
              "w": "클리닉",
              "r": "keullinik",
              "m": "(hair) treatment"
            },
            {
              "w": "컷",
              "r": "keot",
              "m": "cut (haircut)"
            }
          ]
        },
        {
          "scene": "Hanging out with a friend",
          "title": "Geeking Out Over a Game",
          "speakers": [
            {
              "name": "Jiho",
              "emoji": "🎮"
            },
            {
              "name": "You",
              "emoji": "😆"
            }
          ],
          "note": "'덕질' (deokjil) means going hard on a hobby/fandom — gaming, anime, idols, anything. '갓겜' (gatgem, literally 'god-game') is high praise for a phenomenal game. And '현타 오다' is super common slang for that sudden 'wait, what am I doing with my life' reality-check moment.",
          "lines": [
            {
              "s": 0,
              "t": "야, 너 그 신작 RPG 해 봤어? 어제 밤새 깼잖아.",
              "r": "ya, neo geu sinjak RPG hae bwasseo? eoje bamsae kkaetjana.",
              "e": "Yo, did you try that new RPG? I pulled an all-nighter and beat it."
            },
            {
              "s": 1,
              "t": "헐, 벌써 깼다고? 나 아직 챕터 3인데. 스포 하지 마!",
              "r": "heol, beolsseo kkaetdago? na ajik chaepteo saminde. seupo haji ma!",
              "e": "What, you already finished it? I'm only on chapter 3. Don't spoil it!"
            },
            {
              "s": 0,
              "t": "ㅋㅋ 알았어 안 할게. 근데 진짜 갓겜이야. 스토리 미쳤어.",
              "r": "kk arasseo an halge. geunde jinjja gatgemiya. seutori michyeosseo.",
              "e": "Haha okay I won't. But honestly it's a god-tier game. The story's insane."
            },
            {
              "s": 1,
              "t": "그치? 나 사운드트랙부터 이미 빠졌어. 완전 취향 저격이야.",
              "r": "geuchi? na saundeuteraekbuteo imi ppajyeosseo. wanjeon chwihyang jeogyeogiya.",
              "e": "Right? I'm already obsessed starting with the soundtrack. It's totally my taste."
            },
            {
              "s": 0,
              "t": "야 그거 작곡가가 예전에 우리 좋아했던 그 게임 음악도 했대.",
              "r": "ya geugeo jakgokgaga yejeone uri joahaetdeon geu geim eumakdo haetdae.",
              "e": "Dude, the composer apparently also did the music for that game we used to love."
            },
            {
              "s": 1,
              "t": "진짜? 어쩐지 익숙하더라. 나 요즘 이 게임에 완전 덕질 중이야.",
              "r": "jinjja? eojjeonji iksukhadeora. na yojeum i geime wanjeon deokjil jungiya.",
              "e": "For real? No wonder it felt familiar. I'm totally geeking out over this game lately."
            },
            {
              "s": 0,
              "t": "나도. 어제 새벽 4시까지 하다가 갑자기 현타 오더라ㅋㅋ",
              "r": "nado. eoje saebyeok nesikkaji hadaga gapjagi hyeonta odeora kk",
              "e": "Same. I played till 4am yesterday and then it suddenly hit me, like 'what am I even doing' lol."
            },
            {
              "s": 1,
              "t": "야 그건 인정. 근데 클리어하고 2회차 돌릴 거지?",
              "r": "ya geugeon injeong. geunde keullieohago ihoecha dollil geoji?",
              "e": "Yeah no, totally fair. But you're gonna do a second playthrough after clearing it, right?"
            },
            {
              "s": 0,
              "t": "당연하지. 이번엔 하드모드. 같이 길드 만들래?",
              "r": "dangyeonhaji. ibeonen hadeumodeu. gachi gildeu mandeullae?",
              "e": "Obviously. Hard mode this time. Wanna start a guild together?"
            },
            {
              "s": 1,
              "t": "콜! 나 챕터 3만 빨리 깨고 합류할게ㅋㅋ",
              "r": "kol! na chaepteo samman ppalli kkaego hamnyuhalge kk",
              "e": "Deal! Let me just blow through chapter 3 and I'll join you lol."
            }
          ],
          "vocab": [
            {
              "w": "갓겜",
              "r": "gatgem",
              "m": "god-tier/amazing game (slang)"
            },
            {
              "w": "스포",
              "r": "seupo",
              "m": "spoiler (clipped from 스포일러)"
            },
            {
              "w": "취향 저격",
              "r": "chwihyang jeogyeok",
              "m": "hits one's taste perfectly"
            },
            {
              "w": "덕질",
              "r": "deokjil",
              "m": "obsessing over a hobby/fandom"
            },
            {
              "w": "현타",
              "r": "hyeonta",
              "m": "sudden reality-check / 'what am I doing' moment"
            },
            {
              "w": "2회차",
              "r": "ihoecha",
              "m": "second playthrough/run"
            }
          ]
        },
        {
          "scene": "Planning a weekend trip",
          "title": "Planning a Quick Getaway",
          "speakers": [
            {
              "name": "Sora",
              "emoji": "🗺️"
            },
            {
              "name": "You",
              "emoji": "🧳"
            }
          ],
          "note": "'당일치기' (dangilchigi) means a same-day round trip with no overnight stay — super handy word for short trips. '뚜벅이' (ttubeogi) literally means someone who gets around on foot, i.e., no car — Koreans use it to flag that you'll rely on public transit when planning.",
          "lines": [
            {
              "s": 0,
              "t": "우리 이번 주말에 어디 잠깐 놀러 갈래? 날씨도 좋은데.",
              "r": "uri ibeon jumare eodi jamkkan nolleo gallae? nalssido joeunde.",
              "e": "Wanna go somewhere for a bit this weekend? The weather's nice."
            },
            {
              "s": 1,
              "t": "오 좋아! 근데 1박 할까, 아니면 그냥 당일치기?",
              "r": "o joa! geunde ilbak halkka, animyeon geunyang dangilchigi?",
              "e": "Oh yes! But should we do an overnight, or just a day trip?"
            },
            {
              "s": 0,
              "t": "토요일에 갔다가 일요일 오후에 오는 1박 어때? 강릉 쪽으로.",
              "r": "toyoire gatdaga iryoil ohue oneun ilbak eottae? gangneung jjogeuro.",
              "e": "How about an overnight — leave Saturday, come back Sunday afternoon? Around Gangneung."
            },
            {
              "s": 1,
              "t": "강릉 좋다! 바다 보고 카페 투어도 하고. 근데 우리 차 없잖아.",
              "r": "gangneung jota! bada bogo kape tueodo hago. geunde uri cha eopjana.",
              "e": "Gangneung's great! See the ocean, do a cafe tour. But we don't have a car."
            },
            {
              "s": 0,
              "t": "ㄱㅊ, KTX 타면 두 시간이면 가. 우리 뚜벅이라 숙소는 역 근처로 잡자.",
              "r": "gwaenchanha, KTX tamyeon du siganimyeon ga. uri ttubeogira sukssoneun yeok geuncheoro japja.",
              "e": "It's fine, the KTX gets there in two hours. Since we're carless, let's book a place near the station."
            },
            {
              "s": 1,
              "t": "오케이. 그럼 내가 기차표 예매할게. 너는 숙소 좀 알아봐 줄래?",
              "r": "okei. geureom naega gichapyo yemaehalge. neoneun sukso jom arabwa jullae?",
              "e": "Okay. I'll book the train tickets then. Can you look into the lodging?"
            },
            {
              "s": 0,
              "t": "콜. 바다 보이는 게스트하우스로 알아볼게. 첫날 저녁은 회 어때?",
              "r": "kol. bada boineun geseuteuhauseuro arabolge. cheonnal jeonyeogeun hoe eottae?",
              "e": "Deal. I'll find a guesthouse with an ocean view. Sashimi for dinner the first night?"
            },
            {
              "s": 1,
              "t": "완전 좋지! 회에 소주 한 잔이면 끝이지. 일요일엔 뭐 할까?",
              "r": "wanjeon jochi! hoee soju han janimyeon kkeuchiji. iryoireneun mwo halkka?",
              "e": "Heck yeah! Sashimi with a shot of soju is the move. What should we do Sunday?"
            },
            {
              "s": 0,
              "t": "아침에 해변 산책하고, 유명한 빵집 들렀다가 올라오자.",
              "r": "achime haebyeon sanchaekhago, yumyeonghan ppangjip deulleotdaga ollaoja.",
              "e": "Walk the beach in the morning, swing by that famous bakery, then head back up."
            },
            {
              "s": 1,
              "t": "완벽해. 그럼 표 끊고 단톡방에 올릴게!",
              "r": "wanbyeokhae. geureom pyo kkeunko dantokbange ollilge!",
              "e": "Perfect. I'll grab the tickets and post it in our group chat!"
            }
          ],
          "vocab": [
            {
              "w": "당일치기",
              "r": "dangilchigi",
              "m": "same-day round trip (no overnight)"
            },
            {
              "w": "1박",
              "r": "ilbak",
              "m": "one night (stay)"
            },
            {
              "w": "뚜벅이",
              "r": "ttubeogi",
              "m": "person without a car (relies on transit)"
            },
            {
              "w": "예매하다",
              "r": "yemaehada",
              "m": "to book/reserve (tickets)"
            },
            {
              "w": "숙소",
              "r": "sukso",
              "m": "lodging / accommodation"
            },
            {
              "w": "단톡방",
              "r": "dantokbang",
              "m": "group chat room (KakaoTalk)"
            }
          ]
        },
        {
          "scene": "Chatting at the gym",
          "title": "Hitting the Gym",
          "speakers": [
            {
              "name": "Jinu",
              "emoji": "💪"
            },
            {
              "name": "You",
              "emoji": "🏋️"
            }
          ],
          "note": "'헬스' (helseu) means going to the gym / weight training in Korean — not 'health' in the English sense. '헬스장' is the gym building, and '운동하다' covers any kind of working out.",
          "lines": [
            {
              "s": 0,
              "t": "어? 너 요즘 헬스 다닌다며? 몸 좋아졌네.",
              "r": "eo? neo yojeum helseu danindamyeo? mom joajeonne.",
              "e": "Huh? I heard you've been hitting the gym lately. You're looking buff."
            },
            {
              "s": 1,
              "t": "ㅋㅋ 티 나? 두 달째 거의 매일 가고 있어.",
              "r": "kk ti na? du daljjae geoui maeil gago isseo.",
              "e": "Haha, can you tell? I've been going almost every day for two months now."
            },
            {
              "s": 0,
              "t": "헐 대박. 난 작심삼일이라 등록만 해놓고 안 가.",
              "r": "heol daebak. nan jaksimsamil-ira deungrokman haenoko an ga.",
              "e": "Whoa, no way. My motivation dies in three days — I signed up and never go."
            },
            {
              "s": 1,
              "t": "야 그거 돈 아깝잖아. 그냥 나랑 같이 가자, 응?",
              "r": "ya geugeo don akkapjana. geunyang narang gachi gaja, eung?",
              "e": "Dude, that's a waste of money. Just come with me, yeah?"
            },
            {
              "s": 0,
              "t": "음… 근데 나 운동하면 다음 날 근육통 너무 심해.",
              "r": "eum… geunde na undonghamyeon daeum nal geunyuktong neomu simhae.",
              "e": "Hmm... but when I work out, the soreness the next day is brutal."
            },
            {
              "s": 1,
              "t": "처음엔 다 그래. 며칠만 하면 적응돼, 진짜로.",
              "r": "cheoeumen da geurae. myeochilman hamyeon jeogeungdwae, jinjjaro.",
              "e": "Everyone's like that at first. After just a few days you adjust, for real."
            },
            {
              "s": 0,
              "t": "그래? 그럼 하체는 좀… 살살 해줘라.",
              "r": "geurae? geureom hacheneun jom… salsal haejwora.",
              "e": "Yeah? Then go easy on me with leg day... please."
            },
            {
              "s": 1,
              "t": "ㅋㅋㅋ 하체 빼면 의미가 없는데? 알겠어, 살살.",
              "r": "kkk hache ppaemyeon uimiga eomneunde? algesseo, salsal.",
              "e": "Hahaha, skipping legs defeats the whole point, but fine — I'll take it easy."
            },
            {
              "s": 0,
              "t": "콜. 그럼 내일 저녁 일곱 시 어때?",
              "r": "kol. geureom naeil jeonyeok ilgop si eottae?",
              "e": "Deal. So how about seven tomorrow evening?"
            },
            {
              "s": 1,
              "t": "오케이, 운동복 챙겨 와. 째지 말고!",
              "r": "okei, undongbok chaenggyeo wa. jjaeji malgo!",
              "e": "Okay, bring your gym clothes. And don't you dare flake!"
            }
          ],
          "vocab": [
            {
              "w": "헬스",
              "r": "helseu",
              "m": "gym workout / weight training"
            },
            {
              "w": "작심삼일",
              "r": "jaksimsamil",
              "m": "resolve that only lasts three days"
            },
            {
              "w": "근육통",
              "r": "geunyuktong",
              "m": "muscle soreness"
            },
            {
              "w": "하체",
              "r": "hache",
              "m": "lower body (legs)"
            },
            {
              "w": "째다",
              "r": "jjaeda",
              "m": "to skip/bail (slang)"
            },
            {
              "w": "티 나다",
              "r": "ti nada",
              "m": "to be obvious/show"
            }
          ]
        },
        {
          "scene": "Studying at a cafe",
          "title": "Surprise at the Cafe",
          "speakers": [
            {
              "name": "Sora",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "📚"
            }
          ],
          "note": "'웬일이야' (wenniriya) literally asks 'what brings this about?' but functions as 'what a surprise!' / 'no way!' — Koreans use it both for pleasant surprises and unexpected behavior (e.g. 'you cleaned your room? 웬일이야').",
          "lines": [
            {
              "s": 0,
              "t": "어머, 너 여기서 뭐 해? 웬일이야!",
              "r": "eomeo, neo yeogiseo mwo hae? wenniriya!",
              "e": "Oh my, what are you doing here? What a surprise!"
            },
            {
              "s": 1,
              "t": "헐 소라야! 나 과제 하느라 죽어가는 중이야.",
              "r": "heol soraya! na gwaje haneura jugeoganeun jungiya.",
              "e": "Whoa, Sora! I'm dying over here trying to finish an assignment."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 집에선 집중 안 되지? 나도 그래서 카페 와.",
              "r": "kk jibeseon jipjung an doeji? nado geuraeseo kape wa.",
              "e": "Haha, you can't focus at home, right? Same, that's why I come to cafes."
            },
            {
              "s": 1,
              "t": "완전. 근데 너 시간 괜찮아? 잠깐 앉았다 가.",
              "r": "wanjeon. geunde neo sigan gwaenchana? jamkkan anjatda ga.",
              "e": "Totally. But do you have time? Sit for a sec before you go."
            },
            {
              "s": 0,
              "t": "음, 나 약속까지 삼십 분 남았는데. 커피 한 잔 정도는 괜찮아.",
              "r": "eum, na yaksokkkaji samsip bun namanneunde. keopi han jan jeongdoneun gwaenchana.",
              "e": "Hmm, I've got thirty minutes till I meet someone. A coffee's fine."
            },
            {
              "s": 1,
              "t": "잘됐다. 안 그래도 머리 식힐 겸 쉬려던 참이었어.",
              "r": "jaldwaetda. an geuraedo meori sikhil gyeom swiryeodeon chamieosseo.",
              "e": "Perfect. I was just about to take a break to clear my head anyway."
            },
            {
              "s": 0,
              "t": "과제 뭔데? 내가 봐줄까? 나 그 과목 들었었어.",
              "r": "gwaje mwonde? naega bwajulkka? na geu gwamok deureosseosseo.",
              "e": "What's the assignment? Want me to look? I took that class."
            },
            {
              "s": 1,
              "t": "진짜?! 너 완전 은인이다. 이거 한 줄도 진도가 안 나가.",
              "r": "jinjja?! neo wanjeon eunin-ida. igeo han juldo jindoga an naga.",
              "e": "Seriously?! You're a lifesaver. I can't get a single line done."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 어디 보자… 아, 이거 그냥 예시 따라 하면 돼.",
              "r": "kk eodi boja… a, igeo geunyang yesi ttara hamyeon dwae.",
              "e": "Haha, let me see... ah, you just follow the example for this."
            },
            {
              "s": 1,
              "t": "헐 그렇게 쉬운 거였어? 너 만난 게 신의 한 수다.",
              "r": "heol geureoke swiun geo-yeosseo? neo mannan ge sinui han suda.",
              "e": "Wait, it was that easy? Running into you was a stroke of genius."
            }
          ],
          "vocab": [
            {
              "w": "웬일이야",
              "r": "wenniriya",
              "m": "what a surprise! / what brings this?"
            },
            {
              "w": "과제",
              "r": "gwaje",
              "m": "assignment / homework"
            },
            {
              "w": "집중",
              "r": "jipjung",
              "m": "concentration / focus"
            },
            {
              "w": "은인",
              "r": "eunin",
              "m": "savior / benefactor"
            },
            {
              "w": "진도가 안 나가다",
              "r": "jindoga an nagada",
              "m": "to make no progress"
            },
            {
              "w": "신의 한 수",
              "r": "sinui han su",
              "m": "a brilliant move/decision"
            }
          ]
        },
        {
          "scene": "Whispering in a hallway",
          "title": "The Secret Party",
          "speakers": [
            {
              "name": "Mina",
              "emoji": "🤫"
            },
            {
              "name": "You",
              "emoji": "🎉"
            }
          ],
          "note": "'깜놀' (kkamnol) is short for '깜짝 놀라다' (to be startled/surprised) and is super common in casual chat. For surprise parties Koreans literally say '깜짝 파티' (kkamjjak pati) — 깜짝 = the 'startle' part.",
          "lines": [
            {
              "s": 0,
              "t": "야, 조용히 해. 다음 주가 지훈이 생일인 거 알지?",
              "r": "ya, joyonghi hae. daeum juga jihuni saengil-in geo alji?",
              "e": "Hey, keep it down. You know it's Jihoon's birthday next week, right?"
            },
            {
              "s": 1,
              "t": "당연하지. 우리 깜짝 파티 하는 거지? 드디어!",
              "r": "dangyeonhaji. uri kkamjjak pati haneun geoji? deudieo!",
              "e": "Of course. We're doing a surprise party, right? Finally!"
            },
            {
              "s": 0,
              "t": "응. 근데 절대 티 내면 안 돼. 걔 눈치 진짜 빨라.",
              "r": "eung. geunde jeoldae ti naemyeon an dwae. gyae nunchi jinjja ppalla.",
              "e": "Yeah. But you can't let it slip — he catches on so fast."
            },
            {
              "s": 1,
              "t": "걱정 마. 나 입 무거워. 장소는 정했어?",
              "r": "geokjeong ma. na ip mugeowo. jangsoneun jeonghaesseo?",
              "e": "Don't worry, I can keep a secret. Did you pick a spot?"
            },
            {
              "s": 0,
              "t": "우리 단골 술집 빌리려고. 사장님이랑 얘기해 놨어.",
              "r": "uri dangol suljip billiryeogo. sajangnim-irang yaegihae nwasseo.",
              "e": "I'm gonna book our usual bar. Already talked to the owner."
            },
            {
              "s": 1,
              "t": "오 일 잘하네. 그럼 케이크랑 선물은 내가 맡을게.",
              "r": "o il jalhane. geureom keikeu-rang seonmureun naega mateulge.",
              "e": "Oh, nicely done. Then I'll handle the cake and the present."
            },
            {
              "s": 0,
              "t": "콜. 근데 어떻게 불러내지? 안 수상하게.",
              "r": "kol. geunde eotteoke bulleonaeji? an susanghage.",
              "e": "Deal. But how do we lure him there without it seeming sketchy?"
            },
            {
              "s": 1,
              "t": "그냥 평소처럼 한잔하자고 하면 되지. 자연스럽게.",
              "r": "geunyang pyeongsocheoreom hanjanhajago hamyeon doeji. jayeonseureopge.",
              "e": "Just casually ask him for a drink like usual. Keep it natural."
            },
            {
              "s": 0,
              "t": "오케이. 단톡방 새로 파자, 걔 빼고. 알겠지?",
              "r": "okei. dantokbang saero paja, gyae ppaego. algetji?",
              "e": "Okay. Let's start a new group chat without him in it. Got it?"
            },
            {
              "s": 1,
              "t": "콜콜. 걔 깜놀하는 거 상상만 해도 웃긴다 ㅋㅋ",
              "r": "kolkol. gyae kkamnolhaneun geo sangsangman haedo utginda kk",
              "e": "Deal deal. Just picturing his shocked face is already cracking me up, haha."
            }
          ],
          "vocab": [
            {
              "w": "깜짝 파티",
              "r": "kkamjjak pati",
              "m": "surprise party"
            },
            {
              "w": "티 내다",
              "r": "ti naeda",
              "m": "to give it away / show it"
            },
            {
              "w": "눈치 빠르다",
              "r": "nunchi ppareuda",
              "m": "to be quick to catch on"
            },
            {
              "w": "단골",
              "r": "dangol",
              "m": "regular spot / regular customer"
            },
            {
              "w": "단톡방",
              "r": "dantokbang",
              "m": "group chat room"
            },
            {
              "w": "깜놀",
              "r": "kkamnol",
              "m": "totally shocked (slang)"
            }
          ]
        },
        {
          "scene": "At a clothing store counter",
          "title": "Exchanging a Purchase",
          "speakers": [
            {
              "name": "Staff",
              "emoji": "🛍️"
            },
            {
              "name": "You",
              "emoji": "🧾"
            }
          ],
          "note": "'환불' (hwanbul) = refund, '교환' (gyohwan) = exchange — keep them straight at the counter. Staff speak in polite -요/-시 forms, but real customers often drop into shorter '-ㄴ데요' phrasing while still polite, which you'll hear here.",
          "lines": [
            {
              "s": 1,
              "t": "저기요, 이거 어제 샀는데 교환 되나요?",
              "r": "jeogiyo, igeo eoje sanneunde gyohwan doenayo?",
              "e": "Excuse me, I bought this yesterday — can I exchange it?"
            },
            {
              "s": 0,
              "t": "네, 영수증 있으세요? 어떤 점이 문제셨어요?",
              "r": "ne, yeongsujeung isseuseyo? eotteon jeomi munjesyeosseoyo?",
              "e": "Sure, do you have the receipt? What was the issue?"
            },
            {
              "s": 1,
              "t": "여기요. 사이즈가 좀 작아서 한 치수 큰 걸로요.",
              "r": "yeogiyo. saijeuga jom jagaseo han chisu keun geolloyo.",
              "e": "Here. It's a bit small, so I'd like one size up."
            },
            {
              "s": 0,
              "t": "아, 잠시만요. 같은 색으로 재고 있는지 확인해 볼게요.",
              "r": "a, jamsimanyo. gateun saegeuro jaego inneunji hwaginhae bolgeyo.",
              "e": "Ah, one moment. Let me check if we have it in stock in the same color."
            },
            {
              "s": 1,
              "t": "네. 만약에 없으면 그냥 환불도 가능해요?",
              "r": "ne. manyage eopseumyeon geunyang hwanbuldo ganeunghaeyo?",
              "e": "Sure. And if there isn't, can I just get a refund instead?"
            },
            {
              "s": 0,
              "t": "그럼요. 태그만 안 떼셨으면 환불 다 돼요.",
              "r": "geureomyo. taegeuman an ttesyeosseumyeon hwanbul da dwaeyo.",
              "e": "Of course. As long as the tag's still on, a refund is no problem."
            },
            {
              "s": 1,
              "t": "다행이다. 안 떼고 그대로 가져왔어요.",
              "r": "dahaengida. an tteego geudaero gajyeowasseoyo.",
              "e": "Oh good. I brought it back with the tag still on."
            },
            {
              "s": 0,
              "t": "어, 마침 큰 사이즈 딱 하나 남았네요. 운 좋으시다.",
              "r": "eo, machim keun saijeu ttak hana namanneyo. un joeusida.",
              "e": "Oh, you're in luck — there's exactly one large left."
            },
            {
              "s": 1,
              "t": "오 잘됐다. 그걸로 바꿔 주세요.",
              "r": "o jaldwaetda. geugeollo bakkwo juseyo.",
              "e": "Oh, perfect. I'll take that one, please."
            },
            {
              "s": 0,
              "t": "네, 바로 교환해 드릴게요. 잠시만 기다려 주세요.",
              "r": "ne, baro gyohwanhae deurilgeyo. jamsiman gidaryeo juseyo.",
              "e": "Sure, I'll swap it right out for you. One moment, please."
            }
          ],
          "vocab": [
            {
              "w": "교환",
              "r": "gyohwan",
              "m": "exchange"
            },
            {
              "w": "환불",
              "r": "hwanbul",
              "m": "refund"
            },
            {
              "w": "영수증",
              "r": "yeongsujeung",
              "m": "receipt"
            },
            {
              "w": "재고",
              "r": "jaego",
              "m": "stock / inventory"
            },
            {
              "w": "치수",
              "r": "chisu",
              "m": "size (measurement)"
            },
            {
              "w": "태그",
              "r": "taegeu",
              "m": "tag (price/product tag)"
            }
          ]
        },
        {
          "scene": "Talking over lunch",
          "title": "Comfort Food Talk",
          "speakers": [
            {
              "name": "Hyun",
              "emoji": "🍲"
            },
            {
              "name": "You",
              "emoji": "🍚"
            }
          ],
          "note": "'엄마손맛' (eommasonmat) literally 'mom's hand-taste' = that homemade flavor only a mom's cooking has. '손맛' (sonmat, 'hand-taste') is a real concept — the idea that the cook's touch makes food taste better. Calling someone's food '손맛 있다' is a big compliment.",
          "lines": [
            {
              "s": 0,
              "t": "야, 너 진짜 좋아하는 음식 딱 하나만 꼽으라면?",
              "r": "ya, neo jinjja joahaneun eumsik ttak hanaman kkobeuramyeon?",
              "e": "Hey, if you had to pick just one food you really love, what is it?"
            },
            {
              "s": 1,
              "t": "음… 고민할 것도 없이 엄마가 해주는 된장찌개.",
              "r": "eum… gominhal geotdo eopsi eommaga haejuneun doenjangjjigae.",
              "e": "Hmm... no contest — my mom's soybean paste stew."
            },
            {
              "s": 0,
              "t": "아 그거 진리지. 역시 엄마손맛은 못 이겨.",
              "r": "a geugeo jilliji. yeoksi eommasonmateun mot igyeo.",
              "e": "Ah, that's the truth. Nothing beats mom's home cooking."
            },
            {
              "s": 1,
              "t": "그치. 식당 거랑 차원이 달라. 넌 요리 좀 해?",
              "r": "geuchi. sikdang georang chawoni dalla. neon yori jom hae?",
              "e": "Right? It's on a whole different level than restaurant food. Do you cook?"
            },
            {
              "s": 0,
              "t": "나? 김치볶음밥 정도? 그건 좀 자신 있어 ㅋㅋ",
              "r": "na? gimchibokkeumbap jeongdo? geugeon jom jasin isseo kk",
              "e": "Me? Kimchi fried rice, maybe? I'm actually pretty confident at that, haha."
            },
            {
              "s": 1,
              "t": "오 의외다. 비결이 뭔데? 나는 하면 맨날 질척해.",
              "r": "o uioida. bigyeori mwonde? naneun hamyeon maennal jilcheokhae.",
              "e": "Oh, didn't expect that. What's your trick? Mine always comes out mushy."
            },
            {
              "s": 0,
              "t": "밥을 찬밥으로 해야 돼. 그래야 안 떡져.",
              "r": "babeul chanbabeuro haeya dwae. geuraeya an tteokjyeo.",
              "e": "You have to use cold leftover rice. That way it doesn't get gluey."
            },
            {
              "s": 1,
              "t": "헐 그거였구나. 나 맨날 갓 지은 밥으로 했어.",
              "r": "heol geugeo-yeotguna. na maennal gat jieun babeuro haesseo.",
              "e": "Whoa, that was it. I've always used freshly cooked rice."
            },
            {
              "s": 0,
              "t": "ㅋㅋ 그래서 그래. 다음에 내가 한번 해줄게.",
              "r": "kk geuraeseo geurae. daeume naega hanbeon haejulge.",
              "e": "Haha, that's why. I'll make it for you sometime."
            },
            {
              "s": 1,
              "t": "오 콜! 대신 나는 우리 엄마 된장찌개 레시피 알려줄게.",
              "r": "o kol! daesin naneun uri eomma doenjangjjigae resipi allyeojulge.",
              "e": "Oh, deal! In return I'll share my mom's soybean stew recipe."
            }
          ],
          "vocab": [
            {
              "w": "된장찌개",
              "r": "doenjangjjigae",
              "m": "soybean paste stew"
            },
            {
              "w": "엄마손맛",
              "r": "eommasonmat",
              "m": "mom's homemade flavor"
            },
            {
              "w": "김치볶음밥",
              "r": "gimchibokkeumbap",
              "m": "kimchi fried rice"
            },
            {
              "w": "진리",
              "r": "jilli",
              "m": "the truth / undeniably the best (slang)"
            },
            {
              "w": "떡지다",
              "r": "tteokjida",
              "m": "to get gluey/clumpy"
            },
            {
              "w": "찬밥",
              "r": "chanbap",
              "m": "cold leftover rice"
            }
          ]
        },
        {
          "scene": "Meeting at a gathering",
          "title": "Meeting a Friend's Friend",
          "speakers": [
            {
              "name": "Yuna",
              "emoji": "🙋"
            },
            {
              "name": "You",
              "emoji": "😊"
            }
          ],
          "note": "'말 놓다' / '말 편하게 하다' = to drop formal speech and switch to casual (반말). Among peers of similar age, suggesting it early ('우리 말 편하게 할까요?') is a friendly move. '동갑' (donggap) = same age, which instantly makes people comfortable going casual.",
          "lines": [
            {
              "s": 0,
              "t": "아, 소개할게. 얘가 내가 맨날 얘기하던 그 친구야.",
              "r": "a, sogaehalge. yaega naega maennal yaegihadeon geu chinguya.",
              "e": "Oh, let me introduce you. This is the friend I'm always talking about."
            },
            {
              "s": 1,
              "t": "안녕하세요! 말씀 많이 들었어요. 만나서 반가워요.",
              "r": "annyeonghaseyo! malsseum mani deureosseoyo. mannaseo bangawoyo.",
              "e": "Hi! I've heard a lot about you. Nice to meet you."
            },
            {
              "s": 0,
              "t": "어유, 좋은 얘기만 했어요 ㅋㅋ 편하게 하세요.",
              "r": "eoyu, joeun yaegiman haesseoyo kk pyeonhage haseyo.",
              "e": "Oh, only good things, haha. Make yourself comfortable."
            },
            {
              "s": 1,
              "t": "혹시 나이가 어떻게 되세요? 저 구십팔 년생인데.",
              "r": "hoksi naiga eotteoke doeseyo? jeo gusippal nyeonsaeng-inde.",
              "e": "Can I ask how old you are? I was born in '98."
            },
            {
              "s": 0,
              "t": "헐 저도요! 우리 동갑이네요. 그럼 말 편하게 할까요?",
              "r": "heol jeodoyo! uri donggap-ineyo. geureom mal pyeonhage halkkayo?",
              "e": "Whoa, me too! We're the same age. Should we just go casual then?"
            },
            {
              "s": 1,
              "t": "오 좋아요, 좋아! 갑자기 확 편해지네 ㅋㅋ",
              "r": "o joayo, joa! gapjagi hwak pyeonhaejine kk",
              "e": "Oh, yes please! Suddenly this feels so much more relaxed, haha."
            },
            {
              "s": 0,
              "t": "그치? 야, 너 취미가 뭐야? 우리 통하는 거 있나 보자.",
              "r": "geuchi? ya, neo chwimiga mwoya? uri tonghaneun geo inna boja.",
              "e": "Right? So, what are your hobbies? Let's see if we click on anything."
            },
            {
              "s": 1,
              "t": "나 요즘 등산에 빠졌어. 너도 혹시 산 좋아해?",
              "r": "na yojeum deungsane ppajyeosseo. neodo hoksi san joahae?",
              "e": "I'm super into hiking these days. Do you happen to like mountains too?"
            },
            {
              "s": 0,
              "t": "대박, 나도! 우리 진짜 잘 맞을 것 같은데?",
              "r": "daebak, nado! uri jinjja jal majeul geot gateunde?",
              "e": "No way, me too! I think we're really gonna get along."
            },
            {
              "s": 1,
              "t": "ㅋㅋ 다음에 셋이 같이 산 한번 가자. 콜?",
              "r": "kk daeume seshi gachi san hanbeon gaja. kol?",
              "e": "Haha, let's all three go hiking together sometime. Deal?"
            }
          ],
          "vocab": [
            {
              "w": "소개하다",
              "r": "sogaehada",
              "m": "to introduce"
            },
            {
              "w": "말씀 많이 들었어요",
              "r": "malsseum mani deureosseoyo",
              "m": "I've heard a lot about you"
            },
            {
              "w": "동갑",
              "r": "donggap",
              "m": "the same age"
            },
            {
              "w": "말 편하게 하다",
              "r": "mal pyeonhage hada",
              "m": "to switch to casual speech"
            },
            {
              "w": "통하다",
              "r": "tonghada",
              "m": "to click / connect with"
            },
            {
              "w": "빠지다",
              "r": "ppajida",
              "m": "to be really into something"
            }
          ]
        },
        {
          "scene": "At a house party",
          "title": "Making Small Talk at a Party",
          "speakers": [
            {
              "name": "Jihun",
              "emoji": "🍻"
            },
            {
              "name": "You",
              "emoji": "😄"
            }
          ],
          "note": "\"낯을 가리다\" (nacheul garida) literally means \"to discriminate by face\" and is the go-to phrase for being shy/awkward around strangers. Koreans use it constantly to explain why someone's quiet at a gathering.",
          "lines": [
            {
              "s": 0,
              "t": "어, 안녕하세요! 혹시 우리 어디서 본 적 있죠? 낯이 익은데.",
              "r": "eo, annyeonghaseyo! hoksi uri eodiseo bon jeok itjyo? nachi igeunde.",
              "e": "Oh hey! Have we met somewhere before? You look familiar."
            },
            {
              "s": 1,
              "t": "아 진짜요? 저도 어디서 봤나 싶었어요. 민지 친구 아니에요?",
              "r": "a jinjjayo? jeodo eodiseo bwanna sipeosseoyo. minji chingu anieyo?",
              "e": "Oh really? I was thinking the same thing. You're Minji's friend, right?"
            },
            {
              "s": 0,
              "t": "맞아요 맞아! 대박, 세상 진짜 좁다. 뭐 마시고 있어요? 잔 비었네.",
              "r": "majayo maja! daebak, sesang jinjja jopda. mwo masigo isseoyo? jan bieonne.",
              "e": "Yes, exactly! Wow, small world. What are you drinking? Your glass is empty."
            },
            {
              "s": 1,
              "t": "아 저 사실 술 잘 못 마셔서 그냥 콜라 마시고 있었어요.",
              "r": "a jeo sasil sul jal mot masyeoseo geunyang kolla masigo isseosseoyo.",
              "e": "Oh actually I can't really drink, so I've just been having cola."
            },
            {
              "s": 0,
              "t": "오 완전 나랑 똑같네. 나도 한 잔만 마셔도 얼굴 빨개져요.",
              "r": "o wanjeon narang ttokgatne. nado han janman masyeodo eolgul ppalgaejyeoyo.",
              "e": "Oh we're exactly the same. I turn red after just one glass too."
            },
            {
              "s": 1,
              "t": "ㅋㅋㅋ 다행이다. 솔직히 저 낯 좀 가려서 구석에 있었거든요.",
              "r": "kkk dahaengida. soljikhi jeo nat jom garyeoseo guseoge isseotgeodeunyo.",
              "e": "Haha, what a relief. Honestly I'm kind of shy so I was hiding in the corner."
            },
            {
              "s": 0,
              "t": "에이, 그러지 말고 이리 와요. 저쪽에 사람들 더 있어요. 소개해 줄게.",
              "r": "ei, geureoji malgo iri wayo. jeojjoge saramdeul deo isseoyo. sogaehae julge.",
              "e": "Aw, don't be like that, come over here. There are more people over there. I'll introduce you."
            },
            {
              "s": 1,
              "t": "오 진짜요? 감사해요. 혼자 어색하게 있을 뻔했네 ㅋㅋ.",
              "r": "o jinjjayo? gamsahaeyo. honja eosaekhage isseul ppeonhaenne kk.",
              "e": "Oh really? Thanks. I almost ended up standing here awkwardly by myself, haha."
            }
          ],
          "vocab": [
            {
              "w": "낯이 익다",
              "r": "nachi ikda",
              "m": "to look familiar"
            },
            {
              "w": "세상 좁다",
              "r": "sesang jopda",
              "m": "it's a small world"
            },
            {
              "w": "대박",
              "r": "daebak",
              "m": "wow / awesome (exclamation)"
            },
            {
              "w": "낯을 가리다",
              "r": "nacheul garida",
              "m": "to be shy around strangers"
            },
            {
              "w": "어색하다",
              "r": "eosaekhada",
              "m": "awkward, uncomfortable"
            },
            {
              "w": "다행이다",
              "r": "dahaengida",
              "m": "what a relief / thank goodness"
            }
          ]
        },
        {
          "scene": "At the office near a deadline",
          "title": "Asking a Coworker for Help",
          "speakers": [
            {
              "name": "Seonbae",
              "emoji": "💼"
            },
            {
              "name": "You",
              "emoji": "😰"
            }
          ],
          "note": "\"손이 비다\" (soni bida, lit. \"hands are empty\") means to be free/not busy. And calling a senior coworker \"선배\" (seonbae) or adding \"-님\" shows respect — even close colleagues keep this hierarchy at work.",
          "lines": [
            {
              "s": 1,
              "t": "선배, 죄송한데 지금 잠깐 손 비어요? 저 좀 급해서요.",
              "r": "seonbae, joesonghande jigeum jamkkan son bieoyo? jeo jom geuphaeseoyo.",
              "e": "Hey, sorry, are you free for a sec right now? I'm kind of in a rush."
            },
            {
              "s": 0,
              "t": "어 왜왜, 무슨 일인데? 너 표정이 죽을상이네.",
              "r": "eo waewae, museun irinde? neo pyojeongi jugeulsangine.",
              "e": "Yeah, what's up? You look like you're about to die."
            },
            {
              "s": 1,
              "t": "이거 오늘 6시까지 넘겨야 되는데 도저히 혼자 못 끝낼 거 같아요.",
              "r": "igeo oneul yeoseotsikkaji neomgyeoya doeneunde dojeohi honja mot kkeunnael geo gatayo.",
              "e": "This is due by 6 today and there's no way I can finish it alone."
            },
            {
              "s": 0,
              "t": "아 그 보고서? 어디까지 했는데? 표 정리만 남은 거 아니야?",
              "r": "a geu bogoseo? eodikkaji haenneunde? pyo jeongniman nameun geo aniya?",
              "e": "Ah, that report? How far did you get? Isn't it just the tables left?"
            },
            {
              "s": 1,
              "t": "네 그 부분이 제일 골치 아파요. 손 좀 빌려주시면 진짜 살 거 같아요.",
              "r": "ne geu bubuni jeil golchi apayo. son jom billyeojusimyeon jinjja sal geo gatayo.",
              "e": "Yeah, that part's the biggest headache. If you could lend a hand I'd literally survive."
            },
            {
              "s": 0,
              "t": "알았어 알았어. 내가 표 맡을 테니까 너는 결론 부분 마무리해.",
              "r": "arasseo arasseo. naega pyo mateul tenikka neoneun gyeollon bubun mamurihae.",
              "e": "Okay, okay. I'll take the tables, so you wrap up the conclusion part."
            },
            {
              "s": 1,
              "t": "헐 진짜요? 완전 감사해요. 이 은혜 잊지 않을게요 ㅠㅠ.",
              "r": "heol jinjjayo? wanjeon gamsahaeyo. i eunhye itji aneulgeyo ㅠㅠ.",
              "e": "Whoa, really? Thank you so much. I won't forget this favor, seriously."
            },
            {
              "s": 0,
              "t": "됐고, 끝나고 커피나 사. 자, 빨리빨리 하자. 시간 없어.",
              "r": "dwaetgo, kkeunnago keopina sa. ja, ppallippalli haja. sigan eopseo.",
              "e": "Never mind that, just buy me a coffee after. Come on, let's hurry. No time."
            }
          ],
          "vocab": [
            {
              "w": "손 비다",
              "r": "son bida",
              "m": "to be free / not busy"
            },
            {
              "w": "죽을상",
              "r": "jugeulsang",
              "m": "a face like one's about to die / miserable look"
            },
            {
              "w": "골치 아프다",
              "r": "golchi apeuda",
              "m": "to be a headache / troublesome"
            },
            {
              "w": "손 빌리다",
              "r": "son billida",
              "m": "to get help (lit. borrow a hand)"
            },
            {
              "w": "마무리하다",
              "r": "mamurihada",
              "m": "to wrap up / finish off"
            },
            {
              "w": "됐고",
              "r": "dwaetgo",
              "m": "forget it / never mind (casual)"
            }
          ]
        },
        {
          "scene": "Catching up over coffee",
          "title": "Telling a Friend About the Weekend",
          "speakers": [
            {
              "name": "Yuna",
              "emoji": "☕"
            },
            {
              "name": "You",
              "emoji": "😎"
            }
          ],
          "note": "\"불금\" (bulgeum) is short for \"불타는 금요일\" (\"burning Friday\") — the Korean equivalent of TGIF, the night everyone goes out hard. Young people use it nonstop.",
          "lines": [
            {
              "s": 0,
              "t": "야, 주말 어떻게 보냈어? 뭔가 신난 표정인데?",
              "r": "ya, jumal eotteoke bonaesseo? mwonga sinnan pyojeonginde?",
              "e": "Hey, how was your weekend? You look kinda excited."
            },
            {
              "s": 1,
              "t": "말도 마. 금요일에 불금 제대로 보내고 토요일엔 바다 갔다 왔잖아.",
              "r": "maldo ma. geumyoire bulgeum jedaero bonaego toyoireun bada gatda watjana.",
              "e": "Don't even get me started. Had a proper TGIF Friday and went to the beach Saturday."
            },
            {
              "s": 0,
              "t": "헐 바다? 누구랑? 나 빼고 갔어 진짜?",
              "r": "heol bada? nugurang? na ppaego gasseo jinjja?",
              "e": "What, the beach? With who? You went without me, seriously?"
            },
            {
              "s": 1,
              "t": "미안미안 ㅋㅋ 급 번개였어. 대학 동기들이 갑자기 가자 그래서.",
              "r": "mianmian kk geup beongaeyeosseo. daehak donggideuri gapjagi gaja geuraeseo.",
              "e": "Sorry sorry haha, it was a last-minute thing. My college buddies suddenly said let's go."
            },
            {
              "s": 0,
              "t": "아 부럽다 진짜. 날씨도 완전 좋았잖아 주말에.",
              "r": "a bureopda jinjja. nalssido wanjeon joatjana jumare.",
              "e": "Ugh, so jealous. The weather was perfect this weekend too."
            },
            {
              "s": 1,
              "t": "맞아, 회 먹고 노을 보는데 진짜 인생샷 건졌어. 나중에 보여줄게.",
              "r": "maja, hoe meokgo noeul boneunde jinjja insaengsyat geonjyeosseo. najunge boyeojulge.",
              "e": "Right, we ate sashimi and watched the sunset, I got a once-in-a-lifetime shot. I'll show you later."
            },
            {
              "s": 0,
              "t": "오 기대된다. 근데 일요일은? 뻗었지?",
              "r": "o gidaedoenda. geunde iryoireun? ppeodeotji?",
              "e": "Ooh, can't wait. But what about Sunday? You crashed, right?"
            },
            {
              "s": 1,
              "t": "당연하지 ㅋㅋ 하루 종일 침대랑 한 몸 됐어. 완전 꿀휴식.",
              "r": "dangyeonhaji kk haru jongil chimdaerang han mom dwaesseo. wanjeon kkulhyusik.",
              "e": "Obviously haha, I was one with my bed all day. Total sweet rest."
            }
          ],
          "vocab": [
            {
              "w": "불금",
              "r": "bulgeum",
              "m": "burning Friday / TGIF night out"
            },
            {
              "w": "번개",
              "r": "beongae",
              "m": "a spontaneous, last-minute meetup"
            },
            {
              "w": "인생샷",
              "r": "insaengsyat",
              "m": "a once-in-a-lifetime photo"
            },
            {
              "w": "뻗다",
              "r": "ppeotda",
              "m": "to crash / be totally knocked out"
            },
            {
              "w": "꿀휴식",
              "r": "kkulhyusik",
              "m": "sweet, perfect rest (kkul = honey)"
            },
            {
              "w": "한 몸 되다",
              "r": "han mom doeda",
              "m": "to become one with (stuck together)"
            }
          ]
        },
        {
          "scene": "At a dog park",
          "title": "Gushing About Your Pet",
          "speakers": [
            {
              "name": "Dongmin",
              "emoji": "🐶"
            },
            {
              "name": "You",
              "emoji": "🥰"
            }
          ],
          "note": "Pet owners in Korea call themselves \"집사\" (jipsa, \"butler/servant\") for cats and increasingly joke about being their pet's servant — and a pet is often called \"우리 OO\" or affectionately a family member, with \"댕댕이\" (daengdaengi) being internet slang for \"멍멍이\" (meongmeongi, doggie).",
          "lines": [
            {
              "s": 0,
              "t": "어머, 얘 너무 귀엽다! 몇 살이에요? 완전 애기 같아.",
              "r": "eomeo, yae neomu gwiyeopda! myeot sarieyo? wanjeon aegi gata.",
              "e": "Oh my, your dog is so cute! How old? Looks like a total baby."
            },
            {
              "s": 1,
              "t": "이제 두 살이요. 근데 아직도 완전 애기처럼 굴어요 ㅋㅋ.",
              "r": "ije du sariyo. geunde ajikdo wanjeon aegicheoreom gureoyo kk.",
              "e": "Two now. But he still acts like a total baby, haha."
            },
            {
              "s": 0,
              "t": "우리 댕댕이도 그래요. 덩치만 컸지 하는 짓은 강아지예요.",
              "r": "uri daengdaengido geuraeyo. deongchiman keotji haneun jiseun gangajiyeyo.",
              "e": "My doggie's the same. He's big in size but acts like a puppy."
            },
            {
              "s": 1,
              "t": "ㅋㅋㅋ 인정. 아침마다 깨워서 산책 가자고 난리도 아니에요.",
              "r": "kkk injeong. achimmada kkaewoseo sanchaek gajago nallido anieyo.",
              "e": "Haha, true. Every morning he wakes me up making a huge fuss to go for a walk."
            },
            {
              "s": 0,
              "t": "완전 공감. 진짜 우리가 집사지 뭐. 얘네가 상전이야.",
              "r": "wanjeon gonggam. jinjja uriga jipsaji mwo. yaenega sangjeoniya.",
              "e": "Totally relate. We're basically their servants. They're the masters."
            },
            {
              "s": 1,
              "t": "맞아요 ㅋㅋ 그래도 퇴근하고 꼬리 흔들면 하루 피로가 싹 풀려요.",
              "r": "majayo kk geuraedo toegeunhago kkori heundeulmyeon haru piroga ssak pullyeoyo.",
              "e": "Right, haha, but when he wags his tail as I get home, all my fatigue just melts away."
            },
            {
              "s": 0,
              "t": "그 맛에 키우는 거죠. 우리 애들 한 번 인사시킬까요?",
              "r": "geu mate kiuneun geojyo. uri aedeul han beon insasikilkkayo?",
              "e": "That's exactly why we keep them. Should we let our kids say hi to each other?"
            },
            {
              "s": 1,
              "t": "좋아요! 어, 봐봐 둘이 벌써 친해졌네 ㅋㅋ 너무 귀여워.",
              "r": "joayo! eo, bwabwa duri beolsseo chinhaejyeonne kk neomu gwiyeowo.",
              "e": "Sure! Oh look, they're already getting along, haha. So cute."
            }
          ],
          "vocab": [
            {
              "w": "댕댕이",
              "r": "daengdaengi",
              "m": "doggie (cute internet slang)"
            },
            {
              "w": "덩치",
              "r": "deongchi",
              "m": "body size / build"
            },
            {
              "w": "집사",
              "r": "jipsa",
              "m": "servant/butler (pet owner self-label)"
            },
            {
              "w": "상전",
              "r": "sangjeon",
              "m": "master / the one who's served"
            },
            {
              "w": "피로가 풀리다",
              "r": "piroga pullida",
              "m": "fatigue melts away"
            },
            {
              "w": "꼬리 흔들다",
              "r": "kkori heundeulda",
              "m": "to wag one's tail"
            }
          ]
        },
        {
          "scene": "Booking and going to a concert",
          "title": "Getting Tickets With a Friend",
          "speakers": [
            {
              "name": "Hyein",
              "emoji": "🎤"
            },
            {
              "name": "You",
              "emoji": "🎟️"
            }
          ],
          "note": "\"피켓팅\" (piketing) is a slang blend of \"피 터지는 티켓팅\" (\"bloody ticketing\") — for hot K-pop concerts, tickets sell out in seconds, so scoring them feels like war. \"순삭\" (sunsak) means something vanished instantly.",
          "lines": [
            {
              "s": 0,
              "t": "야 그 콘서트 티켓팅 오늘 8시 맞지? 너 준비됐어?",
              "r": "ya geu konseoteu tiketing oneul yeodeolsi matji? neo junbidwaesseo?",
              "e": "Hey, that concert ticketing is today at 8, right? You ready?"
            },
            {
              "s": 1,
              "t": "당연하지. 광클 준비 끝났어. 이번엔 무조건 성공해야 돼.",
              "r": "dangyeonhaji. gwangkeul junbi kkeunnasseo. ibeonen mujogeon seonggonghaeya dwae.",
              "e": "Of course. I'm ready to spam-click. This time we have to succeed no matter what."
            },
            {
              "s": 0,
              "t": "진짜 피켓팅이야 이건. 지난번엔 순식간에 다 매진됐잖아.",
              "r": "jinjja piketingiya igeon. jinanbeonen sunsikgane da maejindwaetjana.",
              "e": "This is seriously a bloodbath ticketing. Last time it sold out in an instant."
            },
            {
              "s": 1,
              "t": "아 맞다 순삭이었지. 자, 카운트 시작한다. 8시 정각!",
              "r": "a matda sunsagieotji. ja, kaunteu sijakhanda. yeodeolsi jeonggak!",
              "e": "Oh right, it vanished instantly. Okay, the countdown's starting. 8 o'clock sharp!"
            },
            {
              "s": 0,
              "t": "잡았다!! 대박 나 두 자리 잡았어! 너 옆자리야!",
              "r": "jabatda!! daebak na du jari jabasseo! neo yeopjariya!",
              "e": "Got it!! Holy crap, I grabbed two seats! You're right next to me!"
            },
            {
              "s": 1,
              "t": "헐 미쳤다 진짜?! 너 완전 능력자네. 자리 어디야?",
              "r": "heol michyeotda jinjja?! neo wanjeon neungnyeokjane. jari eodiya?",
              "e": "Whoa, no way, seriously?! You're a total legend. Where are the seats?"
            },
            {
              "s": 0,
              "t": "앞에서 다섯 번째 줄! 무대 코앞이야. 우리 완전 운 좋다.",
              "r": "apeseo daseot beonjjae jul! mudae koapiya. uri wanjeon un jota.",
              "e": "Fifth row from the front! Right by the stage. We're so lucky."
            },
            {
              "s": 1,
              "t": "대박 사건이다 진짜. 그날까지 어떻게 기다리지? 벌써 떨려.",
              "r": "daebak sageonida jinjja. geunalkkaji eotteoke gidariji? beolsseo tteollyeo.",
              "e": "This is huge, seriously. How do I wait until then? I'm already trembling."
            }
          ],
          "vocab": [
            {
              "w": "피켓팅",
              "r": "piketing",
              "m": "fierce ticketing (lit. bloody ticketing)"
            },
            {
              "w": "광클",
              "r": "gwangkeul",
              "m": "frantic clicking / spam-clicking"
            },
            {
              "w": "순삭",
              "r": "sunsak",
              "m": "vanished instantly"
            },
            {
              "w": "매진",
              "r": "maejin",
              "m": "sold out"
            },
            {
              "w": "능력자",
              "r": "neungnyeokja",
              "m": "a capable person / legend"
            },
            {
              "w": "코앞",
              "r": "koap",
              "m": "right in front (lit. nose-front)"
            }
          ]
        },
        {
          "scene": "Outside after hanging out",
          "title": "Saying Goodbye for Now",
          "speakers": [
            {
              "name": "Minseo",
              "emoji": "👋"
            },
            {
              "name": "You",
              "emoji": "🙂"
            }
          ],
          "note": "\"조심히 들어가\" (josimhi deureoga, \"get home safe\") is the standard, almost obligatory goodbye in Korea — not saying it can feel cold. And \"언제 밥 한번 먹자\" (\"let's grab a meal sometime\") is often a polite filler, not a firm plan, so pinning down an actual date signals you really mean it.",
          "lines": [
            {
              "s": 0,
              "t": "아 벌써 시간이 이렇게 됐네. 나 슬슬 가봐야겠다.",
              "r": "a beolsseo sigani ireoke dwaenne. na seulseul gabwayagetda.",
              "e": "Oh wow, it's gotten this late already. I should get going soon."
            },
            {
              "s": 1,
              "t": "벌써? 시간 진짜 빨리 간다. 오늘 완전 재밌었어.",
              "r": "beolsseo? sigan jinjja ppalli ganda. oneul wanjeon jaemisseosseo.",
              "e": "Already? Time really flies. Today was so much fun."
            },
            {
              "s": 0,
              "t": "그러니까. 우리 이렇게 만나면 시간 가는 줄 모르겠어.",
              "r": "geureonikka. uri ireoke mannamyeon sigan ganeun jul moreugesseo.",
              "e": "I know, right. When we hang out like this I totally lose track of time."
            },
            {
              "s": 1,
              "t": "맞아. 다음엔 진짜로 날 잡아서 제대로 보자. 빈말 아니고.",
              "r": "maja. daeumen jinjjaro nal jabaseo jedaero boja. binmal anigo.",
              "e": "Right. Next time let's actually pick a date and meet properly. And I mean it."
            },
            {
              "s": 0,
              "t": "콜! 그럼 다음 주말 어때? 미리 정해 놓자 그냥.",
              "r": "kol! geureom daeum jumal eottae? miri jeonghae nota geunyang.",
              "e": "Deal! How about next weekend then? Let's just lock it in now."
            },
            {
              "s": 1,
              "t": "좋아 좋아. 토요일로 하자. 까먹지 말고 캘린더에 박아 놔.",
              "r": "joa joa. toyoillo haja. kkameokji malgo kaellindeoe baga nwa.",
              "e": "Sounds good. Let's do Saturday. Don't forget, stick it in your calendar."
            },
            {
              "s": 0,
              "t": "오케이. 그럼 나 진짜 간다. 조심히 들어가, 도착하면 톡해.",
              "r": "okei. geureom na jinjja ganda. josimhi deureoga, dochakhamyeon tokae.",
              "e": "Okay. I'm really off now. Get home safe, and text me when you're back."
            },
            {
              "s": 1,
              "t": "응 너도! 오늘 고마웠어. 담주에 보자, 들어가!",
              "r": "eung neodo! oneul gomawosseo. damjue boja, deureoga!",
              "e": "You too! Thanks for today. See you next week, get home safe!"
            }
          ],
          "vocab": [
            {
              "w": "슬슬",
              "r": "seulseul",
              "m": "gradually / about time to (do something)"
            },
            {
              "w": "날 잡다",
              "r": "nal japda",
              "m": "to set a date"
            },
            {
              "w": "빈말",
              "r": "binmal",
              "m": "empty words / lip service"
            },
            {
              "w": "콜",
              "r": "kol",
              "m": "deal! / I'm in! (casual yes)"
            },
            {
              "w": "조심히 들어가",
              "r": "josimhi deureoga",
              "m": "get home safe"
            },
            {
              "w": "톡하다",
              "r": "tokada",
              "m": "to message (on KakaoTalk)"
            }
          ]
        }
      ]
    }
  }
};
