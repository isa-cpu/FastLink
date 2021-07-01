import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import shop_logo from '../../img/shop_logo.png';
import s from './Navbar.module.css';
const Navbar = () => {
	return (
		<div className={s.navbar}>
			<div className={s.top_container}>
				<div className={s.top_left}>
					<p>Email: online@frankotrading.com</p>
					<div className={s.v_line} />
					<p>Call us: 0246422338</p>
					<div className={s.v_line} />
					<p>0546133188</p>
					<div className={s.v_line} />
					<p>Contact us</p>
				</div>
				<div className={s.top_right}>
					<p>GHS</p>
					<div className={s.v_line} />
					<p>Whishlist (0) item</p>
				</div>
			</div>
			<div className={s.middle_container}>
				<div className={s.flex_row}>
					<img src={shop_logo} alt="shop" />
					<div className={s.search_container}>
						<div className={s.s_category}>
							<p>All Categories</p>
							<IoIosArrowDown />
						</div>
						<div className={s.s_input}>
							{/* <p>Search entire store</p> */}
							<input type="text" placeholder="Search entire store here..." className={s.input} />
						</div>
						<div className={s.s_search}>
							<p>Search</p>
						</div>
					</div>
				</div>
				<div className={s.flex_row}>
					<div className={s.cartContainer}>
						<GiShoppingCart size={40} color="white" />
						<div className={s.cart_content}>
							<p>My Cart</p>
							<p>$123.00</p>
						</div>
					</div>
				</div>
			</div>
			<div className={s.bottom_container}>
				<div className={s.b_list}>
					<p>mobie phones</p>
					<IoIosArrowDown />
				</div>
				<div className={s.b_list}>
					<p>laptop & desktop</p>
					<IoIosArrowDown />
				</div>

				<div className={s.b_list}>
					<p>Tvs & projectors</p>
					<IoIosArrowDown />
				</div>

				<div className={s.b_list}>
					<p>assessories</p>
					<IoIosArrowDown />
				</div>
				<div className={s.b_list}>
					<p>printer</p>
					<IoIosArrowDown />
				</div>
				<div className={s.b_list}>
					<p>speaker</p>
					<IoIosArrowDown />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
