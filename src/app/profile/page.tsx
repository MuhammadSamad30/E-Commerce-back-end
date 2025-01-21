import UserProfile from "@/components/UserProfile";

const ProfilePage = () => {
  const user = {
    name: "Muhammad Samad",
    email: "Samad@example.com",
    addresses: [
      { id: "1", title: "Home", address: "123 Main Street, City, Country" },
      { id: "2", title: "Office", address: "456 Business Park, City, Country" },
    ],
    orders: [
      { id: "1001", date: "2025-01-15", total: 2500, status: "Delivered" },
      { id: "1002", date: "2025-01-10", total: 1200, status: "Processing" },
    ],
  };

  return <UserProfile {...user} />;
};

export default ProfilePage;
