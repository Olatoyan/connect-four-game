import { AnimatePresence } from "framer-motion";
import HomeDetail from "../home/HomeDetail";

function Homepage() {
  return (
    <AnimatePresence>
      <HomeDetail />
    </AnimatePresence>
  );
}

export default Homepage;
