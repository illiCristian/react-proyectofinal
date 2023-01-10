const MenuIcon = () => {
  return (
    <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200">
      <div className="space-y-2">
        <span className="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
        <span className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
      </div>
    </div>
  );
};

export default MenuIcon;
