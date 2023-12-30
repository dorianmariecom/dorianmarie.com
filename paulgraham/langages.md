Chapitre 10

Toute machine a une liste de choses que vous pouvez lui dire de faire.
Parfois, la liste est courte. Il n’y a que deux choses que je peux faire
à ma bouilloire électronique : l’allumer et l’éteindre. Mon lecteur de
CD est plus compliqué. En plus de l’allumer et de l’éteindre, je peux
monter et descendre le volume, lui dire de jouer ou de faire une pause,
reculer ou avancer une chanson, et lui demander de jouer des chansons
dans un ordre aléatoire.

Comme tout autre type de machine, un ordinateur a une liste de choses
qu’il peut faire. Par exemple, on peut dire à chaque ordinateur
d’ajouter deux nombres. La liste complète des choses qu’un ordinateur
peut faire est son langage machine.

**Le Langage Machine**

Lorsque les ordinateurs ont été inventés pour la première fois, tous les
programmes devaient être écrits sous forme de séquences d’instructions
en langage machine. Peu de temps après, ils ont commencé à être écrits
sous une forme un peu plus pratique appelée langage assembleur. En
langage assembleur, la liste des commandes est la même, mais vous pouvez
utiliser des noms plus adaptés aux programmeurs. Au lieu de faire
référence à l’instruction d’ajout comme 11001101, qui est ce que la
machine pourrait l’appeler, vous pouvez dire add.

Le problème avec le langage machine/assemblage est que la plupart des
ordinateurs ne peuvent faire que des choses très simples. Par exemple,
supposons que vous vouliez dire à un ordinateur de bip 10 fois. Il est
peu probable qu’il y ait une instruction de machine pour faire quelque
chose n fois. Donc, si vous vouliez dire à un ordinateur de faire
quelque chose 10 fois en utilisant les instructions réelles de la
machine, vous devez dire quelque chose d’équivalent à :

       mettre le nombre 10 dans la localisation mémoire 0
    a  si la localisation 0 est négative, aller à la ligne b
       beep
       soustraire 1 du nombre dans la localisation 0
       aller à la ligne a
    b  ...reste du programme...

Si vous devez faire autant de travail pour faire sonner la machine 10
fois, imaginez le travail d’écrire quelque chose comme un processus de
mots ou une feuille de calcul.

Et au fait, jetez un autre coup d’œil au programme. Y aura-t-il un bip
dix fois ? Non, onze. Dans la première ligne, j’aurais dû dire 9 au lieu
de 10. J’ai délibérément mis un bug dans notre exemple pour illustrer un
point important sur les langues. Plus vous avez à dire pour faire
quelque chose, plus il est difficile de voir des bugs.

**Langagues de haut niveau**

Imaginez que vous deviez produire des programmes en langage assembleur,
mais que vous aviez un assistant pour faire tout le sale boulot pour
vous. Donc, vous pourriez juste écrire quelque chose comme :

    dotimes 10 bip

Et votre assistant écrirait le langage d’assemblage pour vous (mais sans
bugs).

En fait, c’est ainsi que la plupart des programmeurs travaillent. Sauf
que l’assistant n’est pas une personne, mais un compilateur. Un
compilateur est un programme qui traduit des programmes écrits sous une
forme pratique, comme le oneliner ci-dessus, dans le langage simple que
le matériel comprend.

Le langage le plus pratique que vous donnez au compilateur est appelé un
langage de haut niveau. Il vous permet de construire vos programmes à
partir de commandes puissantes, comme “faire quelque chose n fois” au
lieu des minables commandes comme “ajouter deux nombres”.

Lorsque vous construisez vos programmes à partir de concepts plus
importants, vous n’avez pas besoin d’en utiliser autant. Écrit dans
notre langage imaginaire de haut niveau, notre programme n’est qu’un
cinquième aussi long. Et s’il y avait une erreur, ce serait facile à
voir.

Un autre avantage des langages de haut niveau est qu’ils rendent vos
programmes plus portables. Différents ordinateurs ont tous des langages
machine légèrement différents. Vous ne pouvez pas, en règle générale,
prendre un programme en langage machine écrit pour un ordinateur et
l’exécuter sur un autre. Si vous écriviez vos programmes en langage
machine, vous devriez tous les réécrire pour les exécuter sur un nouvel
ordinateur. Si vous utilisez un langage de haut niveau, tout ce que vous
avez à réécrire est le compilateur.

Les compilateurs ne sont pas le seul moyen d’implémenter des langages de
haut niveau. Vous pouvez également utiliser un interpréteur, qui examine
votre programme une pièce à la fois et exécute les commandes de langue
chinoise correspondantes, au lieu de traduire le tout en langage machine
et de l’exécuter.

**Open Source**

Le langage de haut niveau que vous donnez au compilateur est également
connu sous le nom de code source, et la traduction en langage
automatique qu’il génère est appelée code objet. Lorsque vous achetez un
logiciel commercial, vous n’obtenez généralement que le code objet.
(L’objet du code est si difficile à lire qu’il est efficacement crypté,
protégeant ainsi les secrets commerciaux de l’entreprise.) Mais ces
derniers temps, il existe une approche alternative : les logiciels open
source, où vous obtenez également le code source, et vous êtes libre de
le modifier si vous le souhaitez.

Il y a une réelle différence entre les deux modèles. L’open source vous
donne beaucoup plus de contrôle. Lorsque vous utilisez des logiciels
open source et que vous voulez comprendre ce qu’ils font, vous pouvez
lire le code source et le découvrir. Si vous le souhaitez, vous pouvez
même modifier le logiciel et le recompiler.

L’une des raisons pour lesquelles vous voudrez peut-être le faire est de
corriger un bug. Vous ne pouvez pas corriger les bugs dans Microsoft
Windows, par exemple, parce que vous n’avez pas le code source. (En
théorie, vous pourrez pirater le code objet, mais en pratique, c’est
très difficile. C’est aussi probablement interdit par le contrat de
licence.) Cela peut être un vrai problème. Lorsqu’un nouveau trou de
sécurité est découvert dans Windows, vous devez attendre que Microsoft
publie un correctif. Et les failles de sécurité sont au moins réparées
rapidement. Si le bug ne fait que paralyser votre ordinateur de temps en
temps, vous devrez peut-être attendre la prochaine version complète pour
qu’il soit corrigé.

Mais l’avantage de l’open source n’est pas seulement que vous pouvez le
réparer quand vous en avez besoin. C’est que tout le monde peut. Les
logiciels open source sont comme un document qui a fait l’objet d’un
examen par les pairs. Beaucoup de personnes intelligentes ont examiné le
code source des systèmes d’exploitation open source comme Linux et
FreeBSD et ont déjà trouvé la plupart des bugs. Alors que Windows est
aussi fiable que l’assurance qualité des grandes entreprises peut le
faire.

Les défenseurs de l’open source sont parfois considérés comme des fous
qui sont contre l’idée de propriété en général. Quelques-uns le sont.
Mais je ne suis certainement pas contre l’idée de propriété, et pourtant
je serais très réticent à installer un logiciel pour lequel je n’avais
pas le code source. L’utilisateur final moyen n’a peut-être pas besoin
du code source de son traitement de texte, mais lorsque vous avez
vraiment besoin de fiabilité, il y a de solides raisons d’ingénierie
pour insister sur l’open source.

**Guerres linguistiques**

La plupart des programmeurs, la plupart du temps, programment dans des
langages de haut niveau. Peu utilisent le langage assembleur maintenant.
Le temps d’ordinateur est venu beaucoup moins cher, tandis que le temps
de programmeur est plus cher que jamais, de sorte qu’il vaut rarement la
peine d’écrire des programmes dans un langage aussi simple. Vous
pourriez le faire dans quelques parties critiques, par exemple, d’un jeu
d’ordinateur, où vous vouliez microgérer le matériel pour extraire ce
dernier incrément de vitesse.

Fortran, Lisp, Cobol, Basic, C, Pascal, Smalltalk, C++, Java, Perl et
Python sont tous des langages de haut niveau. Ce ne sont que
quelques-uns des plus connus. Il existe littéralement des centaines de
langages différents de haut niveau. Et contrairement aux langages
machine, qui offrent tous des ensembles d’instructions similaires, ces
langages de haut niveau vous donnent des concepts assez différents pour
construire des programmes.

Alors, lequel utilisez-vous ? Ah, eh bien, il y a beaucoup de désaccord
à ce sujet. Une partie du problème est que si vous utilisez un langage
assez longtemps, vous commencez à y penser. Ainsi, tout langage qui est
substantiellement différent semble terriblement gênant, même s’il n’y a
rien d’intrinsèquement mauvais. Les jugements des programmeurs
inexpérimentés sur les mérites relatifs des langages de programmation
sont souvent faussés par cet effet.

D’autres hackers, peut-être désireux de paraître sophistiqués, vous
diront que tous les langages sont fondamentalement les mêmes. J’ai
programmé toutes sortes de langages, a dit le vieux hacker coriace alors
qu’il s’approchait du bar, et peu importe ce que vous utilisez. Ce qui
compte, c’est de savoir si vous avez les bonnes choses. Ou quelque chose
dans ce sens.

C’est absurde, bien sûr. Il y a un monde de différence entre, par
exemple, Fortran I et la dernière version de Perl - ou d’ailleurs entre
les premières versions de Perl et la dernière version de Perl. Mais le
vieux hacker coriace peut lui-même croire ce qu’il dit. Il est possible
d’écrire les mêmes programmes primitifs de type Pascal dans presque tous
les langages. Si jamais vous ne mangez que chez McDonald’s, il semblera
que la nourriture soit à peu près la même dans tous les pays.

Certains hackers préfèrent le langage auquel ils sont habitués et
n’aiment rien d’autre. D’autres disent que tous les langages sont les
mêmes. La vérité se situe quelque part entre ces deux extrêmes. Les
langages diffèrent, mais il est difficile de dire avec certitude
lesquels sont les meilleurs. Le domaine est toujours en évolution.

**Abstraction**

Tout comme les langages de haut niveau sont plus abstraits que les
langages d’assemblage, certains langages de haut niveau sont plus
abstraits que d’autres. Par exemple, C est un niveau assez bas, presque
un langage d’assemblage portable, tandis que Lisp est de très haut
niveau.

Si les langages de haut niveau sont meilleurs pour la programmation que
la langue d’assemblage, alors vous pouvez vous attendre à ce que plus le
langage est de haut niveau, mieux c’est. Normalement, oui, mais pas
toujours. Un langage peut être très abstrait, mais offrir de mauvaises
abstractions. Je pense que cela se produit dans Prolog, par exemple. Il
a des abstractions fabuleusement puissantes pour résoudre environ 2 %
des problèmes, et le reste du temps, vous vous penchez en arrière pour
abuser de ces abstractions pour écrire des programmes Pascal de facto.

Une autre raison pour laquelle vous voudrez peut-être utiliser un
langage de niveau inférieur est l’efficacité. Si vous avez besoin que le
code soit super rapide, il est préférable de rester près de la machine.
La plupart des systèmes d’exploitation sont écrits en C, et ce n’est pas
une coïncidence. Au fur et à mesure que le matériel devient plus rapide,
il y a moins de pression pour écrire des applications dans des langages
aussi bas que C, mais tout le monde semble toujours vouloir que les
systèmes d’exploitation soient aussi rapides que possible. (Ou peut-être
veulent-ils que la perspective d’attaques de débordement de mémoire les
maintienne en alerte \[1\].)

**Ceintures de sécurité ou Menottes ?**

Le plus grand débat en conception de langage est probablement celui
entre ceux qui pensent qu’un langage devrait empêcher les programmeurs
de faire des choses stupides, et ceux qui pensent que les programmeurs
devraient être autorisés à faire ce qu’ils veulent. Java est dans
l’ancien camp, et Perl dans le second. (Il n’est pas surprenant que le
DoD soit important sur Java.)

Les partisans des langages permissifs ridiculisent l’autre type de
langages “B&D” (bondage et discipline), avec l’implication plutôt
imprudente que ceux qui aiment programmer sont inférieurs. Je ne sais
pas ce que l’autre côté appelle des langages comme Perl. Peut-être ne
sont-ils pas du genre à inventer des noms amusants pour l’opposition.

Le débat se résout en plusieurs plus petits, car il y a plusieurs façons
d’empêcher les programmeurs de faire des choses stupides. L’une des
questions les plus actives en ce moment est la dactylographie statique
par rapport à la dactylographie dynamique. Dans un langage orthographié
statiquement, vous devez connaître le type de valeurs que chaque
variable peut avoir au moment où vous écrivez le programme. Avec la
saisie dynamique, vous pouvez définir n’importe quelle variable à
n’importe quelle valeur, quand vous le souhaitez.

Les partisans du typage statique soutiennent qu’il aide à prévenir les
bugs et aide les compilateurs à générer du code rapide (tous deux
vrais). Les partisans de la dactylographie dynamique soutiennent que la
dactylographie statique limite les programmes que vous pouvez écrire
(également vrai). Je préfère la dactylographie dynamique. Je déteste un
langage qui me dit quoi faire. Mais certaines personnes intelligentes
semblent aimer l’écriture statique, donc la question reste ouverte.

**OO**

Un autre grand sujet en ce moment est la programmation orientée objet.
Cela signifie une façon différente d’organiser les programmes. Supposons
que vous vouliez écrire un programme pour trouver les zones des figures
bidimensionnelles. Au début, il n’a qu’à connaître les cercles et les
carrés. Une façon de le faire serait d’écrire un seul morceau de code,
dans lequel vous testez si on vous pose des questions sur un cercle ou
un carré, puis d’utiliser la formule correspondante pour trouver la
zone. La façon orientée objet d’écrire ce programme serait de créer deux
classes, un cercle et un carré, puis d’attacher à chaque classe un
extrait de code (appelé méthode) pour trouver la zone de ce type de
figure. Lorsque vous avez besoin de trouver la zone de quelque chose,
vous demandez quelle est sa classe, récupérez la méthode correspondante
et exécutez-ci pour obtenir la réponse.

Ces deux cas peuvent sembler très similaires, et en effet, ce qui se
passe lorsque vous exécutez le code est à peu près le même. (Pas
étonnamment, puisque vous résolvez le même problème.) Mais le code peut
finir par être tout à fait différent. Dans la version orientée objet, le
code pour trouver les zones des carrés et des cercles peut même se
retrouver dans différents fichiers, une partie dans le fichier contenant
toutes les choses à faire avec les cercles, et l’autre dans le fichier
contenant les choses à faire avec les carrés.

L’avantage de l’approche orientée objet est que si vous voulez changer
le programme pour trouver la zone, par exemple, des triangles, vous
ajoutez simplement un autre morceau de code pour eux, et vous n’avez
même pas à regarder le reste. L’inconvénient, selon les critiques, c’est
que l’ajout de choses sans regarder ce qui était déjà là a tendance à
produire les mêmes résultats dans les programmes que dans les bâtiments.

Le débat sur la programmation orientée objet n’est pas aussi clair que
celui sur la dactylographie statique par rapport à la dactylographie
dynamique. En tapant, vous devez choisir l’un ou l’autre. Mais
l’orientation objet d’un langage est une question de degré. En effet, il
y a deux sens de l’orientation objet : certains langages sont orientés
objet dans le sens qu’ils vous laissent programmer dans ce style, et
d’autres dans le sens où ils vous obligent à le faire.

Je vois peu d’avantages dans ce dernier. Sûrement un langage qui vous
permet de faire x est au moins aussi bon qu’un langage qui vous y
oblige. Donc, en ce qui concerne les langues, au moins, nous pouvons
peaufiner cette question. Bien sûr, utilisez un langage qui vous permet
d’écrire des programmes orientés objet. Que vous le vouliez réellement,
cela devient une question distincte.

**Renaissance**

Une chose sur laquelle je pense que tout le monde dans le secteur des
langages sera d’accord, c’est qu’il y a beaucoup de nouveaux langages de
programmation ces derniers temps. Jusqu’aux années 1980, seules les
institutions pouvaient se permettre le matériel nécessaire pour
développer des langages de programmation, et la plupart ont donc été
conçus par des professeurs ou des chercheurs de grandes entreprises.
Maintenant, un lycéen peut se permettre tout le matériel nécessaire.

Inspiré en grande partie par l’exemple de Larry Wall, le concepteur de
Perl, beaucoup de hackers se demandent : pourquoi ne puis-je pas
concevoir mon propre langage ? Ceux qui parviennent à exploiter la
puissance de la communauté open source peuvent obtenir beaucoup de code
écrit pour eux très rapidement.

Le résultat est une sorte de langage que vous pourriez appeler très
lourd : un langage dont le noyau interne n’est pas très bien conçu, mais
qui possède des bibliothèques de code extrêmement puissantes pour
résoudre des problèmes spécifiques. (Imaginez un Yugo avec un moteur à
réaction boulonné au toit.) Pour les petits problèmes quotidiens que les
programmeurs passent tant de temps à résoudre, les bibliothèques sont
probablement plus importantes que le langage de base. Et donc ces
hybrides étranges sont très utiles, et deviennent en conséquence
populaires. Un Yugo avec un moteur à réaction boulonné au toit pourrait
en fait fonctionner, tant que vous n’avez pas essayé de prendre un
virage dedans \[2\].

Un autre résultat est une grande variété. Il y a toujours eu beaucoup de
variété dans les langages de programmation. Fortran, Lisp et APL
diffèrent autant les uns des autres que les étoiles de mer, les ours et
les mouches-dragons, et tous ont été conçus avant 1970. Mais les
nouveaux langages open source ont certainement poursuivi cette
tradition.

Il semble que j’entends parler d’un nouveau langage tous les deux jours.
Jonathan Erickson l’a appelé “le langage de programmation renaissance”.
Une autre expression que les gens utilisent parfois est « les guerres du
langage ». Mais il n’y a pas de contradiction ici. La Renaissance était
pleine de guerres.

En effet, de nombreux historiens pensent que les guerres ont été
sous-produit des forces qui ont créé la Renaissance \[3\]. La clé de la
vigueur de l’Europe a peut-être été le fait qu’elle a été divisée en un
certain nombre de petits États concurrents. Ceux-ci étaient assez
proches pour que les idées puissent voyager de l’une à l’autre, mais
assez indépendants pour qu’aucun dirigeant ne puisse mettre un couvercle
sur l’innovation - comme la cour chinoise l’a fait de manière
désastreuse lorsqu’elle a interdit le développement de grands navires
océaniques.

Il est donc probablement bon que les programmeurs vivent dans un monde
post-Babel. Si nous utilisions tous le même langage, ce serait
probablement le mauvais.
