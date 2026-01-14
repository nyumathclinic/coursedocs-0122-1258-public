var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes-sec-06-04",
  "level": "1",
  "url": "notes-sec-06-04.html",
  "type": "Section",
  "number": "",
  "title": "Section 6.4: Table of integrals",
  "body": " Section 6.4: Table of integrals   Basic Forms                                                                                                            Forms involving                                                     Forms involving                                                     Forms involving                                                Forms involving                                                        if                                        Inverse trigonometric forms                                                     Trigonometric forms                                                                                                                               "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
