---
title: Le Langage de Rêve
layout: default
---

Chapitre 14

> De toutes les tyrannies, une tyrannie exercée pour le bien de ses
> victimes peut être la plus oppressive.

C. S. Lewis

Un de mes amis a dit un jour à un éminent système d’exploitation expert
qu’il voulait concevoir un très bon langage de programmation. L’expert a
déclaré que ce serait une perte de temps, que les langages de
programmation ne deviennent pas populaires ou impopulaires en fonction
de leurs mérites, et donc peu importe à quel point son langage était
bon, personne ne l’utiliserait. Au moins, c’est ce qui était arrivé au
langage qu’il avait conçu.

Qu’est-ce qui rend un langage populaire ? Les langages populaires
méritent-ils leur popularité ? Vaut-il la peine d’essayer de définir un
bon langage de programmation ? Comment le feriez-vous ?

Je pense que les réponses à ces questions peuvent être trouvées en
regardant les hackers et en apprenant ce qu’ils veulent. Les langages de
programmation sont pour les hackers, et un langage de programmation est
bon pour programmer un langage (plutôt que, par exemple, un exercice de
sémantique dénotationnelle ou de conception de compilateur) si et
seulement si les hackers l’aiment.

**La mécanique de la popularité**

Il est vrai, certainement, que la plupart des gens ne choisissent pas
les langages de programmation simplement en fonction de leurs mérites.
La plupart des programmeurs se font dire quelle langue utiliser par
quelqu’un d’autre. Et pourtant, je pense que l’effet de tels facteurs
externes sur la popularité des langages de programmation n’est pas aussi
grand qu’on le pense parfois. Je pense qu’un des plus gros problème est
que l’idée d’un hacker d’un bon langage de programmation n’est pas la
même que celle de la plupart des concepteurs de langage.

Entre les deux, l’opinion du hacker est celle qui compte. Les langages
de programmation ne sont pas des théorèmes. Ce sont des outils, conçus
pour les gens, et ils doivent être conçus pour s’adapter aux forces et
aux faiblesses humaines autant que les chaussures doivent être conçues
pour les pieds humains. Si une chaussure se pince lorsque vous la
mettez, c’est une mauvaise chaussure, aussi élégante soit-elle comme un
morceau de sculpture.

Il se peut que la majorité des programmeurs ne puissent pas distinguer
un bon langage d’un mauvais langage. Mais ce n’est pas différent avec
n’importe quel autre outil. Cela ne signifie pas que c’est une perte de
temps d’essayer de concevoir un bon langage. Les hackers experts peuvent
dire si c’est un bon langage quand ils en voient un, et ils
l’utiliseront. Les hackers experts sont une infime minorité, certes,
mais cette petite minorité écrit tous les bons logiciels, et leur
influence est telle que le reste des programmeurs auront tendance à
utiliser n’importe quel langage qu’ils utilisent. Souvent, en effet, ce
n’est pas seulement de l’influence, mais du commandement : souvent, les
hackers experts sont les personnes mêmes qui, en tant que patrons ou
conseillers du corps professoral, disent aux autres programmeurs quel
langage utiliser.

L’opinion des hackers experts n’est pas la seule force qui dissuade la
popularité relative des langages de programmation - les logiciels
hérités (Fortran, Cobol) et le battage médiatique (Ada, Java) jouent
également un rôle - mais je pense que c’est la force la plus puissante à
long terme. Compte tenu d’une masse critique initiale et de suffisamment
de temps, un langage de programmation devient probablement aussi
populaire qu’il le mérite. Et la clarté populaire sépare davantage les
bons langages des mauvais, car les commentaires des vrais utilisateurs
en direct conduisent toujours à des améliorations. Regardez à quel point
un langage populaire a changé au cours de sa vie. Perl et Fortran sont
des cas extrêmes, mais même Lisp a beaucoup changé.

Donc, est-ce qu’un langage doit être bon ou non pour être populaire ? Je
pense qu’un langage doit être populaire pour être bon. Et il doit rester
populaire pour rester bon. L’état de l’art des langages de programmation
ne s’arrête pas. Bien qu’il y ait peu de changement dans les profondeurs
de la mer, dans les caractéristiques du langage de base, il y en a
beaucoup à la surface, dans des choses comme les bibliothèques et les
environnements.

Bien sûr, les hackers doivent connaître un langage avant de pouvoir
l’utiliser. Comment vont-ils entendre ? D’autres pirates informatiques.
Mais il doit y avoir un groupe initial de hackers qui utilisent le
langage pour que d’autres en entendent parler. Je me demande quelle doit
être la taille de ce groupe ; combien d’utilisateurs font une masse
critique ? Du haut de ma tête, je dirais vingt. Si un langage avait
vingt utilisateurs distincts, c’est-à-dire vingt utilisateurs qui
décidaient eux-mêmes de l’utiliser, je le considérerais comme réel.

S’y rendre ne peut pas être facile. Je ne serais pas surpris s’il est
plus difficile de passer de zéro à vingt que de vingt à mille. La
meilleure façon d’obtenir ces vingt premiers utilisateurs est
probablement un cheval de Troie : donnez aux gens une application qu’ils
veulent, qui se trouve être écrite dans le nouveau langage.

**Facteurs externes**

Commençons par reconnaître un facteur externe qui affecte la popularité
d’un langage de programmation. Pour devenir populaire, un langage de
programmation doit être le langage de script d’un système populaire.
Fortran et Cobol étaient les langages de script des premiers mainframes
IBM. C’était le langage de script d’Unix, et donc, plus tard, Perl et
Python. Tcl est le langage de script de Tk, Visual Basic de Windows,
(une forme de) Lisp d’Emacs, PHP des serveurs web, et Java et Javascript
des navigateurs web.

Les langages de programmation n’existent pas isolément. Hacker est un
verbe transitif - les hackers bidouillent généralement quelque chose -
et dans la pratique, les langages sont jugés par rapport à tout ce
qu’ils ont l’habitude de bidouiller. Donc, si vous voulez concevoir un
langage populaire, vous devez soit fournir plus qu’un langage, soit
concevoir votre langage pour remplacer le langage de script d’un système
existant.

Une façon de décrire cette situation est de dire qu’un langage n’est pas
jugé sur ses propres mérites. Un autre point de vue est qu’un langage de
programmation n’est vraiment pas un langage de programmation à moins que
ce ne soit aussi le langage de script de quelque chose. Cela ne semble
injuste que si cela se présente comme une surprise. Je pense que ce
n’est pas plus injuste que de s’attendre à un langage de programmation
pour avoir, par exemple, une implémentation. Ce n’est qu’une partie de
ce qu’est un langage de programmation.

Un langage de programmation a besoin d’une bonne implémentation, bien
sûr, et cela doit être gratuit. Les entreprises paieront pour les
logiciels, mais les hackers individuels ne le feront pas, et ce sont les
hackers que vous devez attirer.

Un langage doit également avoir un livre à ce sujet. Le livre doit être
mince, bien écrit et plein de bons exemples. Le langage de programmation
C de Kernighan et Ritchie est l’idéal ici. Pour le moment, je dirais
presque qu’un langage doit avoir un livre publié par O’Reilly. Cela
devient le test de l’importance pour les hackers.

Il devrait également y avoir de la documentation en ligne. En fait, le
livre peut commencer par une documentation en ligne. Mais les livres
physiques ne sont pas encore obsolètes. Leur format est pratique, et la
censure de fait imposée par les éditeurs est un filtre utile, même s’il
est imparfait. Les librairies sont l’un des endroits les plus importants
pour apprendre de nouveaux langages.

**Concision**

Étant donné que vous pouvez fournir les trois choses dont n’importe quel
langage a besoin - une implémentation gratuite, un livre et quelque
chose à pirater - comment faites-vous un langage que les hackers
aimeront ?

Une chose que les hackers aiment, c’est la concision. Les hackers sont
paresseux, de la même manière que les mathématiciens et les architectes
modernistes sont paresseux : ils détestent tout ce qui est étranger. Ce
ne serait pas loin de la vérité de dire qu’un pirate sur le point
d’écrire un programme décide quel langage utiliser, au moins
inconsciemment, en fonction du nombre total de caractères qu’il devra
taper. Si ce n’est pas exactement ce que pensent les hackers, un
concepteur de langage ferait bien d’agir comme si c’était le cas.

Le type le plus important de succinctance vient de rendre la langue plus
abstraite. C’est pour obtenir cela que nous utilisons des langages de
haut niveau en premier lieu. Il semblerait donc que plus vous en
obtenez, mieux c’est. Un concepteur de langage devrait toujours regarder
les programmes et se demander, y a-t-il un moyen d’exprimer cela en
moins de jetons ? Si vous pouvez faire quelque chose qui rend différents
programmes plus courts, ce n’est probablement pas une coïncidence : vous
avez probablement découvert une nouvelle abstraction utile.

C’est une erreur d’essayer d’enfanter l’utilisateur avec des expressions
longues destinées à ressembler à l’anglais. Cobol est connu pour cette
faille. Un hacker envisagerait qu’on lui demande d’écrire…

    ajouter x à y en donnant z

Au lieu de :

    Z = x + y

…comme quelque chose entre une insulte à son intelligence et un péché
contre Dieu.

La concision est un endroit où les langages dactylographiés statiquement
perdent. Toutes choses étant égales par ailleurs, personne ne veut
commencer un programme avec un tas de déclarations. Tout ce qui peut
être implicite, devrait l’être. La quantité de boilerplate dans un
programme Java hello-world est presque suffisante pour condamner [^1].

Les jetons individuels doivent également être courts. Perl et Common
Lisp occupent des pôles opposés sur cette question. Les programmes Perl
peuvent être cryptiquement denses, tandis que les noms des opérateurs
Common Lisp intégrés sont comiquement longs. Les concepteurs de Common
Lisp s’attendaient probablement à ce que les utilisateurs aient des
éditeurs de texte qui taperaient ces longs noms pour eux. Mais le coût
d’un nom long n’est pas seulement le coût de sa saisie. Il y a aussi le
coût de sa lecture et le coût de l’espace qu’il occupe sur votre écran.

**Hackability**

Il y a une chose plus importante que la concision pour un hacker : être
capable de faire ce que vous voulez. Dans l’histoire des langages de
programmation, un effort surprenant a été consacré à empêcher les
programmeurs de faire des choses considérées comme inappropriées. C’est
un plan dangereusement présomptueux. Comment le concepteur de langage
peut-il savoir ce que le programmeur devra faire ? Je pense que les
concepteurs de langages feraient mieux de considérer leur utilisateur
cible comme un génie qui aura besoin de faire des choses qu’ils
n’avaient jamais prévues, plutôt qu’un bouffon qui a besoin d’être
protégé de lui-même. Le bumbler se tirerait dans le pied de toute façon.
Vous pouvez l’éviter de se référer à des variables dans un autre module,
mais vous ne pouvez pas l’éviter d’écrire un programme mal conçu pour
résoudre le mauvais problème, et de prendre une éternité pour le faire.

Les bons programmeurs veulent souvent faire des choses dangereuses et
peu recommandables. Par désagréable, je veux dire des choses qui vont
derrière n’importe quelle façade sémantique que le langage essaie de
présenter : s’accrocher à la représentation interne d’une certaine
abstraction de haut niveau, par exemple. Les hackers aiment hacker, et
le bidouillage signifie entrer dans les choses et deviner le concepteur
original.

Laissez-vous deviner. Lorsque vous fabriquez un outil, les gens
l’utilisent d’une manière que vous n’aviez pas l’intention de faire, et
c’est particulièrement vrai pour un outil très articulé comme un langage
de programmation. Beaucoup de hackers voudront modifier votre modèle
sémantique d’une manière que vous n’auriez jamais imaginée. Je dis,
laissez-les. Donnez au programmeur l’accès à autant de choses internes
que possible.

Un hacker ne peut vouloir subvertir le modèle prévu des choses qu’une ou
deux fois dans un grand programme. Mais quelle différence cela fait
d’être capable de le faire. Et il peut s’agir peut-être plus qu’une
question de résolution d’un problème. Il y a une sorte de plaisir ici
aussi. Les hackers partagent le plaisir secret du chirurgien à fouiller
dans les entrailles grossières, le plaisir secret de l’adolescent à
faire éclater des boutons [^2] Pour les garçons, au moins, ce genre
d’horreurs est fascinant. Le magazine Maxim publie un volume annuel de
photographies, contenant un mélange de pin-ups et d’accidents macabres.
Ils connaissent leur public.

Un très bon langage devrait être à la fois propre et sale : proprement
conçu, avec un petit noyau d’opérateurs bien compris et hautement
orthogonal, mais sale dans le sens qu’il permet aux hackers de s’y
frayer. C est comme ça. Il en était de plus que les premiers Lisps. Le
langage d’un vrai hacker aura toujours un caractère légèrement
rafistolé.

Un bon langage de programmation devrait avoir des fonctionnalités qui
font que le genre de personnes qui utilisent l’expression “ingénierie
logicielle” secouent la tête avec désapprobation. À l’autre extrémité du
continuum se trouvent des langages comme Pascal, des modèles de
bienséance qui sont bons pour l’enseignement et pas grand-chose d’autre.

**Programmes jetables**

Pour être attrayant pour les hackers, un langage doit être bon pour
écrire les types de programmes qu’ils veulent écrire. Et cela signifie,
de manière surprenante, que cela doit être bon pour écrire des
programmes jetables.

Un programme jetable est un programme que vous écrivez rapidement pour
une tâche limitée : un programme pour automatiser une tâche
d’administration du système, ou pour générer des données de test pour
une simulation, ou pour convertir des données d’un format à un autre. Ce
qui est surprenant avec les programmes jetables, c’est que, comme les
bâtiments « temporaires » construits dans tant d’universités américaines
pendant la Seconde Guerre mondiale, ils ne sont souvent pas jetés.
Beaucoup évoluent vers de vrais programmes, avec de vraies
fonctionnalités et de vrais utilisateurs.

J’ai l’impression que les meilleurs grands programmes commencent la vie
de cette façon, plutôt que d’être conçus en grand dès le début, comme le
barrage Hoover. C’est terrifiant de construire quelque chose de grand à
partir de zéro. Lorsque les gens entreprennent un projet trop important,
ils deviennent vite dépassés. Soit le projet s’enlise, soit le résultat
est stérile et en bois : un centre commercial plutôt qu’un vrai
centre-ville, Brasilia plutôt que Rome, Ada plutôt que C. Une autre
façon d’obtenir un grand programme est de commencer par un programme
jetable et de continuer à l’améliorer. Cette approche est moins
intimidante, et la conception du programme bénéficie de l’évolution. Les
programmes qui ont évolué de cette façon sont probablement encore écrits
dans n’importe quelle langue dans laquelle ils ont été écrits pour la
première fois, car il est rare qu’un programme soit porté, sauf pour des
raisons politiques. Et donc, paradoxalement, si vous voulez faire un
langage qui est utilisé pour les grands systèmes, vous devez le rendre
bon pour écrire des programmes jetables, parce que c’est de là que
viennent les grands systèmes.

Perl est un exemple frappant de cette idée. Il n’était pas seulement
conçu pour écrire des programmes jetables, mais c’était à peu près un
programme jetable lui-même. Perl a commencé sa vie comme une collection
d’utilitaires pour la génération de rapports, et n’a évolué pour devenir
un langage de programmation qu’au fur et à mesure que les programmes
jetables que les gens y ont écrits s’agrandissaient. Ce n’était pas
avant Perl 5 (si alors) que le langage était approprié pour écrire des
programmes sérieux, et pourtant il était déjà très populaire.

Qu’est-ce qui rend un langage bon pour les programmes jetables ? Pour
commencer, il doit être facilement disponible. Un programme jetable est
quelque chose que vous vous attendez à écrire dans une heure. Le langage
doit donc probablement déjà être installé sur l’ordinateur que vous
utilisez. Ce ne peut pas être quelque chose que vous devez installer
avant de l’utiliser. Il doit être là. C était là parce qu’il était venu
avec le système d’exploitation. Perl était là parce qu’il s’agissait à
l’origine d’un outil pour les administrateurs système, et le vôtre
l’avait déjà installé.

Être disponible signifie plus que d’être installé, cependant. Un langage
interactif, avec une interface en ligne de commande, est plus disponible
qu’un langage que vous devez compiler et exécuter séparément. Un langage
de programmation populaire doit être interactif et démarrer rapidement.

Une autre chose que vous voulez dans un programme jetable est la
concision. C’est toujours attrayant pour les hackers, et jamais plus que
dans un programme qu’ils s’attendent à sortir en une heure.

**Bibliothèques**

Bien sûr, le summum de la concision est d’avoir le programme prêt à
l’emploi écrit pour vous, et simplement de l’appeler. Et cela nous amène
à ce qui, je pense, sera une caractéristique de plus en plus importante
de la programmation des langues : les bibliothèques. Perl gagne parce
qu’il a de grandes bibliothèques pour manipuler les cordes. Cette classe
de fonction de bibliothèque est particulièrement importante pour les
programmes jetables, qui sont souvent écrits à l’origine pour convertir
ou extraire des données. De nombreux programmes Perl commencent
probablement par quelques appels de bibliothèque collés.

Je pense que beaucoup des progrès qui se produiront dans les langages de
programmation au cours des cinquante prochaines années auront à voir
avec les fonctions de bibliothèque. Je pense que les futurs langages de
programmation auront des bibliothèques aussi soigneusement conçues que
le langage de base. La conception du langage de programmation ne
concernera pas la question de savoir s’il faut rendre votre langage typé
statiquement ou dynamiquement, ou orienté objet, ou fonctionnel, ou quoi
que ce soit, autant que sur la façon de concevoir de grandes
bibliothèques. Le genre de concepteurs de langage qui aiment réfléchir à
la façon de concevoir des systèmes de type peut frissonner à ce sujet.
C’est presque comme écrire des applications ! Eh bien, tant pis. Les
langages sont pour les programmeurs, et les bibliothèques sont ce dont
les programmeurs ont besoin.

Il est difficile de concevoir de bonnes bibliothèques. Il ne s’agit pas
simplement d’écrire beaucoup de code. Une fois que les bibliothèques
sont trop grandes, il peut parfois prendre plus de temps pour trouver la
fonction dont vous avez besoin que de l’écrire vous-même. Les
bibliothèques doivent être conçues à l’aide d’un petit ensemble
d’opérateurs orthogonaux, tout comme le langage de base. Il devrait être
possible pour le programmeur de deviner quel appel de bibliothèque fera
ce dont il a besoin.

**Efficacité**

Un bon langage, comme tout le monde le sait, devrait générer un code
rapide. Mais en pratique, je ne pense pas que le code rapide provienne
principalement de choses que vous faites dans la conception du langage.
Comme Knuth l’a souligné il y a longtemps, la vitesse n’a d’importance
que dans certains goulots d’étranglement critiques. Et comme de nombreux
programmeurs l’ont observé depuis, on se trompe souvent sur l’endroit où
se trouvent ces goulots d’étranglement.

Donc, en pratique, la façon d’obtenir du code rapide est d’avoir un bon
profileur, plutôt que, par exemple, de faire taper la langue
statiquement. Vous n’avez pas besoin de connaître le type de chaque
argument dans chaque appel du programme. Vous devez être en mesure de
déclarer les types d’arguments dans les goulots d’étranglement. Et plus
encore, vous devez être en mesure de savoir où se trouvent les goulots
d’étranglement.

Une plainte que les gens ont eue avec des langages de très haut niveau
comme Lisp est qu’il est difficile de dire ce qui est cher. C’est
peut-être vrai. Cela pourrait également être inévitable, si vous voulez
avoir un langage très abstrait. Et dans tous les cas, je pense qu’un bon
profilage contribuerait grandement à résoudre le problème : vous
apprendriez bientôt ce qui était cher.

Une partie du problème ici est sociale. Les concepteurs de langages
aiment écrire des compilateurs rapides. C’est ainsi qu’ils mesurent
leurs compétences. Ils considèrent le profileur comme un add-on, au
mieux. Mais en pratique, un bon profileur peut faire plus pour améliorer
la vitesse des programmes réels écrits dans le langage qu’un compilateur
qui génère du code rapide. Ici, encore une fois, les concepteurs de
langages sont quelque peu déconnectés de leurs utilisateurs. Ils font un
très bon travail pour résoudre légèrement le mauvais problème.

Ce pourrait être une bonne idée d’avoir un profileur actif - pour
pousser les données de formation au programmeur au lieu d’attendre qu’il
le demande. Par exemple, l’éditeur pourrait afficher les goulots
d’étranglement en rouge lorsque le programmeur modifie le code source.
Une autre approche serait de représenter d’une manière ou d’une autre ce
qui se passe dans la gestion des programmes. Ce serait une victoire
particulièrement importante dans les applications basées sur serveur, où
vous avez beaucoup de programmes en cours d’exécution à regarder. Un
profileur actif pourrait montrer graphiquement ce qui se passe dans la
mémoire pendant l’exécution d’un programme, ou même émettre des sons qui
indiquent ce qui se passe.

Le son est un bon indice pour les problèmes. Chez Viaweb, nous avions un
grand tableau de cadrans montrant ce qui arrivait à nos serveurs web.
Les mains étaient déplacées par de petits servomoteurs qui faisaient un
léger bruit lorsqu’ils tournaient. Je ne pouvais pas voir le tableau
depuis mon bureau, mais j’ai constaté que je pouvais dire immédiatement,
par le son, quand il y avait un problème avec un serveur.

Il pourrait même être possible d’écrire un profileur qui détecterait
automatiquement les algorithmes inefficaces. Je ne serais pas surpris si
certains schémas d’accès à la mémoire s’avéraient être des signes sûrs
de mauvais algorithmes. S’il y avait un petit gars qui courait à
l’intérieur de l’ordinateur pour exécuter nos programmes, il aurait
probablement une histoire aussi longue et plaintive à raconter sur son
travail en tant qu’employé du gouvernement fédéral. J’ai souvent
l’impression d’envoyer le processeur sur beaucoup de poursuites d’oies
sauvages, mais je n’ai jamais eu un bon moyen de regarder ce qu’il fait.

Un certain nombre de langages se compilent maintenant en code d’octets,
qui est ensuite exécuté par un interpréteur. Ceci est généralement fait
pour faciliter le portage de l’implémentation, mais cela pourrait être
une fonctionnalité de langage utile. Ce pourrait être une bonne idée de
faire du code octet une partie officielle du langage et de permettre aux
programmeurs d’utiliser l’octet en ligne code dans les goulots
d’étranglement. Alors de telles optimisations seraient également
portables.

La nature de la vitesse, perçue par l’utilisateur final, peut changer.
Avec l’essor des applications basées sur serveur, de plus en plus de
programmes peuvent s’être liés aux Entrées/Sorties. Cela vaudra la peine
de faire des E/S rapidement. Le langage peut aider avec des tâches
simples comme des fonctions de sortie simples, rapides et formatées,
ainsi qu’avec des changements structurels profonds comme la mise en
cache et les objets persistants.

Les utilisateurs sont intéressés par le temps de réponse. Mais un autre
type d’efficacité sera de plus en plus important : le nombre
d’utilisateurs simultanés que vous pouvez prendre en charge par
processeur. Bon nombre des applications d’intérêt écrites à l’avenir
seront basées sur un serveur, et le nombre d’utilisateurs par serveur
est la question critique pour quiconque héberge de telles applications.
Dans le coût en capital d’une entreprise offrant une application sur
serveur, il s’agit du diviseur.

Pendant des années, l’efficacité n’a pas beaucoup d’importance dans la
plupart des applications des utilisateurs finaux. Les développeurs ont
pu supposer que les utilisateurs auraient des processeurs de plus en
plus rapides assis sur leur bureau. Et la loi de Parkinson s’est avérée
aussi puissante que la loi de Moore. Les logiciels se sont gonflés pour
consommer les ressources disponibles. Cela changera avec les
applications basées sur le serveur, car le matériel et les logiciels
seront fournis ensemble. Pour les entreprises qui proposent des
applications basées sur un serveur, le nombre d’utilisateurs qu’elles
peuvent prendre en charge par serveur fera une grande différence.

Dans certaines applications, le processeur sera le facteur limitant, et
la vitesse d’exécution sera la chose la plus importante à optimiser.
Mais souvent, la mémoire sera la limite ; le nombre d’utilisateurs
simultanés sera déterminé par la quantité de mémoire dont vous avez
besoin pour les données de chaque utilisateur. La langue peut aussi
aider ici. Une bonne prise en charge des threads permettra à tous les
utilisateurs de partager un seul tas. Il peut également être utile
d’avoir des objets persistants et/ou une prise en charge au niveau du
langage pour le chargement paresseux.

**Temps**

Le dernier ingrédient dont un langage populaire a besoin est le temps.
Personne ne veut écrire des programmes dans un langage qui pourrait
disparaître, comme le font tant de langages de programmation. Ainsi, la
plupart des hackers auront tendance à attendre qu’un langage existe
depuis quelques années avant même de l’envisager.

Les inventeurs de nouvelles choses merveilleuses sont souvent surpris de
couvrir cela, mais vous avez besoin de temps pour faire passer n’importe
quel message aux gens. Un de mes amis fait rarement quoi que ce soit la
première fois que quelqu’un lui demande. Il sait que les gens demandent
parfois des choses qu’ils ne veulent pas. Pour éviter de perdre son
temps, il attend la troisième ou la quatrième fois qu’on lui demande de
faire quelque chose. D’ici là, celui qui lui demande peut être assez
ennuyé, mais au moins, ils veulent probablement vraiment tout ce qu’ils
demandent.

La plupart des gens ont appris à faire une sorte de filtrage similaire
sur les nouvelles choses dont ils entendent parler. Ils ne commencent
même pas à faire attention tant qu’ils n’ont pas entendu parler de
quelque chose dix fois. Ils sont parfaitement justifiés : la majorité
des nouveaux projets en vogue s’avèrent être une perte de temps et
finissent par disparaître. En retardant l’apprentissage du VRML, j’ai
évité d’avoir à l’apprendre du tout.

Donc, toute personne qui invente quelque chose de nouveau doit
s’attendre à répéter son message pendant des années avant que les gens
ne commencent à le recevoir. Il nous a fallu des années pour faire
passer aux gens que le logiciel de Viaweb n’avait pas besoin d’être
téléchargé. La bonne nouvelle, c’est qu’une simple répétition résout le
problème. Tout ce que vous avez à faire est de continuer à raconter
votre histoire, et finalement les gens commenceront à l’entendre. Ce
n’est pas quand les gens remarquent que vous êtes là qu’ils font
attention ; c’est quand ils remarquent que vous êtes toujours là.

C’est tout aussi bien qu’il faut généralement un certain temps pour
gagner du temps. La plupart des technologies évoluent beaucoup même
après leur premier lancement, en particulier les langages de
programmation. Rien ne pourrait être mieux pour une nouvelle technologie
que quelques années d’utilisation seulement par un petit nombre de
premiers utilisateurs. Les premiers utilisateurs sont sophistiqués et
exigeants, et effacent rapidement tous les défauts qui subsistent dans
votre technologie. Lorsque vous n’avez que quelques utilisateurs, vous
pouvez être en contact étroit avec chacun d’entre eux. Et les premiers
utilisateurs pardonnent lorsque vous améliorez votre système, même si
cela provoque une certaine casse.

Il y a deux façons d’introduire une nouvelle technologie : la méthode de
croissance ganique et la méthode du big bang. La méthode de croissance
organique est illustrée par la start-up de garage classique non financée
par le siège du pantalon. Quelques gars, travaillant dans l’obscurité,
développent de nouvelles technologies. Ils le lancent sans marketing et
n’ont initialement que quelques utilisateurs (fanatiquement dévoués).
Ils ont pour but d’améliorer la technologie, et pendant ce temps, leur
base d’utilisateurs grandit par le bouche à oreille. Avant qu’ils ne
s’en rendent compte, ils sont grands.

L’autre approche, la méthode du big bang, est illustrée par la start-up
fortement commercialisée soutenue par le capital-risque. Ils se
précipitent pour développer un produit, le lancer avec beaucoup de
publicité, et immédiatement (ils ont espoir) avoir une grande base
d’utilisateurs.

En général, les gars du garage envient les gars du big bang. Les grand
big bang guys sont lisses et confiants et respectés par les VCs. Ils
peuvent se permettre le meilleur de tout, et la campagne de relations
publiques qui arrondit le lancement a pour effet secondaire de les
rendre célèbres. Les gars de la croissance organique, assis dans leur
garage, se sentent pauvres et mal aimés. Et pourtant, je pense qu’ils se
trompent souvent de se sentir désolés pour eux-mêmes. La croissance
organique semble produire une meilleure technologie et des fondateurs
plus riches que la méthode du big bang. Si vous regardez les
technologies dominantes aujourd’hui, vous constaterez que la plupart
d’entre elles ont grandi de manière organique.

Ce modèle ne s’applique pas seulement aux entreprises. Vous le voyez
aussi dans la recherche. Multics et Ada étaient des projets big-bang, et
Unix et C étaient des projets de croissance organique.

**Transformer**

« La meilleure écriture est la réécriture », a écrit E. B. Blanc. Tous
les bons écrivains le savent, et c’est vrai aussi pour les logiciels. La
partie la plus importante du design est la refonte. Les langages de
programmation, en particulier, ne sont pas assez repensés.

Pour écrire de bons logiciels, vous devez garder simultanément deux
idées d’opinion dans votre tête. Vous avez besoin de la foi naïve du
jeune hacker en ses capacités, et en même temps le scepticisme du
vétéran. Vous devez être capable de penser à quel point cela peut être
difficile ? Avec une moitié de votre cerveau tout en pensant que cela ne
fonctionnera jamais avec l’autre.

L’astuce est de réaliser qu’il n’y a pas de véritable contradiction ici.
Vous voulez être optimiste et sceptique à propos de deux choses
différentes. Vous devez être optimiste quant à la possibilité de
résoudre le problème, mais sceptique quant à la valeur de la solution
que vous avez jusqu’à présent.

Les gens qui font du bon travail pensent souvent que tout ce sur quoi
ils travaillent n’est pas bon. D’autres voient ce qu’ils ont fait et
pensent que c’est merveilleux, mais le créateur ne voit que des défauts.
Ce modèle n’est pas une coïncidence : l’inquiétude a rendu le travail
bon.

Si vous pouvez garder l’espoir et l’inquiétude équilibrés, ils feront
avancer un projet de la même manière que vos deux jambes font avancer un
vélo. Dans la première phase du moteur d’innovation à deux cycles, vous
travaillez furieusement sur un problème, inspiré par votre confiance que
vous serez en mesure de le résoudre. Dans la deuxième phase, vous
regardez ce que vous avez fait à la lumière froide du matin et vous
voyez très clairement tous ses défauts. Mais tant que votre esprit
critique ne l’emporte pas sur votre espoir, vous serez en mesure de
regarder votre système certes incomplet et de penser, à quel point
peut-il être difficile d’obtenir le reste du chemin ?

Il est difficile de garder les deux forces équilibrées. Chez les jeunes
hackers, l’optimisme prédomine. Ils produisent quelque chose, sont
convaincus que c’est génial et ne l’améliorent jamais. Chez les vieux
hackers, le scepticisme prédomine, et ils n’oseraient même pas se lancer
dans des projets ambitieux.

Tout ce que vous pouvez faire pour maintenir le cycle de refonte est
bon. La prose peut être réécrite encore et encore jusqu’à ce que vous en
soyez satisfait. Mais les logiciels, en règle générale, ne sont pas
assez redessinés. La prose a des lecteurs, mais les logiciels ont des
utilisateurs. Si un écrivain réécrit un essai, il est peu probable que
les personnes qui lisent la nouvelle version se plaignent que leurs
pensées ont été brisées par une incompatible nouvellement introduite.

Les utilisateurs sont une épée à double tranchant. Ils peuvent vous
aider à améliorer votre langage, mais ils peuvent aussi vous dissuader
de l’améliorer. Choisissez donc vos utilisateurs avec soin et soyez lent
à augmenter leur nombre. Avoir des utilisateurs, c’est comme
l’optimisation : le plus sage consiste à retarder l’échéance.

De plus, en règle générale, vous pouvez à tout moment vous en tirer en
changeant plus que vous ne le pensez. Introduire le changement, c’est
comme retirer un pansement : la douleur est un souvenir presque dès que
vous la ressentez.

Tout le monde sait que ce n’est pas une bonne idée de faire signer un
langage par un comité. Les comités produisent une mauvaise conception.
Mais je pense que le pire danger des comités est qu’ils interfèrent avec
la refonte. Il y a tellement de travail à introduire des changements que
personne ne veut déranger. Tout ce qu’un comité décide a tendance à
rester ainsi, même si la plupart des membres ne l’aiment pas.

Même un comité de deux personnes fait obstacle à la refonte. Cela se
produit en particulier dans les interfaces entre les logiciels écrits
par deux personnes différentes. Pour changer l’interface, les deux
doivent accepter de la changer en même temps. Et donc, les interfaces
ont tendance à ne pas changer du tout, ce qui est un problème parce
qu’elles ont tendance à être l’une des parties les plus ad hoc de tout
système.

Une solution ici pourrait être de concevoir des systèmes de sorte que
les interfaces soient horizontales au lieu de verticales - de sorte que
les modules soient toujours des strates d’abstraction statiquement
empilées. Ensuite, l’interface aura tendance à appartenir à l’un d’eux.
Le niveau inférieur de deux niveaux sera soit un langage dans lequel le
niveau supérieur est écrit, auquel cas le niveau inférieur sera
propriétaire de l’interface, soit un esclave, auquel cas l’interface
peut être dictée par le niveau supérieur.

**Le langage des rêves**

En résumé, essayons de décrire le langage de rêve du hacker. Le langage
des rêves est propre et laconique. Il a un niveau supérieur interactif
qui démarre rapidement [^3]. Vous pouvez écrire des programmes pour
résoudre des problèmes avec très peu de code. Presque tout le code de
tout programme que vous écrivez est un code spécifique à votre
application. Tout le reste a été fait pour vous.

La syntaxe du langage est bref à un défaut. Vous n’avez jamais besoin de
taper un caractère inutile, ni même d’utiliser beaucoup la touche Maj.
En utilisant de grandes abstractions, vous pouvez écrire la première
version d’un programme très rapidement. Plus tard, lorsque vous voulez
optimiser, il y a un très bon profileur qui vous indiquera où concentrer
votre attention.

Vous pouvez faire des boucles internes aveuglément rapidement, même en
écrivant du code d’octets en ligne si vous en avez besoin.

Il y a beaucoup de bons exemples à apprendre, et le langage est
suffisamment intuitif pour que vous puissiez apprendre à l’utiliser à
partir d’exemples en quelques minutes. Vous n’avez pas besoin de
regarder beaucoup dans le manuel. Le manuel est mince et comporte peu
d’avertissements et de qualifications.

Le langage a un petit noyau et des bibliothèques puissantes et hautement
orthogonales qui sont aussi soigneusement conçues que le langage de
base. Les bibliothèques fonctionnent toutes bien ensemble ; tout dans le
langage s’emboîte comme les pièces d’un bel appareil photo. Rien n’est
obsolète ou conservé pour des raisons de compatibilité. Le code source
de toutes les bibliothèques est facilement disponible. Il est facile de
parler au système d’exploitation et aux applications écrites dans
d’autres langages.

Le langage est construit en couches. Les abstractions de niveau
supérieur sont construites de manière transparente à partir des
abstractions de niveau inférieur, que vous pouvez obtenir si vous le
souhaitez.

Rien ne vous est caché qui ne soit pas absolument nécessaire. Le langage
n’offre des abstractions que comme un moyen de vous sauver du travail,
plutôt que comme un moyen de vous dire quoi faire. En fait, le langage
vous encourage à participer de manière égale à sa conception. Vous
pouvez tout changer à son sujet, y compris sa syntaxe, et tout ce que
vous écrivez a, autant que possible, le même statut que ce qui est
prédéfini. Le langage de rêve n’est pas seulement l’open source, mais le
design ouvert.

[^1]: Un programme hello-world est un programme qui ne fait rien d'autre que d'imprimer les mots « Bonjour, monde ! » En Java, vous écrirez :

    ```java
    public class Hello {
      public static void main(String[] args) {
        System.out.println("Hello, world!");
      }
    }
    ```

    Quelqu'un qui n'a jamais écrit de programme regarde probablement cela et se demande, pourquoi avez-vous besoin d'en dire autant pour que l'ordinateur imprime un message ? Curieusement, la réaction des programmeurs expérimentés est identique.

[^2]: Dans When the Air Hits Your Brain, le neurochirurgien Frank Vertosick raconte une conversation dans laquelle son résident en chef, Gary, parle de la différence entre les chirurgiens et les internes (« puces ») :

    > Gary et moi avons commandé une grande pizza et avons trouvé un stand ouvert. Le chef a allumé une cigarette. « Regardez ces putains de puces, bavardant à propos d'une maladie qu'ils verront une fois dans leur vie. C'est le problème avec les puces, elles n'aiment que les choses bizarres. Ils détestent leurs caisses de pain et de beurre. C'est la différence entre nous et les putains de puces. Vous voyez, nous aimons les grandes hernies discales lombaires juteuses, mais ils détestent l'hypertension. . . .

    Il est difficile de penser qu'une hernie discale lombaire est juteuse (sauf littéralement). Mais je pense que je sais ce qu'ils veulent dire. J'ai souvent eu un insecte juteux à traquer. Certains qui ne sont pas programmeurs auraient du mal à imaginer qu'il pourrait y avoir du plaisir dans un bug. C'est sûrement mieux si tout fonctionne. Et pourtant, il y a indéniablement une sombre satisfaction à traquer certaines sortes de bugs.

[^3]: Fritz Kunze est le président du principal fournisseur commercial de Lisp. Sa biographie se lit comme suit :

    > Fritz Kunze, président, a cofinancé Franz Inc. en 1984. Franz est le leader mondial
    > en matière de fourniture de systèmes CLOS et de systèmes de stockage persistant CLOS. De plus Franz a défini et popularisé la catégorie
    > Langages de programmation Dynamiques Orientés Objets. Avant Franz, Fritz était étudiant diplômé en
    > mathématiques et informatique à l'Université de Californie à Berkeley.
    > Il est titulaire d'un M.S. en mathématiques de l'Université de Californie à Berkeley

    Fritz croit évidemment qu'il fera mieux en disant que Franz propose quelque chose dont les gens n'ont jamais entendu parler qu'en disant qu'ils proposent Lisp. Il a probablement raison, en ce qui concerne le marché cible de Franz.
