import React from "react";

import { Menu, Text } from "grommet";

import Avatar from "../Avatar";

interface item {
    label: string, href: string
}
interface user  {
    name: string,
    thumbnail: string,
}
interface props {
    user: user,
    items: item[],
    [index: string]: any;
}
const UserMenu: React.FC<props>= ({ user = {}, items = [], ...rest }) => (
    <Menu
        dropAlign={{ top: "bottom", right: "right" }}
        icon={false}
        items={items.map(item => ({
            ...item,
            label: <Text size="small">{item.label}</Text>,
            onClick: () => { } // no-op
        }))}
        label={<Avatar name={user.name} url={user.thumbnail} />}
        {...rest}
    />
);
export default UserMenu;