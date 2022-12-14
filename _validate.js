const tick = require("./");

/**
 * DO NOT REVERSE-ENGINEER!
 *
 * This validation file uses a simple way to hide the test cases.
 * Yes, it would be easy to get them and learn from them.
 * Please resist this urge, it will help you learn much more.
 */

test("works for the original items", () => {
  const result = djb2a(JSON.stringify(tick(JSON.parse(atob(iOrig)))));

  expect(result).toBe(422417984);
});

test("works for the Conjured items", () => {
  const result = djb2a(JSON.stringify(tick(JSON.parse(atob(iConj)))));

  expect(result).toBe(3602268778);
});

const iOrig = `WwogIHsgIm5hbWUiOiAiKzUgRGV4dGVyaXR5IFZlc3QiLCAic2VsbEluIjogMTAsI
CJxdWFsaXR5IjogMjAgfSwKICB7ICJuYW1lIjogIis1IERleHRlcml0eSBWZXN0IiwgInNlbGxJbiI6I
C0xMCwgInF1YWxpdHkiOiAyMCB9LAogIHsgIm5hbWUiOiAiKzUgRGV4dGVyaXR5IFZlc3QiLCAic2Vsb
EluIjogMSwgInF1YWxpdHkiOiAyMCB9LAogIHsgIm5hbWUiOiAiKzUgRGV4dGVyaXR5IFZlc3QiLCAic
2VsbEluIjogMCwgInF1YWxpdHkiOiAyMCB9LAogIHsgIm5hbWUiOiAiKzUgRGV4dGVyaXR5IFZlc3QiL
CAic2VsbEluIjogMTAsICJxdWFsaXR5IjogMCB9LAogIHsgIm5hbWUiOiAiKzUgRGV4dGVyaXR5IFZlc
3QiLCAic2VsbEluIjogLTEwLCAicXVhbGl0eSI6IDEgfSwKICB7ICJuYW1lIjogIkFnZWQgQnJpZSIsI
CJzZWxsSW4iOiAyLCAicXVhbGl0eSI6IDAgfSwKICB7ICJuYW1lIjogIkFnZWQgQnJpZSIsICJzZWxsS
W4iOiAxLCAicXVhbGl0eSI6IDUgfSwKICB7ICJuYW1lIjogIkFnZWQgQnJpZSIsICJzZWxsSW4iOiAwL
CAicXVhbGl0eSI6IDUgfSwKICB7ICJuYW1lIjogIkFnZWQgQnJpZSIsICJzZWxsSW4iOiAtMiwgInF1Y
WxpdHkiOiA1IH0sCiAgeyAibmFtZSI6ICJBZ2VkIEJyaWUiLCAic2VsbEluIjogMiwgInF1YWxpdHkiO
iA1MCB9LAogIHsgIm5hbWUiOiAiQWdlZCBCcmllIiwgInNlbGxJbiI6IC0yLCAicXVhbGl0eSI6IDQ5I
H0sCiAgeyAibmFtZSI6ICJTdWxmdXJhcywgSGFuZCBvZiBSYWduYXJvcyIsICJzZWxsSW4iOiAwLCAic
XVhbGl0eSI6IDgwIH0sCiAgeyAibmFtZSI6ICJCYWNrc3RhZ2UgcGFzc2VzIHRvIGEgVEFGS0FMODBFV
EMgY29uY2VydCIsICJzZWxsSW4iOiAxNSwgInF1YWxpdHkiOiAyMCB9LAogIHsgIm5hbWUiOiAiQmFja
3N0YWdlIHBhc3NlcyB0byBhIFRBRktBTDgwRVRDIGNvbmNlcnQiLCAic2VsbEluIjogMTEsICJxdWFsa
XR5IjogMjAgfSwKICB7ICJuYW1lIjogIkJhY2tzdGFnZSBwYXNzZXMgdG8gYSBUQUZLQUw4MEVUQyBjb
25jZXJ0IiwgInNlbGxJbiI6IDEwLCAicXVhbGl0eSI6IDIwIH0sCiAgeyAibmFtZSI6ICJCYWNrc3RhZ
2UgcGFzc2VzIHRvIGEgVEFGS0FMODBFVEMgY29uY2VydCIsICJzZWxsSW4iOiA2LCAicXVhbGl0eSI6I
DIwIH0sCiAgeyAibmFtZSI6ICJCYWNrc3RhZ2UgcGFzc2VzIHRvIGEgVEFGS0FMODBFVEMgY29uY2Vyd
CIsICJzZWxsSW4iOiA1LCAicXVhbGl0eSI6IDIwIH0sCiAgeyAibmFtZSI6ICJCYWNrc3RhZ2UgcGFzc
2VzIHRvIGEgVEFGS0FMODBFVEMgY29uY2VydCIsICJzZWxsSW4iOiAxLCAicXVhbGl0eSI6IDIwIH0sC
iAgeyAibmFtZSI6ICJCYWNrc3RhZ2UgcGFzc2VzIHRvIGEgVEFGS0FMODBFVEMgY29uY2VydCIsICJzZ
WxsSW4iOiA1LCAicXVhbGl0eSI6IDQ5IH0sCiAgeyAibmFtZSI6ICJCYWNrc3RhZ2UgcGFzc2VzIHRvI
GEgVEFGS0FMODBFVEMgY29uY2VydCIsICJzZWxsSW4iOiAwLCAicXVhbGl0eSI6IDIwIH0KXQ`;

const iConj = `WwogIHsgIm5hbWUiOiAiQ29uanVyZWQgTWFuYSBDYWtlIiwgInNlbGxJbiI6IDMsI
CJxdWFsaXR5IjogNiB9LAogIHsgIm5hbWUiOiAiQ29uanVyZWQgTWFuYSBDYWtlIiwgInNlbGxJbiI6I
C0zLCAicXVhbGl0eSI6IDYgfSwKICB7ICJuYW1lIjogIkNvbmp1cmVkIE1hbmEgQ2FrZSIsICJzZWxsS
W4iOiAzLCAicXVhbGl0eSI6IDEgfQpd`;

// https://github.com/sindresorhus/djb2a
const djb2a = string => {
  let hash = 5381;

  for (let i = 0; i < string.length; i++) {
    hash = ((hash << 5) + hash) ^ string.charCodeAt(i);
  }

  return hash >>> 0;
};
