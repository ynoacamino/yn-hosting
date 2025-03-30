import FollowUs from './FollowUs';
import FooterLinks from './FooterLinks';
import GoogleInfo from './GoogleInfo';

export default function Footer() {
  return (
    <footer className="w-full flex items-start justify-center z-50">
      <div className="w-full max-w-7xl px-6 flex flex-col py-6 gap-6 text-foreground">
        <FollowUs />
        <hr className="border-muted-foreground" />
        <FooterLinks />
        <hr className="border-muted-foreground" />
        <GoogleInfo />
      </div>
    </footer>
  );
}
