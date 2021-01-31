/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSiteData = /* GraphQL */ `
  subscription OnCreateSiteData {
    onCreateSiteData {
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
export const onUpdateSiteData = /* GraphQL */ `
  subscription OnUpdateSiteData {
    onUpdateSiteData {
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
export const onDeleteSiteData = /* GraphQL */ `
  subscription OnDeleteSiteData {
    onDeleteSiteData {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage {
    onCreatePage {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage {
    onUpdatePage {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage {
    onDeletePage {
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
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection {
    onCreateSection {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection {
    onUpdateSection {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection {
    onDeleteSection {
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
export const onCreateSectionModal = /* GraphQL */ `
  subscription OnCreateSectionModal {
    onCreateSectionModal {
      id
      sectionID
      modalID
      section {
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
      modal {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSectionModal = /* GraphQL */ `
  subscription OnUpdateSectionModal {
    onUpdateSectionModal {
      id
      sectionID
      modalID
      section {
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
      modal {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSectionModal = /* GraphQL */ `
  subscription OnDeleteSectionModal {
    onDeleteSectionModal {
      id
      sectionID
      modalID
      section {
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
      modal {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateModal = /* GraphQL */ `
  subscription OnCreateModal {
    onCreateModal {
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
export const onUpdateModal = /* GraphQL */ `
  subscription OnUpdateModal {
    onUpdateModal {
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
export const onDeleteModal = /* GraphQL */ `
  subscription OnDeleteModal {
    onDeleteModal {
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
export const onCreateModalSidebar = /* GraphQL */ `
  subscription OnCreateModalSidebar {
    onCreateModalSidebar {
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
export const onUpdateModalSidebar = /* GraphQL */ `
  subscription OnUpdateModalSidebar {
    onUpdateModalSidebar {
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
export const onDeleteModalSidebar = /* GraphQL */ `
  subscription OnDeleteModalSidebar {
    onDeleteModalSidebar {
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
export const onCreateModalIcon = /* GraphQL */ `
  subscription OnCreateModalIcon {
    onCreateModalIcon {
      id
      sidebarID
      iconID
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
      icon {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModalIcon = /* GraphQL */ `
  subscription OnUpdateModalIcon {
    onUpdateModalIcon {
      id
      sidebarID
      iconID
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
      icon {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModalIcon = /* GraphQL */ `
  subscription OnDeleteModalIcon {
    onDeleteModalIcon {
      id
      sidebarID
      iconID
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
      icon {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIconItem = /* GraphQL */ `
  subscription OnCreateIconItem {
    onCreateIconItem {
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
export const onUpdateIconItem = /* GraphQL */ `
  subscription OnUpdateIconItem {
    onUpdateIconItem {
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
export const onDeleteIconItem = /* GraphQL */ `
  subscription OnDeleteIconItem {
    onDeleteIconItem {
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
export const onCreateSocialMedia = /* GraphQL */ `
  subscription OnCreateSocialMedia {
    onCreateSocialMedia {
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
export const onUpdateSocialMedia = /* GraphQL */ `
  subscription OnUpdateSocialMedia {
    onUpdateSocialMedia {
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
export const onDeleteSocialMedia = /* GraphQL */ `
  subscription OnDeleteSocialMedia {
    onDeleteSocialMedia {
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
