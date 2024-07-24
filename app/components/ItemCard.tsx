import classNames from "classnames";
import { getStockStatusColor } from '../core/helpers';
import { Item } from "../core/types/Item";

const ItemCard = ({data}: {data: Item}) => {

    const cardClass = classNames(
        `w-4/5 max-w-sm p-6 ${getStockStatusColor(data)} border border-gray-200 rounded-lg shadow hover:bg-gray-100`
    )

    return (
    <div className={cardClass}>
        <h2 className="mb-2 text-xxl font-bold tracking-tight text-gray-90">{data.name}</h2>
        <p className="font-normal text-gray-70">Stock : {data.stock}</p>
        {data.restockDate && <p className="font-normal text-gray-700">Date provisoire: {data.restockDate.toDateString()}</p>}
    </div>
    );
  }
  

export default ItemCard