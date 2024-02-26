const thankful_sent = [
    "'I will give thanks to the Lord with my whole heart, I will tell of all your wonderful deeds' <br>Psalms 9:1",
    "'Do not get drunk with wine, for that is debauchery; but be filled with the Spirit, as you sing psalms and hymns and spiritual songs among yourselves, singing and making melody to the Lord in your hearts, giving thanks to God the Father at all times and for everything in the name of our Lord Jesus Christ.' <br>Ephisians 5:18-20",
    "'As you therefore have received Christ Jesus the Lord, continue to live your lives in him, rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving.' <br>Colossians 2:6-7",
    "'Devote yourselves to prayer, keeping alert in it with thanksgiving.' <br>Colossians 4:2",
    "'Therefore, since we are receiving a kingdom that cannot be shaken, let us give thanks, by which we offer to God an acceptable worship with reverence and awe; for indeed our God is a consuming fire.' <br>Hebrews 12:28-29",
    "'O Lord, you are my God, I will exalt you, I will praise your name, for you have done wonderful things,plans formed of old, faithful and sure' <br>Isiah 25:1",
    "'I praise you, for I am fearfully and wonderfully made. Wonderful are your works; that I know very well.' <br>Psalms 139:14",
];
const confusion_sent = [
    "'And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.' <br>Colossians 3:17",
    "'For it is God who is at work in you, enabling you both to will and to work for his good pleasure.' <br>Philippians 2:13",
    "'Am I now seeking human approval, or God's approval? Or am I trying to please people? If I were still pleasing people, I would not be a servant of Christ.' <br>Galatians 1:10",
    "'If we live by the Spirit, let us also be guided by the Spirit.' <br>Galatians 5:25",
    "'The God of peace will shortly crush Satan under your feet. The grace of our Lord Jesus Christ be with you.' <br>Romans 16:20",
    "'Trust in the Lord with all your heart, and do not rely on your own insight. In all your ways acknowledge him, and he will make straight your paths.' <br>Proverbs 3:5-6",
    "'For God is a God not of disorder but of peace.' <br>1 Corinthians 14:33",
    "'Do not fear, for I am with you, do not be afraid, for I am your God; I will strengthen you, I will help you, I will uphold you with my victorious right hand.' <br>Isaiah 41:10",
    "'For he will command his angels concerning you to guard you in all your ways. On their hands they will bear you up, so that you will not dash your foot against a stone.' \nPsalms 91:11-12",
    "'My brothers and sisters, whenever you face trials of any kind, consider it nothing but joy, because you know that the testing of your faith produces endurance; and let endurance have its full effect, so that you may be mature and complete, lacking in nothing.' <br>James 1:2-4",
    "'Let me hear of your steadfast love in the morning, for in you I put my trust. Teach me the way I should go, for to you I lift up my soul.' <br>Psalms 143:8",
    "'Beloved, do not believe every spirit, but test the spirits to see whether they are from God; for many false prophets have gone out into the world. By this you know the Spirit of God: every spirit that confesses that Jesus Christ has come in the flesh is from God' <br>1 John 4:1-2",
    "'If any of you is lacking in wisdom, ask God, who gives to all generously and ungrudgingly, and it will be given you. But ask in faith, never doubting, for the one who doubts is like a wave of the sea, driven and tossed by the wind, for the doubter, being double-minded and unstable in every way, must not expect to receive anything from the Lord.' <br>James 1:5-8",
    "'The Lord is my shepherd, I shall not want. He makes me lie down in green pastures; he leads me beside still waters; he restores my soul. He leads me in right paths for his name's sake.' <br>Psalms 23:1-3",
    "'May he grant you your heart's desire, and fulfill all your plans. May we shout for joy over your victory, and in the name of our God set up our banners. May the Lord fulfill all your petitions.' <br>Psalms 20 4-5",
    "'Nevertheless I am continually with you, you hold my right hand. You guide me with your counsel, and afterward you will receive me with honor.' \nPsalms 73:23-24",
];  
const anxiety_sent = [
    "'But our citizenship is in heaven, and it is from there that we are expecting a Savior, the Lord Jesus Christ. He will transform the body of our humiliation that it may be conformed to the body of his glory, by the power that also enables him to make all things subject to himself.' <br>Philippians 3:20-21",
    "'Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. 7And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.' <br>Philippians 4:6-7",
    "'There is no fear in love, but perfect love casts out fear; for fear has to do with punishment, and whoever fears has not reached perfection in love. We love because he first loved us.' <br>1 John 4:18-19",
    "'For God did not give us a spirit of cowardice, but rather a spirit of power and of love and of self-discipline.' <br>2 Timothy 1:7",
    "'Therefore, let those suffering in accordance with God's will entrust themselves to a faithful Creator, while continuing to do good.' <br>1 Peter 4:19",
    "'No testing has overtaken you that is not common to everyone. God is faithful, and he will not let you be tested beyond your strength, but with the testing he will also provide the way out so that you may be able to endure it.' <br>1 Corinthians 10:13",
    "'Then the Lord knows how to rescue the godly from trial, and to keep the unrighteous under punishment until the day of judgment' <br>2 Peter 2:9",
    "'For surely I know the plans I have for you, says the Lord, plans for your welfare and not for harm, to give you a future with hope.' <br>Jeremiah 29:11",
    "'He heals the brokenhearted,and binds up their wounds.' \nPsalms 147:3",
    "'And after you have suffered a little while, the God of all grace, who has called you to his eternal glory in Christ, will himself restore, establish, and strengthen you.' <br> 1 Peter 5:10",
    "'When a woman is in labor, she has pain, because her hour has come. But when her child is born, she no longer remembers the anguish because of the joy of having brought a human being into the world. So you have pain now; but I will see you again, and your hearts will rejoice, and no one will take your joy from you.' <br>John 16:21-22",
    "'Cast all your anxiety on him, because he cares for you' <br>1 Peter 5:7",
    "'The Lord is near to the brokenhearted, and saves the crushed in spirit' <br>Psalms 38:18",
    "'For his anger is but for a moment; his favor is for a lifetime. Weeping may linger for the night, but joy comes with the morning.' <br>Psalms 30:5",
    "'Therefore, since we are justified by faith, we have peace with God through our Lord Jesus Christ, through whom we have obtained access to this grace in which we stand; and we boast in our hope of sharing the glory of God. And not only that, but we also boast in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope' <br>Romans 5:1-5",
    "'Very truly, I tell you, you will weep and mourn, but the world will rejoice; you will have pain, but your pain will turn into joy.' <br>John 16:20",
    "'Pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. Do not quench the Spirit.' <br>1 Thessalonians 5:17-19",
    "'because you know that the testing of your faith produces endurance; and let endurance have its full effect, so that you may be mature and complete, lacking in nothing.' <br>James 1:3",
    "'In this you rejoice, even if now for a little while you have had to suffer various trials, so that the genuineness of your faith—being more precious than gold that, though perishable, is tested by fire—may be found to result in praise and glory and honor when Jesus Christ is revealed.' <br>1 Peter 1:6-7",
    "'Beloved , do not be surprised at the fiery ordeal that is taking place among you to test you, as though something strange were happening to you. But rejoice insofar as you are sharing Christ's sufferings, so that you may also be glad and shout for joy when his glory is revealed.' <br>1 Peter 4:12-13",
    "'Yet if any of you suffers as a Christian , do not consider it a disgrace, but glorify God because you bear this name.' <br>1 Peter 4:16",
    "'No testing has overtaken you that is not common to everyone. God is faithful, and he will not let you be tested beyond your strength, but with the testing he will also provide the way out so that you may be able to endure it.' <br>1 Corinthians 10:13",
    "'Then the Lord knows how to rescue the godly from trial, and to keep the unrighteous under punishment until the day of judgment' <br>2 Peter 2:9",
    "'I praise you, for I am fearfully and wonderfully made. Wonderful are your works; that I know very well.' <br>Psalms 139:14",
    "'The God of peace will shortly crush Satan under your feet. The grace of our Lord Jesus Christ be with you.' <br>Romans 16:20",
    "' “Come to me, all you that are weary and are carrying heavy burdens, and I will give you rest. Take my yoke upon you, and learn from me; for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.”' <br>Matthew 11:28-30",
];
const faith_sent = [
    "'For we walk by faith, not by sight.' <br>2 Corinthians 5:27",
    "'Whatever you ask for in prayer with faith, you will receive.' <br>Matthew 21:22",
    "'Therefore, since we are justified by faith, we have peace with God through our Lord Jesus Christ,' <br>Romans 5:1",
    "'So faith by itself, if it has no works, is dead.' <br>James 2:17",
    "'Jesus answered them, “Have faith in God. Truly I tell you, if you say to this mountain, Be taken up and thrown into the sea, and if you do not doubt in your heart, but believe that what you say will come to pass, it will be done for you. So I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.' <br>Mark 11:22-24",
    "'And without faith it is impossible to please God, for whoever would approach him must believe that he exists and that he rewards those who seek him.' <br>Hebrews 11:6",
    "'Yet all these, though they were commended for their faith, did not receive what was promised, since God had provided something better so that they would not, apart from us, be made perfect.' <br>Hebrews 11:39-40",
    "'If any of you is lacking in wisdom, ask God, who gives to all generously and ungrudgingly, and it will be given you. But ask in faith, never doubting, for the one who doubts is like a wave of the sea, driven and tossed by the wind, for the doubter, being double-minded and unstable in every way, must not expect to receive anything from the Lord.' <br>James 1:5-8",
    "'He said to them, “Because of your little faith. For truly I tell you, if you have faith the size of a mustard seed, you will say to this mountain, Move from here to there, and it will move; and nothing will be impossible for you.” '<br>Matthew 17:20",
    "'For whatever is born of God conquers the world. And this is the victory that conquers the world, our faith.' <br>1 John 5:4",
    "'With all of these, take the shield of faith, with which you will be able to quench all the flaming arrows of the evil one.' <br>Ephesians 6:16",
    "'Jesus said to him, “Go; your faith has made you well.” Immediately he regained his sight and followed him on the way.' <br>Mark 10:52",
    "'So faith comes from what is heard, and what is heard comes through the word of Christ.' <br>Romans 10:17",
    "'Although you have not seen him, you love him; and even though you do not see him now, you believe in him and rejoice with an indescribable and glorious joy, for you are receiving the outcome of your faith, the salvation of your souls.' <br>1 Peter 1:8-9",
    "'Now faith is the assurance of things hoped for, the conviction of things not seen. Indeed, by faith our ancestors received approval. By faith we understand that the worlds were prepared by the word of God, so that what is seen was made from things that are not visible.' <br>Hebrews 11:1-3",
    "'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God— not the result of works, so that no one may boast. For we are what he has made us, created in Christ Jesus for good works, which God prepared beforehand to be our way of life.' <br>Ephesians 2:8-10",
    "'Then Jesus answered her, “Woman, great is your faith! Let it be done for you as you wish.” And her daughter was healed instantly.' <br>Matthew 15:28",
    "'For in it the righteousness of God is revealed through faith for faith; as it is written, “The one who is righteous will live by faith.” ' <br>Romans 1:17",
    "'Fight the good fight of the faith; take hold of the eternal life, to which you were called and for which you made the good confession in the presence of many witnesses.' <br>1 Timothy 6:12",
];
const joy_sent = [
    "'For I am convinced that neither death, nor life, nor angels, nor rulers, nor things present, nor things to come, nor powers,nor height, nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.' <br>Romans 8:38",
    "'Then there is any encouragement in Christ, any consolation from love, any sharing in the Spirit, any compassion and sympathy, make my joy complete: be of the same mind, having the same love, being in full accord and of one mind' <br>Philippians 2:1-2",
    "'Finally, my brothers and sisters, rejoice in the Lord.' <br>Philippians 3:1",
    "'Go, eat your bread with enjoyment, and drink your wine with a merry heart; for God has long ago approved what you do.' <br>Ecclesiastes 8:7",
    "'May the God of hope fill you with all joy and peace in believing, so that you may abound in hope by the power of the Holy Spirit.' <br>Romans 15:13",
    "'Then he said to them, “Go your way, eat the fat and drink sweet wine and send portions of them to those for whom nothing is prepared, for this day is holy to our Lord; and do not be grieved, for the joy of the Lord is your strength.”' <br>Nehemiah 8:10",
    "'I have indeed received much joy and encouragement from your love, because the hearts of the saints have been refreshed through you, my brother.' <br>Philemon 1:7",
    "'For his anger is but for a moment, his favor is for a lifetime. Weeping may linger for the night, but joy comes with the morning.' ,<br>Psalms 30:5,",
    "'Although you have not seen him, you love him; and even though you do not see him now, you believe in him and rejoice with an indescribable and glorious joy, for you are receiving the outcome of your faith, the salvation of your souls.' <br>1 Peter 1:8-9",
    "'Although I have much to write to you, I would rather not use paper and ink; instead I hope to come to you and talk with you face to face, so that our joy may be complete. <br>(This verse is talking about the joy in human connection.)' <br>1 John 1:12",
    "'as sorrowful, yet always rejoicing, as poor, yet making many rich; as having nothing, and yet possessing everything.' <br>2 Corinthians 6:10",
    "'By contrast, the fruit of the Spirit is love, joy, peace, patience, kindness, generosity, faithfulness,' <br>Galatians 5:22",
    "'Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. Do not quench the Spirit.' <br>1 Thessalonians 5:16-19 ",
    "'Until now you have not asked for anything in my name. Ask and you will receive, so that your joy may be complete.' <br>John 16:24",
    "'Your words were found, and I ate them, and your words became to me a joy and the delight of my heart, for I am called by your name, O Lord, God of hosts.' <br>Jeremiah 15:16",
    "'You show me the path of life. In your presence there is fullness of joy, in your right hand are pleasures forevermore.' <br>Psalms 16:11",
    "'If you keep my commandments, you will abide in my love, just as I have kept my Father's commandments and abide in his love. 11I have said these things to you so that my joy may be in you, and that your joy may be complete.' <br>John 15:10-11",
    "'Rejoice in hope, be patient in suffering, persevere in prayer.' <br>Romans 12:12",
    "'When I think of you on my bed, and meditate on you in the watches of the night, for you have been my help, and in the shadow of your wings I sing for joy.' <br>Psalms 63:6-7",
    "'This is the day that the Lord has made, let us rejoice and be glad in it.' <br>Psalms 118:24",
    "'The Lord is my strength and my shield. in him my heart trusts, so I am helped, and my heart exults, and with my song I give thanks to him.' <br>Psalms 18:7",
    "'The Lord, your God, is in your midst, a warrior who gives victory, he will rejoice over you with gladness, he will renew you in his love, he will exult over you with loud singing' <br>Zephaniah 3:17",
];
const alone_sent = [
    "'do not fear, for I am with you, do not be afraid, for I am your God; I will strengthen you, I will help you,I will uphold you with my victorious right hand.' <br>Isaiah 42:10",
    "'And teaching them to obey everything that I have commanded you. And remember, I am with you always, to the end of the age.' \nMatthew 28:20",
    "'I will not leave you orphaned; I am coming to you' \nJohn 14:18",
    "'No one shall be able to stand against you all the days of your life. As I was with Moses, so I will be with you; I will not fail you or forsake you.' \nJoshua 1:5",
    "'Even though I walk through the darkest valley, I fear no evil; for you are with me; your rod and your staff they comfort me.'\nPsalms 23:4",
    "'For the Lord will not cast away his people, for his great name's sake, because it has pleased the Lord to make you a people for himself.' <br>1 Samuel 12:22",
    "'I hereby command you: Be strong and courageous; do not be frightened or dismayed, for the Lord your God is with you wherever you go' <br>Joshua 1:9",
    "'For though I am absent in body, yet I am with you in spirit, and I rejoice to see your morale and the firmness of your faith in Christ.' <br>Colossians 2:5",
    "'I praise you, for I am fearfully and wonderfully made. Wonderful are your works; that I know very well.' <br>Psalms 139:14",
    "'It is the Lord who goes before you. He will be with you; he will not fail you or forsake you. Do not fear or be dismayed.' <br>Deuteronomy 31:8",
    "'If my father and mother forsake me, the Lord will take me up.' <br>Psalms 27:10",
    "'Where can I go from your spirit ? Or where can I flee from your presence? If I ascend to heaven, you are there; if I make my bed in Sheol, you are there. If I take the wings of the morning and settle at the farthest limits of the sea, even there your hand shall lead me, and your right hand shall hold me fast.' <br>Psalms 139:7-10",
    "'The Lord will guide you continually, and satisfy your needs in parched places, and make your bones strong; and you shall be like a watered garden, like a spring of water, whose waters never fail.' <br>Isaiah 58:11",
    "'Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and the God of all consolation, who consoles us in all our affliction, so that we may be able to console those who are in any affliction with the consolation with which we ourselves are consoled by God. ' <br>2 Corinthians 1:3-4",
    "'Can a woman forget her nursing child, or show no compassion for the child of her womb? Even these may forget, yet I will not forget you. See, I have inscribed you on the palms of my hands; your walls are continually before me.' \nIsaiah 49:15-16",
    "'The God of peace will shortly crush Satan under your feet. The grace of our Lord Jesus Christ be with you.' <br>Romans 16:20",
    "'Do not let your hearts be troubled. Believe in God, believe also in me.' <br>John 14:1",
    "'For the Lord will not cast away his people, for his great name's sake, because it has pleased the Lord to make you a people for himself.' <br>1 samuel 12:22",
];
const love_sent = [
    "'Above all, clothe yourselves with love, which binds everything together in perfect harmony.' <br>Colossians 3:14",
    "'Although you have not seen him, you love him; and even though you do not see him now, you believe in him and rejoice with an indescribable and glorious joy, for you are receiving the outcome of your faith, the salvation of your souls.' <br>1 Peter 1:8-9",
    "'But God proves his love for us in that while we still were sinners Christ died for us.' <br>Romans 5:8",
    "'Keep alert, stand firm in your faith, be courageous, be strong. Let all that you do be done in love.' <br>1 Corinthians 16:13",
    "'Love is patient; love is kind; love is not envious or boastful or arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice in wrongdoing, but rejoices in the truth. It bears all things, believes all things, hopes all things, endures all things.' <br>1 Corinthians 13:4-7",
    "'So we have known and believe the love that God has for us. God is love, and those who abide in love abide in God, and God abides in them.' <br>1 John 4:16",
    "'God's love was revealed among us in this way: God sent his only Son into the world so that we might live through him. In this is love, not that we loved God but that he loved us and sent his Son to be the atoning sacrifice for our sins.' <br>1 John 4:9-10",
    "'Whoever does not love does not know God, for God is love.' <br>1 john 4:8",
    "'Let love be genuine; hate what is evil, hold fast to what is good; love one another with mutual affection; outdo one another in showing honor. Do not lag in zeal, be ardent in spirit, serve the Lord. Rejoice in hope, be patient in suffering, persevere in prayer.' <br>Romans 12:9-12",
    "'And now faith, hope, and love abide, these three; and the greatest of these is love.' <br>Corinthians 13:13",
    "'We love because he first loved us.' <br>1 John 4:19",
    "'Above all, maintain constant love for one another, for love covers a multitude of sins.' <br>1 Peter 4:8",
    "'Do not let loyalty and faithfulness forsake you; bind them around your neck, write them on the tablet of your heart. So you will find favor and good repute in the sight of God and of people.' <br>Proverbs 3:3-4",
    "'By contrast, the fruit of the Spirit is love, joy, peace, patience, kindness, generosity, faithfulness,' <br>Galatians 5:22",
    "'For the Father himself loves you, because you have loved me and have believed that I came from God.' <br>John 16:24",
    "'The Lord appeared to him from far away. I have loved you with an everlasting love; therefore I have continued my faithfulness to you.' <br>Jeremiah 31:3",
];
const anger_sent = [
    "'Refrain from anger, and forsake wrath.Do not fret—it leads only to evil.' <br>Psalms 38:8",
    "'Be angry but do not sin, do not let the sun go down on your anger' <br>Ephesians 4:26",
    "'Have nothing to do with stupid and senseless controversies; you know that they breed quarrels. And the Lord's servant must not be quarrelsome but kindly to everyone, an apt teacher, patient, correcting opponents with gentleness. God may perhaps grant that they will repent and come to know the truth' <br>2 Timothy 2:23-25",
    "'Do not be overcome by evil, but overcome evil with good.' <br>Romans 12:21",
    "'You must understand this, my beloved: let everyone be quick to listen, slow to speak, slow to anger, for your anger does not produce God's righteousness. ' <br>James 1:19-20",
    "'Beloved, never avenge yourselves, but leave room for the wrath of God; for it is written, “Vengeance is mine, I will repay, says the Lord. No, “if your enemies are hungry, feed them; if they are thirsty, give them something to drink; for by doing this you will heap burning coals on their heads.” Do not be overcome by evil, but overcome evil with good.”' <br>Romans 12:19-21",
    "'I desire, then, that in every place the men should pray, lifting up holy hands without anger or argument' <br>1 Timothy 2:8",
    "'Let no evil talk come out of your mouths, but only what is useful for building up, as there is need, so that your words may give grace to those who hear.' <br>Ephesians 4:29",
    "'Put away from you all bitterness and wrath and anger and wrangling and slander, together with all malice, and be kind to one another, tenderhearted, forgiving one another, as God in Christ has forgiven you.' <br>Ephesians 4:31-32",
    "'And the Lord said, 'Is it right for you to be angry?' <br>Jonah 4:4",
    "'A fool gives full vent to anger, but the wise quietly holds it back.' <br>Preverbs 29:11",
    "'But love your enemies, do good, and lend, expecting nothing in return. Your reward will be great, and you will be children of the Most High; for he is kind to the ungrateful and the wicked. Be merciful, just as your Father is merciful.' <br>Luke 6:35-36",
    "'If it is possible, so far as it depends on you, live peaceably with all' <br>Romans 12:18",
];
const temptation_sent = [
    "And when he comes home, he calls together his friends and neighbors, saying to them, ' Rejoice with me, for I have found my sheep that was lost.''Just so, I tell you, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance.' <br>Luke 15:6-7",
    "'Blessed is anyone who endures temptation. Such a one has stood the test and will receive the crown of life that the Lord has promised to those who love him.' <br>James 1:12",
    "'No one, when tempted, should say, “I am being tempted by God”; for God cannot be tempted by evil and he himself tempts no one. But one is tempted by one's own desire, being lured and enticed by it; then, when that desire has conceived, it gives birth to sin, and that sin, when it is fully grown, gives birth to death.' <br>James 1:13-15 ",
    "'And lead us not into temptation, but deliver us from the evil one' <br> Matthew 6:13",
    "'No testing has overtaken you that is not common to everyone. God is faithful, and he will not let you be tested beyond your strength, but with the testing he will also provide the way out so that you may be able to endure it.' <br>1 Corinthians 10:13",
    "'Then the Lord knows how to rescue the godly from trial, and to keep the unrighteous under punishment until the day of judgment' <br>2 Peter 2:9",
    "'But those who want to be rich fall into temptation and are trapped by many senseless and harmful desires that plunge people into ruin and destruction. For the love of money is a root of all kinds of evil, and in their eagerness to be rich some have wandered away from the faith and pierced themselves with many pains.' <br>1 Timothy 6:9-10",
    "'Instead, put on the Lord Jesus Christ, and make no provision for the flesh, to gratify its desires' <br>Romans 13:14",
    "'Shun youthful passions and pursue righteousness, faith, love, and peace, along with those who call on the Lord from a pure heart.' <br>2 Timothy 2:22",
    "'Put to death, therefore, whatever in you is earthly: fornication, impurity, passion, evil desire, and greed' <br>Colossians 3:5",
    "'The God of peace will shortly crush Satan under your feet. The grace of our Lord Jesus Christ be with you.' <br>Romans 16:20",
    "'Because he himself was tested by what he suffered, he is able to help those who are being tested.' \nHebrews 2:18",
    "'Finally, be strong in the Lord and in the strength of his power. Put on the whole armor of God, so that you may be able to stand against the wiles of the devil.' <br>Ephesians 6:10-11",
    "'Keep awake and pray that you may not come into the time of trial; the spirit indeed is willing, but the flesh is weak.' <br>Mark 14:38",
    "'I the Lord test the mind and search the heart, to give to all according to their ways, according to the fruit of their doings.' <br>Jeremiah 17:10",
    "'Discipline yourselves, keep alert. Like a roaring lion your adversary the devil prowls around, looking for someone to devour. Resist him, steadfast in your faith, for you know that your brothers and sisters in all the world are undergoing the same kinds of suffering.' <br>1 Peter 5:8-9",
    "'Therefore, do not let sin exercise dominion in your mortal bodies, to make you obey their passions. No longer present your members to sin as instruments of wickedness, but present yourselves to God as those who have been brought from death to life, and present your members to God as instruments of righteousness. For sin will have no dominion over you, since you are not under law but under grace.' <br>Romans 6:12-14",
    "'Live by the Spirit, I say, and do not gratify the desires of the flesh. For what the flesh desires is opposed to the Spirit, and what the Spirit desires is opposed to the flesh; for these are opposed to each other, to prevent you from doing what you want.' <br>Galatians 5:16-17",
    "'For the love of money is a root of all kinds of evil, and in their eagerness to be rich some have wandered away from the faith and pierced themselves with many pains.' <br>1 Timothy 6:10",
    "'Since therefore Christ suffered in the flesh, arm yourselves also with the same intention, so as to live for the rest of your earthly life no longer by human desires but by the will of God.' <br>1 Peter 4:1-2",
    "'Do not love the world or the things in the world. The love of the Father is not in those who love the world, for all that is in the world—the desire of the flesh, the desire of the eyes, the pride in riches—comes not from the Father but from the world. And the world and its desire are passing away, but those who do the will of God live forever.' <br>1 John 2:15-17",
];
const peace_sent = [
    "'I have said this to you, so that in me you may have peace. In the world you face persecution. But take courage; I have conquered the world!' <br>John 16:33",
    "'And let the peace of Christ rule in your hearts, to which indeed you were called in the one body. And be thankful. Let the word of Christ dwell in you richly; teach and admonish one another in all wisdom; and with gratitude in your hearts sing psalms, hymns, and spiritual songs to God. And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.' <br>Colossians 3:15-17",
    "'And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.' <br>Philippians 4:7",
    "'I will both lie down and sleep in peace; for you alone, O Lord, make me lie down in safety' <br>Psalms 4:8",
    "'Now may the Lord of peace himself give you peace at all times in all ways. The Lord be with all of you.' <br>2 Thessalonians 3:16",
    "'Peace I leave with you; my peace I give to you. I do not give to you as the world gives. Do not let your hearts be troubled, and do not let them be afraid.' <br>John 14:27",
    "'Blessed are the pure in heart, for they will see God. “Blessed are the peacemakers, for they will be called children of God.' <br>Matthew 5:8-9",
    "'Pursue peace with everyone, and the holiness without which no one will see the Lord.' <br>Hebrews 12:14",
    "'The God of peace will shortly crush Satan under your feet. The grace of our Lord Jesus Christ be with you.' <br>Romans 16:20",
    "'Making every effort to maintain the unity of the Spirit in the bond of peace.' <br>Ephesians 4:3",
    "'For a child has been born for us, a son given to us, authority rests upon his shoulders, and he is named wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.' <br>Isaiah 9:6",
    "'For the mountains may depart and the hills be removed, but my steadfast love shall not depart from you, and my covenant of peace shall not be removed, says the Lord, who has compassion on you.' <br>Isaiah 54:10",
    "'May the God of hope fill you with all joy and peace in believing, so that you may abound in hope by the power of the Holy Spirit.' <br>Romans 15:13",
    "'He said, “Do not fear, greatly beloved, you are safe. Be strong and courageous!” When he spoke to me, I was strengthened and said, “Let my lord speak, for you have strengthened me.” <br>Daniel 10:19",
    "'How beautiful upon the mountains are the feet of the messenger who announces peace, who brings good news, who announces salvation, who says to Zion, “Your God reigns.” <br>Isiah 52:7",
    "'For he is our peace; in his flesh he has made both groups into one and has broken down the dividing wall, that is, the hostility between us.' <br>Ephesians 2:14",
    "'Grace, mercy, and peace will be with us from God the Father and from Jesus Christ, the Father's Son, in truth and love.' <br>2 John 1:3",
    "'By contrast, the fruit of the Spirit is love, joy, peace, patience, kindness, generosity, faithfulness,' <br>Galatians 5:22",
    "'May the God of peace himself sanctify you entirely; and may your spirit and soul and body be kept sound and blameless at the coming of our Lord Jesus Christ.' <br>1 Thessalonians 5:23",
];

const Awords = [
    [" loved "," loves "," love"," love ","Love "," hearts "," heart ","rgb(238, 29, 239)"],[" Jesus","Jesus"," jesus","Christ's","Christ "," christ"," Son"," peacemaker ","rgb(131, 28, 211)"],["God's"," God"," Lord"," Father"," white"],["faithfulness"," faithful", " faith"," believed "," believes"," believe","rgb(226, 229, 0)"],
    [" Joy"," joy","rejoicing"," rejoices"," Rejoices"," Rejoice"," rejoice"," judgement","glory","rgb(251, 187, 0)"],["hoped"," hopes"," Hope"," hope","afraid","frightened","peacemakers"," peaceably "," Peace ","Peace"," peace","rgb(134, 222, 233)"],["Beloved ","rgb(249, 239, 219)"],
    ["Grace s"," grace","grace","praise"," merciful","fear;","fear ","Fear","fears"," rgb(241, 126, 0)"],["praise","Prayer","prayer","Pray","pray"," Anxiety","anxiety","temptation","tempted","sins"," Sin "," sin ","sin "," rgb(19, 89, 172)"],[" Spirit "," spirit ","Spirit"," anger ","anger"," evil "," angry ","angry"," rgb(247, 0, 0)"],
];

function displaySentence(sentence) {
    document.getElementById("randomSentence").innerText = sentence;
}
function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var blur1 = document.getElementById('blur1');
    blur1.classList.toggle('active')
    var quote = document.getElementById('quote');
    quote.classList.toggle('active')
}
function highlightWord(sent,randomIndex,word) {
    var sentence = sent[randomIndex];
    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < (word[i].length)-1; j++){
            if (sentence.includes(word[i][j])) {
                var co = word[i][(word[i].length)-1];
                var highlightedSentence = sentence.replace(new RegExp(word[i][j], 'g'), `<span style= "color: ${co}; font-style: italic;">` + word[i][j] + '</span>');
                sentence = highlightedSentence;
                document.getElementById("randomSentence").innerHTML = sentence;  
            }
        }
    }
}   


function thankful() {
    const randomIndex = Math.floor(Math.random() * thankful_sent.length);
    displaySentence(thankful_sent[randomIndex]);
    toggle();
    highlightWord(thankful_sent,randomIndex,Awords);
}
function confusion() {
    const randomIndex = Math.floor(Math.random() * confusion_sent.length);
    displaySentence(confusion_sent[randomIndex]);
    toggle();
    highlightWord(confusion_sent,randomIndex,Awords);
}
function anxiety() {
    const randomIndex = Math.floor(Math.random() * anxiety_sent.length);
    displaySentence(anxiety_sent[randomIndex]);
    toggle();
    highlightWord(anxiety_sent,randomIndex,Awords);
}
function faith() {
    const randomIndex = Math.floor(Math.random() * faith_sent.length);
    displaySentence(faith_sent[randomIndex]);
    toggle();
    highlightWord(faith_sent,randomIndex,Awords);
}
function joy() {
    const randomIndex = Math.floor(Math.random() * joy_sent.length);
    displaySentence(joy_sent[randomIndex]);
    toggle();
    highlightWord(joy_sent,randomIndex,Awords);
}
function alone() {
    const randomIndex = Math.floor(Math.random() * alone_sent.length);
    displaySentence(alone_sent[randomIndex]);
    toggle();
    highlightWord(alone_sent,randomIndex,Awords);
}
function love() {
    const randomIndex = Math.floor(Math.random() * love_sent.length);
    displaySentence(love_sent[randomIndex]);
    toggle();
    highlightWord(love_sent,randomIndex,Awords);
}
function anger() {
    const randomIndex = Math.floor(Math.random() * anger_sent.length);
    displaySentence(anger_sent[randomIndex]);
    toggle();
    highlightWord(anger_sent,randomIndex,Awords);
}
function temptation() {
    const randomIndex = Math.floor(Math.random() * temptation_sent.length);
    displaySentence(temptation_sent[randomIndex]);
    toggle();
    highlightWord(temptation_sent,randomIndex,Awords);
}
function peace() {
    const randomIndex = Math.floor(Math.random() * peace_sent.length);
    displaySentence(peace_sent[randomIndex]);
    toggle();
    highlightWord(peace_sent,randomIndex,Awords);
}