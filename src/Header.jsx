import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import logoTidy from "./assets/TidyLogo.svg";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { currentDocumentationsAtom } from "./atoms";
// import fetchDocs from "./fetchDocs";
import fetchCollections from "./fetchCollections";

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [documentation, setDocumentation] = useState([]);
  const [firstDoc, setFirstDoc] = useState({}); // eslint-disable-line no-unused-vars
  const { data } = useQuery({
    queryKey: ["collections"],
    queryFn: fetchCollections,
  });
  const queryClient = useQueryClient();

  //   useEffect(() => {
  //     if (data) {
  //       const sortedData = data.toSorted((a, b) =>
  //         a.title.localeCompare(b.title)
  //       );
  //       setDocumentation(sortedData);
  //     }
  //   }, [data]);
  //
  //   useEffect(() => {
  //     if (documentation.length) {
  //       setFirstDoc(documentation[0]);
  //     }
  //   }, [documentation]);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleGuidesClick = () => {
    navigate(`/guide/overview`);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    queryClient.removeQueries(["collections"]);
    localStorage.removeItem("token");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo-div">
        <svg
          onClick={handleHomeClick}
          id="tidyLogo"
          width="101"
          height="61"
          viewBox="0 0 101 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.886 27.0258L10.0659 40.3521C9.40235 43.5593 9.40235 43.8357 12.3883 43.8357H17.3096L15.9825 50.0289H9.56824C3.7069 50.0289 1.32919 48.0935 2.82217 41.071L5.80813 27.0258H0.499756L1.82685 20.8327H7.13523L8.84939 12.8701H15.9272L14.2131 20.8327H22.1756L20.8485 27.0258H12.886Z"
            fill="currentColor"
          />
          <path
            d="M23.9563 27.0258L25.2834 20.8327C35.679 20.8327 35.9555 21.1092 34.2966 27.247L30.9789 39.6333C30.0941 43.0616 30.2047 43.8357 33.3013 43.8357H35.4578L34.1307 50.0289H29.0988C23.2375 50.0289 21.5786 48.4253 23.3481 41.8451L26.5552 30.0118C27.3294 27.0258 27.2741 27.0258 23.9563 27.0258Z"
            fill="currentColor"
          />
          <path
            d="M37.5189 36.0943C39.3989 27.3576 46.2556 20.3904 54.5499 20.3904C57.9783 20.3904 60.1348 22.3257 61.0748 24.2058C61.296 24.5375 61.6278 24.9799 62.0701 24.7587C62.5678 24.4822 62.6231 24.1505 62.4019 23.6528C61.9595 22.6575 61.7937 21.9386 62.0148 20.8327L64.282 10.2159H71.3598L65.8302 36.3155C64.282 43.6145 63.729 46.5452 64.669 50.0289H57.4806C56.4853 46.2687 58.6971 43.2275 59.5265 41.3474C59.7477 40.8498 59.9136 40.4627 59.4712 40.2968C59.0289 40.1309 58.6418 40.5733 58.5865 40.7392C55.5452 46.2687 51.3981 50.4712 45.8685 50.4712C39.8413 50.4712 35.6388 45.1075 37.5189 36.0943ZM44.5414 36.5367C43.3802 41.8451 45.5367 44.2781 48.5227 44.2781C53.2228 44.2781 58.0336 39.578 60.0795 29.9012C58.4206 27.5788 56.9829 26.5835 54.2182 26.5835C49.2968 26.5835 45.8132 30.4542 44.5414 36.5367Z"
            fill="currentColor"
          />
          <path
            d="M70.5848 36.7579L73.9578 20.8327H81.0357L77.7179 36.5367C76.612 41.5686 76.3908 43.6146 79.1556 43.6146C82.8051 43.6146 90.4912 34.6013 92.2054 26.5282L93.4219 20.8327H100.5L95.9655 42.0663C93.0348 56.0008 89.883 60.6456 76.1696 60.6456H66.3823L67.7094 54.4525H75.2849C85.4593 54.4525 86.6205 52.8489 88.2794 45.1075C88.9429 41.9557 90.2147 40.1862 90.7677 39.1356C91.0442 38.6379 91.1548 38.1956 90.7677 38.0297C90.3253 37.8638 89.9383 38.2509 89.883 38.4168C88.0582 41.7898 82.4734 49.5865 75.7273 49.5865C68.8706 49.5865 68.6494 45.7158 70.5848 36.7579Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.3311 0.500244C34.3311 0.500244 34.3298 0.500244 34.329 0.500244C34.3264 0.500244 34.3238 0.500244 34.3214 0.500867C34.1758 0.508032 34.0333 0.640746 33.9862 0.812712C32.625 4.72526 30.4019 7.14743 26.8374 7.83311C26.7084 7.84651 26.5833 7.95648 26.5283 8.10508C26.5246 8.11536 26.5208 8.12595 26.5179 8.13623C26.517 8.13966 26.5161 8.14278 26.5153 8.1462C26.5134 8.15368 26.5115 8.16116 26.5098 8.16895C26.5087 8.17486 26.5076 8.18078 26.5065 8.1867C26.5056 8.19169 26.5046 8.19698 26.5039 8.20197C26.5029 8.21038 26.5021 8.21879 26.5016 8.2272C26.5011 8.22969 26.5012 8.23219 26.501 8.23468C26.4923 8.39418 26.5789 8.5163 26.7112 8.52908C30.0201 9.21507 31.348 11.6357 31.2651 15.5451C31.2471 15.7127 31.3337 15.8448 31.4707 15.8601C31.4768 15.861 31.4835 15.8616 31.4894 15.8619C31.4935 15.8619 31.4977 15.8619 31.5019 15.8619H31.5094C31.655 15.8548 31.7974 15.7224 31.8445 15.5504C33.2073 11.6376 35.4289 9.21507 38.9934 8.52939C39.1221 8.5163 39.2471 8.40664 39.3023 8.25836C39.3026 8.25711 39.3032 8.25617 39.3034 8.25524C39.307 8.24558 39.3101 8.23593 39.313 8.22596C39.3139 8.22253 39.3147 8.21941 39.3156 8.21599C39.3178 8.20851 39.3194 8.20103 39.3211 8.19325C39.3222 8.18733 39.3233 8.18141 39.3244 8.17549C39.3253 8.1705 39.3262 8.16552 39.3269 8.16022C39.328 8.15181 39.3288 8.1434 39.3293 8.13499C39.3297 8.1325 39.3297 8.13 39.3299 8.12751C39.3306 8.11661 39.3308 8.1057 39.3304 8.09511C39.3264 7.95056 39.242 7.84495 39.1202 7.83311C35.8114 7.14649 34.4846 4.72557 34.5662 0.815827C34.5839 0.648222 34.4972 0.515821 34.36 0.501179C34.3539 0.500556 34.3477 0.500244 34.3415 0.500244C34.3381 0.500244 34.3345 0.500244 34.3311 0.500244Z"
            fill="#9FE870"
          />
        </svg>
      </div>
      {token && (
        <button className="browseBTN" onClick={handleGuidesClick}>
          Browse Guides
        </button>
      )}
      {token ? (
        <button className="secondary" onClick={handleLogoutClick}>
          Logout
        </button>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
    </div>
  );
};

export const Header = ({ token, setToken }) => {
  return (
    <div className="header" id="top-header">
      <NavBar token={token} setToken={setToken} />
    </div>
  );
};

NavBar.propTypes = {
  setToken: PropTypes.func.isRequired,
  token: PropTypes.string,
};

Header.propTypes = {
  setToken: PropTypes.func.isRequired,
  token: PropTypes.string,
};
