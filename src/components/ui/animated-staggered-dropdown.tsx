import {
  Edit,
  ChevronDown,
  Trash,
  Share,
  PlusSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { LucideIcon } from "lucide-react";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 pb-56 flex items-center justify-center bg-background">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          <span className="font-medium text-sm">Post actions</span>
          <motion.span variants={iconVariants}>
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white dark:bg-gray-900 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={Edit} text="Edit" />
          <Option setOpen={setOpen} Icon={PlusSquare} text="Duplicate" />
          <Option setOpen={setOpen} Icon={Share} text="Share" />
          <Option setOpen={setOpen} Icon={Trash} text="Remove" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

interface OptionProps {
  text: string;
  Icon: LucideIcon;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Option = ({ text, Icon, setOpen }: OptionProps) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-900 text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon className="h-4 w-4" />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren" as const,
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren" as const,
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren" as const,
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren" as const,
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
