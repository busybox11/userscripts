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
const YEAH_BIG_B64 =
  "data:image/jpeg;base64,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";

let waitForPopup = false;
let waitForImage = false;

const setInput = async (el) => {
  const dataTransfer = new DataTransfer();

  const base64Data = YEAH_BIG_B64.split(",")[1];

  // Convert the Base64 string to a Blob
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "image/jpeg" });

  // Set generated image blob as the data for the clipboard
  dataTransfer.setData("image/jpeg", blob);

  // Add the file to the clipboard just in case it doesn't get recognized with the blob
  const file = new File([blob], "image.jpg", { type: "image/jpeg" });
  dataTransfer.items.add(file);

  el.dispatchEvent(
    new ClipboardEvent("paste", {
      clipboardData: dataTransfer,
      bubbles: true,
      cancelable: true,
    })
  );

  // Clear DataTransfer Data
  dataTransfer.clearData();
};

const findClosestInput = (el) => {
  const contentEditableEl = el.querySelector(
    "div[data-testid^='tweetTextarea_'][contenteditable='true']"
  );
  if (contentEditableEl) {
    return contentEditableEl;
  }

  if (!el.parentElement) {
    return null;
  } else {
    return findClosestInput(el.parentElement);
  }
};

function handleTweetFillInput(targetEl) {
  const inputEl = findClosestInput(targetEl.parentElement.parentElement);
  if (inputEl) {
    setInput(inputEl);
  }

  waitForImage = true;
  window.setTimeout(() => {
    waitForImage = false;
  }, 2000);
}

function handleTweetSendBtn() {
  let sendTweetBtn = document.querySelector("[data-testid='tweetButton']");
  if (!sendTweetBtn) {
    sendTweetBtn = document.querySelector("[data-testid='tweetButtonInline']");
  }

  sc.log("sendTweetBtn", sendTweetBtn);

  if (sendTweetBtn) {
    sendTweetBtn.click();
  }
}

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
          let els = node.querySelectorAll(
            "[role='group']:not(:has(.yeah-btn))"
          );
          if (els.length === 0) {
            const contElem = node.querySelector(
              "[data-testid='toolBar']:not(:has(.yeah-btn))"
            );

            if (contElem) {
              els = contElem.querySelectorAll(
                "[role='tablist']:not(:has(.yeah-btn))"
              );

              if (waitForPopup) {
                // Wait for popup is handled here
                waitForPopup = false;

                handleTweetFillInput(contElem);
              }
            }
          }

          for (const el of els) {
            if (el && el.childElementCount > 3) {
              const elHeight = el.offsetHeight;
              const isSmall = elHeight <= 24;

              // Create "Yeah" button
              const yeahBtn = document.createElement("button");
              yeahBtn.classList.add("yeah-btn");
              if (isSmall) {
                yeahBtn.classList.add("small");
              }
              yeahBtn.innerHTML = `<img src="${YEAH_B64}" alt="Yeah!">`;
              yeahBtn.addEventListener("click", () => {
                if (isSmall) {
                  // TODO: Automatically like as well if not already liked

                  // Click on first nested button item of the tablist
                  // to bring up the reply box
                  el.firstElementChild.querySelector("button").click();

                  waitForPopup = true;

                  setTimeout(() => {
                    waitForPopup = false;
                  }, 2000);
                } else {
                  handleTweetFillInput(el);
                }
              });
              el.appendChild(yeahBtn);
            }
          }

          // If image has been added
          if (waitForImage) {
            if (node.tagName === "IMG" && node.src.includes("blob:")) {
              handleTweetSendBtn();
            }
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
