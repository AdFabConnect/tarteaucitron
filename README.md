# tarteaucitron.js


## Utilisation de la librairie

- Récupération de la librairie via GitHub : [tarteaucitron.js](https://github.com/AmauriC/tarteaucitron.js)
- Ajout de la librairie dans le projet (ne pas la concaténer / uglifier)


## Initialisation

```html
<script type="text/javascript">
    tarteaucitron.init({
        "hashtag": "#tarteaucitron", /* Ouverture automatique du panel avec le hashtag */
        "highPrivacy": false, /* désactiver le consentement implicite (en naviguant) ? */
        "orientation": "bottom", /* le bandeau doit être en haut (top) ou en bas (bottom) ? */
        "adblocker": false, /* Afficher un message si un adblocker est détecté */
        "showAlertSmall": true, /* afficher le petit bandeau en bas à droite ? */
        "cookieslist": true, /* Afficher la liste des cookies installés ? */
        "removeCredit": false, /* supprimer le lien vers la source ? */
        "handleBrowserDNTRequest": false, /* Deny everything if DNT is on */
        //"cookieDomain": ".example.com" /* Nom de domaine sur lequel sera posé le cookie pour les sous-domaines */
    });
</script>
```


## Ajout d'un service

- Des services sont déjà disponibles de base avec la librairie, ils sont listés à cette adresse (étape 3) : [tarteaucitron.js services](https://opt-out.ferank.eu/fr/install/)

- Après l'initialisation de la librairie, ajouter le `job` correspondant au service pour l'ajouter au site (pour certains services, ajouter un bout de code pour afficher le service à cet emplacement).


## Création d'un service custom

- Pour ajouter un service encore inexistant, il suffit de modifier le fichier `tarteaucitron.service.js` (voir l'exemple présent sur le repository).

- Ajout du `job` correspondant à ce nouveau service.

- (Optionnel) Ajout du bout de code permettant l'ajout du service à l'endroit souhaité.


## Exemple

Dans le morceau de code présent, la partie `"js": function () {...}` permet d'executer ce code lorsque le `job` (ici `juicer`) est appelé; on créer un fallback lorsque la librairie trouver un élément avec la class `juicer` et executera le code présent dans la fonction, ici l'affichage du Feed.

Il est aussi possible de passer des paramètres sur le morceau de code à ajouter dans le html (qui sera remplacé, exemple dans index.hmtl)
Le paramètre `data-user-id` est repris dans le service afin d'instancier celui-ci avec les bonnes informations.