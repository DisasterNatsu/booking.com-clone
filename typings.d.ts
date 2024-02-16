import { IconType } from "react-icons";

interface PopoverDataType {
  name: string;
  description: string;
  href: string;
  icon: IconType;
}

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (state: boolean) => void;
}
interface Listing {
  url: string;
  title: string;
  rating: string | null;
  description: string;
  price: string;
  link: string;
  booking_metadata: string;
  rating_word: string;
  rating_count: string | null;
}

interface Result {
  content: {
    listings: Listing[];
    total_listings: string;
  };
}

interface SearchParams {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
}
