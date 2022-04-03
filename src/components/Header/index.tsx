import { useState } from "react";

import { Button, Content } from "./styles";

export function Header() {
  const [activeFilter, setActiveFilter] = useState("all");

  function handleActiveCurrentFilter(filter: string) {
    setActiveFilter(filter);
  }

  return (
    <Content>
      <nav className="header__navigation">
        <div className="header__logo">
          <a href="/">#todo</a>
        </div>

        <div className="header__task-filter">
          <Button
            type="button"
            className={`header__button ${
              activeFilter === "all" ? "active" : ""
            }`}
            onClick={() => handleActiveCurrentFilter("all")}
          >
            All
          </Button>

          <Button
            type="button"
            className={`header__button ${
              activeFilter === "active" ? "active" : ""
            }`}
            onClick={() => handleActiveCurrentFilter("active")}
          >
            Active
          </Button>

          <Button
            type="button"
            className={`header__button ${
              activeFilter === "completed" ? "active" : ""
            }`}
            onClick={() => handleActiveCurrentFilter("completed")}
          >
            Completed
          </Button>
        </div>
      </nav>
    </Content>
  );
}
