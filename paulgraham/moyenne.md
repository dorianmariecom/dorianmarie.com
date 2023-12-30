Chapitre 12

En 1995, Robert Morris et moi avons lancé une start-up appelée Viaweb.
Notre plan était d’écrire des logiciels qui permettraient aux
utilisateurs finaux de créer des boutiques en ligne. Ce qui était
nouveau à propos de ce logiciel, à l’époque, c’est qu’il fonctionnait
sur notre serveur, en utilisant des pages Web ordinaires comme
interface.

Beaucoup de gens auraient pu avoir cette idée en même temps, bien sûr,
mais pour autant que je sache, Viaweb a été la première application
basée sur le Web. Cela nous a semblé une idée si nouvelle que nous avons
nommé l’entreprise en son honneur : Viaweb, parce que notre logiciel
fonctionnait via le Web, au lieu de s’exécuter sur votre ordinateur de
bureau.

Une autre chose inhabituelle à propos de ce logiciel était qu’il était
écrit principalement dans le langage de programmation appelé Lisp \[1\].
C’était l’une des premières grandes applications d’utilisateur final à
être écrites en Lisp, qui jusque-là avait été utilisée principalement
dans les universités et les laboratoires de recherche.

**L’Arme Secrète**

Eric Raymond a écrit un essai intitulé “How to Become a Hacker”, et dans
celui-ci, entre autres choses, il dit aux hackers potentiels quels
langages ils devraient apprendre. Il suggère de commencer par Python et
Java, car ils sont faciles à apprendre. Le hacker sérieux voudra
également apprendre C, afin de bidouiller Unix, et Perl pour
l’administration du système et les scripts CGI. Enfin, le hacker
vraiment sérieux devrait envisager d’apprendre Lisp :

Lisp vaut la peine d’être appris pour l’expérience d’illumination
profonde que vous aurez lorsque vous l’obtiendrez enfin ; cette
expérience fera de vous un meilleur programmeur pour le reste de vos
jours, même si vous n’utilisez jamais beaucoup Lisp lui-même.

C’est le même argument que vous avez tendance à entendre pour apprendre
le latin. Cela ne vous donnera pas un emploi, sauf peut-être en tant que
professeur de classiques, mais cela améliorera votre esprit et fera de
vous un meilleur écrivain dans les langues que vous voulez utiliser,
comme l’anglais.

Mais attendez une minute. Cette métaphore ne va pas si loin. La raison
pour laquelle le latin ne vous trouvera pas d’emploi est que personne ne
le parle. Si vous écrivez en latin, personne ne peut vous comprendre.
Mais Lisp est un langage informatique, et les ordinateurs parlent
n’importe quelle langue que vous, le programmeur, leur dites.

Donc, si Lisp fait de vous un meilleur programmeur, comme il le dit,
pourquoi ne voudriez-vous pas l’utiliser ? Si un peintre se voyait
offrir un pinceau qui ferait de lui un meilleur peintre, il me semble
qu’il voudrait l’utiliser dans toutes ses peintures, n’est-ce pas ? Je
n’essaie pas de me moquer d’Eric Raymond ici. Dans l’ensemble, ses
conseils sont bons. Ce qu’il dit à propos de Lisp est à peu près la
sagesse conventionnelle. Mais il y a une contradiction dans la sagesse
conventionnelle : Lisp fera de vous un meilleur programmeur, et pourtant
vous ne l’utiliserez pas.

Pourquoi pas ? Après tout, les langages de programmation ne sont que des
outils. Si Lisp donne vraiment de meilleurs programmes, vous devriez
l’utiliser. Et si ce n’est pas le cas, alors qui en a besoin ?

Il ne s’agit pas seulement d’une question théorique. Le logiciel est une
entreprise très compétitive, sujette à des monopoles naturels. Une
entreprise qui obtient des logiciels plus rapidement et mieux rédigera,
toutes les autres choses étant égales, mettra ses concurrents hors
service. Et lorsque vous démarrez une start-up, vous le ressentez
vivement. Les startups ont tendance à être une proposition de tout ou
rien. Soit vous deviez riche, soit vous n’obtiendrez rien. Dans une
start-up, si vous pariez sur la mauvaise technologie, vos concurrents
vous écraseront.

Robert et moi connaissions bien Lisp, et nous ne voyions aucune raison
de ne pas faire confiance à notre instinct et de l’utiliser. Nous
savions que tout le monde écrivait son logiciel en C++ ou en Perl. Mais
nous savions aussi que cela ne signifiait rien. Si vous choisissiez la
technologie de cette façon, vous exécuteriez Windows. Lorsque vous
choisissez la technologie, vous devez ignorer ce que font les autres et
ne considérer que ce qui fonctionnera le mieux.

<figure>
<img src="img/moyenne/viaweb.png"
alt="Avec Robert Morris, Viaweb, début 1996." />
<figcaption aria-hidden="true">
Avec Robert Morris, Viaweb, début 1996.
</figcaption>
</figure>

C’est particulièrement vrai dans une start-up. Dans une grande
entreprise, vous pouvez faire ce que font toutes les autres grandes
entreprises. Mais une startup ne peut pas faire ce que toutes les autres
start-ups font. Je ne pense pas que beaucoup de gens s’en rendent
compte, même dans les start-ups.

La grande entreprise moyenne croît à environ dix pour cent par an. Donc,
si vous dirigez une grande entreprise et que vous faites tout comme le
fait la grande entreprise moyenne, vous pouvez vous attendre à le faire
aussi bien que la grande entreprise moyenne, c’est-à-dire à croître
d’environ dix pour cent par an.

La même chose se produira si vous dirigez une start-up, bien sûr. Si
vous faites tout comme le fait la start-up moyenne, vous devriez vous
attendre à des performances moyennes. Le problème ici est que la
performance moyenne signifie que vous allez faire faillite. Le taux de
survie des start-ups est bien inférieur à cinquante pour cent. Donc, si
vous dirigez une start-up, vous feriez mieux de faire quelque chose
d’étrange. Sinon, vous aurez des ennuis.

En 1995, nous savions quelque chose que je ne pense pas que nos
concurrents comprenaient, et peu le comprennent encore maintenant :
lorsque vous écrivez des logiciels qui ne doivent s’exécuter que sur vos
propres serveurs, vous pouvez utiliser n’importe quel langage que vous
voulez. Lorsque vous écrivez des logiciels de bureau, il y a un fort
biais pour écrire des applications dans le même langage que le système
d’exploitation. Il y a dix ans, la rédaction de demandes signifiait
écrire des applications en C. Mais avec les logiciels basés sur le Web,
en particulier lorsque vous avez le code source à la fois de la langue
et du système d’exploitation, vous pouvez utiliser le langage que vous
voulez.

Cette nouvelle liberté est cependant une épée à double tranchant.
Maintenant que vous pouvez utiliser n’importe quel langage, vous devez
réfléchir à celui à utiliser. Les entreprises qui essaient de prétendre
que rien n’a changé risquent de constater que leurs concurrents ne le
font pas.

Si vous pouviez utiliser n’importe quel langage, lequel utiliseriez-vous
? Nous avons choisi Lisp. D’une part, il était évident que le
développement rapide serait important sur ce marché. Nous sommes tous
partis de zéro, de sorte qu’une entreprise qui pourrait obtenir de
nouvelles fonctionnalités avant que ses concurrents n’aient un grand
avantage. Nous savions que Lisp était un très bon langage pour écrire
des logiciels rapidement, et les applications basées sur le serveur
amplifient l’effet du développement rapide, parce que vous pouvez
publier des logiciels dès qu’ils sont terminés.

Si d’autres entreprises ne voulaient pas utiliser Lisp, tant mieux. Cela
pourrait nous donner un avantage technologique, et nous avions besoin de
toute l’aide que nous pouvions obtenir. Lorsque nous avons lancé Viaweb,
nous n’avions aucune expérience dans les affaires. Nous ne savions rien
sur le marketing, l’embauche de personnes, la collecte de fonds ou
l’obtention de clients. Aucun d’entre nous n’avait jamais eu ce que vous
appelleriez un vrai travail. La seule chose dans laquelle nous étions
bons, c’était d’écrire des logiciels. Nous espérions que cela nous
sauverait. Tout avantage que nous pourrions obtenir dans le département
des logiciels, nous le ferions.

On pourrait donc dire que l’utilisation de Lisp était une
expérimentation. Notre hypothèse était que si nous écrivions notre
logiciel en Lisp, nous pourrions faire des fonctionnalités plus
rapidement que nos concurrents, et aussi faire des choses dans notre
logiciel qu’ils ne pouvaient pas faire. Et parce que Lisp était de si
haut niveau, nous n’aurions pas besoin d’une grande équipe de
développement, donc nos coûts seraient plus bas. Si c’était le cas, nous
pourrions offrir un meilleur produit pour moins d’argent, tout en
profitant. Nous finirions par obtenir tous les utilisateurs, et nos
concurrents n’en obtiendraient aucun, et finiraient par fermer leurs
portes. C’est ce que nous espérions qu’il se passerait, de toute façon.

Quels ont été les résultats de cette expérience ? Étonnamment, ça a
marché. Nous avons finalement eu beaucoup de concurrents, environ vingt
à trente d’entre eux, mais aucun de leurs logiciels ne pouvait rivaliser
avec le nôtre. Nous avions un constructeur de boutique en ligne wysiwyg
qui s’est exécuté sur le serveur et qui ressemblait pourtant à une
application de bureau. Nos concurrents avaient des scripts CGI. Et nous
étions toujours loin devant eux en ce qui concerne les caractéristiques.
Parfois, dans le désespoir, les concurrents essayaient d’introduire des
fonctionnalités que nous n’avions pas. Mais avec Lisp, notre cycle de
développement était si rapide que nous pouvions parfois dupliquer une
nouvelle fonctionnalité dans un délai d’un jour ou deux après qu’un
concurrent l’annonçait dans un communiqué de presse. Au moment où les
journalistes couvrant le communiqué de presse ont pu nous appeler, nous
aurions aussi la nouvelle fonctionnalité.

Il a dû sembler à nos concurrents que nous avions une sorte d’arme
secrète - que nous décodions leur trafic Enigma ou quelque chose comme
ça. En fait, nous avions une arme secrète, mais c’était plus simple
qu’ils ne le pensent. Personne ne nous a divulgué des nouvelles de leurs
caractéristiques. Nous avons juste été en mesure de développer des
logiciels plus rapidement que quiconque ne le pensait possible.

Quand j’avais environ neuf ans, il m’est arrivé de trouver une copie de
The Day of the Jackal, de Frederick Forsyth. Le personnage principal est
un assassin qui est engagé pour tuer le président de la France.
L’assassin doit passer devant la police pour se rendre dans un
appartement qui surplombe la route du président. Il passe juste à côté
d’eux, déguisé en vieil homme sur des béquilles, et ils ne le
soupçonnent jamais.

Notre arme secrète était similaire. Nous avons écrit notre logiciel dans
un langage d’IA bizarre, avec une syntaxe bizarre pleine de parenthèses.
Pendant des années, cela m’avait ennuyé d’entendre Lisp décrire de cette
façon. Mais maintenant, cela a fonctionné à notre avantage. En affaires,
il n’y a rien de plus précieux qu’un avantage technique que vos
concurrents ne comprennent pas. Dans les affaires, comme dans la guerre,
la surprise vaut autant que la force.

Et donc, je suis un peu gêné de dire que je n’ai jamais rien dit
publiquement à propos de Lisp pendant que nous travaillions sur Viaweb.
Nous n’en avons jamais parlé à la presse, et si vous cherchez Lisp sur
notre site web, tout ce que vous trouverez, ce sont les titres de deux
livres dans ma biographie. Ce n’était pas un hasard. Une start-up
devrait donner à ses concurrents le moins d’informations possible. S’ils
ne savaient pas quelle langue notre logiciel était écrit, ou s’en
fichaient, je voulais le laisser comme ça \[2\].

Les personnes qui comprenaient le mieux notre technologie étaient les
clients. Ils ne se souciaient pas non plus de la langue dans laquelle
Viaweb était écrit, mais ils ont remarqué que cela fonctionnait vraiment
bien. Cela leur a permis de construire de superbes boutiques en ligne en
littéralement quelques minutes. Et donc, par bouche à oreille
principalement, nous avons de plus en plus d’utilisateurs. À la fin de
1996, nous avions environ 70 magasins en ligne. À la fin de 1997, nous
en avions 500. Six mois plus tard, lorsque Yahoo nous a achetés, nous
avions 1070 utilisateurs. Aujourd’hui, en tant que Yahoo Store, ce
logiciel continue de dominer son marché. C’est l’une des pièces les plus
rentables de Yahoo, et les magasins construits avec elle sont la base de
Yahoo Shopping. J’ai quitté Yahoo en 1999, donc je ne sais pas
exactement combien d’utilisateurs ils ont maintenant, mais la dernière
fois que j’ai entendu dire qu’il y en avait plus de 20 000.

**Le Paradoxe de Blub**

Qu’y a-t-il de si génial à propos de Lisp ? Et si Lisp est si génial,
pourquoi tout le monde ne l’utilise-t-il pas ? Celles-ci ressemblent à
des questions rhétoriques, mais en fait, elles ont des réponses simples.
Lisp est si grand non pas à cause d’une qualité magique visible
uniquement par les dévots, mais parce que c’est tout simplement le
langage le plus puissant disponible. Et la raison pour laquelle tout le
monde ne l’utilise pas est que les langages de programmation ne sont pas
seulement des technologies, mais aussi des habitudes d’esprit, et rien
ne change plus lentement. Bien sûr, ces deux réponses doivent être
expliquées.

Je vais commencer par une déclaration étonnamment controversée : les
langages de programmation varient en puissance.

Peu de gens contesteraient, du moins, le fait que les langages de haut
niveau sont plus puissants que le langage machine. La plupart des
programmeurs d’aujourd’hui seraient d’accord pour dire que vous ne
voulez pas, normalement, programmer en machine. Au lieu de cela, vous
devriez programmer dans un langage de haut niveau et demander à un
compilateur de le traduire en langage machine pour vous. Cette idée est
même intégrée au matériel maintenant : depuis les années 1980, les
ensembles d’instructions ont été conçus pour les compilateurs plutôt que
pour les programmeurs humains.

Tout le monde sait que c’est une erreur d’écrire tout votre programme à
la main en langage machine. Ce qui est moins souvent compris, c’est
qu’il y a un principe plus général ici : si vous avez le choix entre
plusieurs langues, c’est, toutes choses étant égales par ailleurs, une
erreur de programmer dans autre chose que la plus puissante \[3\].

Il y a de nombreuses exceptions à cette règle. Si vous écrivez un
programme qui doit travailler en étroite collaboration avec un programme
écrit dans un certain langage, ce pourrait être une bonne idée d’écrire
le nouveau programme dans le même langage. Si vous écrivez un programme
qui n’a qu’à faire quelque chose de simple, comme le craquement des
nombres ou la manipulation de bits, vous pouvez aussi bien utiliser un
langage moins abstrait, d’autant plus qu’il peut être légèrement plus
rapide. Et si vous écrivez un programme court et jetable, vous feriez
peut-être mieux d’utiliser n’importe quel langage qui a les meilleures
bibliothèques pour la tâche. Mais en général, pour les logiciels
d’application, vous voulez utiliser le langage le plus puissant
(raisonnablement efficace) que vous puissiez obtenir, et utiliser quoi
que ce soit d’autre est une erreur, exactement du même type, bien que
peut-être dans une moindre mesure, que la programmation en langage
machine.

Vous pouvez voir que le langage machine est de très bas niveau. Mais, au
moins comme une sorte de convention sociale, les langages de haut niveau
sont souvent tous traités comme équivalents. Ils ne le sont pas.
Techniquement, le terme « langage de haut niveau » ne signifie rien de
très précis. Il n’y a pas de ligne de démarcation avec les langages
machine d’un côté et tous les langages de haut niveau de l’autre. Les
langages s’inscrivent le long d’un continuum d’abstraction \[4\], des
langages les plus puissants jusqu’aux langages des machines, qui varient
eux-mêmes en pouvoir.

Considérez Cobol. Cobol est un langage de haut niveau, en ce sens qu’il
est compilé en langage machine. Quelqu’un pourrait-il sérieusement faire
valoir que Cobol est équivalent en puissance à, par exemple, Python ?
C’est probablement plus proche du langage machine que de Python.

Ou que diriez-vous de Perl 4 ? Entre Perl 4 et Perl 5, des fermetures
lexicales ont été ajoutées à la langue. La plupart des pirates Perl
seraient d’accord pour dire que Perl 5 est plus puissant que Perl 4.
Mais une fois que vous avez admis cela, vous avez admis qu’une langue de
haut niveau peut être plus puissante qu’une autre. Et il s’ensuit
inexorablement que, sauf dans des cas particuliers, vous devriez
utiliser le plus puissant que vous puissiez obtenir.

Cependant, cette idée est rarement suivie à sa conclusion. Après un
certain âge, les programmeurs changent rarement de langage
volontairement. Quel que soit le langage auquel les gens sont habitués,
ils ont tendance à être assez bons.

Les programmeurs s’attachent beaucoup à leurs langages préférés, et je
ne veux blesser personne, alors pour expliquer ce point, je vais
utiliser un langage hypothétique appelé Blub. Blub tombe en plein milieu
du continuum de l’abstraction. Ce n’est pas le langage le plus puissant,
mais il est plus puissant que le Cobol ou le langage machine.

Et en fait, notre hypothétique programmeur Blub n’utiliserait ni l’un ni
l’autre. Bien sûr, il ne programmerait pas en langage machine. C’est à
cela que servent les compilateurs. Et quant à Cobol, il ne sait pas
comment quelqu’un peut en faire quoi que ce soit. Il n’a même pas de x
(fonction Blub de votre choix).

Tant que notre hypothétique programmeur Blub regarde vers le bas le
continuum de puissance, il sait qu’il regarde vers le bas. Les langages
moins puissants que Blub sont évidemment moins puissants, car il leur
manque une fonctionnalité à laquelle il est habitué. Mais quand notre
hypothétique programmeur Blub regarde dans l’autre sens, vers le haut du
continuum de puissance, il ne se rend pas compte qu’il regarde vers le
haut. Ce qu’il voit ne sont que des langages bizarres. Il les considère
probablement comme équivalant au pouvoir à Blub, mais avec toutes ces
autres choses poilues jetées aussi. Blub est assez bon pour lui, parce
qu’il pense à Blub.

Cependant, lorsque nous passons au point de vue d’un programmeur
utilisant l’un des langages plus haut dans le continuum de puissance,
nous constatons qu’il regarde à son tour Blub. Comment pouvez-vous faire
quelque chose dans Blub ? Il n’a même pas de y.

Par induction, les seuls programmeurs en mesure de voir toutes les
différences de puissance entre les différents langages sont ceux qui
comprennent le plus puissant. (C’est probablement ce qu’Eric Raymond
voulait dire à propos de Lisp qui fait de vous un meilleur programmeur.)
Vous ne pouvez pas faire confiance aux opinions des autres, à cause du
paradoxe Blub : ils sont satisfaits du langage qu’ils utilisent, parce
que cela dicte la façon dont ils pensent aux programmes.

Je le sais d’après ma propre expérience, en tant qu’élève du lycée,
écrivant des programmes dans Basic. Ce langage ne prenait même pas en
charge la récursivité. Il est difficile d’imaginer écrire des programmes
sans utiliser la récursivité, mais je ne l’ai pas manqué à l’époque.
J’ai pensé dans Basic. Et j’étais un génie. Maître de tout ce que j’ai
interrogé.

Les cinq langages qu’Eric Raymond recommande aux hackers tombent à
différents points du continuum du pouvoir. L’endroit où ils se situent
les uns par rapport aux autres est un sujet sensible. Ce que je vais
dire, c’est que je pense que Lisp est au sommet. Et pour étayer cette
affirmation, je vais vous parler de l’une des choses qui me manquent
lorsque je regarde les quatre autres langages. Comment pouvez-vous faire
quoi que ce soit en eux, je pense, sans macros ? \[5\]

De nombreux langages ont ce qu’on appelle une macro. Mais les macros
Lisp sont uniques. Et croyez-le ou non, ce qu’ils font est réappuyé
entre parenthèses. Les concepteurs de Lisp n’ont pas mis toutes ces
parenthèses dans le langage juste pour être différents. Pour le
programmeur Blub, le code Lisp a l’air bizarre. Mais ces parenthèses
sont là pour une raison. Ils sont la preuve extérieure d’une différence
fondamentale entre le lisp et les autres langages.

Le code Lisp est fabriqué à partir d’objets de données Lisp. Et pas dans
le sens trivial que les fichiers sources contiennent des caractères, et
les chaînes sont l’un des types de données pris en charge par le
langage. Le code Lisp, après avoir été lu par l’analyseur, est composé
de structures de données que vous pouvez parcourir.

Si vous comprenez comment fonctionnent les compilateurs, ce qui se passe
vraiment, ce n’est pas tant que Lisp a une syntaxe étrange que Lisp n’a
pas de syntaxe. Vous écrivez des programmes dans les arbres d’analyse
qui sont générés dans le compilateur lorsque d’autres langages sont
analysés. Mais ces arbres d’analyse sont entièrement accessibles à vos
programmes. Vous pouvez écrire des programmes qui les manipulent. Dans
Lisp, ces programmes sont appelés macros. Ce sont des programmes qui
écrivent des programmes.

Des programmes qui écrivent des programmes ? Quand voudriez-vous faire
ça ? Pas très souvent, si vous pensez à Cobol. Tout le temps, si vous
pensez à Lisp. Ce serait pratique ici si je pouvais donner un exemple
d’une macro puissante, et dire, là ! Que diriez-vous de ça ? Mais si je
le faisais, cela ressemblerait à du charabia pour quelqu’un qui ne
connaît pas Lisp ; il n’y a pas de place ici pour expliquer tout ce que
vous auriez besoin de savoir pour comprendre ce que cela signifiait.
Dans Ansi Common Lisp, j’ai essayé de faire avancer les choses aussi
vite que possible, et même ainsi, je n’ai pas atteint les macros avant
la page 160.

Mais je pense que je peux donner une sorte d’argument qui pourrait être
convaincant. Le code source de l’éditeur Viaweb était probablement
d’environ 20 à 25 % de macros. Les macros sont plus difficiles à écrire
que les fonctions Lisp ordinaires, et c’est un mauvais style de les
utiliser lorsqu’elles ne sont pas nécessaires. Donc, chaque macro de ce
code est là parce qu’elle doit l’être. Cela signifie qu’au moins 20 à 25
% du code de ce programme fait des choses que vous ne pouvez pas
facilement faire dans une autre langue. Quelle que soit la sceptique que
le programmeur Blub puisse être au sujet de mes revendications pour les
pouvoirs mystérieux de Lisp, cela devrait le rendre curieux. Nous
n’écrivions pas ce code pour notre propre amusement. Nous étions une
petite start-up, programmant aussi dur que possible afin de mettre des
barrières techniques entre nous et nos concurrents.

Une personne suspecte pourrait commencer à se demander s’il y avait une
corrélation ici. Une grande partie de notre code faisait des choses qui
sont difficiles à faire dans d’autres langues. Le logiciel qui en a
résulté a fait des choses que le logiciel de nos concurrents ne pouvait
pas faire. Peut-être qu’il y avait une sorte de connexion. Je vous
encourage à suivre ce fil de discussion. Il y a peut-être plus à ce
vieil homme qui traîne sur ses béquilles qu’il n’y paraît.

**Aïkido pour les Startups**

Mais je ne m’attends pas à convaincre quelqu’un (de plus de 25 ans) de
sortir et d’apprendre le Lisp. Mon but ici n’est pas de changer l’avis
de qui que ce soit, mais de rassurer les gens déjà intéressés par
l’utilisation de Lisp - les gens qui savent que Lisp est un langage
puissant, mais qui s’inquiètent parce qu’il n’est pas largement utilisé.
Dans une situation concurrentielle, c’est un avantage. La puissance de
Lisp est multipliée par le fait que vos concurrents ne l’obtiennent pas.

Si vous pensez à utiliser Lisp dans une start-up, vous ne devriez pas
vous inquiéter qu’il ne soit pas largement compris. Vous devriez espérer
que cela reste ainsi. Et c’est probable. C’est la nature des langages de
programmation qui satisfait la plupart des gens de ce qu’ils utilisent
actuellement. Le matériel informatique change tellement plus rapidement
que les habitudes personnelles que la pratique de la programmation est
généralement de dix à vingt ans derrière le processeur. Dans des
endroits comme le MIT, ils écrivaient des programmes dans des langages
de haut niveau au début des années 1960, mais de nombreuses entreprises
ont continué à écrire du code en langage machine jusque dans les années
1980. Je parie que beaucoup de gens ont continué à écrire le langage
machine jusqu’à ce que le processeur, comme un barman désireux de fermer
et de rentrer chez lui, les expulse finalement en passant à un ensemble
d’instructions RISC.

Habituellement, la technologie change rapidement. Mais les langages de
programmation sont différents : les langages de programmation ne sont
pas seulement la technologie, mais ce à quoi les programmeurs pensent.
Ils sont à moitié technologiques et à moitié religieux \[6\]. Et donc le
langage médian, c’est-à-dire quel que soit le langage utilisé par le
programmeur médian, se déplace aussi lentement qu’un iceberg. La
collecte des ordures, introduite par Lisp vers 1960, est maintenant
largement considérée comme une bonne chose. La dactylographie dynamique,
idem, gagne en popularité. Les fermetures lexicales, introduites par
Lisp au début des années 1960, sont maintenant, à peine, sur l’écran
radar. Les macros, introduites par Lisp au milieu des années 1960, sont
encore terra incognita.

De toute évidence, le langage médian a un élan énorme. Je ne propose pas
que vous puissiez combattre cette force puissante. Ce que je propose,
c’est exactement le contraire : que, comme un pratiquant de l’Aïkido,
vous pouvez l’utiliser contre vos adversaires.

Si vous travaillez pour une grande entreprise, ce n’est peut-être pas
facile. Vous aurez du mal à convaincre le patron aux cheveux pointus de
vous laisser construire des choses dans Lisp, alors qu’il vient de lire
dans le journal qu’un autre langage est prêt, comme Ada l’était il y a
vingt ans, à prendre le contrôle du monde. Mais si vous travaillez pour
une start-up qui n’a pas encore de patrons aux cheveux pointus, vous
pouvez, comme nous, transformer le paradoxe Blub à votre avantage : vous
pouvez utiliser une technologie que vos concurrents, collés de manière
immuable au langage médian, ne seront jamais en mesure de faire
correspondre.

Si jamais vous vous retrouvez à travailler pour une start-up, voici un
conseil pratique pour évaluer les concurrents. Lisez leurs offres
d’emploi. Tout le reste sur leur site peut être des photos de stock ou
l’équivalent en prose, mais les offres d’emploi doivent être spécifiques
à ce qu’ils veulent, sinon ils auront les mauvais candidats.

Au cours des années où nous avons travaillé sur Viaweb, j’ai lu beaucoup
de descriptions de travail. Un nouveau concurrent semblait émerger du
travail du bois tous les mois environ. La première chose que je ferais,
après avoir vérifié s’ils avaient une démo en ligne en direct, était de
regarder leurs offres d’emploi. Après quelques années de cela, je
pouvais dire quelles entreprises s’inquiéter et lesquelles ne pas
s’inquiéter. Plus les décryptages informatiques avaient une saveur
informatique, moins l’entreprise était dangereuse. Le type le plus sûr
était celui qui voulait une expérience Oracle. Vous n’avez jamais eu à
vous en soucier. Vous étiez également en sécurité s’ils disaient qu’ils
voulaient des développeurs C++ ou Java. S’ils voulaient des programmeurs
Perl ou Python, ce serait un peu effrayant - cela commence à ressembler
à une entreprise où le côté technique, au moins, est géré par de vrais
hackers. Si j’avais déjà vu une offre d’emploi à la recherche de hackers
Lisp, j’aurais été vraiment inquiet.
