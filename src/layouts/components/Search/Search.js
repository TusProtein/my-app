import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import PopperWrapper from "~/components/Popper/Wrapper";
import AccountItem from "~/components/AccoutItem/AccoutItem";
import useDebounced from "~/hooks/useDebounced";
import * as searchServices from "~/services/searchService";

import { IconCloseSearch, IconSearch, IconLoading } from "~/components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const debouncedValue = useDebounced(searchValue, 600);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debouncedValue);
      setSearchResult(result);

      setLoading(false);
    };
    fetchApi();
  }, [debouncedValue]);

  const handleHideResult = () => setShowResult(false);
  const handleShowResult = () => setShowResult(true);

  const handleChange = (e) => {
    const searchValueInput = e.target.value;
    if (!searchValueInput.startsWith(" ")) {
      setSearchValue(searchValueInput);
    }
  };

  return (
    <div>
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
            onChange={handleChange}
            value={searchValue}
            style={{
              backgroundColor: "transparent",
              color: "rgba(22, 24, 35, 1)",
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
                onMouseDown={(e) => e.preventDefault()}
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
                onMouseDown={(e) => e.preventDefault()}
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
    </div>
  );
}

export default Search;
