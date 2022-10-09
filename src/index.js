const onClickAdd = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list";

  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン
  const complete_button = document.createElement("button");
  complete_button.innerText = "完了";
  complete_button.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "list";

    const li = document.createElement("li");
    li.innerText = text;

    //戻るボタン
    const back_button = document.createElement("button");
    back_button.innerText = "戻す";
    back_button.addEventListener("click", () => {
      const delete_target = back_button.parentNode;
      document.getElementById("complete_list").removeChild(delete_target);

      const text = back_button.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    div.appendChild(li);
    div.appendChild(back_button);

    document.getElementById("complete_list").appendChild(div);

    deleteFromIncompleteList(complete_button.parentNode);
  });

  //削除ボタン
  const delete_button = document.createElement("button");
  delete_button.innerText = "削除";
  delete_button.addEventListener("click", () => {
    deleteFromIncompleteList(delete_button.parentNode);
  });

  //要素の設定
  div.appendChild(li);
  div.appendChild(complete_button);
  div.appendChild(delete_button);

  //未完了リストに追加
  document.getElementById("incomplete_list").appendChild(div);
};

document.getElementById("add").addEventListener("click", () => onClickAdd());
