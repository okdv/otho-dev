/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSiteData = /* GraphQL */ `
  mutation CreateSiteData(
    $input: CreateSiteDataInput!
    $condition: ModelSiteDataConditionInput
  ) {
    createSiteData(input: $input, condition: $condition) {
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
export const updateSiteData = /* GraphQL */ `
  mutation UpdateSiteData(
    $input: UpdateSiteDataInput!
    $condition: ModelSiteDataConditionInput
  ) {
    updateSiteData(input: $input, condition: $condition) {
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
export const deleteSiteData = /* GraphQL */ `
  mutation DeleteSiteData(
    $input: DeleteSiteDataInput!
    $condition: ModelSiteDataConditionInput
  ) {
    deleteSiteData(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
          sectionClass
          contentClass
          parasClass
          subtitleClass
          refresh
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
          sectionClass
          contentClass
          parasClass
          subtitleClass
          refresh
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
          sectionClass
          contentClass
          parasClass
          subtitleClass
          refresh
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
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
      sectionClass
      contentClass
      parasClass
      subtitleClass
      refresh
      createdAt
      updatedAt
    }
  }
`;
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
      sectionClass
      contentClass
      parasClass
      subtitleClass
      refresh
      createdAt
      updatedAt
    }
  }
`;
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
      sectionClass
      contentClass
      parasClass
      subtitleClass
      refresh
      createdAt
      updatedAt
    }
  }
`;
export const createSectionModal = /* GraphQL */ `
  mutation CreateSectionModal(
    $input: CreateSectionModalInput!
    $condition: ModelSectionModalConditionInput
  ) {
    createSectionModal(input: $input, condition: $condition) {
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
        sectionClass
        contentClass
        parasClass
        subtitleClass
        refresh
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
export const updateSectionModal = /* GraphQL */ `
  mutation UpdateSectionModal(
    $input: UpdateSectionModalInput!
    $condition: ModelSectionModalConditionInput
  ) {
    updateSectionModal(input: $input, condition: $condition) {
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
        sectionClass
        contentClass
        parasClass
        subtitleClass
        refresh
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
export const deleteSectionModal = /* GraphQL */ `
  mutation DeleteSectionModal(
    $input: DeleteSectionModalInput!
    $condition: ModelSectionModalConditionInput
  ) {
    deleteSectionModal(input: $input, condition: $condition) {
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
        sectionClass
        contentClass
        parasClass
        subtitleClass
        refresh
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
export const createModal = /* GraphQL */ `
  mutation CreateModal(
    $input: CreateModalInput!
    $condition: ModelModalConditionInput
  ) {
    createModal(input: $input, condition: $condition) {
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
      sidebars {
        items {
          id
          name
          title
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
export const updateModal = /* GraphQL */ `
  mutation UpdateModal(
    $input: UpdateModalInput!
    $condition: ModelModalConditionInput
  ) {
    updateModal(input: $input, condition: $condition) {
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
      sidebars {
        items {
          id
          name
          title
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
export const deleteModal = /* GraphQL */ `
  mutation DeleteModal(
    $input: DeleteModalInput!
    $condition: ModelModalConditionInput
  ) {
    deleteModal(input: $input, condition: $condition) {
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
      sidebars {
        items {
          id
          name
          title
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
export const createModalSidebar = /* GraphQL */ `
  mutation CreateModalSidebar(
    $input: CreateModalSidebarInput!
    $condition: ModelModalSidebarConditionInput
  ) {
    createModalSidebar(input: $input, condition: $condition) {
      id
      name
      title
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
        sidebars {
          nextToken
        }
        createdAt
        updatedAt
      }
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
export const updateModalSidebar = /* GraphQL */ `
  mutation UpdateModalSidebar(
    $input: UpdateModalSidebarInput!
    $condition: ModelModalSidebarConditionInput
  ) {
    updateModalSidebar(input: $input, condition: $condition) {
      id
      name
      title
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
        sidebars {
          nextToken
        }
        createdAt
        updatedAt
      }
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
export const deleteModalSidebar = /* GraphQL */ `
  mutation DeleteModalSidebar(
    $input: DeleteModalSidebarInput!
    $condition: ModelModalSidebarConditionInput
  ) {
    deleteModalSidebar(input: $input, condition: $condition) {
      id
      name
      title
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
        sidebars {
          nextToken
        }
        createdAt
        updatedAt
      }
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
export const createModalIcon = /* GraphQL */ `
  mutation CreateModalIcon(
    $input: CreateModalIconInput!
    $condition: ModelModalIconConditionInput
  ) {
    createModalIcon(input: $input, condition: $condition) {
      id
      sidebarID
      iconID
      sidebar {
        id
        name
        title
        modal {
          id
          name
          description
          title
          paras
          link
          cta
          image
          createdAt
          updatedAt
        }
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
export const updateModalIcon = /* GraphQL */ `
  mutation UpdateModalIcon(
    $input: UpdateModalIconInput!
    $condition: ModelModalIconConditionInput
  ) {
    updateModalIcon(input: $input, condition: $condition) {
      id
      sidebarID
      iconID
      sidebar {
        id
        name
        title
        modal {
          id
          name
          description
          title
          paras
          link
          cta
          image
          createdAt
          updatedAt
        }
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
export const deleteModalIcon = /* GraphQL */ `
  mutation DeleteModalIcon(
    $input: DeleteModalIconInput!
    $condition: ModelModalIconConditionInput
  ) {
    deleteModalIcon(input: $input, condition: $condition) {
      id
      sidebarID
      iconID
      sidebar {
        id
        name
        title
        modal {
          id
          name
          description
          title
          paras
          link
          cta
          image
          createdAt
          updatedAt
        }
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
export const createIconItem = /* GraphQL */ `
  mutation CreateIconItem(
    $input: CreateIconItemInput!
    $condition: ModelIconItemConditionInput
  ) {
    createIconItem(input: $input, condition: $condition) {
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
export const updateIconItem = /* GraphQL */ `
  mutation UpdateIconItem(
    $input: UpdateIconItemInput!
    $condition: ModelIconItemConditionInput
  ) {
    updateIconItem(input: $input, condition: $condition) {
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
export const deleteIconItem = /* GraphQL */ `
  mutation DeleteIconItem(
    $input: DeleteIconItemInput!
    $condition: ModelIconItemConditionInput
  ) {
    deleteIconItem(input: $input, condition: $condition) {
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
export const createSocialMedia = /* GraphQL */ `
  mutation CreateSocialMedia(
    $input: CreateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    createSocialMedia(input: $input, condition: $condition) {
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
export const updateSocialMedia = /* GraphQL */ `
  mutation UpdateSocialMedia(
    $input: UpdateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    updateSocialMedia(input: $input, condition: $condition) {
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
export const deleteSocialMedia = /* GraphQL */ `
  mutation DeleteSocialMedia(
    $input: DeleteSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    deleteSocialMedia(input: $input, condition: $condition) {
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
