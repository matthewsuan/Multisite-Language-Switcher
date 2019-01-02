/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "62be3222ac82ed7ec37625ce78810f69"
  },
  {
    "url": "advanced-settings.png",
    "revision": "a9bbfb730315784ab305f5ae4b86dc06"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.AttachmentPathFinder.html",
    "revision": "b495055d69eece40dd6c5d0a6d8ceb7d"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.ContentImporter.html",
    "revision": "74416895ae7561e62eb192780332bd5e"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.ImportCoordinates.html",
    "revision": "51b77450b55d53fc4a9bc59e8d395b62"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Attachments.Linking.html",
    "revision": "2921deea612b1f4adcb41b731cd14916"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.AttachmentsImporters.html",
    "revision": "f14c03882becb3ab366c01ed3bd8edc5"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.BaseImporter.html",
    "revision": "8cbe9c8ee84de3dd06c7b746a2bfad7d"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Importer.html",
    "revision": "822a333580676c4761c5f6ea867dc6fb"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.ImportersBaseFactory.html",
    "revision": "491fcab74eec2226801ae9c21959f860"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.ImportersFactory.html",
    "revision": "94014d4b1f606038efe96b81bcb42f05"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Map.html",
    "revision": "caec98f98c7922bd80f4537237fdddda"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostFields.Duplicating.html",
    "revision": "a9d5ffbdf68e17eaba22cc3ff547d59a"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostFieldsImporters.html",
    "revision": "42352a4755de97f67689648ab01d0edc"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostMeta.Duplicating.html",
    "revision": "58ce78d8f065ff0be5f1f74ab79cbb01"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostMetaImporters.html",
    "revision": "7d7be3531311bb3b3eed34a7624449aa"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostThumbnail.Linking.html",
    "revision": "2293c90a25fd1403e947ef9e9de53fcd"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostThumbnailImporters.html",
    "revision": "97824c0a0acc9aeb95a59e7254d97110"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Terms.ShallowDuplicating.html",
    "revision": "cfdf00a60613e9c69452dcf9dcb7dee0"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.TermsImporters.html",
    "revision": "7216006eda0b3909e3e52cf3e14cab28"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.ImportLogger.html",
    "revision": "0844f19865fff9cda8c62ec84d8c6b62"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.LogWriters.AdminNoticeLogger.html",
    "revision": "6851c4ac11b9b1f3ec22199c4a6f9606"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.LogWriters.LogWriter.html",
    "revision": "73c95bfe3f37aa08352d9f18e81f5d68"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.MetaBox.html",
    "revision": "297248468a2eb8953cae1b817f231803"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Relations.html",
    "revision": "e13ab95dcb57dee96b602ecca2fb9ebb"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Service.html",
    "revision": "99df7177227a1f927120948efe35dab7"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsAdmin.html",
    "revision": "d4a96ae23558e12af176cfc16698a1de"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsAdminIcon.html",
    "revision": "638b75e18cb7aea0bdaf098d7bfe4ddc"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsAdminIconTaxonomy.html",
    "revision": "b3f7ff5708074f4c74dca135a1d6d2b8"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsBlog.html",
    "revision": "1f5eb271b23d39aaebeb221500ae0420"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsBlogCollection.html",
    "revision": "4f32e931de859b43950bc763fc71d15a"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsContentTypes.html",
    "revision": "b32ca08faf034c25030dcc70e3496bf8"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsCustomColumn.html",
    "revision": "ac8f092fcc6b97b1d9cadf96ddb99363"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsCustomColumnTaxonomy.html",
    "revision": "2d1a59323c41083d803a4aacd3344e27"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsCustomFilter.html",
    "revision": "c027dad7629bcee9bab2e08a2800b365"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsGetSet.html",
    "revision": "750c6f7d9941d3c8aa311270b4cbe53a"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsJson.html",
    "revision": "7cbcfea5d8fcbd430d4f9b98f601ff7c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLanguageArray.html",
    "revision": "f761b3d764bc96934e5d5b685b0f614c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLink.html",
    "revision": "456e77d8ef4a6b50f43543f28e7faf6f"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLinkImageOnly.html",
    "revision": "1c817d38ce38621f4b7c6413cad8431b"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLinkTextImage.html",
    "revision": "e310bcffe28d1bc5479eb9e980635dda"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLinkTextOnly.html",
    "revision": "df7acb9869e6f5e5464b14d6319109e4"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsMain.html",
    "revision": "318683123c78c6827b60dab5f0ce2ff1"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsMetaBox.html",
    "revision": "8b4e50766b8f2022657dd528bc7194e6"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptions.html",
    "revision": "57a0b0617b183a7c5c5fdc3bf583dc47"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsPost.html",
    "revision": "5489530921ba8e4a7e41ee12da81e108"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQuery.html",
    "revision": "839f240076b9433fe161b7dc8131a936"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryAuthor.html",
    "revision": "4e5bc638f7a1187c3b2cd295207e8551"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryDay.html",
    "revision": "e1a482ae794a9db26f30e30fed3be541"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryMonth.html",
    "revision": "f5c66b049ec552c17d364cd6e80fbb25"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryPostType.html",
    "revision": "2451b3338031e7c082db58e34ea0ebf6"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryYear.html",
    "revision": "667687fae23103a337efc66e411688f7"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsTax.html",
    "revision": "6954eb8d2f0581235b0d23e85d53728c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsTaxTerm.html",
    "revision": "221904289a5089f12af1dfd97f501227"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsTaxTermCategory.html",
    "revision": "b6068df306a73446b99d17787649fbe5"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOutput.html",
    "revision": "ab843c0c62892265db5df50cbb9e7d85"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPlugin.html",
    "revision": "d97b15de3727f876db16f665d544aaed"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPostTag.html",
    "revision": "436bbe3b30a51a71880ca1b2dc49ace8"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPostTagClassic.html",
    "revision": "3b67ef0be6b8642cf4307908db9bde35"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPostType.html",
    "revision": "f469e931a59b35093e7a16b91c38cced"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsRegistry.html",
    "revision": "b2b01f1dcb9150486588a3457c5c7986"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsRegistryInstance.html",
    "revision": "a003f319d83b13d073d81aa9a39a3ca6"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsSqlCacher.html",
    "revision": "f65bb1bb5e1b83670d0f375a92e7fcb0"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsTaxonomy.html",
    "revision": "db8575aa8b71e820c2182a9e23000e33"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsWidget.html",
    "revision": "bf60bd0f4b6cf4c5cfa2aaa22ea6ea68"
  },
  {
    "url": "api-documentation/css/bootstrap-combined.no-icons.min.css",
    "revision": "3f13279317ad7da1178553ff245ab56d"
  },
  {
    "url": "api-documentation/css/font-awesome.min.css",
    "revision": "7fbe76cdac6093784895bb4989203e5a"
  },
  {
    "url": "api-documentation/css/jquery.iviewer.css",
    "revision": "d20200e0756e987d27f500e3bdfbf9ce"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.dev.svg",
    "revision": "ed8e764380d8299157971ca67649cb18"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.eot",
    "revision": "da18d5fd73abdf146f8c87456036816c"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.svg",
    "revision": "777ef8255044405de75d1e3737aaee21"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.ttf",
    "revision": "71e82562f326128febbd76f851aa98df"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.woff",
    "revision": "e00348037b5d4433d0ecac450c15d22e"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/lte-ie7.js",
    "revision": "ee536c1e7557c04c8d49623c49b37dfa"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/style.css",
    "revision": "821bf9f8aada8f5965b5604cfa70c383"
  },
  {
    "url": "api-documentation/css/prism.css",
    "revision": "3c9bc5860787973d163251bd381b404d"
  },
  {
    "url": "api-documentation/css/template.css",
    "revision": "7465b0a3a1f21a853ace06b5de96b2c1"
  },
  {
    "url": "api-documentation/files/ContentImport.AttachmentPathFinder.html",
    "revision": "4425dc8fd5a3df3aa7cdb327e0ad536a"
  },
  {
    "url": "api-documentation/files/ContentImport.ContentImporter.html",
    "revision": "d9e35a15fbed98254cc87039777a4d62"
  },
  {
    "url": "api-documentation/files/ContentImport.ImportCoordinates.html",
    "revision": "5a1ada7709b0735ccbcc56b678359bb4"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Attachments.Linking.html",
    "revision": "be190bee18b17c262051a0e0d3c6d95f"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.AttachmentsImporters.html",
    "revision": "b9058b9e2c5e7d8beafa46047a32b637"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.BaseImporter.html",
    "revision": "66409911307ffff054a6663502d32278"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Importer.html",
    "revision": "23e2ebee2d68f81038813ca15777d06d"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.ImportersBaseFactory.html",
    "revision": "2dfa08fd4240a6990916b7a6bd423875"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.ImportersFactory.html",
    "revision": "21d0f1948852cee9e0f326b63af8a963"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Map.html",
    "revision": "a839bf2cfeab81db78e7163cb975f4c8"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostFields.Duplicating.html",
    "revision": "eee3dbdee3b6eb6e322e084b960daed6"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostFieldsImporters.html",
    "revision": "2f021848cf542c0f99fef7dcfd8c81fc"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostMeta.Duplicating.html",
    "revision": "ff905cf9bd41eb43fbc4f5d59e345315"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostMetaImporters.html",
    "revision": "a96c4fe0d8027d1606d35f3e11cc479b"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostThumbnail.Linking.html",
    "revision": "1e531d4fe643c77cdf05506778afc17a"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostThumbnailImporters.html",
    "revision": "4ea8d400147320dedfad22defdf88db0"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Terms.ShallowDuplicating.html",
    "revision": "b3b8b2b16513e539e82ae05ce6514bd6"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.TermsImporters.html",
    "revision": "c75e170382bf046498ecaf69fb3c0690"
  },
  {
    "url": "api-documentation/files/ContentImport.ImportLogger.html",
    "revision": "01898329197241ac99b575a5c2f32717"
  },
  {
    "url": "api-documentation/files/ContentImport.LogWriters.AdminNoticeLogger.html",
    "revision": "4b0ea15bc630ee6b2d29c82212f0ae26"
  },
  {
    "url": "api-documentation/files/ContentImport.LogWriters.LogWriter.html",
    "revision": "ccedd196b8cda9dcf7152762d9979d0c"
  },
  {
    "url": "api-documentation/files/ContentImport.MetaBox.html",
    "revision": "620177d7082ebade8395a8ec321164fb"
  },
  {
    "url": "api-documentation/files/ContentImport.Relations.html",
    "revision": "71809bfeb8e7e2cce65c7e1d12411993"
  },
  {
    "url": "api-documentation/files/ContentImport.Service.html",
    "revision": "b10ca0413d04b4a0ab79826e417b79f2"
  },
  {
    "url": "api-documentation/files/index.html",
    "revision": "be50eda651315edaa66198fbcd7c90ee"
  },
  {
    "url": "api-documentation/files/MslsAdmin.html",
    "revision": "236605bebf9ab22f29b03bc16fca716e"
  },
  {
    "url": "api-documentation/files/MslsAdminIcon.html",
    "revision": "cbd27d35ad3c5910dd70e882cc6f2ec6"
  },
  {
    "url": "api-documentation/files/MslsAdminIconTaxonomy.html",
    "revision": "992a3c4e811bc393805cc836524416f5"
  },
  {
    "url": "api-documentation/files/MslsBlog.html",
    "revision": "6c7a98af80cbd62ef9b0890332006f78"
  },
  {
    "url": "api-documentation/files/MslsBlogCollection.html",
    "revision": "e19b991634aac961f642ee62ceed7b04"
  },
  {
    "url": "api-documentation/files/MslsContentTypes.html",
    "revision": "5cba6477fb1bdac2c54e57fb7ba72454"
  },
  {
    "url": "api-documentation/files/MslsCustomColumn.html",
    "revision": "2690c21164fa2570e064abcf2f13e727"
  },
  {
    "url": "api-documentation/files/MslsCustomColumnTaxonomy.html",
    "revision": "3a49516bb5c60d4e0c14ef25ebe6f7d5"
  },
  {
    "url": "api-documentation/files/MslsCustomFilter.html",
    "revision": "2fd2f0d031c52566bc9f810409732e00"
  },
  {
    "url": "api-documentation/files/MslsGetSet.html",
    "revision": "3ca25e7617b7f3b164ba84562e4aad03"
  },
  {
    "url": "api-documentation/files/MslsJson.html",
    "revision": "a35a11714be40406a8091b7f93d547aa"
  },
  {
    "url": "api-documentation/files/MslsLanguageArray.html",
    "revision": "16d32e7b6798d064834f2fc1a8f7dafa"
  },
  {
    "url": "api-documentation/files/MslsLink.html",
    "revision": "1e6e8fcc9ebcf89fcd8df2af78b8a2fd"
  },
  {
    "url": "api-documentation/files/MslsLinkImageOnly.html",
    "revision": "dbc6f02b57e42b370a32539991baa7b5"
  },
  {
    "url": "api-documentation/files/MslsLinkTextImage.html",
    "revision": "cda59b81f1425609868071d08788d840"
  },
  {
    "url": "api-documentation/files/MslsLinkTextOnly.html",
    "revision": "cf324fe37aeacaa3d56f4bf082f90b76"
  },
  {
    "url": "api-documentation/files/MslsMain.html",
    "revision": "4f1e0b7d3f9c51c5753c95fa963178ee"
  },
  {
    "url": "api-documentation/files/MslsMetaBox.html",
    "revision": "dddf6d39d61949faceb80fcc5ccb3a2e"
  },
  {
    "url": "api-documentation/files/MslsOptions.html",
    "revision": "d41e17b17366ebc3d1a9c3e10f2fa02c"
  },
  {
    "url": "api-documentation/files/MslsOptionsPost.html",
    "revision": "a9cdf359848e991f731f2523c2bb7006"
  },
  {
    "url": "api-documentation/files/MslsOptionsQuery.html",
    "revision": "f0cc81b1a1540a4ca884b6129f7104c3"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryAuthor.html",
    "revision": "bcc7794a97ed1ecc0753bd8b4bb56ac7"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryDay.html",
    "revision": "3e83e488362b5639b7a6c337807a4de9"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryMonth.html",
    "revision": "d3d3d4c8f2d3449f6eee956e03e9626a"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryPostType.html",
    "revision": "258a1b018ce1a4f5a4373e2ab3da8b72"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryYear.html",
    "revision": "17cd4cc1b752c526deca80d883225bd8"
  },
  {
    "url": "api-documentation/files/MslsOptionsTax.html",
    "revision": "c3689454937dc3d918e3514a6f727ebb"
  },
  {
    "url": "api-documentation/files/MslsOptionsTaxTerm.html",
    "revision": "c4de4e31378a7329339056fb15453140"
  },
  {
    "url": "api-documentation/files/MslsOptionsTaxTermCategory.html",
    "revision": "4ad37e1c4fcc232832cb4e2afae33761"
  },
  {
    "url": "api-documentation/files/MslsOutput.html",
    "revision": "c849fb16926b2b945c32093a36cb5aa6"
  },
  {
    "url": "api-documentation/files/MslsPlugin.html",
    "revision": "e59e010e4ebfe12b78bfa41d4c140c55"
  },
  {
    "url": "api-documentation/files/MslsPostTag.html",
    "revision": "de126cf80e1994038758124b1280d8c2"
  },
  {
    "url": "api-documentation/files/MslsPostTagClassic.html",
    "revision": "1eca86c2e63d9606827e89db9b885907"
  },
  {
    "url": "api-documentation/files/MslsPostType.html",
    "revision": "5549c188c3500441dd79fd6d96a61948"
  },
  {
    "url": "api-documentation/files/MslsRegistry.html",
    "revision": "c07e95b806a44441d087f090c481a255"
  },
  {
    "url": "api-documentation/files/MslsRegistryInstance.html",
    "revision": "e00f24d1d274d7740a8908a4534b1e6f"
  },
  {
    "url": "api-documentation/files/MslsSqlCacher.html",
    "revision": "73f82cd1890ea4569f0da93863f9f55d"
  },
  {
    "url": "api-documentation/files/MslsTaxonomy.html",
    "revision": "490d79b1e08523cf55ca8179944f98b2"
  },
  {
    "url": "api-documentation/files/MslsWidget.html",
    "revision": "055556c230af3deac78032fc5940822d"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.eot",
    "revision": "90186830c9c50a0fed932494581761d9"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.svg",
    "revision": "776d58f453c8fe5d6a89e9c31ee223ff"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.ttf",
    "revision": "4f0022f25672c7f501c339cbf98d9117"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.woff",
    "revision": "fdf491ce5ff5b2da02708cd0e9864719"
  },
  {
    "url": "api-documentation/font/FontAwesome.otf",
    "revision": "3b15120c304688379525c9f3c15cc4c2"
  },
  {
    "url": "api-documentation/graphs/class.html",
    "revision": "494bf680a2d18ad8d3dfcae961d3abee"
  },
  {
    "url": "api-documentation/graphs/classes.svg",
    "revision": "926f2a158939b442e262af5c4471b68c"
  },
  {
    "url": "api-documentation/images/apple-touch-icon-114x114.png",
    "revision": "a88f04df36a78d3a481211ce21ce0e60"
  },
  {
    "url": "api-documentation/images/apple-touch-icon-72x72.png",
    "revision": "5a7e1222cab85b4cec71aed67ff637ac"
  },
  {
    "url": "api-documentation/images/apple-touch-icon.png",
    "revision": "7bad7e9b405020e6e59caba1f6009ae0"
  },
  {
    "url": "api-documentation/images/custom-icons.svg",
    "revision": "35e786d557046ba93192e47d0999b29f"
  },
  {
    "url": "api-documentation/images/hierarchy-item.png",
    "revision": "0a0859d151d06e7bb05c33e08935f6b9"
  },
  {
    "url": "api-documentation/images/icon-class-13x13.png",
    "revision": "90fdd04cf8cc989932b69f381ca90c5d"
  },
  {
    "url": "api-documentation/images/icon-class.svg",
    "revision": "6399d8f77dac3f973d15c900fdbe68dd"
  },
  {
    "url": "api-documentation/images/icon-interface-13x13.png",
    "revision": "7a178646801f9087f1de9d5406cbc823"
  },
  {
    "url": "api-documentation/images/icon-interface.svg",
    "revision": "249deb62bdbd723a9f212d6de8363753"
  },
  {
    "url": "api-documentation/images/icon-trait-13x13.png",
    "revision": "0efd7bd5f682ad9469f73fb20a1101a0"
  },
  {
    "url": "api-documentation/images/icon-trait.svg",
    "revision": "c56a25b9b5b096f8133f41ff8c367341"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.rotate_left.png",
    "revision": "76f2b0ced5a3a64aae4179d13874787b"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.rotate_right.png",
    "revision": "3acdbd5dece2e19ed13a693ad3c92098"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_fit.png",
    "revision": "2a6f0d6f6619f7f68d0be0b8f4976355"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_in.png",
    "revision": "37c857d20554941ac14fbe9a9d25715e"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_out.png",
    "revision": "5aa2c0b6f696389c6f25123396bf1c42"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_zero.png",
    "revision": "184693b7dc7cd7d201188458ec209b61"
  },
  {
    "url": "api-documentation/index.html",
    "revision": "97f210a76c7a243ca587a574c07b9d17"
  },
  {
    "url": "api-documentation/js/bootstrap.min.js",
    "revision": "be1c5898c4332c8e7f9906011e005bb0"
  },
  {
    "url": "api-documentation/js/html5.js",
    "revision": "0ce8f355891c26c28f057e195e97dcd5"
  },
  {
    "url": "api-documentation/js/jquery-1.11.0.min.js",
    "revision": "8fc25e27d42774aeae6edbc0a18b72aa"
  },
  {
    "url": "api-documentation/js/jquery.dotdotdot-1.5.9.js",
    "revision": "46034235be90f7905b86d65d7818457c"
  },
  {
    "url": "api-documentation/js/jquery.dotdotdot-1.5.9.min.js",
    "revision": "d4bc241987ae345461c3dd53651f7b98"
  },
  {
    "url": "api-documentation/js/jquery.iviewer.js",
    "revision": "d232f5c7145ad91268854b0f413a2bf2"
  },
  {
    "url": "api-documentation/js/jquery.iviewer.min.js",
    "revision": "75a69290d4ad6533cd63b06ab859fecc"
  },
  {
    "url": "api-documentation/js/jquery.mousewheel.js",
    "revision": "6e0c8755583bd92cd20f4fb1ffe984f6"
  },
  {
    "url": "api-documentation/js/jquery.smooth-scroll.js",
    "revision": "adb720781feba8c000f1d6e2ef2fee0f"
  },
  {
    "url": "api-documentation/js/prism.min.js",
    "revision": "7999e842de1cb54713abed7aa2edb8e1"
  },
  {
    "url": "api-documentation/js/ui/1.10.4/jquery-ui.min.js",
    "revision": "a631873e0f4be6f476465b7c2ad35745"
  },
  {
    "url": "api-documentation/namespaces/default.html",
    "revision": "3e2a33649f4f19424ecc51bca10d9940"
  },
  {
    "url": "api-documentation/namespaces/lloc.html",
    "revision": "cb4134268bdedfb7173b6a5a352e8fa2"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.html",
    "revision": "8341a2db6085a0770c7b30893fdd25c8"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.Attachments.html",
    "revision": "236316f88050eac2c8f82bebd6c66fe4"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.html",
    "revision": "8bfe28f15849a0cd88e055740917484d"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.PostFields.html",
    "revision": "4cbae94bac7a53cdb51d9aaf387a783c"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.PostMeta.html",
    "revision": "620e5188419a8762f76a7f330fdc8772"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.PostThumbnail.html",
    "revision": "48c74da591075287032174444603e6c3"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.Terms.html",
    "revision": "6589f6f88fa0c91f04288082eea8a9e0"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.LogWriters.html",
    "revision": "31e0fe9e9ea2123200aac369ddae1dbc"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.html",
    "revision": "926f1f134e81093b077156cf98b3fa45"
  },
  {
    "url": "api-documentation/reports/deprecated.html",
    "revision": "299ed9fe899a86dd2f9ce8f8bcf36ee7"
  },
  {
    "url": "api-documentation/reports/errors.html",
    "revision": "a95b7cd0ff0f140eb6c6f343c06677e4"
  },
  {
    "url": "api-documentation/reports/markers.html",
    "revision": "9592db4692cdf1e4a0ceea7cc9e88fa2"
  },
  {
    "url": "appendices/acknowledgment.html",
    "revision": "20d3c161c8b0878e18ffa50ba8863ac0"
  },
  {
    "url": "appendices/faq.html",
    "revision": "1fe213c14fb11b78f19bbd6e53b01d05"
  },
  {
    "url": "appendices/help-donations.html",
    "revision": "bff242ea39b7a0f438f9c4357bcf7482"
  },
  {
    "url": "appendices/license.html",
    "revision": "9d60eed1b506126afc04350007e153e6"
  },
  {
    "url": "assets/css/0.styles.7605b712.css",
    "revision": "59e007b312dd70610323d7cc2abd850e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.df4e6c23.js",
    "revision": "a14b3d796bfa412276f516e4e5c0e438"
  },
  {
    "url": "assets/js/11.117a3252.js",
    "revision": "6153237e64d4da5cb3cfb64c37dbc4bd"
  },
  {
    "url": "assets/js/12.f630d96f.js",
    "revision": "7e79039cb55765736212133d93ca428e"
  },
  {
    "url": "assets/js/13.ebc27a55.js",
    "revision": "7c3e73c81534d065c10cc4c6d441176b"
  },
  {
    "url": "assets/js/14.95cd96e1.js",
    "revision": "57ef68f063545aa4ed3765048ff8105b"
  },
  {
    "url": "assets/js/15.3d194d65.js",
    "revision": "651fc5190c7dbe9ac609ac2a4894115f"
  },
  {
    "url": "assets/js/2.95391202.js",
    "revision": "0261a6bc917685de8d0db98c0b7d5b5b"
  },
  {
    "url": "assets/js/3.e147c853.js",
    "revision": "2f61c13ccae7c9a4174986f6fd62db82"
  },
  {
    "url": "assets/js/4.e7323231.js",
    "revision": "ea651dc0f76792ea62b5ca7cb32e1e5a"
  },
  {
    "url": "assets/js/5.54396494.js",
    "revision": "1bc9300ca889bee24342b7e334b3e781"
  },
  {
    "url": "assets/js/6.738b8620.js",
    "revision": "524c885203727fb464417b3dd95a4093"
  },
  {
    "url": "assets/js/7.31aa6e47.js",
    "revision": "b27de4cc315898d339f828351b218155"
  },
  {
    "url": "assets/js/8.b19ef837.js",
    "revision": "ecf3801cdbe98e7d921eb9b7e8dd29c4"
  },
  {
    "url": "assets/js/9.4dc40ef7.js",
    "revision": "f396788fb731ec67818ccc71682b54b5"
  },
  {
    "url": "assets/js/app.4d57db53.js",
    "revision": "92df24f8622a1141248b4104a3a23fb1"
  },
  {
    "url": "banner-1544x500.png",
    "revision": "5e903c91f73eb5e48c1ddbce5756edb6"
  },
  {
    "url": "banner-772x250.png",
    "revision": "e1c141d365fca77bd803ff076929827d"
  },
  {
    "url": "block-editor.png",
    "revision": "815571a245f775c31a63d9a648b0787c"
  },
  {
    "url": "choose-language.png",
    "revision": "402e788bfb23b6241eb926c34d4e5843"
  },
  {
    "url": "connected-contents.png",
    "revision": "ada881102a811c54b24aa3e1e260d4e5"
  },
  {
    "url": "coverage/ContentImport/AttachmentPathFinder.php.html",
    "revision": "6dd9a494a3ecdfcc7c53ef1e717e9936"
  },
  {
    "url": "coverage/ContentImport/ContentImporter.php.html",
    "revision": "4084b733f7c713babb10b93434f7b137"
  },
  {
    "url": "coverage/ContentImport/dashboard.html",
    "revision": "097f4159b2e3cfd078f9b72be638d185"
  },
  {
    "url": "coverage/ContentImport/ImportCoordinates.php.html",
    "revision": "1aba5e143829ce7f9dd674ca10ae7bbd"
  },
  {
    "url": "coverage/ContentImport/Importers/Attachments/dashboard.html",
    "revision": "f8f3170c5a7f652e40903faf18b87e68"
  },
  {
    "url": "coverage/ContentImport/Importers/Attachments/index.html",
    "revision": "edbd4fedab301081300f514b90233b1c"
  },
  {
    "url": "coverage/ContentImport/Importers/Attachments/Linking.php.html",
    "revision": "842f41a5817e984cc722acb421e6bebd"
  },
  {
    "url": "coverage/ContentImport/Importers/AttachmentsImporters.php.html",
    "revision": "90562e01f3c4960bc6c7888197d2203c"
  },
  {
    "url": "coverage/ContentImport/Importers/BaseImporter.php.html",
    "revision": "acc96d2cc20dd160aa5a07c8a33e5208"
  },
  {
    "url": "coverage/ContentImport/Importers/dashboard.html",
    "revision": "54fccc697067830eb6bd3ff6777a46f7"
  },
  {
    "url": "coverage/ContentImport/Importers/Importer.php.html",
    "revision": "27ae1e3324a9052196c5810748c721fd"
  },
  {
    "url": "coverage/ContentImport/Importers/ImportersBaseFactory.php.html",
    "revision": "19f30004d4ba1ddad0d46ea25b8d1aed"
  },
  {
    "url": "coverage/ContentImport/Importers/ImportersFactory.php.html",
    "revision": "a6ba5c2c3a87988c038e185191b13b59"
  },
  {
    "url": "coverage/ContentImport/Importers/index.html",
    "revision": "90fb7599eda164f034554c06921c3ca0"
  },
  {
    "url": "coverage/ContentImport/Importers/Map.php.html",
    "revision": "ff193e44b55565e4badee593e70b8a73"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFields/dashboard.html",
    "revision": "f36c3fb9a9d1e331ff4ac5485e949f37"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFields/Duplicating.php.html",
    "revision": "68f004db8464fe7f0adb0b37f5c3b2a4"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFields/index.html",
    "revision": "91537496aa04daed7d935bd275d211a2"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFieldsImporters.php.html",
    "revision": "5804666f4e34da46705a890239f3923b"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMeta/dashboard.html",
    "revision": "4e639be655181cb4345d98b614c7ec86"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMeta/Duplicating.php.html",
    "revision": "f04c78dee039d57ae4780586de5cb547"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMeta/index.html",
    "revision": "4de0056599c344956e55345b5b57f11a"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMetaImporters.php.html",
    "revision": "8013a1f76542138e72e7eff8a1eed542"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnail/dashboard.html",
    "revision": "da10c90cac6435a80ccd641e58432ba8"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnail/index.html",
    "revision": "cbded4ce1288abfb84b31ed9fff10dad"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnail/Linking.php.html",
    "revision": "23621608e9c77e3231fa4d1723803c22"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnailImporters.php.html",
    "revision": "997a3f39bddbcb5fe9c0ba99db2f2e45"
  },
  {
    "url": "coverage/ContentImport/Importers/Terms/dashboard.html",
    "revision": "6a259a43a6f189af44c1351e19162d61"
  },
  {
    "url": "coverage/ContentImport/Importers/Terms/index.html",
    "revision": "2ac2452e2083b8bf4f0e28f537247b77"
  },
  {
    "url": "coverage/ContentImport/Importers/Terms/ShallowDuplicating.php.html",
    "revision": "9bd39ac4d75d835d625595c471c6cf2f"
  },
  {
    "url": "coverage/ContentImport/Importers/TermsImporters.php.html",
    "revision": "d94925cafa9ea4811b4f5205f0baeae1"
  },
  {
    "url": "coverage/ContentImport/ImportLogger.php.html",
    "revision": "a8b19e686e4716d9347c1ac291b175cd"
  },
  {
    "url": "coverage/ContentImport/index.html",
    "revision": "6e4faf169e5d63c0e921cad5dae397d8"
  },
  {
    "url": "coverage/ContentImport/LogWriters/AdminNoticeLogger.php.html",
    "revision": "745deb3e4f951444778667f82df6103b"
  },
  {
    "url": "coverage/ContentImport/LogWriters/dashboard.html",
    "revision": "e8f1d0724effe71ba4f09beb3a82cd7a"
  },
  {
    "url": "coverage/ContentImport/LogWriters/index.html",
    "revision": "1299d900ee7b81c15956f8efdb493d63"
  },
  {
    "url": "coverage/ContentImport/LogWriters/LogWriter.php.html",
    "revision": "6f332de12c9d15560ae86f0d5ab19f8f"
  },
  {
    "url": "coverage/ContentImport/MetaBox.php.html",
    "revision": "a90a0d2524be4d2ba6835e7e098cdb41"
  },
  {
    "url": "coverage/ContentImport/Relations.php.html",
    "revision": "f32addcb7ade6183d68f3f0a8f3bbbd4"
  },
  {
    "url": "coverage/ContentImport/Service.php.html",
    "revision": "f8d140c75835343c741c0869414fc562"
  },
  {
    "url": "coverage/dashboard.html",
    "revision": "ea0bd4faa54484e87a7f263a8ae410df"
  },
  {
    "url": "coverage/index.html",
    "revision": "c3a307e51c71960546fbdf869195470b"
  },
  {
    "url": "coverage/index.php.html",
    "revision": "75aa0ed43b9b0977cb2697284fb046e7"
  },
  {
    "url": "coverage/MslsAdmin.php.html",
    "revision": "28b54b877e0acc0da22c10834a52d96d"
  },
  {
    "url": "coverage/MslsAdminIcon.php.html",
    "revision": "d2c060c34149060b394a2189586073be"
  },
  {
    "url": "coverage/MslsAdminIconTaxonomy.php.html",
    "revision": "7fb28737d7bc928ac2114863c08daf97"
  },
  {
    "url": "coverage/MslsBlog.php.html",
    "revision": "4a592376e8123fafcba9fdde07f472d5"
  },
  {
    "url": "coverage/MslsBlogCollection.php.html",
    "revision": "1de3a60944c8a7f7ddaf44b556559bb9"
  },
  {
    "url": "coverage/MslsContentTypes.php.html",
    "revision": "6c9679bf0799477f9e44ec9cd569d8b8"
  },
  {
    "url": "coverage/MslsCustomColumn.php.html",
    "revision": "90fac6b23858c2349cf71e1f12e87a9f"
  },
  {
    "url": "coverage/MslsCustomColumnTaxonomy.php.html",
    "revision": "f2c0e0933b30799fc7dd3c8e0b1c838a"
  },
  {
    "url": "coverage/MslsCustomFilter.php.html",
    "revision": "ab29fc4b8cd5031c3b5195abb41e64d1"
  },
  {
    "url": "coverage/MslsGetSet.php.html",
    "revision": "397cd4a9a0a737c463923c6f8f7e8640"
  },
  {
    "url": "coverage/MslsJson.php.html",
    "revision": "c2159505309e8cb027457e9dcfde7034"
  },
  {
    "url": "coverage/MslsLanguageArray.php.html",
    "revision": "973e7ce86f67b3c6fce45f210253494e"
  },
  {
    "url": "coverage/MslsLink.php.html",
    "revision": "551119f72a0afaf3f7a82888410bfbdf"
  },
  {
    "url": "coverage/MslsLinkImageOnly.php.html",
    "revision": "55e5e6aec862361b834e817e16de5245"
  },
  {
    "url": "coverage/MslsLinkTextImage.php.html",
    "revision": "24e34fa5e946006f20f76aa938416dbb"
  },
  {
    "url": "coverage/MslsLinkTextOnly.php.html",
    "revision": "b41a7cb635aaf94d6a93e46dc1d025c6"
  },
  {
    "url": "coverage/MslsMain.php.html",
    "revision": "506437b013c8a3a60ff801c0be6d1082"
  },
  {
    "url": "coverage/MslsMetaBox.php.html",
    "revision": "b6ea62906a32ae2b91253f2c863cb37c"
  },
  {
    "url": "coverage/MslsOptions.php.html",
    "revision": "ae259682737a24aa023daba8dea56ca8"
  },
  {
    "url": "coverage/MslsOptionsPost.php.html",
    "revision": "3a3a1f147978da169804f473aeaded48"
  },
  {
    "url": "coverage/MslsOptionsQuery.php.html",
    "revision": "35ed1fb24e586f1a13c1729ed9b11a67"
  },
  {
    "url": "coverage/MslsOptionsQueryAuthor.php.html",
    "revision": "38896230708b9847b899b0dda6313a6b"
  },
  {
    "url": "coverage/MslsOptionsQueryDay.php.html",
    "revision": "dbfe8ed0b83b2b39f2a729fae15dfdc1"
  },
  {
    "url": "coverage/MslsOptionsQueryMonth.php.html",
    "revision": "07b09419ead2f78f745c70b9579ad6f1"
  },
  {
    "url": "coverage/MslsOptionsQueryPostType.php.html",
    "revision": "283c192fa07df8868c9f0a7806a4c25a"
  },
  {
    "url": "coverage/MslsOptionsQueryYear.php.html",
    "revision": "ee202ce5d775730f21e6fbc3c38bc49b"
  },
  {
    "url": "coverage/MslsOptionsTax.php.html",
    "revision": "a89a3747122b146b5eaffb3ac8add7a4"
  },
  {
    "url": "coverage/MslsOptionsTaxTerm.php.html",
    "revision": "e82a521a853e702c394e8618b321b5af"
  },
  {
    "url": "coverage/MslsOptionsTaxTermCategory.php.html",
    "revision": "51a8babfcff89a3f43ccb7905627b4db"
  },
  {
    "url": "coverage/MslsOutput.php.html",
    "revision": "6fa205290879c421a13a83bf0540c99c"
  },
  {
    "url": "coverage/MslsPlugin.php.html",
    "revision": "4cd7bac79ab8c5ed6ee06220e4ed7a46"
  },
  {
    "url": "coverage/MslsPostTag.php.html",
    "revision": "596de65ae56d7ab41943c5079d1b422a"
  },
  {
    "url": "coverage/MslsPostTagClassic.php.html",
    "revision": "a0567f8dc26ed41500ab8b8be89112c2"
  },
  {
    "url": "coverage/MslsPostType.php.html",
    "revision": "80d8d6652ae4845a3e4e45f07cc49b1f"
  },
  {
    "url": "coverage/MslsRegistry.php.html",
    "revision": "80f4eb80154953c75ba5ac4ed0350f51"
  },
  {
    "url": "coverage/MslsRegistryInstance.php.html",
    "revision": "b5c9c614ff35f65c8f6a492962224061"
  },
  {
    "url": "coverage/MslsSqlCacher.php.html",
    "revision": "40f3c1662c4fb6dbbcb409c1cea93ece"
  },
  {
    "url": "coverage/MslsTaxonomy.php.html",
    "revision": "050abae10d96eb31374511c20e97584e"
  },
  {
    "url": "coverage/MslsWidget.php.html",
    "revision": "3af728fd6a60ff02477f3bf6e5648be0"
  },
  {
    "url": "developer-docs/hook-reference.html",
    "revision": "a2a05271af73cc8432355b82c1e7e7e1"
  },
  {
    "url": "developer-docs/snippets-examples.html",
    "revision": "106c044f8e42ef64673bc335db253e35"
  },
  {
    "url": "editor-taxonomies.png",
    "revision": "4c4a8c03da97af0d94ee7617149d3ae9"
  },
  {
    "url": "editor.png",
    "revision": "e59f717fb975bca11c1844c1a40069ef"
  },
  {
    "url": "favicon.png",
    "revision": "04c1a0c2a730b9dd8fe8bc7be5febbe9"
  },
  {
    "url": "icon-128x128.png",
    "revision": "561835a9159b574e131ab3919b4b0ad1"
  },
  {
    "url": "icon-256x256.png",
    "revision": "395835eea4bdae80ff9ddc02738aa0d1"
  },
  {
    "url": "index.html",
    "revision": "4c6699db8e98c76ee45a06801139f145"
  },
  {
    "url": "logo.png",
    "revision": "561835a9159b574e131ab3919b4b0ad1"
  },
  {
    "url": "main-settings.png",
    "revision": "986b4bd2f60e38c7603f433191a4a73c"
  },
  {
    "url": "settings.png",
    "revision": "99b6619dec325076ae6766da500c1d23"
  },
  {
    "url": "user-docs/editing-association-contents.html",
    "revision": "2b13ab0d1e8f4583b4f22d2b339e0f12"
  },
  {
    "url": "user-docs/index.html",
    "revision": "ee2184375029b0862919e98248c00708"
  },
  {
    "url": "user-docs/install-multisite.html",
    "revision": "e6c25e1c32eabe6d2072171e851baae9"
  },
  {
    "url": "user-docs/integration-website.html",
    "revision": "52aad3e51a5715556d6d0eb8fca60c87"
  },
  {
    "url": "user-docs/plugin-configuration.html",
    "revision": "3c5398c9392870057e120d81d5434236"
  },
  {
    "url": "widget-output.png",
    "revision": "50a87a476855be43813cb5d999c227d6"
  },
  {
    "url": "widgets-admin.png",
    "revision": "b112ccda5116f43196e0456abc0a634a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
