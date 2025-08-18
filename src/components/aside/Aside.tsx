import { clsx } from '@shilong/utils'
import * as styles from './styles.css'
import { useAside } from './context'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import type { AsideProps, AsideTriggerProps } from './type'

export const Aside = (props: AsideProps) => {
  const { className, title, footer, defaultList, activeKey, onNav } = props

  const [list, setList] = useState(() => {
    const [...tmp] = defaultList
    tmp.forEach((group) => {
      group.menusList.forEach((menu) => {
        if (menu.children && menu.children.length > 0) {
          menu.collapsible = menu.children.find((v) => v.key === activeKey)
            ? true
            : false
        }
      })
    })
    return tmp
  })

  const val = useAside()

  const handleCollapsible = ([groupIndex, menuIndex]: number[]) => {
    const tmp = [...list]
    const preCollapsible = !!tmp[groupIndex].menusList[menuIndex].collapsible
    tmp[groupIndex].menusList[menuIndex].collapsible = !preCollapsible
    setList(tmp)
  }

  return (
    <div className={clsx(styles.container, val.open && styles.co, className)}>
      {!!title && <div className={styles.footer}>{title}</div>}
      <div className={styles.content}>
        {list.map((group, groupIndex) => {
          return (
            <div className={styles.group} key={group.key ?? groupIndex}>
              {!!group.groupTitle && (
                <p className={styles.groupTitle}>{group.groupTitle}</p>
              )}
              <div className={styles.menu}>
                {group.menusList.map((menu, menuIndex) => {
                  if (menu.children && Array.isArray(menu.children)) {
                    return (
                      <div key={menu.key ?? menuIndex}>
                        <div
                          className={styles.menuItemWithIcon}
                          onClick={() => {
                            handleCollapsible([groupIndex, menuIndex])
                          }}
                        >
                          <div className={styles.inline}>
                            {!!menu.icon && <menu.icon />}
                            {menu.title}
                          </div>
                          <ChevronRight
                            className={clsx(
                              styles.colIcon,
                              menu.collapsible && styles.colIconCollapsible,
                            )}
                          />
                        </div>
                        {menu.collapsible && (
                          <div
                            className={clsx(
                              styles.menu,
                              styles.menuCollapsible,
                            )}
                          >
                            {menu.children.map((sub) => {
                              return (
                                <div
                                  className={clsx(
                                    styles.menuItem,
                                    sub.key === activeKey &&
                                      styles.menuItemActive,
                                  )}
                                  key={sub.key}
                                  onClick={() => onNav?.(sub)}
                                >
                                  {!!sub.icon && <sub.icon />}
                                  {sub.title}
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  }
                  return (
                    <div
                      className={clsx(
                        styles.menuItem,
                        menu.key === activeKey && styles.menuItemActive,
                      )}
                      key={menu.key}
                      onClick={() => onNav?.(menu)}
                    >
                      {!!menu.icon && <menu.icon />}
                      {menu.title}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      {!!footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}

// export const AsideHeader = (props) => {
//   const { className, children } = props

//   return <div className={clsx(styles.footer, className)}>{children}</div>
// }

// export const AsideFooter = (props) => {
//   const { className, children } = props

//   return <div className={clsx(styles.footer, className)}>{children}</div>
// }

// export const AsideContent = (props) => {
//   const { className, children } = props

//   return <div className={clsx(styles.content, className)}>{children}</div>
// }

export const AsidebarTrigger = (props: AsideTriggerProps) => {
  const { render } = props

  const val = useAside()

  if (typeof render !== 'function') {
    return null
  }

  return render(val)
}

// export const AsideMenu = (props) => {
//   const { className, children, ...reset } = props

//   return (
//     <div className={clsx(styles.menu, className)} {...reset}>
//       {children}
//     </div>
//   )
// }

// export const AsideMenuItem = (props) => {
//   const { className, children, ...reset } = props

//   return (
//     <div className={clsx(styles.menuItem, className)} {...reset}>
//       {children}
//     </div>
//   )
// }

// export const AsidebarGroup = (props) => {
//   const { className, title, children, list } = props
//   return (
//     <div className={clsx(styles.group, className)}>
//       {!!title && <p className={styles.groupTitle}>{title}</p>}
//       <AsideMenu>
//         {list.map((v) => {
//           if (v.children && Array.isArray(v.children)) {
//             return (
//               <Collapsible>
//                 <CollapsibleTrigger
//                   render={({ toggle, open }) => (
//                     <AsideMenuItem onClick={() => toggle()}>
//                       {<v.icon />}
//                       {v.title}
//                       <ChevronRight
//                         data-collapsible={open}
//                         className={styles.colIcon}
//                       />
//                     </AsideMenuItem>
//                   )}
//                 />
//                 <CollapsibleContent>
//                   <AsideMenu data-collapsible="true">
//                     {v.children.map((sub) => {
//                       return (
//                         <AsideMenuItem key={sub.key} className="">
//                           {sub.title}
//                         </AsideMenuItem>
//                       )
//                     })}
//                   </AsideMenu>
//                 </CollapsibleContent>
//               </Collapsible>
//             )
//           }
//           return (
//             <AsideMenuItem key={v.key} className="">
//               {<v.icon />}
//               {v.title}
//             </AsideMenuItem>
//           )
//         })}
//       </AsideMenu>
//       {/* {children} */}
//     </div>
//   )
// }
