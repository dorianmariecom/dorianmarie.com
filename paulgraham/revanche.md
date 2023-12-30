Chapitre 13

Dans le secteur des logiciels, il y a une lutte en cours, entre les
universitaires à la tête pointue et une autre force tout aussi
formidable, les patrons aux cheveux pointus. Je crois que tout le monde
sait qui est le patron aux cheveux pointues \[1\]. Je pense que la
plupart des gens dans le monde de la technologie reconnaissent non
seulement ce personnage de dessin animé, mais connaissent la personne
réelle dans leur entreprise sur laquelle il est calqué.

Le patron aux cheveux pointus combine miraculeusement deux qualités qui
sont communes à elles-mêmes, mais rarement vues ensemble : (a) il ne
sait rien du tout de la technologie, et (b) il a des opinions très
fortes à ce sujet.

Supposons, par exemple, que vous ayez besoin d’écrire un logiciel. Le
patron aux cheveux pointus n’a aucune idée de la façon dont ce logiciel
doit fonctionner et ne peut pas distinguer un langage de programmation
d’un autre, et pourtant il sait dans quel langage vous devriez l’écrire.
Exactement. Il pense que vous devriez l’écrire en Java.

Pourquoi pense-t-il cela ? Jetons un coup d’œil à l’intérieur du cerveau
du patron aux cheveux pointus. Ce qu’il pense, c’est quelque chose comme
ça. Java est une norme. Je sais que ça doit l’être, parce que je lis
tout le temps à ce sujet dans la presse. Comme il s’agit d’une norme, je
n’aurai pas de problèmes pour l’utiliser. Et cela signifie également
qu’il y aura toujours beaucoup de programmeurs Java, donc si ceux qui
travaillent pour moi démissionnent maintenant, comme le font
mystérieusement toujours les programmeurs qui travaillent pour moi, je
peux facilement les remplacer.

Eh bien, cela ne semble pas si déraisonnable. Mais tout est basé sur une
hypothèse tacite, et cette hypothèse s’avère fausse. Le patron aux
cheveux pointus pense que tous les langages de programmation sont à peu
près équivalents. Si c’était vrai, il serait sur la bonne voie. Si les
langages sont tous équivalents, bien sûr, utilisez le langage que tout
le monde utilise.

Mais tous les langages ne sont pas équivalents, et je pense que je peux
vous le prouver sans même entrer dans les différences entre eux. Si vous
aviez demandé au patron aux cheveux pointu en 1992 dans quel langage le
langage doux devrait être écrit, il aurait répondu avec aussi peu
d’hésitation qu’aujourd’hui. Le logiciel doit être écrit en C++. Mais si
les langues sont toutes équivalentes, pourquoi l’opinion du patron aux
cheveux pointus devrait-elle jamais changer ? En fait, pourquoi les
développeurs de Java auraient-ils même pris la peine de créer un nouveau
langage ?

Vraisemblablement, si vous créez un nouveau langage, c’est parce que
vous pensez qu’il est meilleur d’une manière ou d’une autre que ce que
les gens avaient déjà. Et en fait, Gosling indique clairement dans le
premier livre blanc sur Java, que ce langage a été conçu pour résoudre
certains problèmes avec C++. Alors voilà : les langages ne sont pas tous
équivalents. Si vous suivez la piste à travers le cerveau du patron aux
cheveux pointus jusqu’à Java, puis à travers l’histoire de Java jusqu’à
ses origines, vous finissez par avoir une idée qui contredit l’hypothèse
avec laquelle vous avez commencé.

Alors, qui a raison ? James Gosling, ou le patron aux cheveux pointus ?
Il n’est pas surprenant que Gosling ait raison. Certains langages sont
meilleurs, pour certains problèmes, que d’autres. Et vous savez, cela
soulève des questions intéressantes. Java a été conçu pour être
meilleur, pour certains problèmes, que C++. Quels problèmes ? Quand Java
est-il meilleur et quand est-ce que C++ ? Y a-t-il des situations où
d’autres langages sont meilleurs que l’un ou l’autre ?

Une fois que vous avez commencé à considérer cette question, vous avez
ouvert une vraie canne de vers. Si le patron aux cheveux pointus devait
penser au problème dans toute sa complexité, cela lui ferait exploser la
tête. Tant qu’il considère tous les langages comme équivalents, tout ce
qu’il a à faire est de choisir celui qui semble avoir le plus d’élan, et
comme c’est plus une question de mode que de technologie, même lui peut
probablement obtenir la bonne réponse. Mais si les langages varient, il
doit soudainement résoudre deux équations simultanées, en essayant de
trouver un équilibre optimal entre deux choses dont il ne sait rien :
l’adéquation relative de la vingtaine de langages principaux pour le
problème qu’il doit résoudre, et les chances de trouver des
programmeurs, des bibliothèques, etc. pour chacun. Si c’est ce qui se
trouve de l’autre côté de la porte, il n’est pas surprenant que le
patron aux cheveux pointus ne veuille pas l’ouvrir.

L’inconvénient de croire que tous les langages de programmation sont
équivalents est que ce n’est pas vrai. Mais l’avantage est que cela rend
votre vie beaucoup plus simple. Et je pense que c’est la principale
raison pour laquelle l’idée est si répandue. C’est une idée confortable.

Nous savons que Java doit être assez bon, parce que c’est le nouveau
langage de programmation cool. Ou est-ce ou est-ce le cas ? Si vous
regardez le monde des langages de programmation de loin, il semble que
Java soit la dernière chose. (De loin, tout ce que vous pouvez voir,
c’est le grand panneau d’affichage clignotant payé par Sun.) Mais si
vous regardez ce monde de près, vous trouverez qu’il y a des degrés de
fraîcheur. Au sein de la sous-culture hacker, il existe un autre langage
appelé Perl qui est considéré comme beaucoup plus cool que Java.
Slashdot, par exemple, est généré par Perl. Je ne pense pas que vous
trouveriez ces gars qui utilisent Java Server Pages. Mais il existe un
autre langage plus récent, appelé Python, dont les utilisateurs ont
tendance à regarder vers le bas sur Perl, et un autre appelé Ruby que
certains considèrent comme l’héritier apparent de Python.

Si vous regardez ces langages dans l’ordre, Java, Perl, Python, Ruby,
vous remarquez un modèle intéressant. Au moins, vous remarquez ce modèle
si vous êtes un hacker Lisp. Chacun ressemble progressivement plus à
Lisp. Python copie même des fonctionnalités que de nombreux hackers Lisp
considèrent comme des erreurs. Et si vous aviez montré aux gens Ruby en
1975 et l’avoir décrit comme un dialecte de Lisp avec une syntaxe,
personne ne se serait disputé avec vous. Les langages de programmation
ont presque rattrapé 1958.

**Rattraper les mathématiques**

Ce que je veux dire, c’est que Lisp a été découvert pour la première
fois par John McCarthy en 1958, et que les langages de programmation
populaires ne font que rattraper les idées qu’il a développées à
l’époque.

Maintenant, comment cela a-t-il pu être vrai ? La technologie
informatique n’est-elle pas quelque chose qui change très rapidement ?
En 1958, les ordinateurs étaient des mastodontes de la taille d’un
réfrigérateur avec la puissance de traitement d’une montre-bracelet
\[2\]. Comment une technologie aussi ancienne pourrait-elle même être
pertinente, et encore moins supérieure aux derniers développements ?

<figure>
<img src="img/revanche/ibm.png"
alt="IBM 704, Lawrence Livermore, 1956." />
<figcaption aria-hidden="true">IBM 704, Lawrence Livermore,
1956.</figcaption>
</figure>

IBM 704, Lawrence Livermore, 1956.

Je vais vous dire comment. C’est parce que Lisp n’a pas vraiment été
conçu pour être un langage de programmation, du moins pas dans le sens
que nous voulons dire aujourd’hui. Ce que nous entendons par langage de
programmation est quelque chose que nous utilisons pour dire à un
ordinateur ce qu’il doit faire. McCarthy a finalement eu l’intention de
développer un langage de programmation dans ce sens, mais le Lisp avec
lequel nous nous sommes retrouvés était basé sur quelque chose de
distinct qu’il a fait comme un exercice théorique - un effort pour
définir une alternative plus pratique à la machine de Turing. Comme
McCarthy l’a dit plus tard :

Une autre façon de montrer que Lisp était plus propre que les machines
de Turing était d’écrire une fonction Lisp universelle et de montrer
qu’elle est plus brève et plus compréhensible que la description d’une
machine de Turing universelle. Il s’agissait de l’évaluation de la
fonction Lisp. . . , qui calcule la valeur d’une expression Lisp. . . .
Pour écrire eval, il fallait inventer une notation représentant les
fonctions Lisp en tant que données Lisp, et une telle notation a été
conçue aux fins de l’article sans penser qu’elle serait utilisée pour
exprimer les programmes Lisp dans la pratique.

<figure>
<img src="img/revanche/alpha.png" alt="Alpha nerd : John McCarthy." />
<figcaption aria-hidden="true">Alpha nerd : John McCarthy.</figcaption>
</figure>

Alpha nerd : John McCarthy.

Mais à la fin de 1958, Steve Russell \[3\], l’un des étudiants diplômés
de McCarthy, a examiné cette définition de l’évaluation et s’est rendu
compte que s’il la traduisait en langage machine, le résultat serait un
interprète Lisp.

C’était une grande surprise à l’époque. Voici ce que McCarthy a dit à ce
sujet plus tard :

> Steve Russell a dit, regardez, pourquoi ne pas programmer cette
> évaluation…, et je lui ai dit, ho, ho, vous confondez la théorie avec
> la pratique, cette évaluation est destinée à la lecture, pas à
> l’informatique. Mais il est allé de l’avant et l’a fait. C’est-à-dire
> qu’il a compilé l’évaluation dans mon article dans le code machine
> \[IBM\] 704, corrigeant les bugs, puis l’a annoncé comme un
> interprèteur Lisp, ce qui était certainement le cas. Donc, à ce
> moment-là, Lisp avait essentiellement la forme qu’il a aujourd’hui. …

Soudain, en quelques semaines, McCarthy a trouvé son exercice théorique
transformé en un véritable langage de programmation - et plus puissant
qu’il ne l’avait prévu.

Donc, la brève explication de la raison pour laquelle ce langage des
années 1950 n’est pas obsolète est qu’il ne s’agissait pas de
technologie, mais de mathématiques, et que les mathématiques ne
deviennent pas obsolètes. La bonne chose à comparer Lisp n’est pas le
matériel des années 1950, mais l’algorithme Quicksort, qui a été
découvert en 1960 et qui est toujours le tri polyvalent le plus rapide.

Il y a un autre langage qui subsiste encore depuis les années 1950,
Fortran, et il représente l’approche opposée de la conception du
langage. Lisp était un morceau de théorie qui s’est transformé de
manière inattendue en langage de programmation. Fortran a été développé
intentionnellement en tant que langage de programmation, mais ce que
nous considérons maintenant comme un langage de très bas niveau.

Fortran I, le langage qui a été développé en 1956, était un animal très
différent de l’actuel Fortran. Fortran, j’étais à peu près en langage
assembleur avec les mathématiques. D’une certaine manière, il était
moins puissant que les langages d’assemblage plus récents ; il n’y avait
pas de sous-routines, par exemple, seulement des branches. Aujourd’hui,
Fortran est maintenant sans doute plus proche de Lisp que de Fortran I.

Lisp et Fortran étaient les troncs de deux arbres évolutifs distincts,
l’un enraciné dans les mathématiques et l’autre dans l’architecture des
machines. Ces deux arbres convergent depuis lors. Lisp a commencé par
être puissant et, au cours des vingt années suivantes, il s’est
accéléré. Les langages dits traditionnels ont commencé rapidement, et au
cours des quarante années suivantes, ils sont devenus progressivement
plus puissants, jusqu’à présent, les plus avancées d’entre elles sont
assez proches de Lisp. Proche, mais il leur manque encore quelque chose.

**Qu’est-ce qui a rendu Lisp différent**

Lorsqu’il a été développé pour la première fois, Lisp a incarné neuf
nouvelles idées. Certains d’entre eux que nous tenons maintenant pour
acquis, d’autres ne sont vus que dans des langages plus avancés, et deux
sont toujours uniques à Lisp. Les neuf idées sont, dans l’ordre de leur
adoption par le grand public,

1.  Conditionnels. Un conditionnel est une construction “if-then-else”.
    Nous les tenons pour acquis maintenant, mais Fortran, je ne les
    avais pas. Il n’avait qu’un goto conditionnel étroitement basé sur
    l’instruction de la machine sous-jacente.

2.  Un type de fonction. Dans Lisp, les fonctions sont un type de
    données tout comme des entiers ou des chaînes. Ils ont une
    représentation littérale, peuvent être stockés dans des variables,
    peuvent être passés en tant qu’arguments, et ainsi de suite.

3.  Récursion. Lisp a été le premier langage de haut niveau à prendre en
    charge les fonctions récursives \[4\].

4.  Saisie dynamique. Dans Lisp, toutes les variables sont effectivement
    des pointeurs. Les valeurs sont ce qui a des types, pas des
    variables, et attribuer des valeurs à des variables signifie copier
    des pointeurs, pas ce qu’elles pointent.

5.  Collecte des déchets.

6.  Programmes composés d’expressions. Les programmes Lips sont des
    arbres d’expression, dont chacun renvoie une valeur. Cela contraste
    avec le Fortran et la plupart des langues suivantes, qui font la
    distinction entre les expressions et les déclarations.<br> <br>
    Cette distinction était naturelle chez Fortran I parce que vous ne
    pouviez pas imbriquer les déclarations. Donc, alors que vous aviez
    besoin d’expressions pour que les mathématiques fonctionnent, il ne
    faisait aucun intérêt à faire en sorte que quoi que ce soit d’autre
    renvoie une valeur, parce qu’il ne pouvait y avoir rien qui
    l’attendait.<br> <br> Cette limitation a disparu avec l’arrivée des
    langages structurés en bloc, mais à ce moment-là, il était trop
    tard. La distinction entre les expressions et les déclarations était
    enracinée. Il s’est propagé de Fortran à Algol, puis à leurs deux
    descendants.

7.  Un type de symbole. Les symboles sont en fait des pointeurs vers des
    chaînes de caractères stockées dans une table de hachage. Vous
    pouvez donc tester l’égalité en comparant un pointeur, au lieu de
    comparer chaque caractère.

8.  Une notation pour le code utilisant des arbres de symboles et de
    constantes.

9.  Toute la langue là-bas tout le temps. Il n’y a pas de réelle
    différence entre le temps de lecture, le temps de compilation et
    l’exécution. Vous pouvez compiler ou exécuter du code pendant la
    lecture, lire ou exécuter du code pendant la compilation, et lire ou
    compiler du code au moment de l’exécution.

L’exécution de code au moment de la lecture permet aux utilisateurs de
reprogrammer la syntaxe de Lisp ; l’exécution du code au moment de la
compilation est la base des macros ; la compilation à l’exécution est la
base de l’utilisation de Lisp comme langage d’extension dans des
programmes comme Emacs ; et la lecture à l’exécution permet aux
programmes de communiquer en utilisant des s-expressions, une idée
récemment réinventée comme XML \[5\].

Lorsque Lisp est apparu pour la première fois, ces idées étaient loin de
la pratique de programmation ordinaire, qui était dictée en grande
partie par le matériel disponible à la fin des années 1950. Au fil du
temps, le langage par défaut, incarné dans une succession de langues
populaires, a évolué progressivement vers le Lisp. Les idées 1-5 sont
maintenant répandues. Le numéro 6 commence à apparaître dans le courant
dominant. Python a une forme de 7, bien qu’il ne semble pas y avoir de
syntaxe pour cela.

En ce qui concerne le numéro 8, c’est peut-être le plus intéressant du
lot. Les idées 8 et 9 ne sont devenues une partie de Lisp que par
accident, parce que Steve Russell a mis en œuvre quelque chose que
McCarthy n’avait jamais eu l’intention de mettre en œuvre. Et pourtant,
ces idées s’en sont révélées responsables à la fois de l’apparence
étrange de Lisp et de ses caractéristiques les plus distinctives. Lisp a
l’air étrange non pas tant parce qu’il a une syntaxe étrange que parce
qu’il n’a pas de syntaxe ; vous exprimez des programmes directement dans
les arbres d’analyse qui sont construits dans les coulisses lorsque
d’autres langages sont analysé, et ces arbres sont faits de listes, qui
sont des structures de données Lisp.

Exprimer le langage dans ses propres structures de données s’avère être
une caractéristique très puissante. Les idées 8 et 9 ensemble signifient
que vous pouvez écrire des programmes qui écrivent des programmes. Cela
peut sembler une idée bizarre, mais c’est une chose quotidienne dans
Lisp. La façon la plus courante de le faire est d’appeler une macro.

Le terme « macro » ne signifie pas en Lisp ce qu’il signifie dans
d’autres langages. Une macro Lisp peut être n’importe quoi, d’une
abréviation à un compilateur pour un nouveau langage. Si vous voulez
vraiment comprendre Lisp, ou tout simplement élargir vos horizons de
programmation, j’en apprendrais plus sur les macros.

Les macros (au sens de Lisp) sont toujours, pour autant que je sache,
uniques à Lisp. C’est en partie parce que pour avoir des macros, vous
devez probablement rendre votre langage aussi étrange que Lisp. C’est
peut-être aussi parce que si vous ajoutez cette dernière augmentation de
puissance, vous ne pouvez plus prétendre avoir inventé un nouveau
langage, mais seulement un nouveau dialecte de Lisp.

Je mentionne cela principalement comme une blague, mais c’est tout à
fait vrai. Si vous définissez un langage qui a car, cdr, cons, quote,
cond, atom, eq, et une notation pour les fonctions exprimées sous forme
de listes, alors vous pouvez en construire tout le reste de Lisp. C’est
en fait la qualité déterminante de Lisp : c’était pour faire en sorte
que McCarthy donne à Lisp la forme qu’il a.

**Où les langages comptent**

Même si Lisp représente une sorte de limite que les langages grand
public approchent de manière asymptotique, cela signifie-t-il que vous
devriez réellement l’utiliser pour écrire des logiciels ? Combien
perdez-vous en utilisant un langage moins puissant ? N’est-il pas plus
sage, parfois, de ne pas être à la limite de l’innovation ? Et la
popularité d’une certaine tente n’est-elle pas sa propre justification ?
Le patron aux cheveux pointus n’a-t-il pas raison, par exemple, de
vouloir utiliser un langage pour lequel il peut facilement embaucher des
programmeurs ?

Il y a, bien sûr, des projets où le choix du langage du programme n’a
pas beaucoup d’importance. En règle générale, plus l’application est
exigeante, plus vous obtenez d’effet de levier en utilisant un langage
puissant. Mais beaucoup de projets ne sont pas du tout exigeants. La
plupart des programmes consistent probablement à écrire de petits
programmes de colle, et pour les petits programmes de colle, vous pouvez
utiliser n’importe quel langage que vous connaissez déjà et qui a de
bonnes bibliothèques pour tout ce que vous devez faire. Si vous avez
juste besoin d’alimenter des données d’une application Windows à une
autre, bien sûr, utilisez Visual Basic.

Vous pouvez aussi écrire de petits programmes de colle dans Lisp (je
l’utilise comme calculatrice de bureau), mais la plus grande victoire
pour des langages comme Lisp est à l’autre extrémité du spectre, où vous
devez écrire des programmes sophistiqués pour résoudre des problèmes
difficiles face à une concurrence féroce. Un bon exemple est le
programme de recherche de tarifs aériens que ITA Software concède sous
licence à Orbitz. Ces gars-là sont entrés sur un marché déjà dominé par
deux grands concurrents enracinés, Travelocity et Expedia, et semblent
les avoir humiliés sur le plan technologique.

Le cœur de l’application de l’ITA est un programme Common Lisp de 200
000 lignes qui recherche de nombreux ordres de grandeur plus de
possibilités que leurs concurrents, qui utilisent apparemment encore des
techniques de programmation de l’ère principale du cadre. Je n’ai jamais
vu le code de l’ITA, mais selon l’un de leurs meilleurs pirates
informatiques, ils utilisent beaucoup de macros, et je ne suis pas
surpris de l’entendre.

**Forces centripètes**

Je ne dis pas qu’il n’y a aucun coût à utiliser des technologies
inhabituelles. Le patron aux cheveux pointus ne se trompe pas
complètement en s’inquiétant à ce sujet. Mais parce qu’il ne comprend
pas les risques, il a tendance à les amplifier.

Je peux penser à trois problèmes qui pourraient découler de
l’utilisation de langages moins courants. Vos programmes peuvent ne pas
bien fonctionner avec des programmes écrits dans d’autres langages. Vous
avez peut-être moins de bibliothèques à votre disposition. Et vous
pourriez avoir du mal à embaucher des programmeurs.

Quelle est l’ampleur du problème de chacun d’entre eux ? L’importance du
premier varie selon que vous avez le contrôle sur l’ensemble du système.
Si vous écrivez un logiciel qui doit s’exécuter sur la machine d’un
utilisateur distant sur un système d’exploitation propriétaire bogué (je
ne mentionne aucun nom), il peut y avoir des avantages à écrire votre
application dans le même langage que le système d’exploitation. Mais si
vous contrôlez l’ensemble du système et que vous avez le code source de
toutes les parties, comme le fait probablement ITA, vous pouvez utiliser
les langages que vous voulez. En cas d’incompatibilité, vous pouvez la
corriger vous-même.

Dans les applications basées sur serveur, vous pouvez vous en tirer en
utilisant les technologies les plus avancées, et je pense que c’est la
principale cause de ce que Jonathan Erickson appelle la “re naissance du
langage de programmation”. C’est pourquoi nous entendons même parler de
nouveaux langages comme Perl et Python. Nous n’entendons pas parler de
ces langages - parce que les gens les utilisent pour écrire des
applications Windows, mais parce que les gens les utilisent sur des
serveurs. Et à mesure que les logiciels passeront du bureau aux serveurs
(un avenir à quoi même Microsoft semble résigné), il y aura de moins en
moins de pression pour utiliser des technologies de milieu de route.

En ce qui concerne les bibliothèques, leur importance dépend également
de l’application. Pour les problèmes moins exigeants, la disponibilité
des bibliothèques peut l’emporter sur la puissance intrinsèque du
langage. Où est le seuil de rentabilité ? Difficile à dire exactement,
mais où qu’il soit, il manque tout ce que vous seriez susceptible
d’appeler une demande. Si une entreprise se considère comme une
entreprise dans le secteur des logiciels, et qu’elle écrit une
application qui sera l’un de ses produits, alors cela impliquera
probablement plusieurs hackers et prendra au moins six mois pour écrire.
Dans un projet de cette taille, les langages puissants commencent
probablement à l’emporter sur la commodité des bibliothèques
préexistantes.

La troisième inquiétude du patron aux cheveux pointus est la difficulté
d’ embaucher les programmeurs, je pense qu’il s’agit d’un faux-fuyant.
Après tout, combien de hackers devez-vous embaucher ? Nous savons
sûrement maintenant que les produits de logiciels sont mieux développés
par des équipes de moins de dix personnes. Et vous ne devriez pas avoir
de mal à embaucher des hackers à cette échelle pour n’importe quel
langage dont quelqu’un a jamais entendu parler. Si vous ne trouvez pas
dix hackers Lisp, alors votre entreprise est probablement basée dans la
mauvaise ville pour développer des logiciels.

En fait, le choix d’un langage plus puissant diminue probablement la
taille de l’équipe dont vous avez besoin, car (a) si vous utilisez un
langage plus puissant, vous n’aurez probablement pas besoin d’autant de
pirates, et (b) les pirates qui travaillent dans des langages plus
avancés sont susceptibles d’être plus intelligents.

Je ne dis pas que vous n’aurez pas beaucoup de pression pour utiliser ce
qui est perçu comme des technologies « standard ». Chez Viaweb, nous
avons soulevé des sourcils auprès des investisseurs de capital-risque et
des acquéreurs potentiels en utilisant Lisp. Mais nous avons également
soulevé des sourcils en utilisant des boîtes Intel génériques comme
serveurs au lieu de serveurs de “force industrielle” comme Suns, pour
avoir utilisé un Unix open source alors obscur appelé FreeBSD au lieu
d’un véritable système d’exploitation commercial comme Windows NT, pour
avoir ignoré un supposé e-commerce standard appelé SET dont personne ne
se souvient maintenant, et ainsi de suite.

Vous ne pouvez pas laisser les costumes prendre des décisions techniques
pour vous. A-t-il alarmé les acquéreurs potentiels que nous ayons
utilisé Lisp ? Certains, légèrement, mais si nous n’avions pas utilisé
Lisp, nous n’aurions pas été en mesure d’écrire le logiciel qui leur a
donné envie de nous acheter. Ce qui leur semblait être une anomalie
était en fait la cause et l’effet.

Si vous démarrez une start-up, ne concevez pas votre produit pour plaire
aux investisseurs de capital-risque ou aux acquéreurs potentiels.
Concevez votre produit pour plaire aux utilisateurs. Si vous gagnez les
utilisateurs, tout le reste suivra. Et si vous ne le faites pas,
personne ne se souciera de l’orthodoxie de vos choix technologiques.

**Le Coût d’être Moyen**

Combien perdez-vous en utilisant un langage moins puissant ? Il y a en
fait des données à ce sujet.

La mesure de puissance la plus pratique est probablement la taille du
code. Le but des langages de haut niveau est de vous donner de plus
grandes abstractions - des briques plus grandes, pour ainsi dire, de
sorte que vous n’en avez pas besoin autant pour construire un mur d’une
taille donnée. Ainsi, plus le langage est puissant, plus le programme
est court (pas simplement en caractères, bien sûr, mais en éléments
distincts).

Comment un langage plus puissant vous permet-il d’écrire des programmes
courts ? Une technique que vous pouvez utiliser, si le langage le
permet, est ce qu’on appelle la programmation ascendante. Au lieu de
simplement écrire votre application dans le langage de base, vous
construisez sur le langage de base un langage pour écrire des programmes
comme le vôtre, puis vous y écrivez votre programme. Le code combiné
peut être beaucoup plus court que si vous aviez écrit l’ensemble de
votre programme dans le langage de base - en fait, c’est ainsi que
fonctionnent la plupart des algorithmes de compression. Un programme
ascendant devrait également être plus facile à modifier, car dans de
nombreux cas, la couche de langue n’aura pas à changer du tout.

La taille du code est importante, car le temps nécessaire à l’écriture
d’un programme dépend principalement de sa longueur. Si votre programme
est trois fois plus long dans un autre langage, il faudra trois fois
plus de temps pour écrire - et vous ne pouvez pas contourner cela en
embauchant plus de personnes, car au-delà d’une certaine taille, les
nouvelles embauches sont en fait une perte nette. Fred Brooks a décrit
ce phénomène dans son célèbre livre The Mythical Man-Month, et tout ce
que j’ai vu a eu tendance à confirmer ce qu’il a dit.

Alors, combien vos programmes sont-ils plus courts si vous les écrivez
en Lisp ? La plupart des chiffres que j’ai entendus pour Lisp contre C,
par exemple, ont été autour de 7 à 10 fois. Mais un article récent sur
l’ITA dans le magazine New Architect a déclaré qu’“une ligne de Lisp
peut remplacer 20 lignes de C”, et puisque cet article était plein de
citations du président de l’ITA, je suppose qu’ils ont obtenu ce numéro
de l’ITA \[6\] Si c’est le cas, alors nous pouvons lui accorder une
certaine confiance ; le logiciel de l’ITA comprend beaucoup de C et de
C++ ainsi que Lisp, ils en parlent donc en connaissance de cause.

Je suppose que ces multiples ne sont même pas constants. Je pense qu’ils
augmentent lorsque vous faites face à des problèmes plus difficiles et
aussi lorsque vous avez des programmeurs plus intelligents. Un très bon
hacker peut en extraire plus de meilleurs outils.

En tant que point de données sur la courbe, en tout cas, si vous deviez
rivaliser avec l’ITA et que vous choisissiez d’écrire votre logiciel en
C, ils seraient en mesure de développer des logiciels vingt fois plus
rapidement que vous. Si vous passiez un an sur une nouvelle
fonctionnalité, ils seraient en mesure de la dupliquer en moins de trois
semaines. Alors que s’ils ne passaient que trois mois à développer
quelque chose de nouveau, il faudrait cinq ans avant que vous ne
l’obteniez aussi.

Et vous savez quoi ? C’est le meilleur scénario. Lorsque vous parlez de
ratios de taille de code, vous supposez implicitement que vous pouvez
réellement écrire le programme dans le langage le plus faible. Mais en
fait, il y a des limites à ce que les programmeurs peuvent faire. Si
vous essayez de résoudre un problème difficile avec un langage de niveau
trop bas, vous atteignez un point où il y a tout simplement trop de
choses à garder dans votre tête à la fois.

Donc, quand je dis qu’il faudrait cinq ans au concurrent imaginaire de
l’ITA pour dupliquer quelque chose que l’ITA pourrait écrire en Lisp en
trois mois, je veux dire cinq ans si rien ne va mal. En fait, la façon
dont les choses fonctionnent dans la plupart des entreprises, tout
projet de développement qui prendrait cinq ans ne sera probablement
jamais terminé du tout.

J’admets qu’il s’agit d’un cas extrême. Les hackers de l’ITA semblent
généralement peu intelligents, et C est un langage de niveau assez bas.
Mais dans un marché concurrentiel, même un différentiel de deux ou trois
contre un serait suffisant pour garantir que vous seriez toujours en
retard.

**Une recette**

C’est le genre de possibilité à laquelle le patron aux cheveux pointus
ne veut même pas penser. Et donc la plupart d’entre eux ne le font pas.
Parce que, vous savez, quand il s’agit de ça, le patron aux cheveux
pointus ne s’en soucie pas si son entreprise se fait botter le cul, tant
que personne ne peut prouver que c’est de sa faute. Le plan le plus sûr
pour lui personnellement est de rester près du centre d’élevage.

Au sein des grandes organisations, l’expression utilisée pour décrire
cette approche est « les meilleures pratiques de l’industrie ». Son but
est de protéger le patron aux cheveux pointus de la responsabilité :
s’il choisit quelque chose qui est une “meilleure pratique de
l’industrie” et que l’entreprise perd, il ne peut pas être blâmé. Il n’a
pas choisi, l’industrie l’a fait.

Je crois que ce terme a été utilisé à l’origine pour décrire les
méthodes comptables et ainsi de suite. Ce que cela signifie, en gros,
c’est de ne rien faire de bizarre. Et en comptabilité, c’est
probablement une bonne idée. Les termes « pointe » et « comptabilité »
ne sonnent pas bien ensemble. Mais lorsque vous importez ce critère dans
les décisions sur la technologie, vous commencez à obtenir de mauvaises
réponses.

La technologie devrait souvent être de pointe. Dans les langages de
programmation, comme Erann Gat l’a souligné, ce que les “meilleures
pratiques de l’industrie” permettent d’obtenir n’est pas le meilleur,
mais simplement la moyenne. Lorsqu’une décision vous amène à développer
des logiciels à une fraction du taux de concurrents plus agressifs, les
“meilleures pratiques” ne semblent pas vraiment être le bon nom pour
cela.

Nous avons donc ici deux informations qui, je pense, sont très
précieuses. En fait, je le sais de ma propre expérience. Numéro 1, les
langages varient en puissance. Numéro 2, la plupart des gestionnaires
l’ignorent délibérément. Entre eux, ces deux faits sont littéralement
une recette pour gagner de l’argent. ITA est un exemple de cette recette
en action. Si vous voulez gagner dans une entreprise de logiciels, il
vous suffit de vous en prendre au problème le plus difficile que vous
puissiez trouver, d’utiliser le langage le plus puissant que vous
puissiez obtenir et d’attendre que les patrons aux cheveux pointus de
vos concurrents reviennent à la moyenne.

**Annexe : Puissance**

Pour illustrer ce que je veux dire à propos du pouvoir relatif de la
programmation des langues, considérez le problème suivant. Nous voulons
écrire une fonction qui génère des accumulateurs - une fonction qui
prend un nombre n, et renvoie une fonction qui prend un autre nombre i
et renvoie n incrémenté par i. (C’est incrémenté de, pas plus. Un
accumulateur doit s’accumuler.)

Dans Common Lisp \[7\], ce serait :

``` lisp
(defun foo (n)
  (lambda (i) (incf n i)))
```

En Ruby, c’est presque identique :

``` ruby
def foo(n)
  lambda { |i| n += i } end
```

Alors que dans Perl 5, c’est

``` perl
sub foo {
  my ($n) = @_;
  sub {$n += shift}
```

qui a plus d’éléments que la version Lisp/Ruby parce que vous devez
extraire les paramètres manuellement dans Perl.

Dans Smalltalk, le code est également légèrement plus long que dans Lisp
et Ruby :

``` smalltalk
foo: n
  |s|
  s := n.
  ^[:i| s := s+i. ]
```

Parce que bien que les variables lexicales générales fonctionnent, vous
ne pouvez pas faire une affectation à un paramètre, vous devez donc
créer une nouvelle variable s pour contenir la valeur accumulée.

En Javascript, l’exemple est, encore une fois, légèrement plus long, car
Javascript conserve la distinction entre les instructions et les
expressions, vous avez donc besoin d’instructions de retour explicites
pour renvoyer des valeurs :

``` javascript
function foo(n) {
  return function (i) {
    return n += i } }
```

(Pour être juste, Perl conserve également cette distinction, mais la
traite de manière typique de Perl en vous laissant omettre les retours.)

Si vous essayez de traduire le code Lisp/Ruby/Perl/Smalltalk/Javascript
en Python, vous rencontrez certaines limitations. Parce que Python ne
prend pas entièrement en charge les variables lexicales, vous devez
créer une structure de données pour contenir la valeur de n. Et bien que
Python ait un type de données de fonction, il n’y a pas de
représentation littérale pour un (à moins que le corps ne soit qu’une
seule expression), vous devez donc créer une fonction nommée pour
revenir. C’est ce que vous vous retrouvez avec :

``` python
def foo(n):
  s = [n]
  def bar(i):
    s[0] += i
    return s[0]
  return bar
```

Les utilisateurs de Python pourraient légitimement se demander pourquoi
ils ne peuvent pas simplement écrire

``` python
def foo(n):
  return lambda i: return n += i
```

Ou même

``` python
def foo(n):
  lambda i: n += i
```

Et je suppose qu’ils le feront probablement, un jour. (Mais s’ils ne
veulent pas attendre que Python évolue le reste du chemin vers Lisp, ils
pourraient toujours juste…)

Dans les langages OO, vous pouvez, dans une mesure limitée, simuler une
fermeture (une fonction qui fait référence à des variables définies dans
le code environnant) en définissant une classe avec une méthode et un
champ pour remplacer chaque variable à partir d’une portée englobante.
Cela fait que le programme fait le genre d’analyse de code qui serait
fait par le compilateur dans un langage avec une prise en charge
complète de la portée lexicale, et cela ne fonctionnera pas si plus
d’une fonction fait référence à la même variable, mais c’est suffisant
dans des cas simples comme celui-ci.

Les experts de Python semblent convenir que c’est le moyen préféré de
résoudre le problème en Python, en écrivant soit :

``` python
def foo(n)
  class acc:
    def __init__(self, s):
      self.s = s

    def inc(self, i):
      self.s += i
      return self.s
  return acc(n).inc
```

Ou

``` python
class foo(n)
  def __init__(self, n):
    self.n = n

  def __call__(self, i):
    self.n += i
    return self.n
```

Je les inclus parce que je ne voudrais pas que les défenseurs de Python
disent que je déformais le langage, mais les deux me semblent plus
complexes que la première version. Vous faites la même chose, vous
mettez en place un endroit séparé pour tenir l’accumulateur ; c’est
juste un champ dans un objet au lieu de l’en-tête d’une liste. Et
l’utilisation de ces noms de champs spéciaux et réservés, en particulier
**call**, semble un peu un hack.

Dans la rivalité entre Perl et Python, l’affirmation des hackers Python
semble être que Python est une alternative plus élégante à Perl, mais ce
que ce cas montre, c’est que la puissance est l’élément ultime : le
programme Perl est plus simple (a moins d’éléments), même si la syntaxe
est un peu plus laide.

Que diriez-vous des autres langages ? Dans les autres langages
mentionnés ici - Fortran, C, C++, Java et Visual Basic - il ne semble
pas que vous puissiez résoudre ce problème du tout. Ken Anderson dit que
c’est à peu près aussi proche que possible en Java :

``` java
public interface Inttoint {
  public int call(int i);
}

public static Inttoint foo(final int n) {
  return new Inttoint() {
    int s = n;
    public int call(int i) {
    s = s + i;
    return s;
    }};
}
```

Ce qui n’est pas en deçà de la spécification parce qu’il ne fonctionne
que pour les nombres entiers. Il n’est pas littéralement vrai que vous
ne pouvez pas résoudre ce problème dans d’autres langages, bien sûr. Le
fait que tous ces langages soient équivalents au Turing signifie que, à
proprement parler, vous pouvez écrire n’importe quel programme dans
n’importe lequel d’entre eux. Alors, comment le feriez-vous ? Dans le
cas limite, en écrivant un interprète Lisp dans la langue la moins
puissante.

Cela ressemble à une blague, mais cela arrive si souvent à des degrés
divers dans les grands projets de programmation qu’il y a un nom pour ce
phénomène, la Greenspun’s Tenth Rule :

Tout programme C ou Fortran suffisamment compliqué contient une mise en
œuvre lente ad hoc de la moitié de Common Lisp.

Si vous essayez de résoudre un problème difficile, la question n’est pas
de savoir si vous utiliserez un langage assez puissant, mais si vous (a)
utiliserez un langage puissant, (b) écrirez un interprète de facto pour
un, ou (c) vous-même devenir un compilateur humain pour un. Nous voyons
que cela commence déjà à se produire dans l’exemple Python, où nous
simulons en fait le code qu’un compilateur générerait pour implémenter
une variable lexicale.

Cette pratique est non seulement courante, mais aussi
institutionnalisée. Par exemple, dans le monde OO, vous entendez
beaucoup parler de “modèles”. Je me demande si ces modèles ne sont pas
parfois une preuve du cas (c), le compilateur humain, au travail \[8\]
Quand je vois des modèles dans mes programmes, je considère que c’est un
signe de problème. La forme d’un programme ne doit refléter que le
problème qu’il doit résoudre. Toute autre régularité dans le code est un
signe, du moins pour moi, que j’utilise des abstractions qui ne sont pas
assez puissantes - souvent que je génère à la main les extensions d’une
macro que je dois écrire.
