import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#ada18bdd] text-[#222]">
      <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Ecoshop</h3>
          <p className="text-sm">
            Ecoshop is your one-stop solution for eco-friendly and sustainable
            products. We are committed to promoting a greener future.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/product" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/shipping" className="hover:underline">
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:underline">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>
              Email:{" "}
              <Link href="mailto:support@ecoshop.com" className="hover:underline">
                support@ecoshop.com
              </Link>
            </li>
            <li>
              Phone:{" "}
              <Link href="tel:+1234567890" className="hover:underline">
                +1 234 567 890
              </Link>
            </li>
            <li>Address: 123 Greenway, Eco City</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#ada18bddF] text-[#222] text-center py-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Ecoshop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
