// ==UserScript==
// @name        Miiverse Yeah Button for Twitter
// @namespace   twitter scripts
// @match       *://*.twitter.com/*
// @match       *://*.x.com/*
// @grant       none
// @version     1.0
// @author      busybox11
// @description 6/14/2024
// @updateURL
// @downloadURL
// ==/UserScript==

const YEAH_B64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACGVBMVEVHcEzW8NQdsxLn9uD///////////////////////////9Pzh3///9axRzl99fv+ev////1/PL///////+55LL///+56aH////////C7KZ71zz////////////T9rGN4lL///+z55b///////9p0w3///9s1D6W14hKyg7O8rHS8ML///+v5omf7krY8crh8t563Rb///9bzw9g1Q4itxfb89ik43kfqBL///9m1gH///+G2Ez///9610b////////r+ORTuUPO68mk44h21SNy1Rf///+a33WK3UL///9my0r///+d32r////c9sn///9Zx0v///////+H1GX///8zrxyK0nhSzhdyxmqb05V11DA8sC/f9NWFynuB5A+CyHx5zkr//wATyQD///8TswA8yQBCzQBS1QBIzwAovgB+7QBi3gBg3AAyxACE8ABV1QBZ2QBp4QCB7wBy5wA5yACH8gCK9ABN0gBY2AB76wCN9QCR9wAbuAAWtQBr4wB46gBv5QD9//0/ywB16AAOsQAMrwBc2wAgugBX2AAjvAAuwgBm4ABd2wAZtgAeuQBO1ADo+OD5/fc3xwBFzgAswACU+QBL0QD8/vtu5ADw/OeX+wCL8QBu2wCf6WBl4ABo2hmA6gR24wCp625fziRAwQaj24xR1AAQqAGT7jGB5SYgrgNQwCGB4UFgxTKG7gC29HNyx1R+4TdHcEy9P1wEAAAAs3RSTlMA+/380/r2Af6mFP5G/Pz+3v4GO/sn/kAM/f1R6Yv9/nj7si79v/z4/v38Gfz6/Pz+M/79/P38/YL+cvuU+18f/fv9/P38nfz7x/uq+vP+aPq58P1t/Pr9+vr7+/z6/vr6O//////////////////////////////////////////////////////////////////////////////////////+////////////////////APU/0mIAAAWfSURBVFjDzZfpWxNJEMZZQ5IBMQd3QiAEwimiwMohIMh9RQRd8drjeQoIRzSJ4CqKQIJ4BmXEzcASLoHAyqH7H253TwczyQzifvL3qatDv3TerqruRET8mCj//9LYmphrqU1RTVXpKZnJ3788oTNDIwcextBaHhf7XftOSNXglaxaplLVal1o2J0Rc3yJ6AtoOSPTdbQ0NDY2NuiNpsssgCUq85jrMzMY4Ao7GnzrawdLiIN1X2OLTguguXisTcREAqg6zL6DJ3/9TXmytO5ryePAUn4MN1MM4NI14OUCltbNpWqQp35TIUkDbIF58vGTMA58lTKQl3/jWyREAltasfZYjAc+vQwUF49cnxwFTEHF2p/iPPBVqkFTdJTARTnkmcceSHHP18FB+xE2nI6E2lvr96QZMutAkSItcI2B0oqh+0ewfksNXZJbiG4FVeP00FGMVZhAESOZQgooqBgjTO58Xl4bCzC08/kMHa7rtVAlJZAKWv3CJGEtDVyfp/nx5PTOIizu8NG0OR8ioyXOMAsKzSPTmJF/FgHS+DGKllE5fqRRRSlY4iSSSAOmihHCFBbImxqhERGgkbOShU4JCyzQYZsiLBCBBT6YmiACE3zgbFBDqlQWcZXDEzxEwEkDJxGgkdN8B6KUElnAVg87CW/OzQHo3jhpZEQ9aXmFRiWFkCFeURcYVm97w2NrlhXqh2mwsppYq1tdoUFJPnTFSu7AM0yxbxQ7AuNhW/FGsS0Q4B0oJTxwVT6yBfB4bEF8DTwlKuiKIRSF5HRMNzTbPc8JDsdzOiJ4PM/phMeBqkGukGO6M4pC8yDR7yB49v51CFk1rvIDeyUHrjkVRguRCYJM7II7xS8x9j3t4p79ZRCreVDAj/z1wBWcI7SoQjKiHNhqvx1hRRWj2rNarXaC1bqqAyjgPyouhMu/LeEWt7T2EVoFNsRZwOT1Y7xbLlgsXbW+w/hLjJcBCjfe4U8eVrOQtsS32cdnOGFdoWqq3fDiNQ9zt9BdNKcrNRqNy+ReqtsfIGpetJe0A9ojQwVwSywY8BI2r57Ht6OLwxcjqLd258n0QLUWmLT7tMOFCURngTp7foDQt3s1XqblXByrrtva36SzPflILm2MtqcwgYgUC+T39M8T3H2bu/tfvnxp293cdJOZ/v7+eobphjzaaabDBWKrABJz+ylud1/f6Gifm0Y92dnNWjBkHTaKqTOcJiUJk3lYHKezgDHl9rnDyW1WsSyDrn10dUwsECaMLkZBMLQf5mRmJDCJPaN9YdQzoJ6bk2FMtM5XWs7KeNivOaksQgr52e/fjwq4m63ltvZP8RxWZgmdOPXHHagKVKgyMwsdW/3J9wLuXof8XD+fmPZHHoqDTtgHrrqC7KypsiAjXt8N5nUOKrRHUjjselZTE3QW6QxcHxQIDOYwiX6rJO+EAhEXgL00+DoYLOB9KIk3ZAftcPaXwQ/BvEICNBnFmM8WCKBbPv7ToIAXSMDdL4lbKJBkgV9DBN5eZ/JzRbKDMio4BWLB7CsB45e0XP3GSZ7cwOG66cTJ6qA8QJmALXj7QsinHJKJmFpT4GyzZfzMHCvojsSCt0LGP5XdZEBuUSgscoinR/OhjWMUaEphMbQHP4OxBdvjoTy7rYaMOEQTxAecaUPViKfiEgRXFbagdzaMsjrIwn+XDvHUmBdtnNhbQxmFLOh9Gsb2TTAk8ALUl3FxAWzBdm8YT7dvMEwKL0C/1ewVUQFkwe8iAr0zt/mXBRKY5ffUKy6ALdh+Fs4MNiGZCFDJZ6IC2IKyGTGoCZ1Qd2KGl7wRcjPxrR1ZUHZCjLIbIEcmFBm4nJ8JV86LvZaQgPoncc66sIvKcsYlO48JvZ3pVyhnQJLW0/gGTNfQXpwh+vRP7myKkiCV/sOaOPxASZL+PaqUIOIH5z+M+MGb/gV8bAAAAABJRU5ErkJggg==";

/**
 *
 * @param {MutationRecord} mutationsList
 * @param {MutationObserver} observer
 */
const handleMutation = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      /** @type {NodeList} */
      const nodes = mutation.addedNodes;
      for (const node of nodes) {
        if (node && typeof node.querySelector === "function") {
          const el = node.querySelector("[role='group']:not(:has(.yeah-btn))");
          if (el) {
            sc.log("found", el);

            const elHeight = el.offsetHeight;

            // Create "Yeah" button
            const yeahBtn = document.createElement("button");
            yeahBtn.classList.add("yeah-btn");
            if (elHeight <= 24) {
              yeahBtn.classList.add("small");
            }
            yeahBtn.innerHTML = `<img src="${YEAH_B64}" alt="Yeah!">`;
            yeahBtn.addEventListener("click", () => {
              sc.log("yeah");
            });
            el.appendChild(yeahBtn);
          }
        }
      }
    }
  }
};

const sc = {
  log: (...args) => {
    console.log("[miiverse-yeah]", ...args);
  },
};

const observer = new MutationObserver(handleMutation);
observer.observe(document, {
  childList: true,
  subtree: true,
  attributeOldValue: true,
});

// Inject CSS
const style = document.createElement("style");
style.innerHTML = `
  .yeah-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    min-height: 20px;
    height: 36px;
    margin: auto 0 auto 4px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0);
    border: none !important;
    cursor: pointer;
    transition: background-color 0.4s;
  }
  .yeah-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .yeah-btn img {
    width: 20px;
    height: 20px;
  }
  .yeah-btn.small {
    margin: -8px -8px -8px 4px;
  }
  .yeah-btn.small img {
    width: 18px;
    height: 18px;
  }
`;
document.head.appendChild(style);
