import { useState } from "react";
export function TwitterFollowCard({
  children,
  userName = "unknow",
  initialIsFollowing,
}) {
  //save the state of the button
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          alt={`El avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
          className="tw-followCard-avatar"
        />
        {/* comments on jsx */}
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
