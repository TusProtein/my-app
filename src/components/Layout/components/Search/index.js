import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import AccountItem from "~/components/AccoutItem";
import PopperWrapper from "~/components/Popper/Wrapper";

import IconCloseSearch from "~/components/Icons/IconCloseSearch";
import IconSearch from "~/components/Icons/IconSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import IconLoading from "~/components/Icons/IconLoading";
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      });
  }, [searchValue]);

  const handleHideResult = () => setShowResult(false);
  const handleShowResult = () => setShowResult(true);
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className="searchResult w-[361px]" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4
              style={{
                color: "rgba(22, 24, 35, 0.5)",
                letterSpacing: "0.093px",
              }}
              className="px-4 flex justify-start text-[14px]"
            >
              Accounts
            </h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div
        style={{
          background: "rgba(22, 24, 35, .06)",
          borderRadius: "92px",
        }}
        className="relative w-[361px] h-[46px] flex items-center justify-around hover:border-[1px] hover:border-solid hover:border-[#ccc] border-[1px] "
      >
        <input
          ref={inputRef}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          style={{
            backgroundColor: "transparent",
          }}
          className="h-full focus:outline-none w-[80%] px-4 caret-red-500 placeholder-shown:border-red"
          type="text"
          placeholder="Search"
          onFocus={handleShowResult}
        ></input>

        <div
          style={{ background: "rgba(22, 24, 35, .12)" }}
          className="border-[0.9px] h-[28px] mr-[-6px]"
        ></div>

        {searchValue ? (
          <>
            <div
              onClick={() => {
                setSearchValue("");
                setSearchResult([]);
                inputRef.current.focus();
              }}
              style={{
                color: "rgba(22, 24, 35, 0.34)",
                fontSize: 16,
              }}
              className="absolute right-[16%]"
            >
              {loading ? <IconLoading /> : <IconCloseSearch />}
            </div>
            <button
              style={{
                color: "#333",
                padding: "9px 12px",
                margin: "0 -7px",
                fontSize: 20,
              }}
              className={`items-center flex hover:bg-slate-200 hover:rounded-r-[92px] active:bg-opacity-40`}
            >
              <IconSearch fill="#333" />
            </button>
          </>
        ) : (
          <>
            <button
              style={{
                color: "rgba(22, 24, 35, 0.34)",
                padding: "9px 12px",
                margin: "0 -7px",
                fontSize: 20,
              }}
              className={`items-center flex hover:bg-slate-200 hover:rounded-r-[92px] active:bg-opacity-40`}
            >
              <IconSearch />
            </button>
          </>
        )}
      </div>
    </HeadlessTippy>
  );
}

export default Search;
