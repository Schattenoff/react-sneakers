import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>

          <div className="items">
            <div className="cart-item d-flex align-center justify-between">
              <img
                className="sneakers-img"
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="remove-btn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cart-item d-flex align-center justify-between">
              <img
                width={70}
                height={70}
                src="/img/sneakers/4.jpg"
                alt="Sneakers"
              />
              <div>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>8 499 руб.</b>
              </div>
              <img
                className="remove-btn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          <ul className="cart-total-block">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            className="logo"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="logo"
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="ul-nav d-flex justify-between align-center">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span className="sum">1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/like.svg" alt="like" />
          </li>
          <li>
            <img
              width={20}
              height={20}
              src="/img/user.svg"
              alt="user_profile"
            />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1 className="mb-40">Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={14} height={14} src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex justify-between">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
