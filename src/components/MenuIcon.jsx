const MenuIcon = ({className, open, onClick}) => (
    <div className={`menu-icon`}>
        <div className={`cursor-pointer ${open? 'open': ''}`} onClick={onClick}>
            <span className="bg-black"></span>
            <span className="bg-black"></span>
            <div className="menu-icon-label text-black">
                <div>menu</div>
                <div>close</div>
            </div>
        </div>
    </div>
)


export default MenuIcon;