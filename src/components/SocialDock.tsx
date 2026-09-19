export default function SocialDock() {
  return (
    <div className="social-dock d-none d-xl-flex">
      <a href="#"><i className="bi bi-lightning-charge-fill text-success"></i></a>
      <a href="#"><i className="bi bi-file-earmark-text"></i></a>
      <a href="#"><i className="bi bi-youtube"></i></a>
      <a href="#"><i className="bi bi-chat-dots"></i></a>
      <a href="#" id="dockHeart" onClick={(e) => e.preventDefault()}><i className="bi bi-heart"></i></a>
      <a href="#"><i className="bi bi-bell"></i></a>
    </div>
  );
}
