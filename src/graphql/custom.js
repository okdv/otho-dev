// manually built file, unlike others in folder

export const sectionByNameExpanded = /* GraphQL */`
    query SectionByName(
        $name: String
        $sortDirection: ModelSortDirection
        $filter: ModelSectionFilterInput
        $limit: Int
        $nextToken: String
    ) {
        sectionByName(
            name: $name
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
                id
                name
                page {
                    id
                    name
                    description
                    public
                    title
                    alert
                }
                description
                title
                paras
                modals {
                    items {
                        modal {
                            id
                            name
                            title
                            image
                            link
                            cta
                            paras
                        }
                    }
                }
                sectionClass
                contentClass
                parasClass
                subtitleClass
                refresh
            }
        }
    }
`;

export const sidebarByNameExpanded = /* GraphQL */`
  query SidebarByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelModalSidebarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sidebarByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        iconItems {
          items {
            id 
            icon {
                id
                link
                name
                title
                faIcon
            }
          }
        }
      }
    }
  }
`;