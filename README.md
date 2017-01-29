# Image Search Abstraction Layer
## User stories:
- I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
- I can paginate through the responses by adding a ?offset=2 parameter to the URL.
- I can get a list of the most recently submitted search strings.

## Example Usage:
- https://image-search-mengzhen.herokuapp.com/api/imgSearch/google?offset=2
### output: ###
```
[
{
"type": "image/png",
"width": 200,
"height": 200,
"size": 10261,
"url": "https://storage.googleapis.com/gweb-uniblog-publish-prod/static/blog/images/google-200x200.7714256da16f.png",
"thumbnail": {
"url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxFrL7OV6qMTYRg__rOqq9KTcBR22k_UAZZxab0lP2Ln2eOxplKnBvXb0",
"width": 104,
"height": 104
}
},
{
"type": "image/",
"width": 900,
"height": 900,
"size": 31273,
"url": "https://www.youtube.com/user/Google",
"thumbnail": {
"url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStms-Sz0sP7cvNeoTN_3z-Wg-p5dmNplY8LEZx6fEzwrFfH94xRVwHG15R",
"width": 146,
"height": 146
}
},
{
"type": "image/",
"width": 2247,
"height": 1264,
"size": 51730,
"url": "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h1264",
"thumbnail": {
"url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSIh3of_hFwzv_gJ86aI_K21gAwRnOTxL4w0cloLGXT4LeTPOJFfh3sJ6F",
"width": 150,
"height": 84
}
},
{
"type": "image/svg+xml",
"width": 800,
"height": 800,
"size": 1216,
"url": "https://privacy.google.com/images/google-logo-letter.svg",
"thumbnail": {
"url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_PGWONOZ5ob4sk4JjQzab9UgPRxGw1ZTdvykXrK_MiRSvK8bHc6CNBdc",
"width": 143,
"height": 143
}
},
{
"type": "image/png",
"width": 1005,
"height": 485,
"size": 897464,
"url": "https://doodles.google.ie/d4g/images/splashes/featured.png",
"thumbnail": {
"url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoHlO2_9xowDoso1ICeAXXV21bEzyFxripOL62JBZrs6ltnSwRtUjNmFU",
"width": 149,
"height": 72
}
},
{
"type": "image/jpeg",
"width": 512,
"height": 512,
"size": 18136,
"url": "https://pbs.twimg.com/profile_images/762369348300251136/5Obhonwa.jpg",
"thumbnail": {
"url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTn1QWRW0kJVs8Uytg6WSeIQbJoZtBuTkC-gVFmDl3J19QOfdibOLuzle3y",
"width": 131,
"height": 131
}
},
{
"type": "image/",
"width": 988,
"height": 556,
"size": 19384,
"url": "https://lh3.googleusercontent.com/0-BzaWtxoAnsBjQ_wzUcKxyF07XE7v2Kkg1ogPVUdzmQpvaz118uHQEGU6BdtzJuzfo=h556",
"thumbnail": {
"url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-T64fJ2IBDaZoXZI_EZ-U5ZdKtFBMuD5IrFP8EIrK3U4BtN4Mb0od6i0",
"width": 149,
"height": 84
}
},
{
"type": "image/svg+xml",
"width": 800,
"height": 427,
"size": 5140,
"url": "https://privacy.google.com/images/overview/shields.svg",
"thumbnail": {
"url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwvGQuprkxRmgnzY-Yx8KGi617M_wElqr0MrA5LS_ELNlZyNy5zJ42WRO",
"width": 143,
"height": 76
}
},
{
"type": "image/png",
"width": 1200,
"height": 630,
"size": 10211,
"url": "https://santatracker.google.com/images/og.png",
"thumbnail": {
"url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZBjtBQ7SzmGUvcwc2W7BQp5b3nGAigVvZFI83AsDe3iQM__JgvUYC2E",
"width": 150,
"height": 79
}
},
{
"type": "image/png",
"width": 306,
"height": 314,
"size": 20848,
"url": "https://www.google.com/landing/2step/images/why-need-img-2.png",
"thumbnail": {
"url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI0N-6bACfoSGLKWjKaowQWB6-rYVfqR-WSkI3qKdTK3dMNHCCPR1xtQ",
"width": 114,
"height": 117
}
}
]
```
- https://image-search-mengzhen.herokuapp.com/api/latest/imagesearch/
### output: ###
```
[
{
"term": "google",
"when": "2017-01-29T23:47:43.579Z"
},
{
"term": "google",
"when": "2017-01-29T23:45:44.499Z"
},
{
"term": "google",
"when": "2017-01-29T23:33:13.694Z"
}
]
```
