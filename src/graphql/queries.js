/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSiteData = /* GraphQL */ `
  query GetSiteData($id: ID!) {
    getSiteData(id: $id) {
      id
      name
      description
      ownerFormal
      ownerCasual
      favicon
      url
      socials {
        items {
          id
          name
          title
          link
          faIcon
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      pages {
        items {
          id
          name
          description
          public
          title
          alert
          endpoint
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSiteDatas = /* GraphQL */ `
  query ListSiteDatas(
    $filter: ModelSiteDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSiteDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        ownerFormal
        ownerCasual
        favicon
        url
        socials {
          nextToken
        }
        pages {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      name
      site {
        id
        name
        description
        ownerFormal
        ownerCasual
        favicon
        url
        socials {
          nextToken
        }
        pages {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      public
      title
      alert
      endpoint
      sections {
        items {
          id
          name
          description
          title
          paras
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        site {
          id
          name
          description
          ownerFormal
          ownerCasual
          favicon
          url
          createdAt
          updatedAt
        }
        description
        public
        title
        alert
        endpoint
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      name
      page {
        id
        name
        site {
          id
          name
          description
          ownerFormal
          ownerCasual
          favicon
          url
          createdAt
          updatedAt
        }
        description
        public
        title
        alert
        endpoint
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      title
      paras
      modals {
        items {
          id
          sectionID
          modalID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          endpoint
          createdAt
          updatedAt
        }
        description
        title
        paras
        modals {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModal = /* GraphQL */ `
  query GetModal($id: ID!) {
    getModal(id: $id) {
      id
      name
      description
      title
      paras
      link
      cta
      image
      sections {
        items {
          id
          sectionID
          modalID
          createdAt
          updatedAt
        }
        nextToken
      }
      sidebarID
      sidebar {
        id
        name
        title
        iconItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listModals = /* GraphQL */ `
  query ListModals(
    $filter: ModelModalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        title
        paras
        link
        cta
        image
        sections {
          nextToken
        }
        sidebarID
        sidebar {
          id
          name
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModalSidebar = /* GraphQL */ `
  query GetModalSidebar($id: ID!) {
    getModalSidebar(id: $id) {
      id
      name
      title
      iconItems {
        items {
          id
          sidebarID
          iconID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listModalSidebars = /* GraphQL */ `
  query ListModalSidebars(
    $filter: ModelModalSidebarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModalSidebars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        title
        iconItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIconItem = /* GraphQL */ `
  query GetIconItem($id: ID!) {
    getIconItem(id: $id) {
      id
      name
      title
      link
      faIcon
      sidebars {
        items {
          id
          sidebarID
          iconID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listIconItems = /* GraphQL */ `
  query ListIconItems(
    $filter: ModelIconItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIconItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        title
        link
        faIcon
        sidebars {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSocialMedia = /* GraphQL */ `
  query GetSocialMedia($id: ID!) {
    getSocialMedia(id: $id) {
      id
      name
      site {
        id
        name
        description
        ownerFormal
        ownerCasual
        favicon
        url
        socials {
          nextToken
        }
        pages {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      link
      faIcon
      username
      createdAt
      updatedAt
    }
  }
`;
export const listSocialMedias = /* GraphQL */ `
  query ListSocialMedias(
    $filter: ModelSocialMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocialMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        site {
          id
          name
          description
          ownerFormal
          ownerCasual
          favicon
          url
          createdAt
          updatedAt
        }
        title
        link
        faIcon
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
