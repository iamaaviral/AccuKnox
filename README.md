# AccuKnox Case study

Finding a suitable graph visualization library that can cover the various scenarios for our SaaS application. The SaaS application is built using React Redux.

## List of libraries evaluated

- [D3.js](https://d3js.org/)
- [Charts.js](https://www.chartjs.org/)
- [Cytoscape.js](https://js.cytoscape.org/#demos)

## Comparisons

#### Charts.js

Being one of the most popular charting library with a very high community support. I evaluated this library but it is more suited for traditional charts  such as bar charts etc. and didn’t suit our use case of graph visualisation

#### D3.js

For graphs visualization one of the most popular library out there is D3 js. I found this library to be highly customizable. The support group was very active in case we come across any issues to resolve. Most of our use cases were covered though for some we would have to handle the cases manually but this can be one of the contenders for development

#### Cytoscape.js

During my research I stumbled upon another library cityscape which is used for handling very complex layouts. Though the support community for this library is pretty small but it covers almost all of the use cases and for the use cases not covered we can customise it according to our needs.

| Library   | Pros                              | Cons                                                         |
| :-------- | :-------------------------------- | :----------------------------------------------------------- |
| Charts    | high community support            | didn’t suit our use case of graph visualisation              |
| D3        | highly customizable               | for some features we would have to handle the cases manually |
| Cytyscape | overs almost all of the use cases | support community for this library is pretty small           |

#### conclusion

I have gone forward and done a dummy implementation for 2 of the features including show node details and zoom in and zoom out. I have been also able to figure out implementation of various other features.

You can find the source code and implementation on links below.

- [Sample implementation](https://accu-knox.vercel.app/)
